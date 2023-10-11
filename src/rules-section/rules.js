import img1 from './7450159 1.png';
import img2 from '../hero-section/star.png';
import img3 from '../hero-section/star (1).png';
import './rules.css';
import { useRef, useEffect } from 'react';

const Rules =()=>{

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
        <div className='rules' ref={sectionRef}>
            <div className='rules-left'>
              <div className='rules-left-1'>
            <img src={img3} alt='img' className='rules-left-img'/>
                <h1 className='rules-left-header'>Rules and <span className='rules-left-header2'>Guidelines</span></h1>
                <p className='rules-left-text'>Our tech hackathon is a melting pt of visionaries,
                 and its purpose is as
                clear as day to shape the future. Whether you're a coding genius, a
                design maverick, or a concept wizard, you will have a chance to transform
                your ideas to reality. Solving real world problems, pushing the boundaries
                of technology, and creating solutions that can change the world.
                that's what we are all about!</p>
                </div>
            </div>
            <div className='rules-right'>
                <img src={img2} alt='img' className='rules-right-img1 rules-right-img'/>
                <img src={img1} alt='img' className='rules-right-img2'/>
            </div>
        </div>
    )
}
export default Rules;