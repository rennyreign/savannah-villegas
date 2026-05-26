/* Savannah Villegas — Decap CMS Preview Templates */

var styles = `
  :root {
    --paper: #f5f1eb;
    --paper-soft: #fbf8f3;
    --charcoal: #24211d;
    --muted: #6f675d;
    --olive: #7a8068;
    --stone: #b7ada3;
    --sand: #d7c5b2;
    --espresso: #191713;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Georgia, serif; background: var(--paper); color: var(--charcoal); }
  .preview { padding: 2rem; max-width: 860px; }
  .eyebrow {
    font-family: ui-monospace, monospace;
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--olive);
  }
  .display { font-size: clamp(2.4rem, 6vw, 5rem); font-weight: 500; line-height: 0.92; margin-top: 1.25rem; }
  .heading { font-size: clamp(1.6rem, 3.5vw, 2.8rem); font-weight: 500; line-height: 1; margin-top: 0.75rem; }
  .body { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 1rem; line-height: 1.8; color: var(--muted); margin-top: 1rem; }
  .label { font-family: ui-monospace, monospace; font-size: 0.62rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--olive); margin-bottom: 0.35rem; }
  .value { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.9rem; line-height: 1.6; color: var(--charcoal); margin-bottom: 1.25rem; }
  .divider { height: 1px; background: var(--stone); opacity: 0.35; margin: 1.5rem 0; }
  .card { background: var(--paper-soft); border: 1px solid rgba(183,173,163,0.3); padding: 1.25rem; margin-bottom: 1rem; }
  .card-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
  .tag { display: inline-block; font-family: ui-monospace, monospace; font-size: 0.58rem; text-transform: uppercase; letter-spacing: 0.2em; background: var(--sand); color: var(--charcoal); padding: 0.2rem 0.6rem; margin-right: 0.35rem; margin-top: 0.5rem; }
  .hero-preview { background: var(--espresso); color: var(--paper); padding: 3rem 2rem; position: relative; overflow: hidden; }
  .hero-preview .eyebrow { color: var(--sand); }
  .hero-preview .display { color: white; }
  .hero-preview .body { color: rgba(245,241,235,0.8); }
  .hero-preview .cta { display: inline-block; margin-top: 1.5rem; padding: 0.75rem 1.75rem; border: 1px solid var(--sand); font-family: ui-monospace, monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--paper); }
  .image-preview { width: 100%; height: auto; object-fit: contain; display: block; margin-bottom: 1rem; background: var(--stone); }
  .image-placeholder { width: 100%; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1rem; background: var(--paper-soft); border: 1.5px dashed var(--stone); color: var(--muted); font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.78rem; }
  .image-placeholder span { font-family: ui-monospace, monospace; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--stone); }
`;

/* Render an image if the path is from /public (already deployed), or a
   placeholder if it's a freshly uploaded /uploads/ file not yet on the CDN. */
function imageOrPlaceholder(getAsset, rawPath, altText) {
  if (!rawPath) return null;
  var resolved = getAsset(rawPath);
  var src = resolved ? resolved.toString() : rawPath;
  /* blob: URLs are local uploads Decap holds in memory — show placeholder */
  var isBlob = src && src.indexOf('blob:') === 0;
  if (isBlob) {
    return h('div', { className: 'image-placeholder' },
      h('svg', { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 2 }),
        h('circle', { cx: 8.5, cy: 8.5, r: 1.5 }),
        h('path', { d: 'M21 15l-5-5L5 21' })
      ),
      h('p', {}, 'Image uploading…'),
      h('span', {}, 'Will appear on site after publish')
    );
  }
  return h('img', { src: src, className: 'image-preview', alt: altText || '' });
}

function styleTag() {
  var el = document.createElement('style');
  el.textContent = styles;
  return el;
}

