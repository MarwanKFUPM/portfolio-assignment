/**
 * Archive entries. Keep original-language copy in the base fields and place
 * faithful Arabic equivalents in their corresponding *Ar fields.
 *
 * Supported bilingual fields: category/categoryAr, title/titleAr,
 * summary/summaryAr, body/bodyAr, meta/metaAr, optional caption/captionAr,
 * optional imageAlt/imageAltAr, and links[].label/links[].labelAr.
 * Captions fall back to meta/metaAr when no explicit caption is supplied.
 */
export const achievements = [
  {
    id: 'portfolio-website',
    category: 'Web Development', categoryAr: 'تطوير الويب',
    title: 'My Portfolio Website', titleAr: 'موقعي الشخصي',
    summary: 'A responsive personal portfolio built with HTML, CSS, JS, and React',
    summaryAr: 'موقع أعمال شخصي متجاوب طُوّر باستخدام HTML وCSS وJavaScript وReact.',
    body: "This website that you are currently using has been developed by me, and for what it's worth, I consider it a great piece of work.",
    bodyAr: 'أنا من طوّر هذا الموقع الذي تتصفحه الآن، وأعدّه عملًا رائعًا.',
    image: '/art/MPortfolio.png',
    meta: 'HTML · CSS · JavaScript',
    metaAr: 'HTML · CSS · JavaScript',
    links: [],
    sample: false,
  },
  {
    id: 'discordbot',
    category: 'Design', categoryAr: 'تصميم',
    title: 'Discord Bot Application', titleAr: 'تطبيق بوت ديسكورد',
    summary: 'A Discord bot that adds value to a server',
    summaryAr: 'بوت لديسكورد يضيف قيمة إلى الخادم.',
    body: 'I created Potential Bot, a gag feature that is meant to make servers and communities on Discord have more fun by introducing some chaos.',
    bodyAr: 'أنشأت بوت Potential Bot، وهو ميزة طريفة تهدف إلى جعل خوادم ديسكورد ومجتمعاته أكثر متعة من خلال إدخال شيء من الفوضى.',
    image: '/art/PotentialBOT.png',
    meta: 'Back-End · API Integration · Design',
    metaAr: 'تطوير الواجهة الخلفية · تكامل واجهات API · تصميم',
    links: [{label: 'Add Potential Bot', labelAr: 'إضافة بوت Potential Bot', href: 'https://discord.com/oauth2/authorize?client_id=1560379322361970789'}],
    sample: false,
  },
  {
    id: 'writing',
    category: 'Writing', categoryAr: 'الكتابة',
    title: 'Poetry & Essays', titleAr: 'الشعر والمقالات',
    summary: 'I love to write poems and essays, which can be found on my Substack.',
    summaryAr: 'أحب كتابة القصائد والمقالات، ويمكن الاطلاع عليها في صفحتي على سبستاك.',
    body: 'My Substack serves as a platform with which you may enjoy my writings, I love to write short lyrical poems with endless themes.',
    bodyAr: 'تتيح لكم صفحتي على سبستاك الاستمتاع بقراءة كتاباتي. أحب كتابة قصائد غنائية قصيرة تتناول موضوعات لا حصر لها.',
    image: '/art/MarwanWriting.jpeg',
    meta: 'Writing · Poetry',
    metaAr: 'الكتابة · الشعر',
    links: [{ label: 'Visit Substack', labelAr: 'زيارة سبستاك', href: 'https://marwanpgx.substack.com/' }],
    sample: false,
  },
  {
    id: 'global-engagement-departure-speech',
    category: 'Engagement', categoryAr: 'المشاركة',
    title: 'Students Exchange Pre-Departure Speech', titleAr: 'كلمة لطلاب التبادل قبل المغادرة',
    summary: '',
    summaryAr: '',
    body: 'I was invited to give a speech to the departing batch of exchange students during T261, as a former exchange student myself. This was a very fruitful experience and was a form of paying back to my University.',
    bodyAr: 'دُعيت لإلقاء كلمة أمام دفعة طلاب التبادل المغادرين خلال الفصل T261، بصفتي طالب تبادل سابقًا. كانت تجربة مثمرة للغاية، وشكّلت وسيلة لرد الجميل لجامعتي.',
    image: '/art/GESpeech.jpeg',
    meta: 'Student Relations · Social Skills',
    metaAr: 'العلاقات الطلابية · المهارات الاجتماعية',
    links: [],
    sample: false,
  },
  {
    id: 'lit-club',
    category: 'Interests', categoryAr: 'الاهتمامات',
    title: 'Literature Club', titleAr: 'نادي الأدب',
    summary: 'Founded the KFUPM Literature CLUB in 2026, semester 261',
    summaryAr: 'أسست نادي الأدب بجامعة الملك فهد للبترول والمعادن عام 2026، في الفصل 261.',
    body: 'Fostered interest in critical thinking and analysis with regards to works of art, media, and entertainment, by founding the literature club in KFUPM and hosting semi-weekly meetings.',
    bodyAr: 'عززت الاهتمام بالتفكير النقدي والتحليل فيما يتعلق بالأعمال الفنية والإعلامية والترفيهية، من خلال تأسيس نادي الأدب في جامعة الملك فهد للبترول والمعادن وعقد لقاءات شبه أسبوعية.',
    image: '/art/LitClubMeet.jpeg',
    meta: 'Literature · Philosophy',
    metaAr: 'الأدب · الفلسفة',
    links: [],
    sample: false,
  },
  {
    id: '/art/TrafficLightSystem.jpg',
    category: 'Projects', categoryAr: 'المشاريع',
    title: 'Parking System Project', titleAr: 'مشروع نظام مواقف السيارات',
    summary: 'College project where we created a parking reservation system',
    summaryAr: 'مشروع جامعي أنشأنا فيه نظامًا لحجز مواقف السيارات.',
    body: 'Back in 2023, I created a fully independent, sensor-based arduino parking reservation system. It could be scaled up to be fully autonomous and enable online reservations to customers.',
    bodyAr: 'في عام 2023، أنشأت نظامًا مستقلًا تمامًا لحجز مواقف السيارات، يعتمد على حساسات وأردوينو. وكان بالإمكان توسيعه ليعمل بصورة ذاتية بالكامل ويتيح للعملاء الحجز عبر الإنترنت.',
    image: '/art/TrafficLightSystem.jpg',
    meta: 'Design · Project Management',
    metaAr: 'التصميم · إدارة المشاريع',
    links: [],
  },
  {
    id: 'circuit-project',
    category: 'Projects', categoryAr: 'المشاريع',
    title: 'Circuits Project', titleAr: 'مشروع الدوائر',
    summary: 'Created a fully programmed traffic light system.',
    summaryAr: 'أنشأت نظام إشارات مرور مبرمجًا بالكامل.',
    body: 'For COE203, I created a fully programmed traffic system in Verilog, from the ground-up using the bare essentials, ANDs, ORs, NOTs, we created a traffic light system with timers and responds to incoming drivers.',
    bodyAr: 'ضمن مقرر COE203، أنشأت من الصفر نظام إشارات مرور مبرمجًا بالكامل بلغة Verilog، باستخدام البوابات المنطقية الأساسية AND وOR وNOT. وأنشأنا نظامًا بإشارات مرور مزودة بمؤقتات ويستجيب للسائقين القادمين.',
    image: '/art/circuit.jpg',
    meta: 'Programming · Design',
    metaAr: 'البرمجة · التصميم',
    links: [],
  },
  {
    id: 'security-plus',
    category: 'Achievement', categoryAr: 'إنجاز',
    title: 'Security+ Certification', titleAr: 'شهادة Security+',
    summary: 'Marwan obtained the COMPTIA Security+ Certification in June of 2026.',
    summaryAr: 'حصل مروان على شهادة CompTIA Security+ في يونيو 2026.',
    body: 'During the summer of 2026, term 253 of KFUPM, I worked diligently on my studies, and have succeeded in obtaining the Security+ Certification on the side. It was a proud moment for me.',
    bodyAr: 'خلال صيف عام 2026، في الفصل 253 بجامعة الملك فهد للبترول والمعادن، اجتهدت في دراستي ونجحت كذلك في الحصول على شهادة Security+ إلى جانبها. وكانت لحظة فخر بالنسبة إليّ.',
    image: '/art/Sec+.webp',
    meta: 'Certificate · Cybersecurity',
    metaAr: 'شهادة · الأمن السيبراني',
    links: [{ label: 'LinkedIn Announcement', labelAr: 'الإعلان على لينكدإن', href: 'https://lnkd.in/p/dmUgTwsY' }],
  }
];

