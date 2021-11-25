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

      <div className="mt-28 md:-mt-96 w-full h-auto relative" id="about">
        <Container className="my-36 z-20">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
            <h2 className="text-4xl font-light tracking-tighter text-secondary text-opacity-90 mb-4">
              About
            </h2>
            <p className="text-gray-800 mb-8">
              As a mainly (front-end) JavaScript specialised developer I have a
              passion for solving UX challenges that involve the end user
              directly. Having worked with different technologies mainly using
              JavaScript on different kind of projects in different teams I have
              become an all-round JavaScript developer.
            </p>
            <p className="text-gray-800 mb-8">
              I am a dedicated team player that enjoys working actively and
              closely together with others to achieve the best results together.
            </p>
          </div>
        </Container>

        <div
          className="absolute -bottom-2 right-0 md:right-2 w-full flex z-10"
          data-aos="fade-up"
        >
          <Quote>Openness will benefit everyone involved.</Quote>
        </div>
      </div>

      <div
        className="relative w-full flex bg-background z-0"
        id="career_and_skills"
      >
        <Container className="my-36 z-20" data-aos="fade-up">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
            <h2 className="text-4xl font-light tracking-tighter text-secondary text-opacity-90 mb-4">
              Career &amp; Skills
            </h2>
            <p className="text-gray-800 mb-8">
              After working on freelance projects during my studies, I started
              working full-time as a front-end developer focussing on JavaScript
              at Bynder in 2016.
            </p>
            <p className="text-gray-800 mb-8">
              Looking for new challenges I joined Capgemini in 2019 as a
              front-end developer consultant from which I later on moved over to
              the design agency Idean, a part of Capgemini.
            </p>
            <p className="text-gray-800 mb-8">
              From that experience I co-founded a company where I am working as
              Lead Software Engineer. Next to that I work at Smartly.io with
              multiple teams on a big SaaS product as one of their Lead Software
              Engineers.
            </p>

            <h3 className="text-xl font-light tracking-tighter text-secondary text-opacity-90 mb-2">
              Can work as
            </h3>
            <p className="text-sm text-gray-800 font-light mb-0">
              Lead/Senior Software Engineer
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              Lead/Senior JavaScript/TypeScript Developer
            </p>
            <p className="text-sm text-gray-800 font-light mb-8">
              Lead/Senior Front-end/Web Developer
            </p>

            <h3 className="text-xl font-light tracking-tighter text-secondary text-opacity-90 mb-2">
              Tools &amp; Frameworks
            </h3>
            <p className="text-sm text-gray-800 font-light mb-0">
              JavaScript / TypeScript / ECMAScript
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              NodeJS / React / Angular / GraphQL / REST / Python
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              Web accessibility (WCAG 2.1)
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
        <Container className="my-36 z-20">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
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