/* ── Hero / Homepage ── */
var HeroPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var heroImage = entry.getIn(['data', 'heroImage']);
    var tagline = entry.getIn(['data', 'tagline']) || 'Eyebrow tagline';
    var heading = entry.getIn(['data', 'heading']) || 'Hero Heading';
    var description = entry.getIn(['data', 'description']) || '';
    var ctaLabel = entry.getIn(['data', 'ctaBookLabel']) || 'Book a call';
    var location = entry.getIn(['data', 'locationBadge']) || '';

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      h('div', { className: 'hero-preview' },
        heroImage && (function() {
          var resolved = this.props.getAsset(heroImage);
          var src = resolved ? resolved.toString() : heroImage;
          var isBlob = src && src.indexOf('blob:') === 0;
          return isBlob ? null : h('img', { src: src, style: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 } });
        }.call(this)),
        h('div', { style: { position: 'relative' } },
          h('p', { className: 'eyebrow' }, tagline),
          h('h1', { className: 'display' }, heading.split('\n').map(function(line, i) {
            return h('span', { key: i, style: { display: 'block' } }, line);
          })),
          h('p', { className: 'body', style: { maxWidth: '480px' } }, description),
          h('div', { className: 'cta' }, ctaLabel),
          location && h('p', { style: { marginTop: '1.5rem', fontFamily: 'ui-monospace, monospace', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sand)', opacity: 0.7 } }, location.replace('\n', ' · '))
        )
      )
    );
  }
});

/* ── Service ── */
var ServicePreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || 'Service Title';
    var short = entry.getIn(['data', 'short']) || '';
    var detail = entry.getIn(['data', 'detail']) || '';
    var ideal = entry.getIn(['data', 'ideal']) || '';
    var deliverables = [
      entry.getIn(['data', 'deliverable1']),
      entry.getIn(['data', 'deliverable2']),
      entry.getIn(['data', 'deliverable3']),
      entry.getIn(['data', 'deliverable4']),
    ].filter(Boolean);

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      h('div', { className: 'preview' },
        h('p', { className: 'eyebrow' }, 'Service'),
        h('h1', { className: 'heading' }, title),
        h('div', { className: 'divider' }),
        h('p', { className: 'label' }, 'Short description'),
        h('p', { className: 'value' }, short),
        h('p', { className: 'label' }, 'Full detail'),
        h('p', { className: 'value' }, detail),
        h('p', { className: 'label' }, 'Best for'),
        h('p', { className: 'value' }, ideal),
        deliverables.length > 0 && h('div', {},
          h('p', { className: 'label' }, 'Deliverables'),
          h('div', {}, deliverables.map(function(d) {
            return h('span', { key: d, className: 'tag' }, d);
          }))
        )
      )
    );
  }
});

/* ── Work Item ── */
var WorkPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || 'Work Title';
    var category = entry.getIn(['data', 'category']) || '';
    var video = entry.getIn(['data', 'video']) || '';
    var thumbnail = entry.getIn(['data', 'thumbnail']);

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      h('div', { className: 'preview' },
        h('p', { className: 'eyebrow' }, 'Featured Work'),
        h('h1', { className: 'heading' }, title),
        category && h('span', { className: 'tag', style: { marginTop: '0.5rem' } }, category),
        h('div', { className: 'divider' }),
        thumbnail
          ? imageOrPlaceholder(this.props.getAsset, thumbnail, title)
          : video
            ? h('video', { src: video, style: { width: '100%', maxHeight: '240px', display: 'block', background: '#111', marginBottom: '1rem' }, controls: true })
            : h('div', { className: 'image-preview', style: { display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontFamily: 'ui-sans-serif', fontSize: '0.8rem' } }, 'No video or thumbnail set'),
        video && h('div', {},
          h('p', { className: 'label' }, 'Video URL'),
          h('p', { className: 'value', style: { wordBreak: 'break-all', fontSize: '0.75rem' } }, video)
        )
      )
    );
  }
});

/* ── Process Step ── */
var ProcessPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || 'Step Title';
    var text = entry.getIn(['data', 'text']) || '';

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      h('div', { className: 'preview' },
        h('p', { className: 'eyebrow' }, 'Process Step'),
        h('h1', { className: 'heading' }, title),
        h('div', { className: 'divider' }),
        h('p', { className: 'body' }, text)
      )
    );
  }
});

