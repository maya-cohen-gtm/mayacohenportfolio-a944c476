import pipexTrollsHoliday from "@/assets/pipex-trolls-holiday.jpg";
import pipexCardCover from "@/assets/pipex-card-cover.webp";
import dwTrollsWorldTour from "@/assets/dw-trolls-world-tour.jpg";
import dwAzurePartnership from "@/assets/dw-azure-partnership.jpg";
import dwTrollsHolidayKeyart from "@/assets/dw-trolls-holiday-keyart.jpg";
import dwTrollsHolidayPress from "@/assets/dw-trolls-holiday-press.jpg";
import dwMovielabs2030 from "@/assets/dw-movielabs-2030.jpg";
import traceeAllurePattern from "@/assets/tracee-allure-pattern.jpg";
import becomingBookDisplay from "@/assets/becoming-book-display.jpg";
import becomingTimesup from "@/assets/becoming-timesup.webp";
import traceeMichelleInterview from "@/assets/tracee-michelle-interview.jpg";
import becomingGlamourWoty from "@/assets/becoming-glamour-woty.jpg";
import henryTourBanner from "@/assets/henry-tour-banner.gif";
import henryTamronHall from "@/assets/henry-tamron-hall.jpg";
import henryHelloSign from "@/assets/henry-hello-sign.png";
import henrySethMeyers from "@/assets/henry-seth-meyers.png";
import henryFanexpo from "@/assets/henry-fanexpo.webp";
import henrySeatedBook from "@/assets/henry-seated-book.jpg";
import henryHodaJenna from "@/assets/henry-hoda-jenna.png";
import barryFinalSeason from "@/assets/barry-final-season.jpg";
import henryTiktok24m from "@/assets/henry-tiktok-24m.png";
import henryTiktok127m from "@/assets/henry-tiktok-127m.png";
import henryTiktok6m from "@/assets/henry-tiktok-6m.png";

import barryPeacockTheater from "@/assets/barry-peacock-theater.webp";
import barryRichEisen from "@/assets/barry-rich-eisen.jpg";
import barrySundayToday from "@/assets/barry-sunday-today.png";
import humanitasBeverlyWilshire from "@/assets/humanitas-beverly-wilshire.webp";
import humanitasDga from "@/assets/humanitas-dga.jpg";
import humanitasWinners from "@/assets/humanitas-winners.webp";
import humanitasAva from "@/assets/humanitas-ava-duvernay.webp";

import type { CaseStudyTemplateKey } from "@/config/caseStudyTemplates";

const traceeMichelleCaseStudy = traceeMichelleInterview;

export type ProjectLink = {
  text: string;
  url: string;
};

export type ProjectSection = {
  label: string;
  content: string;
  items?: string[];
};

/** A gallery entry: a plain image, or an image linked to a press/source URL. */
export type GalleryItem =
  | string
  | {
      src: string;
      /** Optional external URL the image links to. */
      href?: string;
      /** Optional caption shown under the image. */
      caption?: string;
      /** Optional alt text override. */
      alt?: string;
    };


