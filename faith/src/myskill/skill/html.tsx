import { Link } from 'react-router-dom';

const HtmlPage: React.FC = () => {
  return (
    <div className="hero w-screen min-h-screen bg-blue-950" id="html">
      <div className="hero-content flex-col lg:flex-row-reverse border-2 border-white rounded-lg">
        <img
          src={'https://cdn-icons-png.flaticon.com/512/732/732212.png'}
          className="max-w-sm rounded-lg shadow-md hidden lg:block"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
        <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-white">HTML</h1>
        <p className="mb-5 text-white">
        HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web. HTML digunakan untuk membuat struktur dan konten dari halaman web. Dengan menggunakan HTML, kita dapat membuat halaman web yang lebih interaktif dan dinamis, seperti membuat link, membuat gambar, membuat form, dan masih banyak lagi.
        </p>
        <div className="lg:tooltip" data-tip="Back to Home">
          <Link to="skills">
           <button className="btn">Back</button>
          </Link>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HtmlPage;