/* ── About ── */
var AboutPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var heroImage = entry.getIn(['data', 'heroImage']);
    var heroHeading = entry.getIn(['data', 'heroHeading']) || '';
    var heroSubheading = entry.getIn(['data', 'heroSubheading']) || '';
    var pullQuote = entry.getIn(['data', 'pullQuote']) || '';
    var col1 = entry.getIn(['data', 'col1Text']) || '';
    var col2 = entry.getIn(['data', 'col2Text']) || '';

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      imageOrPlaceholder(this.props.getAsset, heroImage, 'Hero'),
      h('div', { className: 'preview' },
        h('p', { className: 'eyebrow' }, 'About Savannah'),
        h('h1', { className: 'display' }, heroHeading),
        h('p', { className: 'body' }, heroSubheading),
        pullQuote && h('div', {},
          h('div', { className: 'divider' }),
          h('p', { style: { fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontStyle: 'italic', lineHeight: 1.3, color: 'var(--charcoal)' } }, pullQuote)
        ),
        (col1 || col2) && h('div', {},
          h('div', { className: 'divider' }),
          h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' } },
            h('p', { className: 'body', style: { marginTop: 0 } }, col1),
            h('p', { className: 'body', style: { marginTop: 0 } }, col2)
          )
        )
      )
    );
  }
});

/* ── FAQ ── */
var FaqPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var question = entry.getIn(['data', 'question']) || 'Question';
    var answer = entry.getIn(['data', 'answer']) || '';

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      h('div', { className: 'preview' },
        h('p', { className: 'eyebrow' }, 'FAQ'),
        h('h2', { className: 'heading' }, question),
        h('div', { className: 'divider' }),
        h('p', { className: 'body' }, answer)
      )
    );
  }
});

/* ── Site Settings ── */
var SitePreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var fields = [
      { key: 'name', label: 'Name' },
      { key: 'studio', label: 'Studio' },
      { key: 'location', label: 'Location' },
      { key: 'phone', label: 'Phone' },
      { key: 'email', label: 'Email' },
      { key: 'tagline', label: 'Tagline' },
    ];

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      h('div', { className: 'preview' },
        h('p', { className: 'eyebrow' }, 'Site Settings'),
        h('div', { className: 'divider' }),
        fields.map(function(f) {
          var val = entry.getIn(['data', f.key]) || '—';
          return h('div', { key: f.key },
            h('p', { className: 'label' }, f.label),
            h('p', { className: 'value' }, val)
          );
        })
      )
    );
  }
});

/* ── Global preview iframe styles (enables scroll, sets background) ── */
CMS.registerPreviewStyle('/cms/preview-frame.css');
CMS.registerPreviewStyle(
  'html { overflow-y: scroll !important; } body { overflow-y: visible !important; min-height: 200vh; }',
  { raw: true }
);

/* ── Intro Section Preview ── */
var IntroPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var introImage = entry.getIn(['data', 'introImage']);
    var eyebrow = entry.getIn(['data', 'introEyebrow']) || '';
    var heading = entry.getIn(['data', 'introHeading']) || '';
    var body1 = entry.getIn(['data', 'introBody1']) || '';
    var body2 = entry.getIn(['data', 'introBody2']) || '';
    var signature = entry.getIn(['data', 'introSignature']) || '';

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      imageOrPlaceholder(this.props.getAsset, introImage, 'Intro'),
      h('div', { className: 'preview' },
        h('p', { className: 'eyebrow' }, eyebrow),
        h('h2', { className: 'heading' }, heading),
        h('div', { className: 'divider' }),
        h('p', { className: 'body' }, body1),
        h('p', { className: 'body', style: { marginTop: '1rem' } }, body2),
        signature && h('p', { style: { marginTop: '1.5rem', fontFamily: 'Georgia, serif', fontSize: '1.8rem', fontStyle: 'italic', color: 'var(--charcoal)' } }, signature)
      )
    );
  }
});