export type ProjectScope = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  brand: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  cardImage?: string;
  metric?: string;
  /** Scope & ownership badges: budget, team, stakeholder level, timeline */
  scope?: ProjectScope[];
  /** One-line business outcome shown at the top of the Impact section */
  outcome?: string;
  /** One-line framing of the challenge, shown above Context */
  problem?: string;
  /** Senior self-awareness: what I'd do differently, shown at the end */
  reflection?: string;
  context: string;
  role: string;
  impact: string;
  press?: string;
  /** Gallery images. Use an object to hyperlink an image to press/source. */
  gallery: GalleryItem[];
  video?: { url: string; title: string; caption?: string; label?: string };
  links?: ProjectLink[];
  /** Explicit section list; overrides the template when provided. */
  sections?: ProjectSection[];
  /** Page template key from src/config/caseStudyTemplates.ts (defaults to "standard"). */
  template?: CaseStudyTemplateKey;
};
export const projects: Project[] = [
  {
    id: "henry-winkler-tiktok",
    problem: "A beloved personal account with a Gen Z audience had to sell a prestige show about a hitman — without becoming an ad unit or losing the charm that built it.",
    reflection: "I'd have instrumented the account earlier. We read sentiment qualitatively from comments, which worked, but a lightweight tagging system from day one would have let me prove the press-to-short-form loop's contribution to tune-in rather than argue it anecdotally.",
    scope: [
      { label: "Ownership", value: "Owned channel lead" },
      { label: "Stakeholders", value: "Talent + HBO marketing" },
      { label: "Scope", value: "Editorial, community & press-to-social" },
      { label: "Timeline", value: "Barry S4 run + Emmy window, 2023" },
    ],
    outcome: "Turned a personal account into a 1.3M-follower owned audience HBO never had to buy access to — and made every press booking return three platform-native assets at zero incremental production cost.",
    metric: "1.3M followers · 6.1M likes · talent-led short-form",
    brand: "Henry Winkler x TikTok",
    title: "Talent-Led Short-Form for Barry's Final Season",
    description: "Running an 80-year-old icon's TikTok as an owned channel during HBO's Barry S4.",
    tag: "Social Media",
    image: barryFinalSeason,
    cardImage: barryFinalSeason,
    context: "Henry Winkler joined TikTok in November 2020 at his granddaughter's urging and — with only a handful of posts — became one of the platform's most unlikely organic successes, with his early dance videos alone reaching tens of millions of views. By the time HBO's Barry entered its fourth and final season in 2023, the account sat at 1.3M followers and 6.1M likes: a Gen Z audience that had found him through TikTok, not Happy Days or Barry. The opportunity was to convert that audience into viewers for the final season without turning a beloved personal channel into an ad unit.",
    role: "I treated the account as an owned channel with its own editorial rules rather than a distribution endpoint for HBO assets. The core call: never post a trailer cut. Everything shipped had to be something only Henry could make — grandkid dances, set moments, reactions to the show, and unguarded on-the-day footage from the press run. I set the format spine (vertical, face-forward, one idea per video, hook inside the first two seconds, caption carrying the joke so it lands muted), a cadence tied to the Sunday-night episode drop and the Emmy voting window rather than a fixed weekly slot, and a strict voice rule that the caption sounds like Henry and never like a studio. I sourced and cut short-form from press appearances we were already producing — Access Hollywood, Rich Eisen, Sunday Today — so a single booking generated a press hit and three platform-native posts. I also ran community management: replying in-voice to the top comments in the first hour, and a clear line on what we do not engage with (finale spoilers, politics, anything about the character's darker turns being read as the man).",
    impact: "The channel finished the Barry campaign as a genuine owned audience — 1.3M followers and 6.1M lifetime likes — that HBO did not have to buy access to. Repurposing press into short form meant every booking returned multiple platform-native assets at no incremental production cost. Short-form comment sentiment fed directly back into press prep: the questions fans kept asking in the comments became the beats we placed in the talking points for the next appearance. Barry Season 4 went on to average 3.4M viewers per episode and 11 Emmy nominations at the 75th Emmy Awards.",
    press: "Henry Winkler's TikTok account (@henry.winkler) has 1.3M followers and 6.1M likes. Business Insider (January 2022) reported his first six videos had accumulated 33 million views. HBO's Barry Season 4 premiered April 16, 2023 and concluded May 28, 2023, earning 11 Emmy nominations at the 75th Annual Emmy Awards.",
    links: [
      { text: "@henry.winkler on TikTok", url: "https://www.tiktok.com/@henry.winkler" },
      { text: "Business Insider on the account's organic reach", url: "https://www.businessinsider.com/henry-winkler-tiktok-viral-dances-grandchildren-2022-1" },
    ],
    sections: [
      { label: "Context", content: "Henry Winkler joined TikTok in 2020 and became one of the platform's most unlikely organic successes. By HBO's Barry Season 4 in 2023, the account sat at 1.3M followers and 6.1M likes — a Gen Z audience that found him on TikTok, not Happy Days. The job: convert that audience into finale viewers without turning a beloved personal channel into an ad unit." },
      { label: "My Role", content: "Partnered with HBO teams on creator marketing for the Barry series finale, running the account as an owned channel:", items: [
        "Adapted legacy IP into short-form content optimized for digital media — no trailer cuts, only what Henry could make.",
        "Cut every press booking into three platform-native posts: one hit, three assets, zero incremental production cost.",
        "Managed multi-million dollar brand deals and partnerships inside the channel's voice rules.",
        "Ran community management and fed comment sentiment back into press talking points.",
      ]},
      { label: "Impact", content: "Amassed massive global engagement across channels — 1.3M followers and 6.1M lifetime likes as an owned audience HBO never had to buy access to. Barry Season 4 averaged 3.4M viewers per episode and earned 11 Emmy nominations at the 75th Emmy Awards." },
      { label: "Press & Recognition", content: "@henry.winkler has 1.3M followers and 6.1M likes; Business Insider reported his first six videos drew 33 million views. Barry Season 4 ran April–May 2023 and earned 11 Emmy nominations." },
    ],

    video: {
      url: "https://www.youtube.com/embed/9LcF-AqTwkk",
      title: "Henry Winkler on the end of 'Barry' and the Bundt cake",
      label: "Interview",
      caption: "Henry Winkler on TODAY talking through the Barry series finale and setting the record straight on the Bundt cake — the kind of press moment the TikTok channel echoed in Henry's own voice.",
    },
    gallery: [henryTiktok127m, henryTiktok24m, henryTiktok6m],
  },
  {
    id: "multiplatform-memoir-launch",
    problem: "A 15-city national tour for a high-demand talent, where a single misfired press moment or logistics gap could cost the launch window.",
    reflection: "I'd have built the digital layer in parallel with the tour rather than in service of it. We captured extraordinary on-the-road content, but a pre-planned always-on content engine would have compounded the tour's reach between stops instead of only around them.",
    scope: [
      { label: "Ownership", value: "Chief of Staff, GTM lead" },
      { label: "Scope", value: "15+ cities · 20+ regional markets" },
      { label: "Stakeholders", value: "Talent, publisher, national press" },
      { label: "Timeline", value: "2023 hardcover — 2024 paperback" },
    ],
    outcome: "A New York Times Bestseller that held the list for 11 weeks and sold 66,000+ copies, earning a second commercial tour leg that extended revenue into a second consecutive year.",
    metric: "66,000+ copies sold · 11 weeks on NYT Bestsellers list",
    brand: "Henry Winkler x Celadon Books",
    title: "Multiplatform Campaign for Memoir Launch",
    description: "National launch campaign for a NYT bestselling memoir across 15+ cities.",
    tag: "Campaigns",
    image: henryTourBanner,
    cardImage: henryTamronHall,
    context: "In 2023, Emmy Award-winning actor Henry Winkler launched his memoir \"Being Henry: The Fonz...and Beyond\" through Celadon Books as a national hardcover tour, followed by a paperback tour in 2024. The campaign required coordinating a multi-city live event series across major US markets, managing a high-profile talent with significant public and media demand, and translating a publishing GTM strategy into flawless on-the-ground execution.",
    role: "As Chief of Staff to Henry Winkler, I served as the operational and strategic lead for the national GTM launch of Being Henry across 15+ US markets. I built and ran the execution infrastructure behind a multi-channel campaign spanning live experiential activations, press, digital content, and fan community integrations. I owned market-by-market launch operations across 15+ cities ensuring brand consistency and talent readiness at every activation. I developed messaging frameworks and media talking points deployed across primetime, syndicated, and podcast press appearances. I supported integrated marketing campaigns across social and digital channels, coordinating content timing and messaging across platforms to amplify key launch moments including the NYT Bestseller debut and tour stop announcements. I led PR coordination and experiential marketing integrations across 7+ fan conventions. I produced launch content including video announcements and digital activations supporting the book's consumer marketing campaign, including a live virtual appearance for Access Hollywood and a live video on X celebrating 7,000 signed memoir copies. I also contributed to brand voice and editorial positioning for supporting campaign materials.",
    impact: "Being Henry debuted as a New York Times Bestseller, held the list for 11 weeks, and sold 66,000+ copies — including 17,000 in its first week on sale. The national tour spanned 15+ cities and 20+ regional markets with multiple sold-out stops including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Project managed 7+ fan conventions and 15 speaker appearances reaching 10,000+ attendees. Press campaign spanned primetime, syndicated, and podcast appearances with direct producer responsibilities. The paperback release in 2024 generated a full second tour leg, anchoring the book's sustained market presence across two consecutive years.",
    press: "Being Henry: The Fonz...and Beyond debuted as a New York Times Bestseller through Celadon Books in 2023 and spent 11 weeks on the list. The national tour sold out multiple venues including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Press appearances spanned primetime and syndicated television and major podcast platforms. The 2024 paperback release generated a second national tour leg, extending the campaign's market reach into a second consecutive year. Fan convention integrations reached audiences across 20+ regional markets.",
    links: [{ text: "live video on X", url: "https://x.com/hwinkler4real/status/1704224861047156996" }],
    sections: [
      { label: "Context", content: "In 2023, Emmy Award-winning actor Henry Winkler launched his memoir \"Being Henry: The Fonz...and Beyond\" through Celadon Books as a national hardcover tour, followed by a paperback tour in 2024. The campaign required coordinating a multi-city live event series across major US markets, managing a high-profile talent with significant public and media demand, and translating a publishing GTM strategy into flawless on-the-ground execution." },
      { label: "My Role", content: "As Chief of Staff to Henry Winkler, I served as the operational and strategic lead for the national GTM launch of Being Henry across 15+ US markets. I built and ran the execution infrastructure behind a multi-channel campaign spanning live experiential activations, press, digital content, and fan community integrations. I owned market-by-market launch operations across 15+ cities ensuring brand consistency and talent readiness at every activation. I developed messaging frameworks and media talking points deployed across primetime, syndicated, and podcast press appearances. I supported integrated marketing campaigns across social and digital channels, coordinating content timing and messaging across platforms to amplify key launch moments including the NYT Bestseller debut and tour stop announcements. I led PR coordination and experiential marketing integrations across 7+ fan conventions. I produced launch content including video announcements and digital activations supporting the book's consumer marketing campaign, including a live virtual appearance for Access Hollywood and a live video on X celebrating 7,000 signed memoir copies. I also contributed to brand voice and editorial positioning for supporting campaign materials." },
      { label: "Judgment Calls", content: "A memoir tour puts personal material into rooms you do not control. Before the campaign went live I mapped the sensitive territory in the book — family, dyslexia, decades of industry relationships — and built tiered talking points so Henry always had a warm, in-voice answer ready rather than a deflection. I pre-cleared boundaries with producers, sat in on live segments to catch questions heading somewhere unplanned, and made real-time calls about what to take and what to redirect. Nothing from the two-year run required a correction or a walk-back." },
      { label: "Impact", content: "Being Henry debuted as a New York Times Bestseller, held the list for 11 weeks, and sold 66,000+ copies — including 17,000 in its first week on sale. The national tour spanned 15+ cities and 20+ regional markets with multiple sold-out stops including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Project managed 7+ fan conventions and 15 speaker appearances reaching 10,000+ attendees. Press campaign spanned primetime, syndicated, and podcast appearances with direct producer responsibilities. The paperback release in 2024 generated a full second tour leg, anchoring the book's sustained market presence across two consecutive years." },
      { label: "Press & Recognition", content: "Being Henry: The Fonz...and Beyond debuted as a New York Times Bestseller through Celadon Books in 2023 and spent 11 weeks on the list. The national tour sold out multiple venues including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Press appearances spanned primetime and syndicated television and major podcast platforms. The 2024 paperback release generated a second national tour leg, extending the campaign's market reach into a second consecutive year. Fan convention integrations reached audiences across 20+ regional markets." },
    ],
    gallery: [henryHelloSign, henrySethMeyers, henryFanexpo, henrySeatedBook, henryHodaJenna],
  },
  {
    id: "becoming-memoir-launch",
    problem: "Two culturally sensitive campaigns needed A-list voices activated credibly and fast, with consistent messaging across partners we did not directly control.",
    reflection: "I'd have set shared measurement with partners up front. Briefing and approvals were tight, but each partner reported differently, so proving aggregate campaign lift took longer than it should have.",
    scope: [
      { label: "Ownership", value: "Influencer & partnership lead" },
      { label: "Stakeholders", value: "SAG-AFTRA C-suite + A-list talent" },
      { label: "Scope", value: "Two national product launches" },
      { label: "Timeline", value: "2018 campaign cycle" },
    ],
    outcome: "$21M raised in 60 days and 2M+ units sold across two national launches, with a documented launch playbook left behind for future teams.",
    metric: "$21M in 60 days · 5M+ views on keynote content",
    brand: "Joy Mill Entertainment (ABC Signature)",
    title: "Influencer & Partnership Campaigns",
    description: "Influencer outreach and partnership management behind two high-impact GTM campaigns.",
    tag: "Campaigns",
    image: traceeMichelleCaseStudy,
    cardImage: traceeMichelleCaseStudy,
    context: "In 2018, Michelle Obama launched Becoming, a New York Times Bestseller that held the list for 100 weeks and became one of the best-selling memoirs in publishing history. In the same window, the #MeToo movement launched the Time's Up Legal Defense Fund. Both campaigns needed high-profile voices — talent, creators, and cultural figures like Tracee Ellis Ross — brought in credibly and at speed, with the briefing, approval, and relationship infrastructure to keep the messaging consistent across every channel they touched.",
    role: "Leading creator and influencer marketing for Joy Mill Entertainment (ABC Signature), I led influencer outreach, identification, and partnership management for both GTM campaigns. I led executive communications, including keynote content for the Glamour Women of the Year Summit. I built the influencer briefing packets, ran content approvals, and owned ongoing relations with talent and their teams so that each partner had a clear point of view, on-brand assets, and a channel plan before anything went live. I ran channel monitoring for growth, trends, and insights across all owned accounts and adjusted the social strategy accordingly, and I led strategy development for every account — covering diversity and inclusion, accessibility, audience engagement, and moderation guidelines. In parallel I led messaging and the launch playbook for two national product launches, coordinating paid, earned, and owned channels and documenting a repeatable launch process for future teams.",
    impact: "Influencer briefings, content approvals, and ongoing relations delivered 5M+ social views on the Glamour keynote content. The Time's Up Legal Defense Fund raised $21M in 60 days. Becoming spent 100 weeks on the New York Times Bestsellers list. Across the same period, co-marketing campaigns with third-party studios and networks doubled our social following in six months, and the two national product launches I led sold 2M+ units in four months.",
    press: "Becoming spent 100 weeks on the New York Times Bestsellers list and sold 2 million copies in its first 15 days. The Becoming tour sold out venues nationwide, including 17,500 seats at the LA Forum. Tracee Ellis Ross's Glamour Women of the Year speech received national coverage from The Washington Post, HuffPost, and Upworthy, leading to her TED2018 invitation. The Time's Up Legal Defense Fund raised $21 million within 60 days, supporting over 1,700 women across 60+ industries.",
    links: [
      { text: "W Magazine — Time's Up: the all-black Golden Globes red carpet", url: "https://www.wmagazine.com/story/times-up-wear-black-golden-globes-reese-witherspoon-natalie-portman" },
    ],
    sections: [
      { label: "Context", content: "In 2018, Michelle Obama launched Becoming, a New York Times Bestseller that held the list for 100 weeks. In the same window, the #MeToo movement launched the Time's Up Legal Defense Fund. Both campaigns needed high-profile voices — talent, creators, and cultural figures like Tracee Ellis Ross — brought in credibly and at speed, with the briefing, approval, and relationship infrastructure to keep messaging consistent across every channel they touched." },
      { label: "My Role", content: "I led influencer outreach, identification, and partnership management across both campaigns:", items: [
        "Identified and recruited influencers and talent partners aligned with each campaign's brand equity.",
        "Led executive communications, including keynote content for the Glamour Women of the Year Summit.",
        "Collaborated with C-suite leadership at SAG-AFTRA alongside Tracee Ellis Ross, Natalie Portman, Tessa Thompson, Brie Larson, and Laura Dern.",
        "Built influencer briefings, ran content approvals, and owned day-to-day relations with partners and their teams.",
        "Ran channel monitoring for growth, trends, and insights, adjusting social strategy accordingly.",
        "Led strategy for all social accounts, covering diversity and inclusion, accessibility, engagement, and moderation guidelines.",
        "Led messaging and the launch playbook for two national product launches across paid, earned, and owned channels.",
      ]},
      { label: "Impact", content: "5M+ social views on the Glamour keynote content. $21M raised for the Time's Up Legal Defense Fund in 60 days. Becoming held the NYT Bestsellers list for 100 weeks, and the tour sold out arenas nationwide including 17,500 seats at the Kia Forum in Los Angeles. Co-marketing campaigns with third-party studios and networks doubled our following in six months, and the two national product launches — including PATTERN Beauty's haircare rollout — sold 2M+ units in four months, with a documented, repeatable launch process left behind for future teams." },
      { label: "Press & Recognition", content: "Becoming spent 100 weeks on the New York Times Bestsellers list and sold 2 million copies in its first 15 days. The Becoming tour sold out venues nationwide, including 17,500 seats at the Kia Forum in Los Angeles. Tracee Ellis Ross's Glamour Women of the Year speech received national coverage from The Washington Post, HuffPost, and Upworthy, leading to her TED2018 invitation. The Time's Up Legal Defense Fund raised $21 million within 60 days, supporting over 1,700 women across 60+ industries." },
    ],
    video: {
      url: "https://www.youtube.com/embed/boB9modnMYQ",
      title: "Michelle Obama & Tracee Ellis Ross in Conversation at The 2018 United State of Women Summit",
      label: "In Conversation",
      caption: "Michelle Obama and Tracee Ellis Ross at the 2018 United State of Women Summit — the kind of talent-plus-principal moment the influencer and partnership program was built to create and amplify.",
    },
    gallery: [
      becomingBookDisplay,
      traceeMichelleInterview,
      { src: becomingTimesup, href: "https://www.wmagazine.com/story/times-up-wear-black-golden-globes-reese-witherspoon-natalie-portman", caption: "W Magazine: Time's Up and the all-black Golden Globes red carpet", alt: "Time's Up Golden Globes red carpet" },
      { src: traceeAllurePattern, href: "https://www.allure.com/story/tracee-ellis-ross-pattern-beauty-hair-care-line", caption: "Allure: Tracee Ellis Ross launches PATTERN Beauty", alt: "Tracee Ellis Ross PATTERN Beauty press" },
      becomingGlamourWoty,
    ],

  },

  {
    id: "humanitas-awards-show",
    problem: "A live Hollywood awards show required floor production and real-time social coverage at once, with no margin for a delayed or off-brand post.",
    reflection: "I'd have staffed a second person for live coverage. Shooting, captioning, and publishing solo from the step and repeat worked, but it capped how much we could cover — a two-person floor team would have doubled output at marginal cost.",
    scope: [
      { label: "Ownership", value: "Marketing Manager" },
      { label: "Scope", value: "300–400 content creators" },
      { label: "Stakeholders", value: "Studio & network executives" },
      { label: "Timeline", value: "Annual ceremony cycle" },
    ],
    outcome: "Grew the organization's social following by 9,000+ and helped convert that visibility into a $100,000 writers' fund, while delivering the awards activation end to end.",
    metric: "+9,000 followers · $100,000 writers' fund",
    brand: "The Humanitas Prize",
    title: "Specialty Social Media Management",
    description: "Owned the live social feed for a Hollywood awards ceremony, in real time from the floor.",
    tag: "Social Media",
    image: humanitasBeverlyWilshire,
    context: "The Humanitas Prize is one of Hollywood's most respected awards ceremonies, described by Barbara Walters as what the Nobel Prize is to literature and the Pulitzer Prize is to journalism. The Annual Humanitas Prizes Awards Show and Toast recognized film and television writers whose work affirms the human condition, drawing industry attendees spanning network executives, writers, and producers from every major studio. The ceremony required a production team capable of managing both the high-visibility public-facing elements of a red carpet awards show and the behind-the-scenes operational complexity of a live event with real-time technical demands.",
    role: "As Marketing Manager, I owned technical, creative, and operational workstreams across the full event lifecycle. On the technical side, I drove keyword SEO with SEMrush and Ahrefs, optimized KPIs with Meta Analytics dashboards, and translated data insights into strategic recommendations for the Brand Marketing team. Creatively, I crafted and aligned messaging across all channels, designed assets in Adobe Photoshop and Canva, and covered the awards ceremony live on X (Twitter), including captioning and photography at the step and repeat. Operationally, I coordinated 300-400 content creators ranging from up-and-coming influencers to established screenwriters (Black-ish, This Is Us), built and managed multi-platform content calendars in Excel under tight timelines, and project managed social media across all channels including content creation, posting, and workflow automation in Hootsuite.",
    impact: "Grew the organization's social following by 9,000+ and supported the launch of a $100,000 fund for television and film writers. Coordinated 300-400 content creators and produced a full-scale Hollywood awards ceremony activation end to end, managing the intersection of live event operations and real-time digital brand presence simultaneously. SEO and analytics work fed directly into Brand Marketing strategy, while workflow automation kept a multi-platform calendar on schedule through the live show. The dual responsibility of floor production and live social coverage is a skill set directly transferable to any brand activation requiring both physical and digital execution.",
    press: "Annual Humanitas Prizes Awards Show and Toast, Four Seasons Beverly Hills. Winning projects at the ceremony included Hidden Figures, Hacksaw Ridge, Ava DuVernay's 13th, Black-ish, and This Is Us. The Humanitas Prize has been covered annually by Variety, The Hollywood Reporter, Los Angeles Times, Deadline, and The Wrap. The organization has dispensed over 1.8 million dollars in prize money to television and film writers since 1974.",
    gallery: [humanitasAva, humanitasDga, humanitasWinners],
  },
  {
    id: "pipex-virtual-launch",
    problem: "2020 closed theaters and scattered a 3,000-person studio to home offices. The films still had to ship — and the infrastructure that would carry the studio into the rebound had to launch at the same time.",
    reflection: "I'd have led with the business story, not the platform. Engagement climbed fastest once employees saw the transformation tied to films they were proud of — that narrative should have opened the program rather than emerging midway through it.",
    scope: [
      { label: "Ownership", value: "Business Communications & GTM lead" },
      { label: "Audience", value: "3,000+ global employees" },
      { label: "Scope", value: "9 cross-functional teams" },
      { label: "Timeline", value: "2020 shutdown — 2022 rebound" },
    ],
    outcome: "Kept production momentum through the industry's worst disruption: Trolls: Holiday in Harmony captured 2.15M first-week viewers with zero box office available, while PipelineX launched the cloud infrastructure the studio scaled on through the 2021–2022 theatrical rebound.",
    metric: "2.15M first-week viewers · 3,000+ employees onboarded to PipelineX",
    brand: "DreamWorks Animation",
    title: "Trolls: Holiday in Harmony — PipelineX",
    description: "Two simultaneous launches in 2020: an alternative-distribution Trolls special and the studio's first cloud production pipeline.",
    tag: "Executive Comms",
    image: pipexTrollsHoliday,
    cardImage: pipexCardCover,
    context: "In 2020, theatrical revenue went to zero and DreamWorks Animation moved 3,000+ employees remote overnight. Two launches had to land at once: Trolls: Holiday in Harmony into NBCUniversal's broadcast and streaming pivot, and PipelineX — the studio's first cloud-native production pipeline. One protected near-term revenue; the other protected the studio's ability to scale when theaters reopened.",
    role: "I ran go-to-market and business communications across both launches, coordinating 9 cross-functional teams under live production constraints with zero lapse in delivery.",
    impact: "1.84M live views and 2.15M first-week viewers for Trolls: Holiday in Harmony — alternative-distribution revenue captured in a quarter with no box office. PipelineX launched enterprise-wide across 3,000+ employees, modernizing NBCUniversal's studio division assets and giving the studio the throughput to capture the 2021–2022 content rebound.",
    sections: [
      { label: "Context", content: "2020: theatrical revenue at zero, 3,000+ employees remote overnight. Two launches had to land simultaneously — the flagship Trolls IP into NBCUniversal's streaming and broadcast pivot, and PipelineX, the studio's first cloud-native production pipeline." },
      { label: "My Role", content: "GTM and business communications lead across both launches — 9 cross-functional teams, live studio constraints, zero lapse in delivery.", items: [
        "Mitigated remote-work operational risk by launching the flagship Trolls IP onto the studio's first cloud pipeline.",
        "Orchestrated simultaneous GTM for the special and the platform, accelerating studio time-to-market during the theatrical slump.",
        "Produced business communications that protected technology ROI and drove pipeline adoption across 3,000+ employees.",
        "Project managed content creation and product development across 9 cross-functional teams under live studio constraints.",
      ]},
      { label: "Impact", content: "Business outcomes across both launches:", items: [
        "+1.84M live views and +2.15M first-week viewers for Trolls: Holiday in Harmony, offsetting zero-dollar box office.",
        "Enterprise-wide commercial launch of DreamWorks Technology (PipelineX), modernizing NBCUniversal's studio division assets.",
        "Secured business continuity and the infrastructure behind the studio's 2021–2022 content rebound.",
        "Cloud-first franchise strategy carried into Trolls World Tour's digital-first release: $95M+ in rental fees in three weeks.",
      ]},
    ],

    video: {
      url: "https://www.youtube.com/embed/okb_--K7p14",
      title: "Trolls Holiday in Harmony — Official Trailer",
      caption: "Trolls Holiday in Harmony, delivered on the cloud-native PipelineX pipeline.",
    },
    gallery: [
      { src: dwTrollsWorldTour, href: "https://variety.com/2021/film/news/dreamworks-trolls-world-tour-croods-new-age-1234946338/", caption: "Variety: Trolls World Tour's record-breaking digital-first launch", alt: "Trolls World Tour key art" },
      { src: dwAzurePartnership, href: "https://news.microsoft.com/source/2020/08/21/universal-filmed-entertainment-group-and-microsoft-azure-announce-partnership-to-accelerate-live-action-and-animation-productions/", caption: "Universal Filmed Entertainment Group x Microsoft Azure cloud partnership", alt: "DreamWorks Animation logo" },
      { src: dwTrollsHolidayKeyart, href: "https://www.universalpicturesathome.com/movies/trolls-holiday-in-harmony", caption: "Distribution: Trolls: Holiday in Harmony", alt: "Trolls: Holiday in Harmony key art" },
      { src: dwTrollsHolidayPress, href: "https://deadline.com/2021/10/anna-kendrick-justin-timberlake-kenan-thompson-rachel-bloom-voice-cast-trolls-holiday-special-nbc-1234858250/", caption: "Deadline: voice cast announcement for the NBC holiday special", alt: "Trolls: Holiday in Harmony still" },
      { src: dwMovielabs2030, href: "https://movielabs.com/the-2030-vision/", caption: "The MovieLabs 2030 Vision — the cloud-native production standard PipelineX was built toward", alt: "MovieLabs 2030 Vision cloud production diagram" },
    ],

  },
];

export const filterTags = ["All", "Executive Comms", "Social Media", "Campaigns"] as const;

