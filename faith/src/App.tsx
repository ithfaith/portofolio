import Navbar from './components/navbar';
import Hero from './components/hero';  
import Tentang from './page/tentang'; 
import Skills from './myskill/skills'; 
import Footer from './page/footer'; 
import ContactForm from './contactform/contact';
import Review from './review/review';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JavascriptPage from './myskill/skill/javascript'; 
import TypescriptPage from './myskill/skill/typescript';
import CssPage from './myskill/skill/css';
import HtmlPage from './myskill/skill/html';
import ReactPage from './myskill/skill/react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Tentang />
            <Skills />
            <ContactForm />
            <Review />
            <Footer />
          </>
        } />

        <Route path="/javascript" element={<JavascriptPage />} />
        <Route path="/typescript" element={<TypescriptPage />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/react" element={<ReactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
