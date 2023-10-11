import idea from './the big idea 1.png';
import './intro.css';
import img1 from './sata gra.png';
import img2 from './arrow.png';
import { useRef, useEffect } from 'react';

const Intro =()=>{
    const sectionRef = useRef(null);

    useEffect(() => {
      const revealcallbk = function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section-hidden');
      };
  
      const revealSection = new IntersectionObserver(revealcallbk, {
        root: null,
        threshold: 0.15,
      });
  
      if (sectionRef.current) {
        revealSection.observe(sectionRef.current);
        sectionRef.current.classList.add('section-hidden');
      }}, [])
    return(
        <div className='intro' ref={sectionRef}>
            <div className='intro-left'>
            <img src={img1} alt="img" className='intro-left-img1'/>
            <img src={idea} alt="img" className='intro-left-img2'/>
            <img src={img2} alt="img" className='intro-left-img3'/>
            </div>
            <div className='intro-right'>
                <div className='intro-right-1'>
                <h1 className='intro-right-header'>Introduction to getlinked<br/>
                <span className='intro-right-header2'>tech Hackathon1.0</span></h1>
                <p className='intro-right-text'>Our tech hackathon is a melting pt of 
                visionaries, and its purpose is as
                clear as day to shape the future. Whether you're a coding genius, a
                design maverick, or a concept wizard, you will have a chance to transform
                your ideas to reality. Solving real world problems, pushing the boundaries
                of technology, and creating solutions that can change the world.
                that's what we are all about!</p>
            </div>
            <img src={img1} alt='img' className='intro-right-img'/>
            </div>
        </div>
    )
}
export default Intro;