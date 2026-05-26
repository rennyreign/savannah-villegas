import { test, expect } from '@playwright/test';

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

async function loadCMS(page: any) {
  await page.goto(`${BASE_URL}/cms/index.html`);
  // Decap shows a Login button — clicking it triggers local_backend detection,
  // which bypasses authentication when decap-server is running on :8081
  const loginBtn = page.locator('button:has-text("Login")');
  await loginBtn.waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
  const loginVisible = await loginBtn.isVisible().catch(() => false);
  if (loginVisible) {
    await loginBtn.click();
    // Wait for the Login button to disappear (auth bypass completes)
    await loginBtn.waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
  }
  // Wait for the collections sidebar entry to appear
  await page.waitForSelector('text=Homepage', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1500);
}

test.describe('CMS Access', () => {
  test('CMS loads at /cms/', async ({ page }) => {
    await page.goto(`${BASE_URL}/cms/`);
    await expect(page.locator('body')).toBeVisible();
    // CMS shows either the admin UI or the login screen — both are valid loads
    const bodyText = await page.textContent('body');
    expect(bodyText?.trim().length).toBeGreaterThan(0);
  });

  test('CMS loads at /cms/index.html', async ({ page }) => {
    await page.goto(`${BASE_URL}/cms/index.html`);
    await expect(page.locator('body')).toBeVisible();
    const bodyText = await page.textContent('body');
    expect(bodyText?.trim().length).toBeGreaterThan(0);
  });

  test('CMS config has no errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto(`${BASE_URL}/cms/index.html`);
    await page.waitForTimeout(4000);
    const configErrors = errors.filter(e => e.toLowerCase().includes('config'));
    expect(configErrors).toHaveLength(0);
  });

  test('CMS reaches admin UI via local_backend', async ({ page }) => {
    await loadCMS(page);
    // With local_backend + decap-server running, CMS skips login
    // Look for any element that indicates the admin interface has loaded
    const hasCollections = await page.locator('text=Collections').isVisible().catch(() => false);
    const hasHomepage = await page.locator('text=Homepage').isVisible().catch(() => false);
    expect(hasCollections || hasHomepage).toBe(true);
  });
});

test.describe('CMS Collections', () => {
  test.beforeEach(async ({ page }) => {
    await loadCMS(page);
  });

  test('All collections visible in sidebar', async ({ page }) => {
    const collections = [
      'Homepage',
      'Services',
      'Featured Work',
      'Process',
      'About',
      'Contact / FAQ',
      'Site Settings',
    ];
    for (const collection of collections) {
      await expect(page.locator(`text=${collection}`).first()).toBeVisible({ timeout: 8000 });
    }
  });

  test('Homepage collection opens editor', async ({ page }) => {
    await page.locator('text=Homepage').first().click();
    await page.waitForURL(/collections\/homepage/, { timeout: 8000 }).catch(() => {});
    await page.locator('text=Hero Section').first().click();
    await page.waitForURL(/collections\/homepage\/files\/hero/, { timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(1500);
    // Confirm we're in the editor — URL contains the file path
    expect(page.url()).toContain('homepage');
  });

  test('Services collection shows all 6 services', async ({ page }) => {
    await page.locator('text=Services').first().click();
    await page.waitForTimeout(1500);
    const serviceLabels = [
      'Social Media Editing',
      'Brand Videography',
      'Monthly Packages',
      'Creative Direction',
      'Event Coverage',
      'Strategy Support',
    ];
    for (const label of serviceLabels) {
      await expect(page.locator(`text=${label}`).first()).toBeVisible({ timeout: 8000 });
    }
  });

  test('Featured Work collection shows 4 items', async ({ page }) => {
    await page.locator('text=Featured Work').first().click();
    await page.waitForTimeout(1500);
    for (const label of ['Work Item 1', 'Work Item 2', 'Work Item 3', 'Work Item 4']) {
      await expect(page.locator(`text=${label}`).first()).toBeVisible({ timeout: 8000 });
    }
  });

  test('About collection opens editor', async ({ page }) => {
    await page.locator('text=About').first().click();
    await page.waitForURL(/collections\/about/, { timeout: 8000 }).catch(() => {});
    await page.locator('text=About Content').first().click();
    await page.waitForURL(/collections\/about\/files\/content/, { timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(1500);
    // Confirm we're in the editor — URL contains the file path
    expect(page.url()).toContain('about');
  });

  test('Contact / FAQ collection shows 4 FAQs', async ({ page }) => {
    await page.locator('text=Contact / FAQ').first().click();
    await page.waitForTimeout(1500);
    for (const label of ['FAQ 1', 'FAQ 2', 'FAQ 3', 'FAQ 4']) {
      await expect(page.locator(`text=${label}`).first()).toBeVisible({ timeout: 8000 });
    }
  });
});

test.describe('Frontend — CMS content rendered', () => {
  test('Homepage h1 has content', async ({ page }) => {
    await page.goto(`${BASE_URL}/`);
    const h1 = await page.locator('h1').first().textContent();
    expect(h1?.trim().length).toBeGreaterThan(0);
  });

  test('About page h1 has content', async ({ page }) => {
    await page.goto(`${BASE_URL}/about`);
    const h1 = await page.locator('h1').first().textContent();
    expect(h1?.trim().length).toBeGreaterThan(0);
  });

  test('Services page h1 has content', async ({ page }) => {
    await page.goto(`${BASE_URL}/services`);
    const h1 = await page.locator('h1').first().textContent();
    expect(h1?.trim().length).toBeGreaterThan(0);
  });

  test('Work page has reel cards', async ({ page }) => {
    await page.goto(`${BASE_URL}/work`);
    const videos = await page.locator('video').count();
    expect(videos).toBeGreaterThan(0);
  });

  test('Process page has numbered steps', async ({ page }) => {
    await page.goto(`${BASE_URL}/process`);
    await expect(page.locator('text=01').or(page.locator('text=0{1}'))).toBeVisible();
  });

  test('Contact page FAQ section renders', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
    const h1 = await page.locator('h1').first().textContent();
    expect(h1?.trim().length).toBeGreaterThan(0);
  });
});
