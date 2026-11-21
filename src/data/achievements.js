/**
 * The first six entries come from the supplied original portfolio.
 * Entries with sample: true are invented display examples, not real achievements.
 * Add or remove objects here to permanently change the archive.
 * Every entry supports: id, category, title, summary, image, body, links[], sample.
 */
export const achievements = [
  {
    id: 'portfolio-website',
    category: 'Web Development', categoryAr: 'تطوير',
    title: 'My Portfolio Website', titleAr: 'الموقع الشخصي',
    summary: 'A responsive personal portfolio built with HTML, CSS, JS, and React',
    summaryAr: 'موقع شخصي متجاوب باستخدام HTML وCSS وJavaScript.',
    body: "This website that you are currently using has been developed by me, and for what it's worth, I consider it a great piece of work.",
    image: '/art/MPortfolio.png',
    meta: 'HTML · CSS · JavaScript',
    links: [],
    sample: false,
  },
  {
    id: 'discordbot',
    category: 'Design', categoryAr: 'تصميم',
    title: 'Discord Bot Application', titleAr: 'تصميم واجهة جوال',
    summary: 'A Discord bot that adds value to a server',
    summaryAr: 'واجهة جوال تركز على سهولة الاستخدام وإمكانية الوصول.',
    body: 'I created Potential Bot, a gag feature that is meant to make servers and communities on Discord have more fun by introducing some chaos.',
    image: '/art/PotentialBOT.png',
    meta: 'Back-End · API Integration · Design',
    links: [{label:"Add Potential Bot", href:"https://discord.com/oauth2/authorize?client_id=1560379322361970789"}],
    sample: false,
  },
  {
    id: 'writing',
    category: 'Writing', categoryAr: 'كتابة',
    title: 'Poetry & Essays', titleAr: 'الشعر والمقالات',
    summary: 'I love to write poems and essays, which can be found on my Substack.',
    summaryAr: 'كتابة الشعر والمقالات ونشر بعض الأعمال على سبستاك.',
    body: 'My Substack serves as a platform with which you may enjoy my writings, I love to write short lyrical poems with endless themes.',
    image: '/art/MarwanWriting.jpeg',
    meta: 'Writing · Poetry',
    links: [{ label: 'Visit Substack', href: 'https://marwanpgx.substack.com/' }],
    sample: false,
  },
  {
    id: 'global-engagement-departure-speech',
    category: 'Engagement', categoryAr: 'اهتمامات',
    title: 'Students Exchange Pre-Departure Speech', titleAr: 'القراءة والأدب',
    summary: '',
    summaryAr: 'الأدب والفلسفة والشعر والأفكار التي تصل بينها.',
    body: 'I was invited to give a speech to the departing batch of exchange students during T261, as a former exchange student myself. This was a very fruitful experience and was a form of paying back to my University.',
    image: '/art/GESpeech.jpeg',
    meta: 'Student Relations · Social Skills',
    links: [],
    sample: false
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
    sample: false
  },
  {
    id: '/art/TrafficLightSystem.jpg',
    category: 'Projects', categoryAr: 'مثال',
    title: 'Parking System Project', titleAr: 'دفتر بحث تجريبي',
    summary: 'College project where we created a parking reservation system',
    summaryAr: 'بطاقة نموذجية لملاحظات بحثية مستقبلية.',
    body: 'Back in 2023, I created a fully independent, sensor-based arduino parking reservation system. It could be scaled up to be fully autonomous and enable online reservations to customers.',
    image: '/art/TrafficLightSystem.jpg', meta: 'Design · Project Management', links: [],
  },
  {
    id: 'circuit-project',
    category: 'Projects', categoryAr: 'مثال',
    title: 'Circuits Project', titleAr: 'محاضرة نموذجية',
    summary: 'Created a fully programmed traffic light system.',
    summaryAr: 'مثال على عرض محاضرة أو تقديم عام.',
    body: 'For COE203, I created a fully programmed traffic system in Verilog, from the ground-up using the bare essentials, ANDs, ORs, NOTs, we created a traffic light system with timers and responds to incoming drivers.',
    image: '/art/circuit.jpg', meta: 'Programming · Design', links: [],
  },
  {
    id: 'security-plus',
    category: 'Achievement', categoryAr: 'مثال',
    title: 'Security+ Certification', titleAr: 'مكتبة شخصية نموذجية',
    summary: 'Marwan obtained the COMPTIA Security+ Certification in June of 2026.',
    summaryAr: 'مثال لعرض مجموعة قراءات وصور.',
    body: 'During the summer of 2026, term 253 of KFUPM, I worked diligently on my studies, and have succeeded in obtaining the Security+ Certification on the side. It was a proud moment for me.',
    image: '/art/Sec+.webp', meta: 'Certificate · Cybersecurity', links: [{label: "LinkedIn Announcement", href:"https://lnkd.in/p/dmUgTwsY"}],
  }
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
