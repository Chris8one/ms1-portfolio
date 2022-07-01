import { Parallax } from 'react-parallax';
import Portfolio from '../img/portfolio.jpg';


const PortfolioSection = () => (
    <Parallax className="image" bgImage={Portfolio} strength={-400}>
        <div className="content">
            <span className="img-text">Software Engineer</span>
        </div>
    </Parallax>
);

export default PortfolioSection;