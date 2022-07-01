import { Parallax } from 'react-parallax';
import About from '../img/about.jpg';


const AboutSection = () => (
    <Parallax className="image" bgImage={About} strength={-400}>
        <div className="content">
            <span className="img-text">Software Engineer</span>
        </div>
    </Parallax>
);

export default AboutSection;