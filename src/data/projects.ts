import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
import card6 from "@/assets/card-6.jpg";
import khCover from "@/assets/kh-cover.jpeg";
import pipexPersonas from "@/assets/pipex-personas.png";
import pipexTimeline from "@/assets/pipex-timeline.png";
import pipexRoadmap from "@/assets/pipex-roadmap.png";
import pipexWorkflow from "@/assets/pipex-workflow.png";
import pipexTrollsEmail from "@/assets/pipex-trolls-email.png";
import pipexLaunchLetter from "@/assets/pipex-launch-letter.png";
import pipexHappyHour from "@/assets/pipex-happy-hour.png";
import pipexTrollsHoliday from "@/assets/pipex-trolls-holiday.jpg";
import pipexCardCover from "@/assets/pipex-card-cover.webp";
import khGallery1 from "@/assets/kh-gallery-1.jpeg";
import khGallery2 from "@/assets/kh-gallery-2.jpeg";
import khGallery3 from "@/assets/kh-gallery-3.jpg";
import khGallery4 from "@/assets/kh-gallery-4.png";
import khGallery5 from "@/assets/kh-gallery-5.jpeg";
import khCaseComp from "@/assets/kh-case-comp.png";
import bizhacksCover from "@/assets/bizhacks-cover.jpg";
import bizhacksGallery1 from "@/assets/bizhacks-gallery-1.jpg";
import bizhacksGallery2 from "@/assets/bizhacks-gallery-2.jpg";
import bizhacksGallery3 from "@/assets/bizhacks-gallery-3.jpg";
import bizhacksGallery4 from "@/assets/bizhacks-gallery-4.jpg";
import bizhacksGallery5 from "@/assets/bizhacks-gallery-5.jpg";
import bizhacksGallery6 from "@/assets/bizhacks-gallery-6.jpg";
import infosysCover from "@/assets/infosys-cover.jpeg";
import becomingTourPoster from "@/assets/becoming-tour-poster.jpg";
import patternMacysHero from "@/assets/pattern-beauty-hero.png";
import becomingGlamourStage from "@/assets/becoming-glamour-stage.png";
import becomingGlamourWoty from "@/assets/becoming-glamour-woty.jpg";
import becomingBookDisplay from "@/assets/becoming-book-display.jpg";
import becomingTimesup from "@/assets/becoming-timesup.webp";
import becomingWomenIllustration from "@/assets/becoming-women-illustration.jpeg";
import becomingTourDates from "@/assets/becoming-tour-dates.jpg";
import traceeMichelleInterview from "@/assets/tracee-michelle-interview.jpg";
import becomingGlamourTracee from "@/assets/becoming-glamour-tracee.jpg";
import patternProducts from "@/assets/pattern-products.png";
import traceePatternBeauty from "@/assets/tracee-pattern-beauty.jpg";
import infosysGallery1 from "@/assets/infosys-gallery-1.jpeg";
import infosysGallery3 from "@/assets/infosys-gallery-3.jpeg";
import infosysGallery4 from "@/assets/infosys-gallery-4.jpeg";
import infosysGallery5 from "@/assets/infosys-gallery-5.jpeg";
import infosysGallery6 from "@/assets/infosys-gallery-6.jpeg";
import elevateCover from "@/assets/elevate-cover.jpeg";
import elevateGallery1 from "@/assets/elevate-gallery-1.jpg";
import elevateGallery2 from "@/assets/elevate-gallery-2.jpg";
import elevateGallery3 from "@/assets/elevate-gallery-3.jpg";
import elevateGallery4 from "@/assets/elevate-gallery-4.jpg";
import elevateGallery5 from "@/assets/elevate-gallery-5.jpg";
import gwibGallery1 from "@/assets/gwib-gallery-1.jpg";
import gwibGallery2 from "@/assets/gwib-gallery-2.png";
import gwibGallery3 from "@/assets/gwib-gallery-3.png";
import gwibGallery4 from "@/assets/gwib-gallery-4.png";
import gwibGallery5 from "@/assets/gwib-gallery-5.png";
import gwibGallery6 from "@/assets/gwib-gallery-6.png";
import gwibCover from "@/assets/gwib-cover.jpeg";
import gwibGallery8 from "@/assets/gwib-gallery-8.png";
import henryTourBanner from "@/assets/henry-tour-banner.gif";
import henryHelloSign from "@/assets/henry-hello-sign.png";
import henrySethMeyers from "@/assets/henry-seth-meyers.png";
import henryFanexpo from "@/assets/henry-fanexpo.webp";
import henrySeatedBook from "@/assets/henry-seated-book.jpg";
import henryHodaJenna from "@/assets/henry-hoda-jenna.png";
import barryFinalSeason from "@/assets/barry-final-season.jpg";
import barryEmmys75 from "@/assets/barry-emmys-75.jpg";
import barryPeacockTheater from "@/assets/barry-peacock-theater.webp";
import barryRichEisen from "@/assets/barry-rich-eisen.jpg";
import barrySundayToday from "@/assets/barry-sunday-today.png";
import humanitasBeverlyWilshire from "@/assets/humanitas-beverly-wilshire.webp";
import humanitasDga from "@/assets/humanitas-dga.jpg";
import humanitasWinners from "@/assets/humanitas-winners.webp";
import tsrComplexconFloor from "@/assets/tsr-complexcon-floor.webp";
import tsrLogo from "@/assets/tsr-logo.jpg";
import tsrSxsw from "@/assets/tsr-sxsw.jpg";
import tsrTechcrunch from "@/assets/tsr-techcrunch.jpg";
import tsrAfrotech from "@/assets/tsr-afrotech.webp";
import tsrBeautycon from "@/assets/tsr-beautycon.jpg";
import tsrComplexconLogo from "@/assets/tsr-complexcon-logo.png";

