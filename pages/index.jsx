import Image from 'next/image';

import backgroundTextImage from '../public/background-text.png';

import BigLink from '../components/BigLink';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Quote from '../components/Quote';

export default function Home() {
  return (
    <>
      <Hero />

      <div className="mt-0 md:-mt-96 w-full h-auto relative" id="about">
        <Container className="my-20 md:my-36 z-20">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h2 className="text-4xl font-light tracking-tighter text-secondary text-opacity-90 mb-4">
              About
            </h2>
            <p className="text-gray-800 mb-8">
              As a mainly (frontend) JavaScript-specialised developer, I am
              passionate about directly solving technical challenges involving
              the end user. Having worked with a variety of technologies,
              primarily using JavaScript, in a wide range of projects in
              different teams, I have become an all-round JavaScript developer.
            </p>
            <p className="text-gray-800 mb-8">
              I am a dedicated team player who enjoys working actively and
              closely with others to achieve the best results and share this
              knowledge to enable and lead those around me to thrive in what
              they do. In addition, I am a fast learner interested in overseeing
              the big picture.
            </p>
          </div>
        </Container>

        <div className="hidden md:block">
          <div
            className="absolute -bottom-2 right-0 md:right-2 w-full flex z-10"
            data-aos="fade-up"
          >
            <Quote>Openness will benefit everyone involved.</Quote>
          </div>
        </div>
      </div>

      <div
        className="relative w-full flex bg-background z-0"
        id="career_and_skills"
      >
        <Container className="my-20 md:my-36 z-20" data-aos="fade-up">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h2 className="text-4xl font-light tracking-tighter text-secondary text-opacity-90 mb-4">
              Career &amp; Skills
            </h2>
            <p className="text-gray-800 mb-8">
              After working on freelance projects during my studies, I worked
              full-time as a frontend developer focussing on JavaScript at
              Bynder in 2016.
            </p>
            <p className="text-gray-800 mb-8">
              Then, looking for new challenges, I joined Capgemini in 2019 as a
              frontend developer consultant. Later, I moved over to the design
              agency Idean, a part of Capgemini.
            </p>
            <p className="text-gray-800 mb-8">
              More recently, I worked at Smartly.io with multiple teams on a
              large SaaS product as one of their Lead Software Engineers.
            </p>
            <p className="text-gray-800 mb-8">
              From that experience, I co-founded a company where I now work as a
              Lead/Senior Software Engineering Consultant. Via this company, I
              support and work with clients diverging from financial startups to
              large B2B SaaS or even B2C e-commerce companies.
            </p>

            <h3 className="text-xl font-light tracking-tighter text-secondary text-opacity-90 mb-2">
              Can work as
            </h3>
            <p className="text-sm text-gray-800 font-light mb-0">
              Front-end/JavaScript Software Architect
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              Lead/Senior JavaScript Software Engineer
            </p>
            <p className="text-sm text-gray-800 font-light mb-8">
              Lead/Senior Front-end Software Engineer
            </p>

            <h3 className="text-xl font-light tracking-tighter text-secondary text-opacity-90 mb-2">
              Tools &amp; Frameworks
            </h3>
            <p className="text-sm text-gray-800 font-light mb-0">
              HTML / CSS / SASS / CSS-in-JS
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              JavaScript / TypeScript / ECMAScript / Python / Go
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              React / Next.js / Gatsby / Vue.js / NodeJS / Angular
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              GraphQL / REST / Headless CMS
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              Docker / AWS / Azure
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              Jest / React Testing Library / Web accessibility
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              Secure Software Development Lifecycle
            </p>
            <p className="text-sm text-gray-800 font-light mb-8">
              Scrum / Coaching / Agile / SAFe
            </p>
          </div>
        </Container>

        <div
          className="absolute lg:top-1/4 right-0 w-full h-full flex justify-end z-0 overflow-y-hidden"
          data-aos="fade-up"
        >
          <div className="hidden lg:block w-1/2 h-full flex-none">
            <Image
              className="opacity-75 w-full h-full"
              loader={() => './background-text.png'}
              src={backgroundTextImage}
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-auto relative" data-aos="fade-up" id="contact">
        <Container className="my-20 md:my-36 z-20">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h2 className="text-4xl font-light tracking-tighter text-secondary text-opacity-90 mb-4">
              Contact
            </h2>
            <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-16">
              <BigLink
                url="https://linkedin.com/in/michiel-bouw"
                title="Michiel's Linkedin"
              >
                <span className="font-normal tracking-tighter align-text-bottom text-secondary text-opacity-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </span>{' '}
                Linkedin
              </BigLink>
              <BigLink
                url="https://github.com/michielbouw"
                title="Michiel's GitHub"
              >
                <span className="font-normal tracking-tighter align-text-bottom text-secondary text-opacity-90">
                  &#123;&#125;
                </span>{' '}
                Github
              </BigLink>
            </div>
          </div>
        </Container>

        <div className="absolute -bottom-2 left-0 md:left-2 w-full flex justify-end z-10">
          <Quote>Let's work and innovate together.</Quote>
        </div>
      </div>
    </>
  );
}
