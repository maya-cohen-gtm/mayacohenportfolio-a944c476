import pipexPersonas from "@/assets/pipex-personas.png";
import pipexTimeline from "@/assets/pipex-timeline.png";
import pipexRoadmap from "@/assets/pipex-roadmap.png";
import pipexTrollsEmail from "@/assets/pipex-trolls-email.png";
import pipexLaunchLetter from "@/assets/pipex-launch-letter.png";
import pipexHappyHour from "@/assets/pipex-happy-hour.png";
import pipexTrollsHoliday from "@/assets/pipex-trolls-holiday.jpg";
import pipexCardCover from "@/assets/pipex-card-cover.webp";
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
    id: "henry-winkler-tiktok",
    metric: "1.3M followers · 6.1M likes · talent-led short form",
    brand: "Henry Winkler x TikTok",
    title: "Talent-Led Short Form for Barry's Final Season",
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
      { label: "Context", content: "Henry Winkler joined TikTok in November 2020 at his granddaughter's urging and — with only a handful of posts — became one of the platform's most unlikely organic successes, with his early dance videos alone reaching tens of millions of views. By the time HBO's Barry entered its fourth and final season in 2023, the account sat at 1.3M followers and 6.1M likes: a Gen Z audience that had found him through TikTok, not Happy Days or Barry. The opportunity was to convert that audience into viewers for the final season without turning a beloved personal channel into an ad unit." },
      { label: "My Role", content: "I treated the account as an owned channel with its own editorial rules rather than a distribution endpoint for HBO assets. The core call: never post a trailer cut. Everything shipped had to be something only Henry could make — grandkid dances, set moments, reactions to the show, and unguarded on-the-day footage from the press run." },
      { label: "Format & Cadence", content: "The operating rules that made the channel repeatable:", items: [
        "Vertical, face-forward, one idea per video; hook inside the first two seconds.",
        "Caption carries the joke so the video lands with sound off.",
        "Cadence tied to the Sunday-night episode drop and the Emmy voting window, not a fixed weekly slot.",
        "Every press booking cut into three platform-native posts — one press hit, three assets, no incremental production cost.",
        "Voice rule: the caption sounds like Henry, never like a studio.",
      ]},
      { label: "Judgment Calls", content: "A warm personal account promoting a show about a hitman is a tonal minefield. I kept the channel's charm intact by refusing studio-supplied promo cuts and keeping the darker Barry material in press, not on TikTok. Community management ran on a clear line: reply in-voice to top comments in the first hour, never engage on finale spoilers, politics, or comments conflating the character's violence with the man." },
      { label: "Impact", content: "The channel finished the Barry campaign as a genuine owned audience — 1.3M followers and 6.1M lifetime likes — that HBO did not have to buy access to. Short-form comment sentiment fed directly back into press prep: the questions fans kept asking became the beats placed in talking points for the next appearance. Barry Season 4 averaged 3.4M viewers per episode and earned 11 Emmy nominations at the 75th Emmy Awards." },
      { label: "Press & Recognition", content: "Henry Winkler's TikTok account (@henry.winkler) has 1.3M followers and 6.1M likes. Business Insider (January 2022) reported his first six videos had accumulated 33 million views. HBO's Barry Season 4 premiered April 16, 2023 and concluded May 28, 2023, earning 11 Emmy nominations at the 75th Annual Emmy Awards." },
    ],
    gallery: [henryTiktok127m, henryTiktok24m, henryTiktok6m],
  },
  {
    id: "being-henry-book-tour",
    metric: "11 weeks on NYT Bestsellers list · 15+ cities",
    brand: "Henry Winkler x Celadon Books",
    title: "Being Henry Book Tour",
    description: "National launch campaign for a NYT bestselling memoir across 15+ cities.",
    tag: "Campaigns",
    image: henryTourBanner,
    cardImage: henryTamronHall,
    context: "In 2023, Emmy Award-winning actor Henry Winkler launched his memoir \"Being Henry: The Fonz...and Beyond\" through Celadon Books as a national hardcover tour, followed by a paperback tour in 2024. The campaign required coordinating a multi-city live event series across major US markets, managing a high-profile talent with significant public and media demand, and translating a publishing GTM strategy into flawless on-the-ground execution.",
    role: "As Chief of Staff to Henry Winkler, I served as the operational and strategic lead for the national GTM launch of Being Henry across 15+ US markets. I built and ran the execution infrastructure behind a multi-channel campaign spanning live experiential activations, press, digital content, and fan community integrations. I owned market-by-market launch operations across 15+ cities ensuring brand consistency and talent readiness at every activation. I developed messaging frameworks and media talking points deployed across primetime, syndicated, and podcast press appearances. I supported integrated marketing campaigns across social and digital channels, coordinating content timing and messaging across platforms to amplify key launch moments including the NYT Bestseller debut and tour stop announcements. I led PR coordination and experiential marketing integrations across 7+ fan conventions. I produced launch content including video announcements and digital activations supporting the book's consumer marketing campaign, including a live virtual appearance for Access Hollywood and a live video on X celebrating 7,000 signed memoir copies. I also contributed to brand voice and editorial positioning for supporting campaign materials.",
    impact: "Being Henry debuted as a New York Times Bestseller and held the list for 11 weeks. The national tour spanned 15+ cities and 20+ regional markets with multiple sold-out stops including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Project managed 7+ fan conventions and 15 speaker appearances reaching 10,000+ attendees. Press campaign spanned primetime, syndicated, and podcast appearances with direct producer responsibilities. The paperback release in 2024 generated a full second tour leg, anchoring the book's sustained market presence across two consecutive years.",
    press: "Being Henry: The Fonz...and Beyond debuted as a New York Times Bestseller through Celadon Books in 2023 and spent 11 weeks on the list. The national tour sold out multiple venues including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Press appearances spanned primetime and syndicated television and major podcast platforms. The 2024 paperback release generated a second national tour leg, extending the campaign's market reach into a second consecutive year. Fan convention integrations reached audiences across 20+ regional markets.",
    links: [{ text: "live video on X", url: "https://x.com/hwinkler4real/status/1704224861047156996" }],
    sections: [
      { label: "Context", content: "In 2023, Emmy Award-winning actor Henry Winkler launched his memoir \"Being Henry: The Fonz...and Beyond\" through Celadon Books as a national hardcover tour, followed by a paperback tour in 2024. The campaign required coordinating a multi-city live event series across major US markets, managing a high-profile talent with significant public and media demand, and translating a publishing GTM strategy into flawless on-the-ground execution." },
      { label: "My Role", content: "As Chief of Staff to Henry Winkler, I served as the operational and strategic lead for the national GTM launch of Being Henry across 15+ US markets. I built and ran the execution infrastructure behind a multi-channel campaign spanning live experiential activations, press, digital content, and fan community integrations. I owned market-by-market launch operations across 15+ cities ensuring brand consistency and talent readiness at every activation. I developed messaging frameworks and media talking points deployed across primetime, syndicated, and podcast press appearances. I supported integrated marketing campaigns across social and digital channels, coordinating content timing and messaging across platforms to amplify key launch moments including the NYT Bestseller debut and tour stop announcements. I led PR coordination and experiential marketing integrations across 7+ fan conventions. I produced launch content including video announcements and digital activations supporting the book's consumer marketing campaign, including a live virtual appearance for Access Hollywood and a live video on X celebrating 7,000 signed memoir copies. I also contributed to brand voice and editorial positioning for supporting campaign materials." },
      { label: "Judgment Calls", content: "A memoir tour puts personal material into rooms you do not control. Before the campaign went live I mapped the sensitive territory in the book — family, dyslexia, decades of industry relationships — and built tiered talking points so Henry always had a warm, in-voice answer ready rather than a deflection. I pre-cleared boundaries with producers, sat in on live segments to catch questions heading somewhere unplanned, and made real-time calls about what to take and what to redirect. Nothing from the two-year run required a correction or a walk-back." },
      { label: "Impact", content: "Being Henry debuted as a New York Times Bestseller and held the list for 11 weeks. The national tour spanned 15+ cities and 20+ regional markets with multiple sold-out stops including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Project managed 7+ fan conventions and 15 speaker appearances reaching 10,000+ attendees. Press campaign spanned primetime, syndicated, and podcast appearances with direct producer responsibilities. The paperback release in 2024 generated a full second tour leg, anchoring the book's sustained market presence across two consecutive years." },
      { label: "Press & Recognition", content: "Being Henry: The Fonz...and Beyond debuted as a New York Times Bestseller through Celadon Books in 2023 and spent 11 weeks on the list. The national tour sold out multiple venues including The Town Hall NYC, Harvard Bookstore Cambridge MA, and the Smithsonian Institution Washington DC. Press appearances spanned primetime and syndicated television and major podcast platforms. The 2024 paperback release generated a second national tour leg, extending the campaign's market reach into a second consecutive year. Fan convention integrations reached audiences across 20+ regional markets." },
    ],
    gallery: [henryHelloSign, henrySethMeyers, henryFanexpo, henrySeatedBook, henryHodaJenna],
  },
  {
    id: "becoming-memoir-launch",
    metric: "$21M in 60 days · 5M+ views on keynote content",
    brand: "Michelle Obama's Becoming x Time's Up",
    title: "Influencer & Partnership Campaigns",
    description: "Influencer outreach and partnership management behind two high-impact GTM campaigns.",
    tag: "Campaigns",
    image: traceeMichelleCaseStudy,
    cardImage: traceeMichelleCaseStudy,
    context: "In 2018, Michelle Obama launched Becoming, a New York Times Bestseller that held the list for 100 weeks and became one of the best-selling memoirs in publishing history. In the same window, the #MeToo movement launched the Time's Up Legal Defense Fund. Both campaigns needed high-profile voices — talent, creators, and cultural figures like Tracee Ellis Ross — brought in credibly and at speed, with the briefing, approval, and relationship infrastructure to keep the messaging consistent across every channel they touched.",
    role: "As Marketing Manager for executive communications and social media, I led influencer outreach, identification, and partnership management for both GTM campaigns. I built the influencer briefing packets, ran content approvals, and owned ongoing relations with talent and their teams so that each partner had a clear point of view, on-brand assets, and a channel plan before anything went live. I ran channel monitoring for growth, trends, and insights across all owned accounts and adjusted the social strategy accordingly, and I led strategy development for every account — covering diversity and inclusion, accessibility, audience engagement, and moderation guidelines. In parallel I led messaging and the launch playbook for two national product launches, coordinating paid, earned, and owned channels and documenting a repeatable launch process for future teams.",
    impact: "Influencer briefings, content approvals, and ongoing relations delivered 5M+ social views on the Glamour keynote content. The Time's Up Legal Defense Fund raised $21M in 60 days. Becoming spent 100 weeks on the New York Times Bestsellers list. Across the same period, co-marketing campaigns with third-party studios and networks doubled our social following in six months, and the two national product launches I led sold 2M+ units in four months.",
    press: "Becoming spent 100 weeks on the New York Times Bestsellers list and sold 2 million copies in its first 15 days. The Becoming tour sold out venues nationwide, including 17,500 seats at the LA Forum. Tracee Ellis Ross's Glamour Women of the Year speech received national coverage from The Washington Post, HuffPost, and Upworthy, leading to her TED2018 invitation. The Time's Up Legal Defense Fund raised $21 million within 60 days, supporting over 1,700 women across 60+ industries.",
    sections: [
      { label: "Context", content: "In 2018, Michelle Obama launched Becoming, a New York Times Bestseller that held the list for 100 weeks. In the same window, the #MeToo movement launched the Time's Up Legal Defense Fund. Both campaigns needed high-profile voices — talent, creators, and cultural figures like Tracee Ellis Ross — brought in credibly and at speed, with the briefing, approval, and relationship infrastructure to keep messaging consistent across every channel they touched." },
      { label: "My Role", content: "I led influencer outreach, identification, and partnership management across both campaigns:", items: [
        "Identified and recruited influencers and talent partners aligned with each campaign's brand equity.",
        "Built influencer briefings, ran content approvals, and owned day-to-day relations with partners and their teams.",
        "Ran channel monitoring for growth, trends, and insights, adjusting social strategy accordingly.",
        "Led strategy for all social accounts, covering diversity and inclusion, accessibility, engagement, and moderation guidelines.",
        "Led messaging and the launch playbook for two national product launches across paid, earned, and owned channels.",
      ]},
      { label: "Impact", content: "5M+ social views on the Glamour keynote content. $21M raised for the Time's Up Legal Defense Fund in 60 days. Becoming held the NYT Bestsellers list for 100 weeks. Co-marketing campaigns with third-party studios and networks doubled our following in six months, and the two national product launches sold 2M+ units in four months, with a documented, repeatable launch process left behind for future teams." },
      { label: "Press & Recognition", content: "Becoming spent 100 weeks on the New York Times Bestsellers list and sold 2 million copies in its first 15 days. The Becoming tour sold out venues nationwide, including 17,500 seats at the LA Forum. Tracee Ellis Ross's Glamour Women of the Year speech received national coverage from The Washington Post, HuffPost, and Upworthy, leading to her TED2018 invitation. The Time's Up Legal Defense Fund raised $21 million within 60 days, supporting over 1,700 women across 60+ industries." },
    ],
    gallery: [becomingBookDisplay, traceeMichelleInterview, becomingTimesup, becomingGlamourWoty],
  },

  {
    id: "humanitas-prize-42",
    metric: "Live social from the floor · 42nd annual",
    brand: "The Humanitas Prize",
    title: "Annual Humanitas Awards Show",
    description: "Owned the live social feed for a Hollywood awards ceremony, in real time from the floor.",
    tag: "Social Media",
    image: humanitasBeverlyWilshire,
    context: "The Humanitas Prize is one of Hollywood's most respected awards ceremonies, described by Barbara Walters as what the Nobel Prize is to literature and the Pulitzer Prize is to journalism. The 42nd Annual Humanitas Prizes Awards Show and Toast recognized film and television writers whose work affirms the human condition, drawing industry attendees spanning network executives, writers, and producers from every major studio. The ceremony required a production team capable of managing both the high-visibility public-facing elements of a red carpet awards show and the behind-the-scenes operational complexity of a live event with real-time technical demands.",
    role: "As Marketing Manager, I owned multiple workstreams simultaneously across the full event lifecycle. Pre-event I managed social media strategy, content creation, copy, and scheduling across platforms. During the live event I coordinated directly with vendors on the ground, resolved live technical and IT issues in real time, executed live social media coverage on X, and contributed to red carpet photography at the step and repeat.",
    impact: "Successfully produced a full-scale Hollywood awards ceremony activation end to end, managing the intersection of live event operations and real-time digital brand presence simultaneously. The dual responsibility of floor production and live social coverage is a skill set directly transferable to any brand activation requiring both physical and digital execution.",
    press: "42nd Annual Humanitas Prizes Awards Show and Toast, Four Seasons Beverly Hills. Winning projects at the ceremony included Hidden Figures, Hacksaw Ridge, Ava DuVernay's 13th, Black-ish, and This Is Us. The Humanitas Prize has been covered annually by Variety, The Hollywood Reporter, Los Angeles Times, Deadline, and The Wrap. The organization has dispensed over 1.8 million dollars in prize money to television and film writers since 1974.",
    gallery: [humanitasAva, humanitasDga, humanitasWinners],
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

