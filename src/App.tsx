import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';  // Import komponen Hero
import Tentang from './page/tentang'; 
import Skills from './myskill/skills'; 
import Footer from './page/footer'; // Import halaman Tentang
import ContactForm from './contactform/contact';
import Review from './review/review';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tentang />
      <Skills />
      <ContactForm />
      <Footer />
      <Review />
    </div>
  );
};

export default App;
