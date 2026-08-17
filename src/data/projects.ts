import pipexPersonas from "@/assets/pipex-personas.png";
import pipexTimeline from "@/assets/pipex-timeline.png";
import pipexRoadmap from "@/assets/pipex-roadmap.png";
import pipexTrollsEmail from "@/assets/pipex-trolls-email.png";
import pipexLaunchLetter from "@/assets/pipex-launch-letter.png";
import pipexHappyHour from "@/assets/pipex-happy-hour.png";
import pipexTrollsHoliday from "@/assets/pipex-trolls-holiday.jpg";
import pipexCardCover from "@/assets/pipex-card-cover.webp";
import patternMacysHero from "@/assets/pattern-beauty-hero.png";
import becomingBookDisplay from "@/assets/becoming-book-display.jpg";
import becomingTimesup from "@/assets/becoming-timesup.webp";
import traceeMichelleInterview from "@/assets/tracee-michelle-interview.jpg";
import becomingGlamourTracee from "@/assets/becoming-glamour-tracee.jpg";
import patternProducts from "@/assets/pattern-products.png";
import traceePatternBeauty from "@/assets/tracee-pattern-beauty.jpg";
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
  metric?: string;
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
    metric: "NYT Bestseller on launch · 15+ cities",
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
    sections: [
      { label: "Context", content: "In 2023, Emmy Award-winning actor Henry Winkler launched his memoir \"Being Henry: The Fonz...and Beyond\" through Celadon Books as a national hardcover tour, followed by a paperback tour in 2024. The campaign required coordinating a multi-city live event series across major US markets, managing a high-profile talent with significant public and media demand, and translating a publishing GTM strategy into flawless on-the-ground execution." },
      { label: "My Role", content: "As Chief of Staff to Henry Winkler, I served as the operational and strategic lead for the national GTM launch of Being Henry across 15+ US markets. I built and ran the execution infrastructure behind a multi-channel campaign spanning live experiential activations, press, digital content, and fan community integrations. I owned market-by-market launch operations across 15+ cities ensuring brand consistency and talent readiness at every activation. I developed messaging frameworks and media talking points deployed across primetime, syndicated, and podcast press appearances. I supported integrated marketing campaigns across social and digital channels, coordinating content timing and messaging across platforms to amplify key launch moments including the NYT Bestseller debut and tour stop announcements. I led PR coordination and experiential marketing integrations across 7+ fan conventions. I produced launch content including video announcements and digital activations supporting the book's consumer marketing campaign, including a live virtual appearance for Access Hollywood and a live video on X celebrating 7,000 signed memoir copies. I also contributed to brand voice and editorial positioning for supporting campaign materials." },
      { label: "Judgment Calls", content: "A memoir tour puts personal material into rooms you do not control. Before the campaign went live I mapped the sensitive territory in the book — family, dyslexia, decades of industry relationships — and built tiered talking points so Henry always had a warm, in-voice answer ready rather than a deflection. I pre-cleared boundaries with producers, sat in on live segments to catch questions heading somewhere unplanned, and made real-time calls about what to take and what to redirect. Nothing from the two-year run required a correction or a walk-back." },
      { label: "Impact", content: "Being Henry debuted as a New York Times Bestseller on launch. The national tour spanned 15+ cities and 20+ regional markets with multiple sold-out stops including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Project managed 7+ fan conventions and 15 speaker appearances reaching 10,000+ attendees. Press campaign spanned primetime, syndicated, and podcast appearances with direct producer responsibilities. The paperback release in 2024 generated a full second tour leg, anchoring the book's sustained market presence across two consecutive years." },
      { label: "Press & Recognition", content: "Being Henry: The Fonz...and Beyond debuted as a New York Times Bestseller through Celadon Books in 2023. The national tour sold out multiple venues including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Press appearances spanned primetime and syndicated television and major podcast platforms. The 2024 paperback release generated a second national tour leg, extending the campaign's market reach into a second consecutive year. Fan convention integrations reached audiences across 20+ regional markets." },
    ],
    gallery: [henryHelloSign, henrySethMeyers, henryFanexpo, henrySeatedBook, henryHodaJenna],
  },
  {
    id: "becoming-memoir-launch",
    metric: "$21M raised in 60 days · 14M copies sold",
    brand: "Tracee Ellis Ross",
    title: "Becoming & PATTERN Beauty GTM",
    description: "Messaging and media training that supported a cultural book launch and a beauty brand debut.",
    tag: "Executive Comms",
    image: patternMacysHero,
    context: "In 2018, Michelle Obama launched Becoming, a #1 New York Times Bestseller and one of the best-selling memoirs in publishing history. Tracee Ellis Ross, coming off a viral Glamour Women of the Year speech, was selected as a key press figure in the Becoming campaign, including a high-profile New York Times interview with Obama herself. In 2019, Tracee launched PATTERN Beauty, a curly haircare line built around Tracee's personal brand. To prepare for this launch, Ross needed a strategic creative partner to help shape her approach to the material.",
    role: "Leading executive communications for Tracee Ellis Ross, I built the positioning and messaging frameworks that anchored her role as a key press figure in the GTM campaign for one of the most culturally significant book launches of the decade: Becoming by Michelle Obama. This included selecting and synthesizing thematic content from the memoir, structuring talking points, and developing media training materials used directly in her New York Times interview with Michelle Obama. I also advised on strategy and content for her Glamour Women of the Year speech, which went viral and led directly to her TED2018 invitation. Working sessions took place across Los Angeles including on the set of Black-ish. In parallel I supported the Time's Up movement at the C-suite level, converting live executive meeting notes into messaging and positioning frameworks for the GTM launch of their legal defense fund.",
    impact: "Built and delivered the messaging frameworks, talking points, and media training materials that directly powered Tracee Ellis Ross's press appearances in the Becoming campaign, including her New York Times interview with Michelle Obama. Contributed to the brand voice and positioning work that preceded and enabled the 2019 PATTERN Beauty GTM launch — a cult-favorite curly haircare brand that achieved rapid success by selling out within hours of launch at Ulta Beauty, rapidly expanding to over 50 products and 11+ retailers. Supported Time's Up C-suite messaging that mobilized $21M in 60 days. Tracee Ellis Ross's Glamour speech went viral and led to TED2018. The Becoming LA Forum stop sold out 17,500 seats. Becoming sold 14M copies worldwide.",
    press: "Becoming sold 2 million copies in its first 15 days and 14 million worldwide. The Becoming tour sold out venues nationwide. Tracee Ellis Ross's Glamour Women of the Year speech received national coverage from The Washington Post, HuffPost, and Upworthy, directly leading to her TED2018 invitation. The Time's Up Legal Defense Fund raised $21 million within 60 days, supporting over 1,700 women across 60+ industries. PATTERN Beauty launched in 2019 as the next expression of the brand identity and positioning work developed across this period.",
    gallery: [becomingGlamourTracee, becomingBookDisplay, patternProducts, becomingTimesup, traceeMichelleInterview, traceePatternBeauty],
  },
  {
    id: "hbo-barry-emmys",
    metric: "3.4M viewers/episode · 11 Emmy noms",
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
    sections: [
      { label: "Context", content: "HBO's Barry, the critically acclaimed dark comedy starring Bill Hader and Henry Winkler, entered its fourth and final season in 2023 as one of television's most decorated comedies. The season finale press and awards campaign ran parallel to the 75th Annual Emmy Awards cycle, requiring a coordinated multi-platform promotional push to close out the show's legacy run. The GTM strategy was built around intimacy, audience closeness, and deep relationship-driven press rather than a broad spray approach, honoring both the series and Henry Winkler's decades-long legacy in television." },
      { label: "My Role", content: "As Chief of Staff to Henry Winkler, I supported his full Barry Season 4 press and Emmy Awards campaign across all four tour formats. I managed scheduling and logistics across primetime, syndicated, podcast, and speaker series appearances, coordinated press and PR outreach, developed media training materials and talking points for Winkler's on-camera and on-stage appearances, and created social content supporting the campaign across platforms. A core part of my role was ensuring every press touchpoint upheld the standard of care that both the series and Winkler's reputation deserved, selecting appearances and framing media training materials to reflect the intimacy and authenticity that defined the show's relationship with its audience. I also produced a live virtual appearance for Access Hollywood in support of the Barry campaign. Led as single point-of-contact between networks (HBO, ABC, NBC), Ads and Sales, and talent representatives (CAA, Management 360) to enable the Barry S4 Emmy campaign." },
      { label: "Owned Channels", content: "Beyond press bookings, I ran the channel-side of the campaign: cutting platform-native versions of each press moment for Instagram, X, and TikTok, timing posts against episode drops and the Emmy voting window, and monitoring comments and mentions so the fan response could shape what we posted next. The live X and Access Hollywood appearances were planned as owned-channel moments first and press hits second." },
      { label: "Impact", content: "Barry Season 4 averaged 3.4 million viewers per episode across linear and streaming, with the Season 4 premiere reaching 3.1 million viewers, a 10% increase over the Season 3 premiere at the same point in time. Delayed viewing on streaming drove a 289% increase over premiere night numbers. The season successfully closed out one of HBO's most critically acclaimed series with 11 Emmy nominations at the 75th Annual Emmy Awards, spanning every major media format simultaneously." },
      { label: "Press & Recognition", content: "HBO Barry Season 4, 2023. 75th Annual Emmy Awards, 11 nominations including Outstanding Comedy Series and Outstanding Supporting Actor in a Comedy Series for Henry Winkler. Season 4 averaged 3.4 million viewers per episode across platforms, per Warner Bros. Discovery and Nielsen. Season 4 premiere viewership up 10% over Season 3 premiere at same point in time. Barry accumulated 9 Emmy wins across its first three seasons prior to its final run. Rich Eisen Show, Sunday Today with Willie Geist, multi-platform press campaign spanning primetime, syndicated, podcast, and speaker series formats." },
    ],
    gallery: [barryEmmys75, barryPeacockTheater, barryRichEisen, barrySundayToday],
  },
  {
    id: "humanitas-prize-42",
    metric: "Live social from the floor · 42nd annual",
    brand: "The Humanitas Prize",
    title: "42nd Humanitas Awards",
    description: "Owned the live social feed for a Hollywood awards ceremony, in real time from the floor.",
    tag: "Social Media",
    image: humanitasBeverlyWilshire,
    context: "The Humanitas Prize is one of Hollywood's most respected awards ceremonies, described by Barbara Walters as what the Nobel Prize is to literature and the Pulitzer Prize is to journalism. The 42nd Annual Humanitas Prizes Awards Show and Toast recognized film and television writers whose work affirms the human condition, drawing industry attendees spanning network executives, writers, and producers from every major studio. The ceremony required a production team capable of managing both the high-visibility public-facing elements of a red carpet awards show and the behind-the-scenes operational complexity of a live event with real-time technical demands.",
    role: "As Integrated Marketing Manager, I owned multiple workstreams simultaneously across the full event lifecycle. Pre-event I managed social media strategy, content creation, copy, and scheduling across platforms. During the live event I coordinated directly with vendors on the ground, resolved live technical and IT issues in real time, executed live social media coverage on X, and contributed to red carpet photography at the step and repeat.",
    impact: "Successfully produced a full-scale Hollywood awards ceremony activation end to end, managing the intersection of live event operations and real-time digital brand presence simultaneously. The dual responsibility of floor production and live social coverage is a skill set directly transferable to any brand activation requiring both physical and digital execution.",
    press: "42nd Annual Humanitas Prizes Awards Show and Toast, Four Seasons Beverly Hills. Winning projects at the ceremony included Hidden Figures, Hacksaw Ridge, Ava DuVernay's 13th, Black-ish, and This Is Us. The Humanitas Prize has been covered annually by Variety, The Hollywood Reporter, Los Angeles Times, Deadline, and The Wrap. The organization has dispensed over 1.8 million dollars in prize money to television and film writers since 1974.",
    gallery: [humanitasDga, humanitasWinners],
  },
  {
    id: "pipex-virtual-launch",
    metric: "22,000+ newsletter downloads · 80%+ tool adoption",
    brand: "DreamWorks Animation",
    title: "Marketing Lead — PipelineX (Cloud Platform)",
    description: "Internal marketing and employee communications for a cloud-native production platform.",
    tag: "Campaigns",
    image: pipexTrollsHoliday,
    cardImage: pipexCardCover,
    context: "DreamWorks Animation's PipelineX was a proprietary cloud-native production infrastructure that powered the studio's first fully cloud-based productions. As the platform scaled across the organization, the launch team needed internal marketing and employee communications that could drive adoption, modernize the corporate web presence, and keep 3,000+ global employees aligned on a complex transformation.",
    role: "As Marketing Lead for PipelineX, I ran internal communications and employee engagement campaigns that turned a technical infrastructure rollout into a studio-wide narrative.",
    impact: "Drove 22,000+ newsletter downloads and elevated company narratives through employee recognition and knowledge sharing. Modernized 70+ corporate web pages. Generated 3x the industry average in actionable ideas through the studio's first crowdsourcing campaign. Achieved 80%+ adoption for the internal social collaboration pilot among 3,000+ employees. Drove over 50% of infrastructure data center strategic priorities through the OKR program. Supported leadership in scaling a global program from $11B to $40B while unifying tools and resources across Marketing teams.",
    sections: [
      { label: "Context", content: "DreamWorks Animation's PipelineX was a proprietary cloud-native production infrastructure that powered the studio's first fully cloud-based productions. As the platform scaled across the organization, the launch team needed internal marketing and employee communications that could drive adoption, modernize the corporate web presence, and keep 3,000+ global employees aligned on a complex transformation." },
      { label: "My Role", content: "As Marketing Lead for PipelineX, I ran internal communications and employee engagement campaigns that turned a technical infrastructure rollout into a studio-wide narrative.", items: [
        "Produced internal newsletter and weekly email campaigns for 3,000+ employees; drove 22,000+ newsletter downloads and elevated company narratives through employee recognition and knowledge sharing.",
        "Project managed the corporate website redesign, modernizing 70+ web pages, and led the first crowdsourcing campaign, generating 3x the industry average in actionable ideas.",
        "Implemented an internal social collaboration pilot, achieving over 80% adoption among 3,000+ employees.",
        "Managed the Objectives and Key Results (OKR) program, driving over 50% of infrastructure data center strategic priorities.",
        "Delivered communications and operations support for leadership, helping scale a global program from $11B to $40B with 3,000+ employees. Unified all tools & resources, and solved cross-functional workflow challenges for all Marketing teams.",
        "Identified and initiated cross-functional collaboration opportunities internally and with external partners and platforms.",
      ]},
      { label: "Impact", content: "Drove 22,000+ newsletter downloads and elevated company narratives through employee recognition and knowledge sharing. Modernized 70+ corporate web pages. Generated 3x the industry average in actionable ideas through the studio's first crowdsourcing campaign. Achieved 80%+ adoption for the internal social collaboration pilot among 3,000+ employees. Drove over 50% of infrastructure data center strategic priorities through the OKR program. Supported leadership in scaling a global program from $11B to $40B while unifying tools and resources across Marketing teams." },
    ],
    gallery: [pipexPersonas, pipexTimeline, pipexRoadmap, pipexTrollsEmail, pipexTrollsHoliday, pipexLaunchLetter, pipexHappyHour],
  },
];

export const filterTags = ["All", "Executive Comms", "Social Media", "Campaigns"] as const;
