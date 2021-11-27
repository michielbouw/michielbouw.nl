import Image from 'next/image';

import meImage from '../public/michiel.jpg';

import Quote from '../components/Quote';

function Hero() {
  return (
    <div className="w-full h-screen relative mb-32">
      <div className="md:container w-full h-screen md:h-2/3 mx-0 md:mx-auto mt-0 md:mt-24 flex flex-col justify-end md:justify-start">
        <div className="flex flex-col items-center z-20">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary text-center pb-8 md:p-0">
            Michiel Bouw
          </h1>
          <div className="w-full md:w-auto flex-1 md:flex-none bg-black bg-opacity-60 md:bg-opacity-80 md:rounded-md mt-0 md:mt-4 mb-0 lg:mb-32 pb-28 pt-8 md:p-0">
            <h2 className="mx-8 my-1 text-xl md:text-2xl font-bold tracking-wide text-white text-center">
              Lead/Senior Software Engineer (JavaScript/TypeScript)
            </h2>
            <h2 className="block md:hidden mt-8 mb-1 text-xl font-light tracking-wide text-white text-opacity-60 text-center animate-bounce">
              <a href="#about" title="Read more">
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
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-56 md:bottom-80 2xl:bottom-32 left-0 md:left-2 w-full flex justify-end z-20">
        <Quote>Show people other perspectives.</Quote>
      </div>

      <div className="absolute top-0 md:-top-1/6 lg:-top-1/3 left-0 w-full h-full flex justify-end z-0 overflow-y-hidden md:overflow-y-visible">
        <div className="hidden md:block w-1/2 h-full flex-none">
          <Image
            className="opacity-75 w-full h-full"
            loader={() => './michiel.jpg'}
            src={meImage}
            alt="Michiel Bouw"
            layout="responsive"
            placeholder="blur"
          />
        </div>

        <div className="block md:hidden w-full h-screen flex-none scale-200 translate-y-1/3 translate-x-1/2">
          <Image
            className="opacity-80 w-full h-full"
            loader={() => './michiel.jpg'}
            src={meImage}
            alt="Michiel Bouw"
            layout="responsive"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
