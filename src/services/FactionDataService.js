export const Faction = {
  ECO: "ECO",
  TECH: "TECH",
  INDUSTRIAL: "INDUSTRIAL",
  TRADITIONAL: "TRADITIONAL",
}

class FactionAdvisorData {
  constructor(faction, firstname, lastname, backgroundStory, badgeImagePath) {
    this.faction = faction
    this.firstname = firstname
    this.lastname = lastname
    this.fullName = `${firstname} ${lastname}`
    this.backgroundStory = backgroundStory
    this.badgeImagePath = badgeImagePath
  }
}

class FactionData {
  constructor(
    faction,
    name,
    nameAlias,
    description,
    conceptImagePath,
    statsImagePath,
    headerImagePath,
    colorCode,
    advisor
  ) {
    this.faction = faction
    this.name = name
    this.nameAlias = nameAlias
    this.description = description
    this.conceptImagePath = conceptImagePath
    this.statsImagePath = statsImagePath
    this.headerImagePath = headerImagePath
    this.colorCode = colorCode
    this.advisor = advisor
  }
}

export class FactionDataService {
  constructor() {
    // Advisors
    const ecoFactionAdvisor = new FactionAdvisorData(
      Faction.ECO,
      "John",
      "Smith",
      "Most people see John Smith as an overly enthusiastic environmentalist, but there is a method to his madness. What started as a young child eager for nature walks and hikes turned into an unquenchable need to explore and see what the world has to offer. In this pale blue dot, he realized how small but mighty human beings create ripples across the earth and the damages that they’ve done.<br/><br/>He has volunteered and contributed to research in multiple environmental organizations since he was a teenager. He has learned in his travel and studies how fleeting and fragile nature is and studied intensely the impacts of climate change and various ways to conserve the planet. Eventually, he also learned how to find the middle ground with businessmen, technology, and people, creating possibilities to bring them all into a sustainable future. <br/><br/>He realized that he must find a way to repay Mother Earth and repair the damages done to her. A well-known figure in environmental protests, he often tried to find the best move to protect the environment by seeking sustainable alternatives, or if more convincing was needed, outright boycotts. He sought out and gathered like-minded individuals who want to preserve natural wildlife and create a livable environment for humans and for many generations to come.<br/><br/>With the rise of Cryptopia, John Smith saw a way to start anew and be the pioneers of a new era. He created the Earth's Disciples to protect this modern Eden, envisioning it as a fresh start, where the harmony of technology and humans bring Mother Nature to its highest potential.",
      "/images/factions/Badges/Eco_badge.png"
    )
    const industrialFactionAdvisor = new FactionAdvisorData(
      Faction.INDUSTRIAL,
      "Peter",
      "Nolan",
      "What drives human excellence is competition, and no one knew this better than Peter Nolan. When he was given an opportunity by his father to start his own business, he immediately took the opportunity to create his own empire. Despite the many pitfalls and bankruptcies he suffered in his business ventures, with special help of his father’s finance, he knows that it doesn’t matter how many times he has fallen, but how many times he stood up.<br/><br/>From his not-so-humble start in real estate, he made his way through multiple businesses until eventually settling on manufacturing and energy production. Through his various trades and negotiations, he learned that the true value of business is opportunity. When people walk away thinking they got the best deals, the more profitable his chances could be.<br/><br/>That’s why opportunity is Peter Nolan’s best product. He can provide you the opportunity to be the best business in the market through discounted goods and affordable labor. He can give you an opportunity you want with the right price and signed paperwork. What sets him apart from everyone is that no matter what, he gets the deal he wants.<br/><br/>There was nothing unsellable to Peter Nolan. Abandoned property can be flipped and sold to the right client. A surplus of goods, gone in an instant with the right moment. A brand, timeless when plastered everywhere. After all, if no one knows your name, how can they remember your company, more so your business? Everything is for sale to anyone at the right price, to the right buyer.<br/><br/>Though the selections of candidates were many, the Inheritors eventually decided that Peter Nolan was the ideal leader of the Inheritors. He is a businessman who knows what the people want and need. Ruthless and charismatic, he has just the right tenacity to close a deal but just enough charm to make people want to come back for more. What is a business without its customers, after all?",
      "/images/factions/Badges/Industrial_badge.png"
    )
    const techFactionAdvisor = new FactionAdvisorData(
      Faction.TECH,
      "Sam",
      "Clark",
      "Leader of the Technocrats, Sam Clark is the genius behind most of everyday technology. From your smartphone to smart cities, he has developed software to cater to human needs and wants and continues to improve on them. <br/><br/>Sam started like any child curious about technology—by getting into robotics and coding. He designed his own robot to fight against opponents in many no-holds-barred tournaments, walking away with not only the grand prize but also endless ideas for prototypes.<br/><br/>He graduated top of his class in college at the young age of 15, eager to make use of every minute and second into learning more about technology in practice aside from theory. His hands-on approach allows him to create more nuanced and inclusive devices of wide appeal.<br/><br/>He viewed technology as the solution to everything, machines and code as constantly evolving tools that humanity needs to survive and improve life. It amazed him that imperfect human beings could create technology that’s both precise and accurate. <br/><br/>Persistent and ever dependent on the scientific method, He meticulously strove to determine what can be improved and tweaked further in his inventions. After a series of failures, he struck gold with a prototype wearable PDA in his parents’ backyard. From there, he learned that every experiment matters and branch out to many different possibilities. He hired and teamed up with like-minded individuals to establish the Technocrats, a group of young inventors innovating everyday life through technology and scientific experimentation.<br/><br/>With Cryptopia slowly establishing itself, Sam Clark sees the city-state as the best place to create the technological utopia that he envisioned, a brave new world to innovate and improve to its fullest technological capabilities.",
      "/images/factions/Badges/Tech_badge.png"
    )
    const traditionalFactionAdvisor = new FactionAdvisorData(
      Faction.TRADITIONAL,
      "Jane",
      "Brown",
      "Jane Brown grew up in a tight-knit community where everyone knew each other and had each other’s back. If her mother needed a babysitter, she knew two doors down that a neighbor could take care of her and her siblings. If her father’s car broke down, his co-worker could offer carpool. If her siblings were failing in math, a teacher lived some four blocks away, and the kid across the street already took the class last year and knew the answers. She knew, over time, that for as long as you belonged to a community that welcomed anyone as they are, people would flourish, thrive, and become their best selves.<br/><br/>Often seen in food kitchens and community activities, Jane Brown always did her part to contribute to her community. She is caring and outspoken and often the first one to lend a helping hand. Don’t mistake her kindness as weakness, however, as she is also the first to call for petitions and protests when business and politics start to harm communities around her. Her electric charisma and initiative help her organize demonstrations and draft entire lists of people who will demand accountability and a proper course of action. She is cutthroat with her investigations, precise in her knowledge of law, and fearsome in her expertise. She grounds her efforts through her studies of law and sociology as an attorney, even representing her neighbors pro bono.<br/><br/>Through various grassroots movements, she and a group of like-minded individuals such as lawmakers, activists, and businessmen have teamed up to become the Unifiers. They’ve agreed that though they grew up in different walks of life and prioritized different yet important activisms, they all need each other’s support to see their goals into fruition. This union becomes essential for everyone especially, as Jane Brown looks towards a Cryptopia that could be everyone and anyone’s home.",
      "/images/factions/Badges/Traditional_badge.png"
    )

    this.factionAdvisors = [
      ecoFactionAdvisor,
      techFactionAdvisor,
      industrialFactionAdvisor,
      traditionalFactionAdvisor,
    ]

    // Factions
    this.factionData = [
      new FactionData(
        Faction.ECO,
        "Eco",
        "Earth’s Disciples",
        "The future is nothing without the Earth, and this is what Earth’s Disciples will wholeheartedly protect. The new land brings new ways to cultivate Earth to its finest form but also makes it vulnerable to being squeezed to its last drop. The Earth’s Disciples have launched various projects, demonstrations, and political protests to make sure that these lands are sustainable with their local flora and fauna. They also make sure to create safeguards that prevent the environment from further harm due to local waste and toxic by-products.<br/><br/>Earth’s Disciples focus on reusable energy and sustainable, mindful actions that lessen one’s carbon footprint. Solar power is one of their main industries. They’ve created haven parks for people to use as well as for the environment to flourish. They’ve also launched research on local natural habitats to see how humans can further improve their surroundings and adapt to nature more efficiently.<br/><br/>Despite their mild nature, they will not hesitate to reprimand and intervene in any initiative they deem too harmful to the environment, even going as far as shutting businesses down. They are, however, more than willing to meet halfway in creating far more sustainable means of living like creating biodegradable or recyclable materials.<br/><br/>Though the Earth’s Disciples see that everyone can benefit from a healthier planet, not many agree with their plans and approach. The industrialist tends to see only the short-term financial benefits and is only cooperative when projects are profitable. Technology’s endeavors for sustainability aren’t always the priority when innovations cost resources. Meanwhile, the general public needs both time and patience to manage waste and keep their carbon footprint according to the Earth’s Disciples’ standards.<br/><br/>Nevertheless, this doesn’t discourage John Smith and the Earth’s Disciples, as the challenge to bring Earth back to its former glory is a glory of its own.",
        "/images/factions/concept/eco_faction.png",
        "/images/factions/stats/eco_stats.png",
        "/images/factions/headers/eco_header.png",
        "#4D7937",
        ecoFactionAdvisor
      ),
      new FactionData(
        Faction.INDUSTRIAL,
        "Industrial",
        "Inheritors",
        "Cryptopia is a luxury that few can afford, and many can’t fully grasp. Cryptopia may just be distant islands to the untrained eye; to the Inheritors, it’s the new frontier. With many countries having their customs, laws, and traditions, Cryptopia offers a clean slate for all. Making Cryptopia the perfect place to establish foundations for businesses that are way too big and ahead of their time for any country and their limited laws and customs. The Inheritors have sought the land as prime real estate. It is for brave pioneers to establish their business, for those with influence to innovate, and for those who are willing to take the risk, front row seats to the future.<br/><br/>In entering this new landscape, the Inheritors have decided to make Cryptopia its main center point of business. If you’re in the know, your business would be in Cryptopia, and if you aren’t, then you’re playing a losing game.<br/><br/>With this in mind, everyone wants to be the first to do anything of anything in Cryptopia, but as Inheritors, nothing is half-assed. Whether your preferred business mode is fossil fuels, solar power, or nuclear energy, so be it. For as long as your business stays relevant and afloat, everything is a free game. The goal of the game is to reach the top and remain on top.<br/><br/>Many may disagree and call the Inheritors unreasonably ruthless, usually by those who prioritize making empty lands look pretty in hopes that it’ll appease the planet, or misguided technology enthusiasts with no sense of direction, or perhaps the untapped target market and future employees. The Inheritors look forward to the future by maximizing all resources to get us there.<br/><br/>But what separates the Inheritors from any other honest-to-goodness business is that, one way or another, those who limit themselves with self-imposed rules are doomed to fail. Those who don’t only have to wait to inherit.",
        "/images/factions/concept/industrial_faction.png",
        "/images/factions/stats/industrial_stats.png",
        "/images/factions/headers/industrial_header.png",
        "#932B28",
        industrialFactionAdvisor
      ),
      new FactionData(
        Faction.TECH,
        "Tech",
        "Technocrats",
        "Ambitious and innovative, the Technocrats have established themselves as one of the main pillars of Cryptopia society.  Everything and anything you use is most likely created by the Technocrats: from your phones, screens, buildings, and even your grandmother’s pacemaker. Though dreams like these don’t come easy, and most especially, cheap, the Technocrats are confident in their capability to turn their ideas into reality.<br/><br/>Sam Clark, the leader and creator of the Technocrats, is the young innovator who stemmed the foundation of his faction with STEM research, and scientific solutions. Meticulous with details, his faction sees the growth in economics and society can only be done through rigorous calculations and scientific research.<br/><br/>With Cryptopia being the central hub for business, products, and supplies, the Technocrats are eager to see what’s available and the latest in production, opting not to discriminate on resources, choosing only to see what fits into their latest tech blueprint. When it comes to a potential technological breakthrough, the ends justify the means. <br/><br/>People who disagree with the Technocrats see them as wasteful, disorganized dreamers at best, and cold-hearted, calculated, and Orwellian misanthropes at worst. Regardless, Technocrats are confident due to everyone’s dependency on their technology, so they are willing to take the risk. They are part of Cryptopia’s foundations, the backbone behind every business and system of power.<br/><br/>The future is now. As many people look towards the years for the future in excitement, Sam Clark and the Technocrat know that if you have the right blueprint and resources, the future is what you make of it.",
        "/images/factions/concept/tech_faction.png",
        "/images/factions/stats/tech_stats.png",
        "/images/factions/headers/tech_header.png",
        "#2F64B2",
        techFactionAdvisor
      ),
      new FactionData(
        Faction.TRADITIONAL,
        "Traditional",
        "Unifiers",
        "The start of the new civilization begins with inhabiting Cryptopia. Like farmers searching for new land, people have settled in Cryptopia to build a new life and tradition to start a clean slate.<br/><br/>The Unifiers are the representatives of the countless people who arrived with only their belongings and a dream. Declaring themselves as the people’s voice, the Unifiers are usually the spokesperson for the concerns and well-being of workers, customers, and citizens. They often are the ones crafting the laws and regulations that keep businesses and people in power in line.<br/><br/>Jane Brown is the elected head of the Unifiers, who spearheaded multiple acts of law and regulations towards companies that steal and abuse their workers. As she is the people’s voice, she amplifies the needs of the people to the authorities and creates order amongst the frustrated voices.<br/><br/>Most projects of the Unifiers consist of housing projects and community centers for the everyday citizen with the common goal of making Cryptopia a livable city for all. They often support small businesses and try to keep them afloat to the best of their abilities, especially when essential to their communities. The Unifiers also believe there is room for everyone regardless of their upbringing and background, and that the chance to have a good life should be a reality for everyone.<br/><br/>Though most industries and figureheads may dismiss the Unifiers as just mere popularity votes and mob mentality or immensely sensitive over trivial matters, the Unifiers believe that they are the heart of every rising civilization and the people who carry champions to the end. Whether businesses and politicians like it or not, the Unifiers are their best bet to get people on their side. The future is in the people and the giant leap they take for humankind together.",
        "/images/factions/concept/traditional_faction.png",
        "/images/factions/stats/traditional_stats.png",
        "/images/factions/headers/traditional_header.png",
        "#C09C11",
        traditionalFactionAdvisor
      ),
    ]
  }

  get(faction) {
    return this.factionData.find(f => f.faction === faction.toUpperCase())
  }

  getAll() {
    return this.factionData
  }

  getAdvisor(faction) {
    return this.factionAdvisors.find(fa => fa.faction === faction.toUpperCase())
  }

  getAllAdvisors() {
    return this.factionAdvisors
  }
}
