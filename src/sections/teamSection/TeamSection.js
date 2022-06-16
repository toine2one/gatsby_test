import React from "react"
import PageSection from "../../components/PageSection/PageSection"
import TeamMember from "../../components/TeamMember/TeamMember"
import * as styles from "./TeamSection.module.scss"

export default function TeamSection({ imageData }) {
  return (
    <PageSection classes={styles.container}>
      {/* <h1>Meet The Team</h1>
      <h2>Together everyone achieves more</h2> */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade vh-100 d-none d-lg-block"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner h-100">
          <div className="carousel-item active d-flex align-items-center justify-content-center h-100 w-100">
            <div className={`${styles.teamContainer} container`}>
              <div className="row">
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Frank Bonnet"
                    role="Founder & Lead development"
                    bio="Founder and Lead Developer of Cryptopia. Frank Bonnet comes with 12 years of experience designing, as well as building countless enterprise .NET applications. With a deep understanding of blockchain and smart-contract development, he is essential to our team. Frank has a business view with a developer’s expertise."
                    image={imageData.teamAvatarFrank}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Hansco Leek"
                    role="Co-founder"
                    bio="Hansco Leek is a co-founder of Cryptopia. He has been involved in cryptocurrency since 2016 as an investor and entrepreneur. Together with Frank, they founded Cryptopia - the Groundbreaking Blockchain-Driven Metaverse game. Hans has been helping with operations and providing necessary resources to kickstart Cryptopia in the past 2 year."
                    image={imageData.teamAvatarHansco}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Sangho Grolleman"
                    role="Chief Executive Officer"
                    bio="Sangho Grolleman is the CEO of Cryptopia. He has been active in cryptocurrency since 2018 and worked with several cryptocurrency startups both as a team member (CEO and COO) and as an external advisor. He has extensive experience as an entrepreneur, digital marketer, and full stack developer, as well as a teacher and trainer. He also brings over 30 years of gaming experience as an avid gamer. He believes that we are uniquely positioned to leverage blockchain technology in the Metaverse game."
                    image={imageData.teamAvatarSangho}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Pichapen Sörum"
                    role="Chief Marketing Officer"
                    bio="Pichapen has 8 years of experience working with start-ups, and emerging enterprises. Her expertise in structuring the communication matrix that drives the business strategy, generating insights & experiential details leading to the marketing plan will assist Cryptopia's exponential growth."
                    image={imageData.teamAvatarPichapen}
                  />
                </div>
              </div>
              <div className="row">
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Ami Mandel"
                    role="Chief Operating Officer"
                    bio="Ami is a marketer and entrepreneur that has worked in the blockchain space since 2017. With his marketing and branding company, he has helped multiple blockchain startups to successfully market and grow their businesses. As COO of Cryptopia, Ami is leading the development of Cryptopia’s core foundations and driving the day-to-day operations of the Cryptopia team."
                    image={imageData.teamAvatarAmi}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Toine Koene"
                    role="Web-Developer"
                    bio="Toine is a creative mind and a web developer who coordinates designs, animations, illustrations, and web content. As one of the early team members, he has helped interpret ideas and visions into online presences that successfully capture the core essence of Cryptopia."
                    image={imageData.teamAvatarToine}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Jon Beaulieu"
                    role="Chief Information Officer"
                    bio="Jon Beaulieu is Cryptopia's CIO. Jon has helped numerous startups and SMEs by providing them useful insights on user experience development, project management and data-driven analysis. Jon became aware of Bitcoin while stationed in Japan and when he left the military in 2009 he impulsively started mining. Jon's experience and pro skills in business intelligence (BI), web analytics, marketing automation, and data management will help Cryptopia stay ahead of the market with data-driven decisions. He's a domain expert in generating value from big data & target audiences, internet behavior & user website interactions and provides recommendations based on statistical analysis."
                    image={imageData.teamAvatarJon}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Lauderic Labapis"
                    role="Community Manager"
                    bio="Laudie is a hardcore gamer with 15 years of experience in Customer Service and Social Media Management. He is skilled in leading others to deliver results in the metaverse and is an expert in leveraging digital platforms to promote community growth."
                    image={imageData.teamAvatarLauderic}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item d-flex align-items-center justify-content-center h-100 w-100">
            <div className={`${styles.teamContainer} container`}>
              <div className="row">
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Divesh Tanwani"
                    role="Social Media Manager"
                    bio="Divesh has a deep interest in the blockchain space and seeks to utilize the technology to transform this world for the better. As a Social Media Manager, Divesh helps strengthen Cryptopia's engaging community as well as outreach for P2E enthusiasts and mainstream potential investors."
                    image={imageData.teamAvatarDivesh}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Matthew Sloan"
                    role="Lead Game Designer"
                    bio="Lead Game Designer for Cryptopia. Matthew Sloan has over 9 years of experience building games using Unity3D. Having published games on multiple platforms and created the world's first GA-NFT or Game As Non-Fungible Token Matthew brings the perfect balance of technical skill and creative design. Matthew has a high passion for developing and designing and is essential to the team in bringing the AAA HQ experience into the Cryptopian Metaverse."
                    image={imageData.teamAvatarMatt}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Mateo Tedin"
                    role="Illustrator & Concept Artist"
                    bio="Mateo is an illustrator and a concept artist based in Buenos Aires, Argentina. He has worked in editorial illustrations for history books, fantasy art illustrations, characters, props, environment designs, and commercial illustrations for several publications and brands. He is currently working as Lead Illustrator and Concept Artist for Cryptopia."
                    image={imageData.teamAvatarMateo}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Oğuz Boduroğlu"
                    role="Web Designer & 3D Modeller"
                    bio="Oguz is a graphic designer and game artist with more than 10 years of experience. In the past decade, he has gained a vast amount of experience, doing extensive work in various companies all over the world. He is the one behind Cryptopia's design conceptualization and intriguing visuals."
                    image={imageData.teamAvatarOguz}
                  />
                </div>
              </div>
              <div className="row">
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Erik Lyppens"
                    role="Project manager"
                    bio="Erik has a business background (Project Management, Commercial and Start-Up Operations) and extensive experience in technology and social innovation. He joined Cryptopia since the early days and has brought his broad experience in blockchain start-ups, product launches, commercial drive & management to the team."
                    image={imageData.teamAvatarErik}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Maarten J.R. Jansen"
                    role="Legal assistance"
                    bio="Maarten J.R. Jansen is an experienced lawyer who provides legal assistance to startups and scale ups in the blockchain community. He advises several startups and large companies in the blockchain space. His experience also extends to his work with companies that develop technology on a blockchain."
                    image={imageData.teamAvatarMaarten}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Mark Aragona"
                    role="Creative Writer"
                    bio="Published writer with 12 years of experience writing fiction, web copy, blogs, and articles. As a fantasy/video game writer, I provide compelling and engaging stories for video games or books, as well as e - book game guides and FAQs."
                    image={imageData.teamAvatarMarkA}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Zimri Leijen"
                    role="Advisor"
                    bio="Zimri Leijen has been involved in the crypto space since 2013, and with web3 games since the days of cryptokitties. Through his several years of working experience at various crypto startups he has acquired many high profile connections in the industry, and the knowledge gained during this period is wide and diverse."
                    image={imageData.teamAvatarZimri}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item d-flex align-items-center justify-content-center h-100 w-100">
            <div className={`${styles.teamContainer} container`}>
              <div className="row">
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="MR. Nguyen Ngoc Dinh"
                    role="Representative Vietnam"
                    bio="A specialist in digitalization, blockchain, and AI technology applied in economic development."
                    image={imageData.teamAvatarDavid}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Stefan Offringa"
                    role="Financial Advisor"
                    bio="Stefan is an experienced corporate finance professional, entrepreneur and NFT investor. He is very active in mergers & acquisitions, fundraising for growth companies and private equity. Stefan has a financial as well as a technical background."
                    image={imageData.teamAvatarStefan}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="carouselTeamMobile"
        className="carousel slide carousel-fade vh-100 vw-100 d-block d-lg-none"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner h-100 vw-100">
          <div className="carousel-item active d-flex align-items-center justify-content-center h-100 w-100"></div>
          <div
            className={`${styles.teamContainer} container d-flex justify-content-center`}
          >
            <div className="row d-flex justify-content-center">
              <div className={`${styles.teamMember} col-lg-3`}>
                <TeamMember
                  name="Frank Bonnet"
                  role="Founder & Lead development"
                  bio="Founder and Lead Developer of Cryptopia. Frank Bonnet comes with 12 years of experience designing, as well as building countless enterprise .NET applications. With a deep understanding of blockchain and smart-contract development, he is essential to our team. Frank has a business view with a developer’s expertise."
                  image={imageData.teamAvatarFrank}
                />
              </div>
              <div className={`${styles.teamMember} col-lg-3`}>
                <TeamMember
                  name="Hansco Leek"
                  role="Co-founder"
                  bio="Hansco Leek is a co-founder of Cryptopia. He has been involved in cryptocurrency since 2016 as an investor and entrepreneur. Together with Frank, they founded Cryptopia - the Groundbreaking Blockchain-Driven Metaverse game. Hans has been helping with operations and providing necessary resources to kickstart Cryptopia in the past 2 year."
                  image={imageData.teamAvatarHansco}
                />
              </div>
              <div className={`${styles.teamMember} col-lg-3`}>
                <TeamMember
                  name="Sangho Grolleman"
                  role="Chief Executive Officer"
                  bio="Sangho Grolleman is the CEO of Cryptopia. He has been active in cryptocurrency since 2018 and worked with several cryptocurrency startups both as a team member (CEO and COO) and as an external advisor. He has extensive experience as an entrepreneur, digital marketer, and full stack developer, as well as a teacher and trainer. He also brings over 30 years of gaming experience as an avid gamer. He believes that we are uniquely positioned to leverage blockchain technology in the Metaverse game."
                  image={imageData.teamAvatarSangho}
                />
              </div>
              <div className={`${styles.teamMember} col-lg-3`}>
                <TeamMember
                  name="Pichapen Sörum"
                  role="Chief Marketing Officer"
                  bio="Pichapen has 8 years of experience working with start-ups, and emerging enterprises. Her expertise in structuring the communication matrix that drives the business strategy, generating insights & experiential details leading to the marketing plan will assist Cryptopia's exponential growth."
                  image={imageData.teamAvatarPichapen}
                />
              </div>
            </div>
          </div>
          <div className="carousel-item d-flex align-items-center justify-content-center h-100 w-100">
            <div
              className={`${styles.teamContainer} container d-flex justify-content-center`}
            >
              <div className="row">
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Ami Mandel"
                    role="Chief Operating Officer"
                    bio="Ami is a marketer and entrepreneur that has worked in the blockchain space since 2017. With his marketing and branding company, he has helped multiple blockchain startups to successfully market and grow their businesses. As COO of Cryptopia, Ami is leading the development of Cryptopia’s core foundations and driving the day-to-day operations of the Cryptopia team."
                    image={imageData.teamAvatarAmi}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Toine Koene"
                    role="Web-Developer"
                    bio="Toine is a creative mind and a web developer who coordinates designs, animations, illustrations, and web content. As one of the early team members, he has helped interpret ideas and visions into online presences that successfully capture the core essence of Cryptopia."
                    image={imageData.teamAvatarToine}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Jon Beaulieu"
                    role="Chief Information Officer"
                    bio="Jon Beaulieu is Cryptopia's CIO. Jon has helped numerous startups and SMEs by providing them useful insights on user experience development, project management and data-driven analysis. Jon became aware of Bitcoin while stationed in Japan and when he left the military in 2009 he impulsively started mining. Jon's experience and pro skills in business intelligence (BI), web analytics, marketing automation, and data management will help Cryptopia stay ahead of the market with data-driven decisions. He's a domain expert in generating value from big data & target audiences, internet behavior & user website interactions and provides recommendations based on statistical analysis."
                    image={imageData.teamAvatarJon}
                  />
                </div>
                <div className={`${styles.teamMember} col-lg-3`}>
                  <TeamMember
                    name="Lauderic Labapis"
                    role="Community Manager"
                    bio="Laudie is a hardcore gamer with 15 years of experience in Customer Service and Social Media Management. He is skilled in leading others to deliver results in the metaverse and is an expert in leveraging digital platforms to promote community growth."
                    image={imageData.teamAvatarLauderic}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item d-flex align-items-center justify-content-center h-100 w-100"></div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselTeamMobile"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselTeamMobile"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </PageSection>
  )
}
