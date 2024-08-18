'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Btn from '@/components/buttons/Login';
import { navbarContent, servicesList, AboutList, ContactList, resourcesList } from '@/components/Content';

export default function Navbar({session}) {
  const [activeList, setActiveList] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownRefs = useRef([]);
  const navItemRefs = useRef([]);
  const hoverRefs = useRef({});

  const handleMouseEnter = (id) => { 
    setActiveList(id);
    hoverRefs.current[id] = true;
  };

  const handleMouseLeave = (id) => {
    hoverRefs.current[id] = false;
    setTimeout(() => {
      if (!Object.values(hoverRefs.current).some(isHovered => isHovered)) {
        setActiveList(null);
      }
    }, 100);
  };

  const handleDropdownMouseEnter = (id) => {
    setActiveList(id);
    hoverRefs.current[id] = true;
  };

  const handleDropdownMouseLeave = (id) => {
    hoverRefs.current[id] = false;
    setTimeout(() => {
      if (!Object.values(hoverRefs.current).some(isHovered => isHovered)) {
        setActiveList(null);
      }
    }, 100);
  };

  const toggleMobileDropdown = (id) => {
    setMobileDropdown(mobileDropdown === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropdownRefs.current.some(ref => ref?.contains(event.target)) &&
        !navItemRefs.current.some(ref => ref?.contains(event.target))
      ) {
        setActiveList(null);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSubNavClick = () => {
    setActiveList(null);
  };

  return (
    <>
      <div className="font-serif container-style items-center justify-center lg:flex hidden pt-2 px-[200px] mb-2">
        <nav className="flex justify-between w-full text-header-mobile-sb transition-all">
          <section className="flex justify-between shrink-0">
          <Link href="/" className='flex items-center text-navyBlue text-[30px] font-semibold font-serif'>Wellmind</Link>
          </section>
          <section className="ld:px-6 md:px-2">
            <ul className="flex justify-between list-none items-center lg:px-[5px] md:px-[2px] lg:gap-6 md:gap-2 mt-3">
              {navbarContent.map((nav, id) => (
                <li
                  ref={(el) => (navItemRefs.current[id] = el)}
                  className="flex justify-center relative"
                  key={id}
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={() => handleMouseLeave(id)}
                >
                  <Link href={nav === 'Home' ? '/' : nav==='About' ? '/about' : nav==='Contact' ? '/contact' : "#"} className="text-[black] hover:text-[#0E72E8] flex justify-end group">
                    {nav} 
                    {nav !== 'Home' && (
                      (nav === 'Services' && servicesList.length > 0) ||
                      (nav === 'About' && AboutList.length > 0) ||
                      (nav === 'Contact Us' && ContactList.length > 0) ||
                      (nav === 'Resources' && resourcesList.length > 0)
                    ) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="xl:mt-1 lg:mt-1 lg:ml-[4px] md:mt-[3.6px] md:ml-[1px]"
                      >
                        <path
                          d="M3 6L7.50667 11L12 6"
                          stroke="#131313"
                          className="group-hover:stroke-[#0E72E8]"
                          strokeWidth="1.5"
                        />
                      </svg>
                    )}
                  </Link>
                  {((nav === 'Services' && servicesList.length > 0) ||
                    (nav === 'About' && AboutList.length > 0) ||
                    (nav === 'Contact Us' && ContactList.length > 0) ||
                    (nav === 'Resources' && resourcesList.length > 0)) && (
                    <div
                      ref={(el) => (dropdownRefs.current[id] = el)}
                      className={`absolute flex flex-col gap-1 pt-4 top-[30px] bg-navyBlue rounded-[10px] w-[200px] p-[8px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.15)] ${
                        activeList === id ? 'block' : 'hidden'
                      }`}
                      onMouseEnter={() => handleDropdownMouseEnter(id)}
                      onMouseLeave={() => handleDropdownMouseLeave(id)}
                    >
                      {(nav === 'Services' ? servicesList :
                        nav === 'About' ? AboutList :
                        nav === 'Contact Us' ? ContactList :
                        nav === 'Resources' ? resourcesList : []
                      ).map((subNav, subId) => (
                        <Link
                          key={subId}
                          href={subNav.toLowerCase().replace(/ /g, '')}
                          className="text-[white] hover:text-[black] group-hover:text-[#0E72E8]"
                          onClick={handleSubNavClick}
                        >
                          <div  className="group rounded-[10px] text-header-mobile-sb p-[16px] cursor-pointer nav-btn">
                            {subNav}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section className="group flex lg:gap-2 justify-center items-center">
            {session && <Btn text="Profile" />}
            <div className="flex shrink-0">
              {session?.user ? <Btn text="Logout"/> : <Btn text="Login"/>}
            </div>
          </section>
        </nav>
      </div>

      <div className="container-style flex lg:hidden justify-center items-center pt-4">
        <nav className="flex items-center justify-between w-full">
        <div className='flex items-center text-[20px] font-semibold font-serif pl-[20px]'>Wellmind</div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 40 40"
              fill="none"
              className={`${toggle ? 'hidden' : 'block'}`}
              onClick={() => setToggle(!toggle)}
            >
              <path d="M36 11H4V13H36V11Z" fill="#020659" />
              <path d="M36 19H8V21H36V19Z" fill="#020659" />
              <path d="M36 27H12V29H36V27Z" fill="#020659" />
            </svg>
          </div>
        </nav>
      </div>
      <div
        className={`${
          toggle ? 'block fixed top-5 right-[4vw]' : 'hidden'
        } w-[92%] h-[97%] mb-[50px] shrink-0 rounded-[5px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.15)] bg-[#FFFFFF] z-[100000]`}
      >
        <div className="flex justify-between">
            <div className='flex items-center text-[20px] font-semibold font-serif ml-4'>Wellmind</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="mr-[15px] mt-[10px]"
            onClick={() => setToggle(!toggle)}
          >
            <path d="M12 12L20 20M20 20L28 28M20 20L28 12M20 20L12 28" stroke="#020659" />
          </svg>
        </div>
        {navbarContent.map((nav, id) => (
          <div key={id} className="flex flex-col">
            <div
              className="flex justify-between text-[#131313] items-center h-[50px] pl-[17px] pr-[17px] mt-[5px] text-txt-sb cursor-pointer"
              onClick={() => toggleMobileDropdown(id)}
            >
              <Link
                href={nav === 'Home' ? '/' : '#'}
                className="text-[black] hover:text-[#0E72E8]"
              >
                {nav}
              </Link>
              {nav !== 'Home' && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className={`${mobileDropdown === id ? 'hidden' : 'block'} cursor-pointer`}
                  >
                    <path d="M8 10L14.5096 17L21 10" stroke="#131313" strokeWidth="1.5" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className={`${mobileDropdown === id ? 'block' : 'hidden'} cursor-pointer`}
                  >
                    <path d="M21 18L14.4904 11L8 18" stroke="#131313" strokeWidth="1.5" />
                  </svg>
                </>
              )}
            </div>
            {(nav === 'Services' ? servicesList :
              nav === 'About' ? AboutList :
              nav === 'Contact Us' ? ContactList :
              nav === 'Resources' ? resourcesList : []
            ).map((subNav, subId) => (
              <div key={subId} className={`${mobileDropdown === id ? 'block' : 'hidden'} flex flex-row items-center h-[40px] pl-[25px] text-[#131313] text-header-mobile-sb hover:bg-[#EBF4FF]`}>
                <Link
                  href={subNav.toLowerCase().replace(/ /g, '')}
                  className="text-[black] hover:text-[#0E72E8]"
                  onClick={handleSubNavClick}
                >
                  {subNav}
                </Link>
              </div>
            ))}
          </div>
        ))}
        {session && <button className='login-btn ml-2 pl-[18px] text-txt-sb h-[40px] cursor-pointer mt-4 font-semibold'><span className='login-btn-content'><Link href="/profile">Profile</Link></span></button>}
        <div className="pl-[17px] mt-[10px]">
        {session?.user ? <Btn text="Logout"/> : <Btn text="Login"/>}
        </div>
      </div>
    </>
  );
}
