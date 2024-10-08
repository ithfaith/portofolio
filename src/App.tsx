import Navbar from './components/navbar';
import Hero from './components/hero';  // Import komponen Hero
import Tentang from './page/tentang'; 
import Skills from './myskill/skills'; 
import Footer from './page/footer'; // Import halaman Tentang
import ContactForm from './contactform/contact';
import Review from './review/review';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tentang />
      <Skills />
      <ContactForm />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
