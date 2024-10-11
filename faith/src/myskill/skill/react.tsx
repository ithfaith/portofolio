import { Link } from 'react-router-dom';

const ReactPage: React.FC = () => {
  return (
    <div className="hero w-screen min-h-screen bg-blue-950" id="react">
      <div className="hero-content flex-col lg:flex-row-reverse border-2 border-white rounded-lg">
        <img
          src={'https://cdn-icons-png.flaticon.com/512/1126/1126012.png'}
          className="max-w-sm rounded-lg shadow-md hidden lg:block"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
        <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-white">React</h1>
        <p className="mb-5 text-white">
        React adalah library JavaScript yang dikembangkan oleh Facebook dan digunakan untuk membuat user interface yang interaktif dan dinamis. React dapat digunakan untuk membuat program yang berjalan di sisi klien (client-side) maupun di sisi server (server-side). Dengan menggunakan react, kita dapat membuat halaman web yang lebih interaktif dan dinamis, seperti membuat animasi, membuat efek hover, membuat form yang lebih canggih, dan masih banyak lagi.
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

export default ReactPage;

