export type ProjectLayout = "standard" | "album";

export interface CreditRow {
  label: string;
  value: string;
}

export interface StreamingLink {
  platform: "apple-music" | "spotify";
  url: string;
}

export interface WorkItem {
  slug: string;
  layout: ProjectLayout;
  title: string;
  label: string;
  excerpt: string;
  image: string;
  albumArt?: string;
  heroDescription?: string;
  description: string[];
  credits: CreditRow[];
  streamingLinks: StreamingLink[];
}

export const projects: WorkItem[] = [
  {
    slug: "national-symphony",
    layout: "standard",
    title: "National Symphony Orchestra",
    label: "Symphonic \u00B7 Kennedy Center",
    excerpt:
      "First Hip-Hop Composition performed by the National Symphony Orchestra at the Kennedy Center.",
    image: "/images/conductor-1.jpg",
    description: [
      "Pioneered the first Hip-Hop composition performed by the National Symphony Orchestra. Orchestral arranger and music director for Nas\u2019s Illmatic 20th anniversary at the Kennedy Center, conducted by Steven Reineke. Named by FENDER as one of the top moments in Hip Hop history.",
      "This visionary premiere marked the first time a Hip-Hop composition was performed by the National Symphony Orchestra \u2014 a milestone that redefined the boundaries of orchestral programming in America. Hodge architected arrangements that translated the raw energy and lyrical complexity of Nas\u2019s seminal album into symphonic language, honoring both traditions and cementing his reputation as a genre-bridging visionary.",
    ],
    credits: [],
    streamingLinks: [],
  },
  {
    slug: "carnegie-hall",
    layout: "standard",
    title: "Carnegie Hall",
    label: "Symphonic \u00B7 Carnegie Hall",
    excerpt:
      "First Hip-Hop Strings arrangement at Carnegie Hall.",
    image: "/images/derrick-hodge-3.jpg",
    description: [
      "Architected the first Hip-Hop strings arrangement. String arranger for Mos Def Live at Carnegie Hall \u2014 the venue\u2019s first full Hip Hop show, a landmark event in the genre\u2019s history.",
      "Carnegie Hall\u2019s storied stage had hosted nearly every genre in its 117-year history \u2014 but never a full Hip Hop concert. Hodge architected the string arrangements for Mos Def\u2019s landmark performance, bridging classical instrumentation and Hip Hop for one of the most significant cultural crossover events of the decade.",
    ],
    credits: [],
    streamingLinks: [],
  },
  {
    slug: "academy-awards",
    layout: "standard",
    title: "94th Academy Awards",
    label: "Symphonic \u00B7 Oscars",
    excerpt:
      "Lead Orchestrator and Conductor for the first All-African-American orchestra at the Oscars.",
    image: "/images/derek-hodge-kevin-mohatt.jpg",
    description: [
      "Directed and orchestrated the 2022 Oscars. Orchestrator and Co-Conductor for the first All-African-American orchestra in Academy Awards history.",
      "The 94th Academy Awards represented a watershed moment. Hodge directed and orchestrated the first All-African-American orchestra ever to perform at the ceremony \u2014 an achievement that was not merely symbolic. His orchestrations anchored the evening\u2019s musical performances with a depth and cultural resonance that reflected the full breadth of American musical tradition.",
    ],
    credits: [],
    streamingLinks: [],
  },
  {
    slug: "grammy-awards",
    layout: "standard",
    title: "Grammy Awards",
    label: "Awards",
    excerpt:
      "Two-time Grammy winner. Big Band arrangement for Nas at the 2022 ceremony.",
    image: "/images/derrick-hodge-feature.jpg",
    description: [
      "Two-time Grammy winner. Orchestrated the Big Band arrangement for Nas performance at the 2022 ceremony. Critically acclaimed across genres and mediums with a diverse and devoted global audience.",
      "Hodge\u2019s relationship with the Grammy Awards runs deep \u2014 both as a winner and as a defining creative force behind some of the ceremony\u2019s most memorable performances. His orchestration for Nas at the 2022 ceremony transformed the stage into a jazz club meets symphonic hall, demonstrating his unparalleled ability to architect genre-bridging performances while honoring the traditions that shaped him.",
    ],
    credits: [],
    streamingLinks: [],
  },
  {
    slug: "super-bowl",
    layout: "standard",
    title: "Super Bowl LVI",
    label: "Event \u00B7 Super Bowl",
    excerpt:
      "Arranged orchestra for the Lift Every Voice performance at Super Bowl LVI.",
    image: "/images/derrick-hodge-4.jpg",
    description: [
      "Orchestrated the \u201CLift Every Voice\u201D symphonic performance at Super Bowl LVI \u2014 a nationally broadcast moment that showcased the power of symphonic arrangement on the world\u2019s biggest stage.",
      "The performance reached over 100 million viewers, demonstrating how a visionary orchestration can amplify the emotional power of culturally significant moments. Hodge\u2019s arrangement was both reverent and forward-looking \u2014 anchoring tradition while pioneering new territory for symphonic performance on a global stage.",
    ],
    credits: [],
    streamingLinks: [],
  },
  {
    slug: "sundance",
    layout: "standard",
    title: "Sundance Institute",
    label: "Fellowship",
    excerpt:
      "Named Composer Fellow at the Sundance Institute.",
    image: "/images/derrick-hodge-double-bass.webp",
    description: [
      "Named Composer Fellow at the Sundance Institute. Recognized for his visionary approach to cinematic storytelling through music.",
      "The Sundance Institute Composer Fellowship recognizes composers whose work pushes the boundaries of film scoring. Hodge\u2019s selection acknowledged his architecting of film and television scores \u2014 from The Best Man: Final Chapters to Run the World \u2014 and his visionary ability to score with emotional precision and cultural authenticity. His approach to cinematic storytelling through music draws on his deep roots in jazz, hip-hop, and classical composition, creating scores that are as rich and layered as the stories they accompany.",
    ],
    credits: [],
    streamingLinks: [],
  },
  {
    slug: "hollywood-bowl",
    layout: "standard",
    title: "Hollywood Bowl",
    label: "Symphonic \u00B7 Hollywood Bowl",
    excerpt:
      "Conductor for CNN\u2019s Juneteenth Celebration at the Hollywood Bowl.",
    image: "/images/derrick-hodge-zo.jpg",
    description: [
      "Directed and orchestrated CNN\u2019s nationally televised Juneteenth Celebration. Led the first All-African American orchestra to perform on the Hollywood Bowl stage.",
      "The Hollywood Bowl has been the site of countless historic performances, but none quite like this. For CNN\u2019s nationally televised Juneteenth Celebration, Hodge directed and orchestrated the first All-African American orchestra to perform on the iconic stage \u2014 an evening that anchored culture, history, and artistic excellence into a single transcendent moment.",
    ],
    credits: [],
    streamingLinks: [],
  },
  {
    slug: "smithsonian",
    layout: "standard",
    title: "Smithsonian NMAAHC",
    label: "Installation \u00B7 Smithsonian",
    excerpt:
      "Commissioned installation music for permanent exhibits at the Smithsonian NMAAHC.",
    image: "/images/derrick-hodge-roster.jpg",
    description: [
      "Commissioned to architect permanent sonic installations at the Smithsonian\u2019s National Museum of African American History and Culture.",
      "Hodge was commissioned to architect the sonic installations for the Smithsonian\u2019s permanent exhibit The Power of Place, exploring how Oak\u2019s Bluff became a place of collective imagining, struggle, achievement and freedom for a burgeoning African American community. He went on to compose for Social Dance on the Cultural Expressions floor and the Making A Way exhibit, honoring the creativity, agency and resilience with which individual African Americans crafted opportunity in the face of racial oppression. These compositions live permanently within one of America\u2019s most important cultural institutions.",
    ],
    credits: [],
    streamingLinks: [],
  },
];

