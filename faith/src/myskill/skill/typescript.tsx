import { Link } from 'react-router-dom';

const TypescriptPage: React.FC = () => {
  return (
    <div className="hero w-screen min-h-screen bg-blue-950" id="typescript">
      <div className="hero-content flex-col lg:flex-row-reverse border-2 border-white rounded-lg">
        <img
          src={'https://cdn-icons-png.flaticon.com/512/5968/5968381.png'}
          className="max-w-sm rounded-lg shadow-md hidden lg:block"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
        <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-white">Typescript</h1>
        <p className="mb-5 text-white">
        Typescript adalah bahasa pemrograman tingkat tinggi yang dikembangkan oleh Microsoft dan digunakan untuk membuat efek-efek yang dinamis dan interaktif dalam sebuah halaman web. Typescript dapat digunakan untuk membuat program yang berjalan di sisi klien (client-side) maupun di sisi server (server-side). Dengan menggunakan typescript, kita dapat membuat halaman web yang lebih interaktif dan dinamis, seperti membuat animasi, membuat efek hover, membuat form yang lebih canggih, dan masih banyak lagi. Bahkan, dengan menggunakan typescript, kita dapat membuat program yang berjalan di luar web, seperti membuat program desktop, membuat program mobile, dan masih banyak lagi.
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

export default TypescriptPage;

