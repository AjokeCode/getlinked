import img1 from './9486889 1.png';
import img2 from './Rewards.png';
import './prize.css';
import { useRef, useEffect } from 'react';

const Prize =()=>{
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
        <div className="prize" ref={sectionRef}>
                <div className='prize-left'>
                <img src={img1} alt='img' className='prize-left-img'/>
                </div>
            <div className="prize-right">
                <h1 className='prize-right-header'>Prizes and 
                <span className='prize-right-span'> Rewards</span></h1>
                <p className='prize-right-text'>
                    Highlight of the prizes or rewards for winners and 
                    for Participants.
                </p>
                <img src={img2} alt='img' className='prize-right-img'/>
            </div>
        </div>
    )
}

export default Prize;