/* ── Featured Work Section Preview ── */
var FeaturedWorkSectionPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var eyebrow = entry.getIn(['data', 'workEyebrow']) || '';
    var heading = entry.getIn(['data', 'workHeading']) || '';
    var subtext = entry.getIn(['data', 'workSubtext']) || '';
    var cta = entry.getIn(['data', 'workCtaLabel']) || '';

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      h('div', { style: { background: 'var(--espresso)', padding: '2.5rem 2rem', color: 'var(--paper)' } },
        h('p', { className: 'eyebrow', style: { color: 'var(--sand)' } }, eyebrow),
        h('h2', { style: { fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 500, lineHeight: 0.92, color: 'white', marginTop: '1.25rem' } },
          heading.split('\n').map(function(line, i) { return h('span', { key: i, style: { display: 'block' } }, line); })
        ),
        h('p', { style: { marginTop: '1rem', fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(245,241,235,0.66)', maxWidth: '15rem' } }, subtext),
        cta && h('div', { style: { display: 'inline-block', marginTop: '1.5rem', padding: '0.6rem 1.5rem', border: '1px solid var(--sand)', fontFamily: 'ui-monospace, monospace', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--paper)' } }, cta)
      )
    );
  }
});

/* ── Contact Section Preview ── */
var ContactSectionPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var contactImage = entry.getIn(['data', 'contactImage']);
    var eyebrow = entry.getIn(['data', 'contactEyebrow']) || '';
    var heading = entry.getIn(['data', 'contactHeading']) || '';
    var subtext = entry.getIn(['data', 'contactSubtext']) || '';
    var note = entry.getIn(['data', 'contactResponseNote']) || '';

    return h('div', {},
      h('style', { dangerouslySetInnerHTML: { __html: styles } }),
      h('div', { style: { background: 'var(--espresso)', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '320px' } },
        (function() {
          if (!contactImage) return h('div', { style: { background: 'var(--charcoal)' } });
          var resolved = this.props.getAsset(contactImage);
          var src = resolved ? resolved.toString() : contactImage;
          var isBlob = src && src.indexOf('blob:') === 0;
          if (isBlob) return h('div', { className: 'image-placeholder', style: { background: 'rgba(255,255,255,0.05)', border: '1.5px dashed rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.4)' } },
            h('p', {}, 'Image uploading\u2026'),
            h('span', { style: { color: 'rgba(255,255,255,0.25)' } }, 'Will appear after publish')
          );
          return h('div', { style: { backgroundImage: 'url(' + src + ')', backgroundSize: 'cover', backgroundPosition: 'center' } });
        }.call(this)),
        h('div', { style: { padding: '2.5rem 2rem', color: 'var(--paper)' } },
          h('p', { className: 'eyebrow', style: { color: 'var(--sand)' } }, eyebrow),
          h('h2', { style: { fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', fontWeight: 500, lineHeight: 1, color: 'white', marginTop: '1rem' } }, heading),
          h('p', { style: { marginTop: '0.75rem', fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(245,241,235,0.7)' } }, subtext),
          note && h('p', { style: { marginTop: '1rem', fontSize: '0.7rem', color: 'rgba(245,241,235,0.5)', textAlign: 'center', fontFamily: 'ui-monospace, monospace' } }, note)
        )
      )
    );
  }
});

/* ── Register all templates ── */
CMS.registerPreviewTemplate('hero', HeroPreview);
CMS.registerPreviewTemplate('intro', IntroPreview);
CMS.registerPreviewTemplate('featured-work', FeaturedWorkSectionPreview);
CMS.registerPreviewTemplate('contact', ContactSectionPreview);

CMS.registerPreviewTemplate('social-media-editing', ServicePreview);
CMS.registerPreviewTemplate('brand-videography', ServicePreview);
CMS.registerPreviewTemplate('monthly-packages', ServicePreview);
CMS.registerPreviewTemplate('creative-direction', ServicePreview);
CMS.registerPreviewTemplate('event-coverage', ServicePreview);
CMS.registerPreviewTemplate('strategy-support', ServicePreview);

CMS.registerPreviewTemplate('work1', WorkPreview);
CMS.registerPreviewTemplate('work2', WorkPreview);
CMS.registerPreviewTemplate('work3', WorkPreview);
CMS.registerPreviewTemplate('work4', WorkPreview);

CMS.registerPreviewTemplate('step1', ProcessPreview);
CMS.registerPreviewTemplate('step2', ProcessPreview);
CMS.registerPreviewTemplate('step3', ProcessPreview);
CMS.registerPreviewTemplate('step4', ProcessPreview);

CMS.registerPreviewTemplate('content', AboutPreview);

CMS.registerPreviewTemplate('faq1', FaqPreview);
CMS.registerPreviewTemplate('faq2', FaqPreview);
CMS.registerPreviewTemplate('faq3', FaqPreview);
CMS.registerPreviewTemplate('faq4', FaqPreview);

CMS.registerPreviewTemplate('general', SitePreview);
