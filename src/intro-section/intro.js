import idea from './the big idea 1.png';
import './intro.css';
import img1 from './sata gra.png';
import img2 from './arrow.png';

const Intro =()=>{
    return(
        <div className='intro'>
            <div className='intro-left'>
            <img src={img1} alt="img" className='intro-left-img1'/>
            <img src={idea} alt="img" className='intro-left-img2'/>
            <img src={img2} alt="img" className='intro-left-img3'/>
            </div>
            <div className='intro-right'>
                <div>
                <h1 className='intro-right-header'>Introduction to getlinked<br/>
                <span className='intro-right-header2'>tech Hackathon1.0</span></h1>
                <p className='intro-right-text'>Our tech hackathon is a melting pt of visionaries, and its purpose is as<br/>
                clear as day to shape the future. Whether you're a coding genius, a<br/>
                design maverick, or a concept wizard, you will have a chance to transform<br/>
                your ideas to reality. Solving real world problems, pushing the boundaries<br/>
                of technology, and creating solutions that can change the world.<br/>
                that's what we are all about!</p>
            </div>
            <img src={img1} alt='img' className='intro-right-img'/>
            </div>
        </div>
    )
}
export default Intro;