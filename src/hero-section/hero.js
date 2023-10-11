import './hero.css';
import star from './star.png';
import light from './Creative 1.png';
import chain from './chain-9365116-7621444.png';
import chain2 from './1f4a5.png';
import man from './man-wearing-smart-glasses-touching-virtual-screen 1.png';
import shine from './Image 1.png';
import star2 from './star (1).png';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero =()=>{
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
    
    const [daysTimer, setDaysTimer] = useState(0);
    const [hoursTimer, setHourTimer] = useState(0);
    const [minutesTimer, setMinutesTimer] = useState(0);
    const [secondsTimer, setSecondsTimer] = useState(0);

    const interval = useRef();
    const StartTimer =()=>{
      const countdownDate = new Date('november 18, 2023 00:00:00').getTime();
       interval.current = setInterval(()=>{
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24)/(1000*60*60)))
        const minutes = Math.floor((distance% (1000*60*60))/(1000*60));
        const second = Math.floor((distance%(1000*60))/1000);
        if (distance<0 ){
          clearInterval(interval.current);
        } else{
          setDaysTimer(days);
          setHourTimer(hours);
          setMinutesTimer(minutes)
          setSecondsTimer(second);
        }
      },1000)
    };
    
    useEffect(()=>{
        StartTimer();
    });
    
    return(
        <div className='hero' ref={sectionRef}>
            <div className='hero-1'>
                <img src={star} alt='img' className='hero-1-img'/>
                <h1 className='hero-1-header'>
                    Igniting a Revolution in HR Innovation
                </h1>
            </div>
            <div className='hero-2'>
                <div className='hero-2-left'>
                <img src={light} alt='img' className='hero-2-left-img1'/>
                <h1 className='hero-2-left-header'>
                    getlinkedTech
                </h1>
                <div className='hero-2-left-flex'>
                <h1 className='hero-2-left-header hero-2-left-header-2'>Hackathon<span className='hero-2-left-span'>1.0</span></h1>
                <img src={chain} alt='img' className='chain'/>
                <img src={chain2} alt='img' className='chain2'/>
                </div>
                <p className='hero-2-left-text'>Participate in getlinked Tech Hackathon 2023 stand
                a chance to win a big price</p>
                <div className='btn-flex'>
                <button className='hero-2-left-btn'>
                    <Link to={'/register'} className='hero-link'>Register</Link>
                </button>
                </div>
                <img src={star2} alt='img' className='hero-2-right-img3'/>
                <h1 className='timers'><span>{daysTimer} days: </span> <span>{hoursTimer} hrs: </span> 
                <span>{minutesTimer} min: </span><span>
                {secondsTimer}s</span> to go</h1>
                </div>
                <div className='hero-2-right'>
                    <img src={man} alt='img' className='hero-2-right-img1'/>
                    <img src={shine} alt='img' className='hero-2-right-img2'/>
                </div>
            </div>
            
        </div>
    )
}
export default Hero;