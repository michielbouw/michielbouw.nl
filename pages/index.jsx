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
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <h2 className="text-4xl font-light tracking-tighter text-secondary text-opacity-90 mb-4">
              About
            </h2>
            <p className="text-gray-800 mb-8">
              I help organisations build scalable software platforms by providing the right technical leadership from my hands-on experience.
            </p>
            <p className="text-gray-800 mb-8">
              As a Lead Software Consultant, I combine hands-on software engineering with technical leadership, strategy, architecture and consultancy. I like to work closely with developers, product managers and stakeholders to shape technical direction, improve engineering practices and deliver sustainable software solutions.
            </p>
            <p className="text-gray-800 mb-8">
              I believe the best technical leaders stay close to the technology. That's why I intentionally combine software development with coaching, technical decision-making and helping teams grow.
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
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <h2 className="text-4xl font-light tracking-tighter text-secondary text-opacity-90 mb-4">
              Career &amp; Skills
            </h2>
            <p className="text-gray-800 mb-8">
              My career started with freelance software development projects during my studies, followed by a Frontend Software Engineer role at Bynder in 2016, where I specialised in modern JavaScript development. In 2019, I joined Capgemini, working on large-scale enterprise projects while further developing my consultancy and technical leadership skills.
            </p>
            <p className="text-gray-800 mb-8">
              Today, I co-own a consultancy company through which I work with organisations ranging from startups to enterprise businesses. As a Lead Software Consultant, I help clients build and evolve complex software platforms while providing technical guidance, supporting engineering teams and driving continuous improvement.
            </p>

            <h3 className="text-xl font-light tracking-tighter text-secondary text-opacity-90 mb-2">
              Can work as
            </h3>
            <p className="text-sm text-gray-800 font-light mb-0">
              Lead Software Consultant
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              Lead/Senior Frontend Consultant/Engineer
            </p>
            <p className="text-sm text-gray-800 font-light mb-8">
              Technical Lead
            </p>
            <p className="text-sm text-gray-800 font-light mb-8">
              Frontend Architect
            </p>

            <h3 className="text-xl font-light tracking-tighter text-secondary text-opacity-90 mb-2">
              Core experience
            </h3>
            <p className="text-sm text-gray-800 font-light mb-0">
              Technical Leadership
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              Frontend Architecture
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              React, JavaScript & TypeScript Engineering
            </p>
            <p className="text-sm text-gray-800 font-light mb-0">
              Team Coaching & Mentoring
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
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3">
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
