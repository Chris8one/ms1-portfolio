import { Parallax } from 'react-parallax';
import Contact from '../img/contact.jpg';


const ContactSection = () => (
    <Parallax className="image" bgImage={Contact} strength={-400}>
        <div className="content">
            <span className="img-text">Software Engineer</span>
        </div>
    </Parallax>
);

export default ContactSection;