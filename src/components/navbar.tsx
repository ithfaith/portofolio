import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Menyembunyikan navbar saat scroll ke bawah dan muncul saat scroll ke atas
    if (currentScrollPos > lastScrollPos) {
      setIsVisible(false); // Scroll ke bawah -> sembunyikan
    } else {
      setIsVisible(true); // Scroll ke atas -> tampilkan
    }

    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <div className={`navbar bg-blue-950 fixed top-0 z-10 w-full transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Home</Link>
            </li>
            <li>
              <Link activeClass="active" to="tentang" spy={true} smooth={true} offset={-70} duration={500}>About me</Link>
            </li>
            <li>
              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact me</Link>
            </li>
            <li>
              <Link activeClass="active" to="review" spy={true} smooth={true} offset={-70} duration={500}>Reviews</Link>
            </li>
          </ul>
        </div>
        <h3 className="font-ruslan text-lg typing-hai">Mochammad Faith</h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Home</Link>
          </li>
          <li>
            <Link activeClass="active" to="tentang" spy={true} smooth={true} offset={-70} duration={500}>About me</Link>
          </li>
          <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
          </li>
          <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact me</Link>
          </li>
          <li>
            <Link activeClass="active" to="review" spy={true} smooth={true} offset={-70} duration={500}>Reviews</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end ml-auto flex items-center">
        <div className="avatar mr-5">
          <div className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2">
            <img src="./src/assets/faithafdhal.jpg" className="w-full h-full" alt="Mochammad Faith" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
