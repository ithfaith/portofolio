import { Link } from 'react-router-dom';

const CssPage: React.FC = () => {
  return (
    <div className="hero w-screen min-h-screen bg-blue-950" id="css">
      <div className="hero-content flex-col lg:flex-row-reverse border-2 border-white rounded-lg">
        <img
          src={'https://cdn-icons-png.flaticon.com/512/732/732190.png'}
          className="max-w-sm rounded-lg shadow-md hidden lg:block"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
        <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-white">CSS</h1>
        <p className="mb-5 text-white">
        CSS (Cascading Style Sheets) adalah bahasa stylesheet yang digunakan untuk mengatur tampilan dan layout dari halaman web. CSS dapat digunakan untuk mengatur warna, font, ukuran, dan lain-lain. Dengan menggunakan CSS, kita dapat membuat halaman web yang lebih cantik dan menarik.
        </p>
        <div className="lg:tooltip" data-tip="Back to Home">
          <Link to="/">
           <button className="btn">Back</button>
          </Link>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CssPage;


