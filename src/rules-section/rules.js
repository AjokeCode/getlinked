import img1 from './7450159 1.png';
import img2 from '../hero-section/star.png';
import img3 from '../hero-section/star (1).png';
import './rules.css';

const Rules =()=>{
    return(
        <div className='rules'>
            <div className='rules-left'>
            <img src={img3} alt='img' className='rules-left-img'/>
                <h1 className='rules-left-header'>Rules and <span className='rules-left-header2'>Guidelines</span></h1>
                <p className='rules-left-text'>Our tech hackathon is a melting pt of visionaries, and its purpose is as<br/>
                clear as day to shape the future. Whether you're a coding genius, a<br/>
                design maverick, or a concept wizard, you will have a chance to transform<br/>
                your ideas to reality. Solving real world problems, pushing the boundaries<br/>
                of technology, and creating solutions that can change the world.<br/>
                that's what we are all about!</p>
            </div>
            <div className='rules-right'>
                <img src={img2} alt='img' className='rules-right-img1 rules-right-img'/>
                <img src={img1} alt='img' className='rules-right-img2'/>
            </div>
        </div>
    )
}
export default Rules;