export type ProjectLink = {
  text: string;
  url: string;
};

export type ProjectSection = {
  label: string;
  content: string;
  items?: string[];
};

export type Project = {
  id: string;
  brand: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  cardImage?: string;
  context: string;
  role: string;
  impact: string;
  press?: string;
  gallery: string[];
  links?: ProjectLink[];
  sections?: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: "being-henry-book-tour",
    brand: "Henry Winkler x Celadon Books",
    title: "Being Henry Book Tour",
    description: "National launch campaign for a NYT bestselling memoir across 15+ cities.",
    tag: "Campaigns",
    image: henryTourBanner,
    cardImage: henryTourBanner,
    context: "In 2023, Emmy Award-winning actor Henry Winkler launched his memoir \"Being Henry: The Fonz...and Beyond\" through Celadon Books as a national hardcover tour, followed by a paperback tour in 2024. The campaign required coordinating a multi-city live event series across major US markets, managing a high-profile talent with significant public and media demand, and translating a publishing GTM strategy into flawless on-the-ground execution.",
    role: "As Chief of Staff to Henry Winkler, I served as the operational and strategic lead for the national GTM launch of Being Henry across 15+ US markets. I built and ran the execution infrastructure behind a multi-channel campaign spanning live experiential activations, press, digital content, and fan community integrations. I owned market-by-market launch operations across 15+ cities ensuring brand consistency and talent readiness at every activation. I developed messaging frameworks and media talking points deployed across primetime, syndicated, and podcast press appearances. I supported integrated marketing campaigns across social and digital channels, coordinating content timing and messaging across platforms to amplify key launch moments including the NYT Bestseller debut and tour stop announcements. I led PR coordination and experiential marketing integrations across 7+ fan conventions. I produced launch content including video announcements and digital activations supporting the book's consumer marketing campaign, including a live virtual appearance for Access Hollywood and a live video on X celebrating 7,000 signed memoir copies. I also contributed to brand voice and editorial positioning for supporting campaign materials.",
    impact: "Being Henry debuted as a New York Times Bestseller on launch. The national tour spanned 15+ cities and 20+ regional markets with multiple sold-out stops including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Project managed 7+ fan conventions and 15 speaker appearances reaching 10,000+ attendees. Press campaign spanned primetime, syndicated, and podcast appearances with direct producer responsibilities. The paperback release in 2024 generated a full second tour leg, anchoring the book's sustained market presence across two consecutive years.",
    press: "Being Henry: The Fonz...and Beyond debuted as a New York Times Bestseller through Celadon Books in 2023. The national tour sold out multiple venues including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Press appearances spanned primetime and syndicated television and major podcast platforms. The 2024 paperback release generated a second national tour leg, extending the campaign's market reach into a second consecutive year. Fan convention integrations reached audiences across 20+ regional markets.",
    links: [{ text: "live video on X", url: "https://x.com/hwinkler4real/status/1704224861047156996" }],
    gallery: [henryHelloSign, henrySethMeyers, henryFanexpo, henrySeatedBook, henryHodaJenna],
  },
  {
    id: "becoming-memoir-launch",
    brand: "Tracee Ellis Ross",
    title: "Becoming & PATTERN Beauty GTM",
    description: "Messaging and media training that supported a cultural book launch and a beauty brand debut.",
    tag: "Campaigns",
    image: patternMacysHero,
    context: "In 2018, Michelle Obama launched Becoming, a #1 New York Times Bestseller and one of the best-selling memoirs in publishing history. Tracee Ellis Ross, coming off a viral Glamour Women of the Year speech, was selected as a key press figure in the Becoming campaign, including a high-profile New York Times interview with Obama herself. In 2019, Tracee launched PATTERN Beauty, a curly haircare line built around Tracee's personal brand. To prepare for this launch, Ross needed a strategic creative partner to help shape her approach to the material.",
    role: "Leading executive communications for Tracee Ellis Ross, I built the positioning and messaging frameworks that anchored her role as a key press figure in the GTM campaign for one of the most culturally significant book launches of the decade: Becoming by Michelle Obama. This included selecting and synthesizing thematic content from the memoir, structuring talking points, and developing media training materials used directly in her New York Times interview with Michelle Obama. I also advised on strategy and content for her Glamour Women of the Year speech, which went viral and led directly to her TED2018 invitation. Working sessions took place across Los Angeles including on the set of Black-ish. In parallel I supported the Time's Up movement at the C-suite level, converting live executive meeting notes into messaging and positioning frameworks for the GTM launch of their legal defense fund.",
    impact: "Built and delivered the messaging frameworks, talking points, and media training materials that directly powered Tracee Ellis Ross's press appearances in the Becoming campaign, including her New York Times interview with Michelle Obama. Contributed to the brand voice and positioning work that preceded and enabled the 2019 PATTERN Beauty GTM launch — a cult-favorite curly haircare brand that achieved rapid success by selling out within hours of launch at Ulta Beauty, rapidly expanding to over 50 products and 11+ retailers. Supported Time's Up C-suite messaging that mobilized $21M in 60 days. Tracee Ellis Ross's Glamour speech went viral and led to TED2018. The Becoming LA Forum stop sold out 17,500 seats. Becoming sold 14M copies worldwide.",
    press: "Becoming sold 2 million copies in its first 15 days and 14 million worldwide. The Becoming tour sold out venues nationwide. Tracee Ellis Ross's Glamour Women of the Year speech received national coverage from The Washington Post, HuffPost, and Upworthy, directly leading to her TED2018 invitation. The Time's Up Legal Defense Fund raised $21 million within 60 days, supporting over 1,700 women across 60+ industries. PATTERN Beauty launched in 2019 as the next expression of the brand identity and positioning work developed across this period.",
    gallery: [becomingGlamourTracee, becomingBookDisplay, patternProducts, becomingTimesup, traceeMichelleInterview, traceePatternBeauty],
  },
  {
    id: "executive-brand-activations",
    brand: "The Shade Room",
    title: "CEO Conference Circuit",
    description: "Executive appearances at SXSW, TechCrunch, AfroTech, Beautycon, and ComplexCon.",
    tag: "Social Media",
    image: tsrComplexconFloor,
    context: "The Shade Room is one of the most influential multimedia brands in Black culture, reaching 40 million people weekly with 1.5 billion impressions, described by Refinery29 as the Oprah of our generation. As the brand expanded its executive presence across the tech and culture conference circuit, its founder & CEO required a strategic operational partner to manage high-stakes appearances across some of the most competitive stages in the industry.",
    role: "As Chief of Staff to the Founder & CEO of The Shade Room, I coordinated executive appearances across a portfolio of major tech and culture conventions including SXSW, TechCrunch Disrupt, AfroTech, Beautycon, and ComplexCon. I owned end-to-end vendor coordination and event logistics for each appearance, and contributed to messaging and positioning work including talking points developed for the CEO's on-stage presence. Each activation required translating the TSR brand voice into a professional conference context while maintaining the cultural authenticity the brand is known for.",
    impact: "Successfully managed a multi-event executive activation calendar spanning tech, media, and culture verticals simultaneously. Supported the CEO's visibility across both the mainstream tech conference circuit and culturally specific platforms, reinforcing The Shade Room's positioning as a serious media business operating at eight-figure revenue scale, not just a social media account.",
    press: "The Shade Room, 28M+ Instagram followers, 40 million weekly reach, 1.5 billion weekly impressions. Named the TMZ of Instagram by the New York Times. Eight-figure annual revenue per investor disclosure. Second most popular publisher on Instagram by likes and comments. Founder Angie Nwandu named to Campaign's 2023 Inspiring Women list. Conferences include SXSW, TechCrunch Disrupt, AfroTech, Beautycon, and ComplexCon.",
    gallery: [tsrLogo, tsrSxsw, tsrTechcrunch, tsrAfrotech, tsrBeautycon, tsrComplexconLogo],
  },
  {
    id: "hbo-barry-emmys",
    brand: "Henry Winkler x HBO",
    title: "Barry S4 Emmy Campaign",
    description: "Press, social, and awards campaign for the final season of HBO's Barry.",
    tag: "Social Media",
    image: barryFinalSeason,
    context: "HBO's Barry, the critically acclaimed dark comedy starring Bill Hader and Henry Winkler, entered its fourth and final season in 2023 as one of television's most decorated comedies. The season finale press and awards campaign ran parallel to the 75th Annual Emmy Awards cycle, requiring a coordinated multi-platform promotional push to close out the show's legacy run. The GTM strategy was built around intimacy, audience closeness, and deep relationship-driven press rather than a broad spray approach, honoring both the series and Henry Winkler's decades-long legacy in television.",
    role: "As Chief of Staff to Henry Winkler, I supported his full Barry Season 4 press and Emmy Awards campaign across all four tour formats. I managed scheduling and logistics across primetime, syndicated, podcast, and speaker series appearances, coordinated press and PR outreach, developed media training materials and talking points for Winkler's on-camera and on-stage appearances, and created social content supporting the campaign across platforms. A core part of my role was ensuring every press touchpoint upheld the standard of care that both the series and Winkler's reputation deserved, selecting appearances and framing media training materials to reflect the intimacy and authenticity that defined the show's relationship with its audience. I also produced a live virtual appearance for Access Hollywood in support of the Barry campaign. Led as single point-of-contact between networks (HBO, ABC, NBC), Ads and Sales, and talent representatives (CAA, Management 360) to enable the Barry S4 Emmy campaign.",
    impact: "Barry Season 4 averaged 3.4 million viewers per episode across linear and streaming, with the Season 4 premiere reaching 3.1 million viewers, a 10% increase over the Season 3 premiere at the same point in time. Delayed viewing on streaming drove a 289% increase over premiere night numbers. The season successfully closed out one of HBO's most critically acclaimed series with 11 Emmy nominations at the 75th Annual Emmy Awards, spanning every major media format simultaneously.",
    press: "HBO Barry Season 4, 2023. 75th Annual Emmy Awards, 11 nominations including Outstanding Comedy Series and Outstanding Supporting Actor in a Comedy Series for Henry Winkler. Season 4 averaged 3.4 million viewers per episode across platforms, per Warner Bros. Discovery and Nielsen. Season 4 premiere viewership up 10% over Season 3 premiere at same point in time. Barry accumulated 9 Emmy wins across its first three seasons prior to its final run. Rich Eisen Show, Sunday Today with Willie Geist, multi-platform press campaign spanning primetime, syndicated, podcast, and speaker series formats.",
    links: [{ text: "Access Hollywood", url: "https://www.yahoo.com/entertainment/henry-winkler-reveals-bill-hader-184535604.html" }],
    gallery: [barryEmmys75, barryPeacockTheater, barryRichEisen, barrySundayToday],
  },
  {
    id: "infosys-instep-25",
    brand: "Infosys",
    title: "InStep 25th Anniversary",
    description: "AI demos and main-stage keynote content for a Fortune 500 milestone event.",
    tag: "Events",
    image: infosysCover,
    context: "In 2025, Infosys celebrated the 25th anniversary of its InStep global internship program, one of the largest and most recognized internship programs in enterprise technology. The milestone required internal activations that could communicate the program's legacy and future direction across a diverse employee audience ranging from associates to C-suite executives.",
    role: "As MBA Intern directly supporting the Global Head of Brand at Infosys, I contributed to the anniversary activation across multiple workstreams. I created live product demos showcasing Azure-native AI agent capabilities, developed sales enablement decks used across the event, presented to internal audiences spanning associates through C-suite, and wrote live keynote content for the main stage presentation at the celebration.",
    impact: "Contributed to a flagship internal brand activation marking a 25-year program milestone at a Fortune 500 enterprise technology company. Keynote content and demo materials reached the full internal InStep audience across seniority levels.",
    press: "Infosys InStep 25th Anniversary, 2025. Infosys is a global enterprise technology leader with 300,000+ employees and considered one of the Big Six Indian IT companies.",
    gallery: [infosysGallery1, infosysCover, infosysGallery3, infosysGallery4, infosysGallery6, infosysGallery5],
  },
  {
    id: "humanitas-prize-42",
    brand: "The Humanitas Prize",
    title: "42nd Humanitas Awards",
    description: "Live production, digital marketing, and real-time social coverage for a Hollywood awards ceremony.",
    tag: "Events",
    image: humanitasBeverlyWilshire,
    context: "The Humanitas Prize is one of Hollywood's most respected awards ceremonies, described by Barbara Walters as what the Nobel Prize is to literature and the Pulitzer Prize is to journalism. The 42nd Annual Humanitas Prizes Awards Show and Toast recognized film and television writers whose work affirms the human condition, drawing industry attendees spanning network executives, writers, and producers from every major studio. The ceremony required a production team capable of managing both the high-visibility public-facing elements of a red carpet awards show and the behind-the-scenes operational complexity of a live event with real-time technical demands.",
    role: "As Integrated Marketing Manager, I owned multiple workstreams simultaneously across the full event lifecycle. Pre-event I managed social media strategy, content creation, copy, and scheduling across platforms. During the live event I coordinated directly with vendors on the ground, resolved live technical and IT issues in real time, executed live social media coverage on X, and contributed to red carpet photography at the step and repeat.",
    impact: "Successfully produced a full-scale Hollywood awards ceremony activation end to end, managing the intersection of live event operations and real-time digital brand presence simultaneously. The dual responsibility of floor production and live social coverage is a skill set directly transferable to any brand activation requiring both physical and digital execution.",
    press: "42nd Annual Humanitas Prizes Awards Show and Toast, Four Seasons Beverly Hills. Winning projects at the ceremony included Hidden Figures, Hacksaw Ridge, Ava DuVernay's 13th, Black-ish, and This Is Us. The Humanitas Prize has been covered annually by Variety, The Hollywood Reporter, Los Angeles Times, Deadline, and The Wrap. The organization has dispensed over 1.8 million dollars in prize money to television and film writers since 1974.",
    gallery: [humanitasDga, humanitasWinners],
  },
  {
    id: "pipex-virtual-launch",
    brand: "DreamWorks Animation",
    title: "PipeX Virtual Launch",
    description: "Live virtual activations that launched the first cloud-native animation pipeline.",
    tag: "Executive Comms",
    image: pipexTrollsHoliday,
    cardImage: pipexCardCover,
    context: "During the pandemic era production shutdown, DreamWorks Animation undertook a major infrastructure transformation, migrating its film pipeline to the industry-defining PipelineX (PipeX), a proprietary cloud-native production infrastructure. GTMs included PipelineX itself and Trolls: Holiday in Harmony, the first production to run fully on the new system. With in-person events off the table entirely, the studio needed to build internal excitement, drive adoption, and mark key milestones through virtual experiences that could actually cut through widespread Zoom fatigue.",
    role: "As Product Marketing Lead on the PipeX launch team, I led live product launch activations, owning run-of-show and original content for 150+ studio-wide audiences. I led two flagship virtual brand activations tied directly to the pipeline's rollout: a milestone launch celebration marking Trolls' migration onto PipeX, and a completed film demo showcasing the finished production running fully on the new system. Beyond launch events, I drove studio-wide adoption of cloud-native products, owning end-to-end training and onboarding during active studio production. I delivered live workshops, written documentation, video trainings, and one-on-one sessions across animators, technical directors, producers, and studio executives to hit production milestones on schedule.",
    impact: "Successfully drove studio-wide adoption and enthusiasm around a complex cloud-native product launch during one of the most challenging periods for live engagement in the industry. The activations served as proof of concept that PipeX could support not just production workflows but the cultural moments that matter to a creative studio. Training and onboarding efforts ensured production milestones were met on schedule across departments. Shipped the world's first cloud-based animation pipeline.",
    press: "PipeX powered production on Trolls: Holiday in Harmony, which premiered on NBC primetime November 26, 2021, featuring Anna Kendrick and Justin Timberlake. The underlying pipeline system, PipelineX, was published at ACM SIGGRAPH DigiPro 2017 and cited as a foundational industry reference at DigiPro 2022. DreamWorks presented the system's evolution at the 2022 SIGGRAPH Pipeline Conference. The collaboration was featured on UX Planet and covered in CIO Magazine as a model for cloud-native studio infrastructure. DreamWorks SVP-level representation of the work appeared at Web Summit 2021.",
    gallery: [pipexPersonas, pipexTimeline, pipexRoadmap, pipexTrollsEmail, pipexTrollsHoliday, pipexLaunchLetter, pipexHappyHour],
  },
];

export const filterTags = ["All", "Social Media", "Executive Comms", "Campaigns", "Events"] as const;
