import { Parallax } from 'react-parallax';
import Skills from '../img/skills.jpg';


const SkillsSection = () => (
    <Parallax className="image" bgImage={Skills} strength={-400}>
        <div className="content">
            <span className="img-text">Software Engineer</span>
        </div>
    </Parallax>
);

export default SkillsSection;