import img1 from './Partner and sponsors section.png';
import './sponsor.css';
import { useRef, useEffect } from 'react';

const Sponsor =()=>{
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
        <div className="sponsor" ref={sectionRef}>
            <div className='sponsor-top'>
            <h1 className='sponsor-header'>
                Partners and Sponsors
            </h1>
            <p className='sponsor-text'>
                Getlinked Hackhathon1.0 is honored to have the following major
                companies as its partner and sponsors
            </p>
            </div>
            <img src={img1} alt='img' className='sponsor-img'/>
        </div>
    )
}
export default Sponsor;