export const sampleTemplates = [
  {
    title: 'Visual Study', titleAr: 'دراسة بصرية',
    image: '/art/experiment.svg',
    summary: 'An example of a future visual or design study.',
    summaryAr: 'مثال على دراسة بصرية أو تصميمية مستقبلية.',
  },
  {
    title: 'Code Notes', titleAr: 'ملاحظات برمجية',
    image: '/art/research.svg',
    summary: 'A place for a future technical investigation.',
    summaryAr: 'مساحة لدراسة تقنية مستقبلية.',
  },
  {
    title: 'Field Journal', titleAr: 'يوميات ميدانية',
    image: '/art/library.svg',
    summary: 'A space for personal observations and photographs.',
    summaryAr: 'مساحة للملاحظات الشخصية والصور الفوتوغرافية.',
  },
  {
    title: 'New Prototype', titleAr: 'نموذج أولي جديد',
    image: '/art/portfolio.svg',
    summary: 'A hypothetical project entry to demonstrate grid growth.',
    summaryAr: 'مشروع افتراضي لتوضيح كيفية توسّع الشبكة.',
  },
];

export function createSampleBatch(startIndex, count = 4) {
  return Array.from({ length: count }, (_, offset) => {
    const i = startIndex + offset;
    const template = sampleTemplates[i % sampleTemplates.length];
    return {
      id: `generated-sample-${i}`,
      title: `${template.title} ${i + 1}`,
      titleAr: `${template.titleAr} ${i + 1}`,
      category: 'Sample', categoryAr: 'مثال',
      summary: template.summary,
      summaryAr: template.summaryAr,
      body: 'Demonstration only. This card is not a real achievement. Edit src/data/achievements.js to add genuine content permanently.',
      bodyAr: 'للعرض التوضيحي فقط. هذه البطاقة ليست إنجازًا حقيقيًا. عدّل ملف src/data/achievements.js لإضافة محتوى فعلي بصورة دائمة.',
      image: template.image,
      links: [],
      meta: 'PLACEHOLDER · DEMO',
      metaAr: 'عنصر نائب · عرض توضيحي',
      sample: true, generated: true,
    };
  });
}
