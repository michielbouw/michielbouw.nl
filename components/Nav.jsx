import React, { useEffect, useState } from 'react';

function DesktopNav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="z-50 hidden md:block">
      <div
        className="z-50 fixed top-0 left-0 p-8 pt-5 pl-5 group"
        onMouseEnter={() => setIsMenuVisible(true)}
        onMouseLeave={() => setIsMenuVisible(false)}
      >
        <a
          alt="open-menu"
          href="/#"
          className="inline-block uppercase text-sm font-medium tracking-tight text-gray-800 cursor-pointer transition ease-out duration-700 motion-safe:group-hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="align-text-bottom inline-block h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>{' '}
          Menu
        </a>

        <ul
          role="navigation"
          alt="menu"
          className={`pt-6 pl-4 w-36 flex flex-col gap-6 transition ease-out duration-400 ${
            isMenuVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <li className="uppercase text-sm font-medium tracking-tight text-gray-800 cursor-pointer transition ease-out duration-700 motion-safe:hover:scale-110">
            <a href="/#about">– About</a>
          </li>
          <li className="uppercase text-sm font-medium tracking-tight text-gray-800 cursor-pointer transition ease-out duration-700 motion-safe:hover:scale-110">
            <a href="/#career_and_skills">– Career &amp; Skills</a>
          </li>
          <li className="uppercase text-sm font-medium tracking-tight text-gray-800 cursor-pointer transition ease-out duration-700 motion-safe:hover:scale-110">
            <a href="/#contact">– Contact</a>
          </li>
        </ul>
      </div>

      <div
        className={`fixed w-44 h-screen top-0 left-0 bg-white bg-opacity-75 transition ease-in-out duration-400 ${
          isMenuVisible ? 'z-40 opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
}

function MobileNav() {
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');

    if (!!body) {
      if (isMobileSidebarVisible) {
        body.classList.add('overflow-hidden');
      } else {
        body.classList.remove('overflow-hidden');
      }
    }

    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, [isMobileSidebarVisible]);

  return (
    <>
      <div className="z-40 fixed md:hidden w-full top-0 left-0 shadow-md bg-white">
        <div className="p-4 flex">
          <div className="flex-0">
            <p className="inline-block font-medium tracking-wider text-gray-600 border-b-2 border-primary">
              <a href="/#">Michiel Bouw</a>
            </p>
          </div>

          <a
            alt="open-menu"
            className="flex-1 text-right cursor-pointer"
            onClick={() => setIsMobileSidebarVisible(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </div>
      </div>

      <div
        className={`z-50 fixed md:hidden w-2/3 h-screen top-0 right-0 bg-white transition ease-in-out duration-700 ${
          isMobileSidebarVisible
            ? 'shadow-2xl translate-x-0'
            : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex">
          <div className="flex-0">
            <p className="inline-block font-medium tracking-wider text-gray-600 border-b-2 border-primary">
              <a href="/#" onClick={() => setIsMobileSidebarVisible(false)}>
                Michiel Bouw
              </a>
            </p>
          </div>

          <a
            alt="close-menu"
            className="flex-1 text-right cursor-pointer"
            onClick={() => setIsMobileSidebarVisible(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
        </div>

        <hr />

        <ul
          role="navigation"
          alt="menu"
          className="py-6 px-4 flex flex-col gap-6"
        >
          <li className="font-light active:font-medium tracking-tight text-gray-800 cursor-pointer">
            <a href="/#about" onClick={() => setIsMobileSidebarVisible(false)}>
              About
            </a>
          </li>
          <li className="font-light active:font-medium tracking-tight text-gray-800 cursor-pointer">
            <a
              href="/#career_and_skills"
              onClick={() => setIsMobileSidebarVisible(false)}
            >
              Career &amp; Skills
            </a>
          </li>
          <li className="font-light active:font-medium tracking-tight text-gray-800 cursor-pointer">
            <a
              href="/#contact"
              onClick={() => setIsMobileSidebarVisible(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        <hr />
      </div>

      <div
        className={`fixed md:hidden w-screen h-screen top-0 left-0 bg-black transition ease-in-out duration-900 ${
          isMobileSidebarVisible ? 'z-40 bg-opacity-75' : 'bg-opacity-0'
        }`}
        onClick={() => setIsMobileSidebarVisible(false)}
      ></div>
    </>
  );
}

function Nav() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}

export default Nav;
