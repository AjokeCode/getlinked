import img1 from './08 1.png';
import img2 from './Vector (10).png';
import img3 from './list terms.png';
import './privacy.css';
import { useRef, useEffect } from 'react';


const Privacy =()=>{

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
        <div className="privacy" ref={sectionRef}>
            <div className="privacy-left">
                <div className='privacy-left-1'>
                <h1 className='privacy-left-header'>
                    Privacy Policy and<span className='privacy-left-span'>Terms</span>
                </h1>
                <h2 className='privacy-left-header2'>
                    Last updated on September 12, 2023
                </h2>
                <p className='privacy-left-text'>
                    Below are our privacy & policy, which outline alot of goodies
                    it's our aim to always take care of our participant
                </p>
                <div className='privacy-left-div'>
                    <p className='privacy-left-text2'>
                    At getlinked tech Hackhathon1.0, we value your privacy
                    and are committed to protect your personal information.
                    This Privacy Policy outlines how we collect, use, disclose
                    and safeguard your data when you participate in our tech
                    Hackhathon event. By participate in our event, you consent
                    to the practices described in this policy.
                </p>
                <h1 className='privacy-left-header3'>
                    Licensing Policy
                </h1>
                <h2 className='privacy-left-header4'>
                    Here are terms of our Standard License 
                </h2>
                <div className='privacy-left-div2'>
                    <img src={img3} alt='img' className='privacy-left-mark'/>
                    <p className='privacy-left-text3'>
                        The Standard License grant you an exclusive right to
                        navigate and register for our event.
                    </p>
                </div>
                
                <div className='privacy-left-div2'>
                    <img src={img3} alt='img' className='privacy-left-mark'/>
                    <p className='privacy-left-text3'>
                        You are Licensed to use the item available at any free source
                        sites for your project development 
                    </p>
                </div>
                <button className='privacy-left-btn'>
                    Read more
                </button>
                </div>
                </div>
            </div>
            <div className="privacy-right">
                <img src={img2} alt='img' className='privacy-right-top'/>
                <img src={img1} alt='img' className='privacy-right-bottom'/>
            </div>
        </div>
    )
}
export default Privacy;