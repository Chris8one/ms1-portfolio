import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import TextBox from './components/TextBox';
import './index.css';

function App() {
  return (
    <div>
      <HeroSection />
      <TextBox />
      <AboutSection />
      <TextBox />
      <PortfolioSection />
      <TextBox />
      <SkillsSection />
      <TextBox />
      <ContactSection />
    </div>
  );
}

export default App;
