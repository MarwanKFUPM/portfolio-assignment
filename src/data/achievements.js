/**
 * The first six entries come from the supplied original portfolio.
 * Entries with sample: true are invented display examples, not real achievements.
 * Add or remove objects here to permanently change the archive.
 * Every entry supports: id, category, title, summary, image, body, links[], sample.
 */
export const achievements = [
  {
    id: 'portfolio-website',
    category: 'Development', categoryAr: 'تطوير',
    title: 'Portfolio Website', titleAr: 'الموقع الشخصي',
    summary: 'A responsive personal portfolio built with HTML, CSS, and JavaScript.',
    summaryAr: 'موقع شخصي متجاوب باستخدام HTML وCSS وJavaScript.',
    body: 'The original portfolio project documents an introduction, technical skills, projects and an interactive reading section. This React archive is its redesign.',
    image: '/art/portfolio.svg',
    meta: 'HTML · CSS · JavaScript',
    links: [],
    sample: false,
  },
  {
    id: 'ecommerce',
    category: 'Development', categoryAr: 'تطوير',
    title: 'E-Commerce Website', titleAr: 'واجهة متجر إلكتروني',
    summary: 'A clean online store interface with responsive product layouts.',
    summaryAr: 'واجهة متجر بتخطيط منتجات متجاوب.',
    body: 'Listed in the original portfolio as an e-commerce website concept. No live project URL or screenshot was supplied; the visual here is illustrative.',
    image: '/art/commerce.svg',
    meta: 'HTML · CSS · JavaScript',
    links: [],
    sample: false,
  },
  {
    id: 'mobile-ui',
    category: 'Design', categoryAr: 'تصميم',
    title: 'Mobile App UI', titleAr: 'تصميم واجهة جوال',
    summary: 'A mobile interface concept focused on accessibility and usability.',
    summaryAr: 'واجهة جوال تركز على سهولة الاستخدام وإمكانية الوصول.',
    body: 'Described in the source portfolio as a modern mobile interface. The artwork displayed here is a local abstract illustration, not a product screenshot.',
    image: '/art/mobile.svg',
    meta: 'UI/UX · CSS · Design',
    links: [],
    sample: false,
  },
  {
    id: 'dashboard',
    category: 'Development', categoryAr: 'تطوير',
    title: 'Analytics Dashboard', titleAr: 'لوحة بيانات',
    summary: 'A responsive dashboard using flexible layouts and reusable components.',
    summaryAr: 'لوحة بيانات متجاوبة تعتمد على مكوّنات قابلة لإعادة الاستخدام.',
    body: 'Included in the original project list. The graphic is a stylized placeholder until real dashboard screenshots are provided.',
    image: '/art/dashboard.svg',
    meta: 'JavaScript · CSS Grid',
    links: [],
    sample: false,
  },
  {
    id: 'writing',
    category: 'Writing', categoryAr: 'كتابة',
    title: 'Poetry & Essays', titleAr: 'الشعر والمقالات',
    summary: 'Writing poetry and essays; selected writing appears on Substack.',
    summaryAr: 'كتابة الشعر والمقالات ونشر بعض الأعمال على سبستاك.',
    body: 'My original portfolio links to a Substack where I share my writing. This entry points to that existing public profile.',
    image: '/art/writing.svg',
    meta: 'Writing · Poetry',
    links: [{ label: 'Visit Substack', href: 'https://marwanpgx.substack.com/' }],
    sample: false,
  },
  {
    id: 'reading',
    category: 'Interests', categoryAr: 'اهتمامات',
    title: 'Classics & Reading', titleAr: 'القراءة والأدب',
    summary: 'Literature, philosophy, poetry, and the ideas found between them.',
    summaryAr: 'الأدب والفلسفة والشعر والأفكار التي تصل بينها.',
    body: 'The original About page mentions The Master and Margarita, Aristotle, Blake, Frost, Milton, Orwell, Bacon, Johnson, Sophocles, Browning and Shakespeare. This is a documented interest, not a claimed award.',
    image: '/art/reading.svg',
    meta: 'Literature · Philosophy',
    links: [],
    sample: false,
  },
  {
    id: 'lit-club',
    category: 'Interests', categoryAr: 'اهتمامات',
    title: 'Literature Club', titleAr: 'القراءة والأدب',
    summary: 'Founded the KFUPM Literature CLUB in 2026, semester 261',
    summaryAr: 'الأدب والفلسفة والشعر والأفكار التي تصل بينها.',
    body: 'Fostered interest in critical thinking and analysis with regards to works of art, media, and entertainment, by founding the literature club in KFUPM and hosting semi-weekly meetings.',
    image: '/art/LitClubMeet.jpeg',
    meta: 'Literature · Philosophy',
    links: [],
    sample: false,
  },
  {
    id: 'sample-research', sample: true,
    category: 'Sample', categoryAr: 'مثال',
    title: 'Research Notebook', titleAr: 'دفتر بحث تجريبي',
    summary: 'Example entry for future technical notes and research explorations.',
    summaryAr: 'بطاقة نموذجية لملاحظات بحثية مستقبلية.',
    body: 'This is placeholder content for the layout, not an achievement or a completed project. Replace it with a real entry when ready.',
    image: '/art/research.svg', meta: 'PLACEHOLDER · Research', links: [],
  },
  {
    id: 'sample-talk', sample: true,
    category: 'Sample', categoryAr: 'مثال',
    title: 'A Talk Worth Sharing', titleAr: 'محاضرة نموذجية',
    summary: 'An example of how a presentation or public talk could appear.',
    summaryAr: 'مثال على عرض محاضرة أو تقديم عام.',
    body: 'Sample achievement card only. Add a real title, picture, date, and optional video or slides link.',
    image: '/art/talk.svg', meta: 'PLACEHOLDER · Speaking', links: [],
  },
  {
    id: 'sample-library', sample: true,
    category: 'Sample', categoryAr: 'مثال',
    title: 'Personal Library', titleAr: 'مكتبة شخصية نموذجية',
    summary: 'An example photographic entry for a reading collection.',
    summaryAr: 'مثال لعرض مجموعة قراءات وصور.',
    body: 'Sample only. Replace with a genuine photograph and an annotated list or reading story.',
    image: '/art/library.svg', meta: 'PLACEHOLDER · Collection', links: [],
  },
  {
    id: 'sample-experiment', sample: true,
    category: 'Sample', categoryAr: 'مثال',
    title: 'Creative Experiment', titleAr: 'تجربة إبداعية نموذجية',
    summary: 'An example card for a prototype, sketch, or side project.',
    summaryAr: 'مثال لتجربة أو نموذج أولي أو مشروع جانبي.',
    body: 'Sample only. This demonstration shows how smaller additions can join the mosaic without requiring perfect tiling.',
    image: '/art/experiment.svg', meta: 'PLACEHOLDER · Prototype', links: [],
  },
];

export const sampleTemplates = [
  { title: 'Visual Study', image: '/art/experiment.svg', summary: 'An example of a future visual or design study.' },
  { title: 'Code Notes', image: '/art/research.svg', summary: 'A place for a future technical investigation.' },
  { title: 'Field Journal', image: '/art/library.svg', summary: 'A space for personal observations and photographs.' },
  { title: 'New Prototype', image: '/art/portfolio.svg', summary: 'A hypothetical project entry to demonstrate grid growth.' },
];

export function createSampleBatch(startIndex, count = 4) {
  return Array.from({ length: count }, (_, offset) => {
    const i = startIndex + offset;
    const template = sampleTemplates[i % sampleTemplates.length];
    return {
      id: `generated-sample-${i}`,
      title: `${template.title} ${i + 1}`,
      category: 'Sample', categoryAr: 'مثال',
      titleAr: `مثال إضافي ${i + 1}`,
      summary: template.summary,
      summaryAr: 'بطاقة إضافية لاختبار توسّع الشبكة.',
      body: 'Demonstration only. This card is not a real achievement. Edit src/data/achievements.js to add genuine content permanently.',
      image: template.image,
      links: [], meta: 'PLACEHOLDER · DEMO', sample: true, generated: true,
    };
  });
}