export const albums: WorkItem[] = [
  {
    slug: "color-of-noize-album",
    layout: "album",
    title: "Color of Noize",
    label: "Solo Album \u00B7 Blue Note Records",
    excerpt:
      "A melting pot of influence and experience with jazz flow, hip-hop groove, soulful depth, spiritual heft, and creative fire.",
    image: "/images/color-of-noize-cover.jpg",
    albumArt: "/images/color-of-noize-cover.jpg",
    heroDescription:
      "A melting pot of influence and experience with jazz flow, hip-hop groove, soulful depth, spiritual heft, and creative fire. Co-produced by Hodge and Don Was.",
    description: [
      "Multi-instrumentalist, composer, and producer Derrick Hodge\u2019s 3rd album Color of Noize reflects a melting pot of influence and experience with jazz flow, hip-hop groove, soulful depth, spiritual heft, and creative fire.",
      "Co-produced by Hodge and Don Was, it\u2019s his 1st album to use a live band throughout with Jahari Stampley and Michael Aaberg on keys, Mike Mitchell and Justin Tyson on drums, DJ Jahi Sundance on turntables, and Hodge supplying bass, keys, guitar, and voice.",
    ],
    credits: [
      { label: "Artist", value: "Derrick Hodge" },
      { label: "Label", value: "Blue Note Records" },
      { label: "Year", value: "2020" },
      { label: "Co-Producer", value: "Don Was" },
    ],
    streamingLinks: [
      { platform: "apple-music", url: "https://music.apple.com/us/album/color-of-noize/1511790333" },
      { platform: "spotify", url: "https://open.spotify.com/track/6J1vxMKoSDqrIjO3ahRFXd" },
    ],
  },
  {
    slug: "the-second",
    layout: "album",
    title: "The Second",
    label: "Solo Album \u00B7 Blue Note Records",
    excerpt:
      "Critically acclaimed second solo recording on Blue Note Records.",
    image: "/images/the-second-cover.jpg",
    albumArt: "/images/the-second-cover.jpg",
    heroDescription:
      "Derrick Hodge\u2019s critically acclaimed second solo recording on Blue Note Records. A boundary-pushing exploration of sound, rhythm, and emotion.",
    description: [
      "The Second is Derrick Hodge\u2019s sophomore Blue Note effort, building on the foundation laid by Live Today. The album showcases Hodge\u2019s expanding vision as both a composer and multi-instrumentalist, blending electronic textures with organic instrumentation.",
      "Hodge plays bass, keys, guitar, and provides vocals across tracks that move fluidly between jazz, hip-hop, and soul \u2014 never settling into a single genre, always pushing forward.",
    ],
    credits: [
      { label: "Artist", value: "Derrick Hodge" },
      { label: "Label", value: "Blue Note Records" },
      { label: "Year", value: "2016" },
      { label: "Role", value: "Artist / Producer" },
    ],
    streamingLinks: [
      { platform: "apple-music", url: "https://music.apple.com/us/album/the-second/1440896953" },
      { platform: "spotify", url: "https://open.spotify.com/album/5VjBGhHGMnOJ5IK47XG6rF" },
    ],
  },
  {
    slug: "live-today",
    layout: "album",
    title: "Live Today",
    label: "Solo Album \u00B7 Blue Note Records",
    excerpt:
      "Debut solo album on Blue Note Records.",
    image: "/images/live-today-cover.jpg",
    albumArt: "/images/live-today-cover.jpg",
    heroDescription:
      "Derrick Hodge\u2019s debut solo recording on Blue Note Records. An intimate and expansive statement from one of modern music\u2019s most versatile voices.",
    description: [
      "Live Today marks Derrick Hodge\u2019s debut as a solo artist on Blue Note Records, establishing his voice as more than a world-class sideman. The album channels the depth of his experiences touring and recording with the best in jazz, hip-hop, and soul.",
      "Recognition from his work on Common\u2019s \u201CBE\u201D \u2014 cited among hip-hop\u2019s top 20 basslines of all time \u2014 opened doors, but Live Today proved Hodge was a complete artist in his own right.",
    ],
    credits: [
      { label: "Artist", value: "Derrick Hodge" },
      { label: "Label", value: "Blue Note Records" },
      { label: "Year", value: "2013" },
      { label: "Role", value: "Artist / Producer" },
    ],
    streamingLinks: [
      { platform: "apple-music", url: "https://music.apple.com/us/album/live-today/1440893781" },
      { platform: "spotify", url: "https://open.spotify.com/album/2r2e5rQ2Y8IA7s5Y2UFOBU" },
    ],
  },
  {
    slug: "collagically-speaking",
    layout: "album",
    title: "Collagically Speaking",
    label: "R+R=Now \u00B7 Blue Note Records",
    excerpt:
      "A supergroup debut \u2014 Robert Glasper, Terrace Martin, Christian Scott aTunde Adjuah, Derrick Hodge, Taylor McFerrin & Justin Tyson.",
    image: "/images/derek-hodge-kevin-mohatt.jpg",
    albumArt: "/images/derek-hodge-kevin-mohatt.jpg",
    heroDescription:
      "A supergroup debut on Blue Note Records \u2014 Robert Glasper, Terrace Martin, Christian Scott aTunde Adjuah, Derrick Hodge, Taylor McFerrin & Justin Tyson.",
    description: [
      "R+R=Now \u2014 Reflect + Respond = Now \u2014 is a supergroup formed by six of modern music\u2019s most forward-thinking artists. Collagically Speaking is their debut album on Blue Note Records, a real-time musical conversation that blurs the lines between jazz, electronic, hip-hop, and R&B.",
      "The collective features Robert Glasper on keys, Terrace Martin on synths and vocoder, Christian Scott aTunde Adjuah on trumpet, Derrick Hodge on bass, Taylor McFerrin on beatbox and synths, and Justin Tyson on drums. Together they created a sound that is spontaneous, layered, and deeply rooted in Black musical traditions while pointing toward the future.",
    ],
    credits: [
      { label: "Artist", value: "R+R=Now" },
      { label: "Label", value: "Blue Note Records" },
      { label: "Year", value: "2018" },
      { label: "Role", value: "Bass / Co-Producer" },
    ],
    streamingLinks: [
      { platform: "apple-music", url: "https://music.apple.com/us/album/collagically-speaking/1371498960" },
      { platform: "spotify", url: "https://open.spotify.com/album/2sFMEBVLmHi2gBJWxXFb19" },
    ],
  },
  {
    slug: "illmatic-live",
    layout: "album",
    title: "Nas: Illmatic Live",
    label: "Symphonic \u00B7 Conductor & Orchestral Arranger",
    excerpt:
      "The first time hip-hop was accepted at the Kennedy Center. Conducted and orchestrated Nas\u2019s Illmatic with the National Symphony Orchestra.",
    image: "/images/conductor-1.jpg",
    albumArt: "/images/conductor-1.jpg",
    heroDescription:
      "The first time hip-hop was accepted at the Kennedy Center. Orchestral conductor and arranger for Nas performing Illmatic with the National Symphony Orchestra.",
    description: [
      "In 2014, Derrick Hodge made history when he conducted and orchestrated Nas\u2019s landmark album Illmatic with the National Symphony Orchestra at the Kennedy Center \u2014 marking the first time hip-hop was ever performed in those halls. The arrangement, a collaboration with Tim Davies for the album\u2019s 20th anniversary, treated each track as a unified narrative, carefully weaving orchestral passages around the minimalist production of the original recordings.",
      "A decade later, Hodge returned to the podium for the 30th anniversary of Illmatic at Red Rocks Amphitheater with the Colorado Symphony Orchestra, where Nas performed in full tuxedo. Hodge began the arrangement with \u201CThe World Is Yours,\u201D seeking feedback from producer Pete Rock before expanding across the full album \u2014 an approach rooted in conversation between genres rather than overpowering the source material.",
      "An upright bass player since age seven who practiced classical composition on planes, in dressing rooms, and tour vans while on the road with Terence Blanchard and Robert Glasper, Hodge bridges the worlds of hip-hop and orchestral music with the conviction that each opportunity must be served with its own integrity.",
    ],
    credits: [
      { label: "Artist", value: "Nas" },
      { label: "Venue", value: "Kennedy Center / Red Rocks" },
      { label: "Year", value: "2014 / 2024" },
      { label: "Role", value: "Conductor / Orchestral Arranger" },
    ],
    streamingLinks: [],
  },
];

export const getAllSlugs = (): string[] => {
  return [
    ...projects.map((p) => p.slug),
    ...albums.map((a) => a.slug),
  ];
};

export const getProjectBySlug = (slug: string): WorkItem | undefined => {
  const project = projects.find((p) => p.slug === slug);
  if (project) return project;
  return albums.find((a) => a.slug === slug);
};
