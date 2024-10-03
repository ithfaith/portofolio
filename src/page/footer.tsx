import { Link } from "react-scroll";

const Footer = () => {
    return (
      <footer className="footer footer-center bg-gray-600 rounded p-10" id="footer">
      <nav className="grid grid-flow-col gap-4">
      <div className="lg:tooltip" data-tip="Back">
      <h6 className="btn btn-ghost font-ruslan text-white"><Link activeClass="active" to="hero" spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Faith</Link></h6>
      </div>
      </nav>
      <nav>
      <div className="bg-gray-600 flex justify-center gap-4">
            <a href="https://wa.me/6282120543904" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/iconwhatsapp-removebg-preview.png" className="w-12 h-12" alt="WhatsApp" />
            </a>
            <a href="https://www.instagram.com/mchmmdfaith_/" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/iconinstagram-removebg-preview.png" className="w-12 h-12" alt="Instagram" />
            </a>
            <a href="https://github.com/ithfaith" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/icongithub-removebg-preview.png" className="w-12 h-12" alt="GitHub" />
            </a>
        </div>
        
      </nav>
      <aside>
        <p className="text-white">Copyright © {new Date().getFullYear()} - @mochmmdfaith</p>
      </aside>
    </footer>

    );
};

export default Footer;

