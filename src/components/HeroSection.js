import { Parallax } from 'react-parallax';
import Hero from '../img/hero.jpg';


const HeroSection = () => (
    <div className="diagonal-box">
        <Parallax className="image" bgImage={Hero} strength={-400}>
            <div className="content">
                <span className="img-text">Software Engineer</span>
            </div>
        </Parallax>
    </div>
);

export default HeroSection;