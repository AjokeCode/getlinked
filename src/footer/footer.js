import img1 from './sata gra.png';
import img2 from './Vector (11).png';
import img3 from './Vector (12).png';
import img4 from './Vector (13).png';
import img5 from './Vector (14).png';
import img6 from './Vector (15).png'
import img7 from './Group (1).png';
import './footer.css';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Footer =()=>{
    const handleURL =(url)=>{
        window.open(url, '_blank')
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

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
        <div className="footer" ref={sectionRef}>
            <div className='footer-top'>
            <img src={img1} alt="img" className='footer-top-img'/>
            <div className='footer-top-div'>
                <h1 className='footer-top-header'>get<span className='footer-top-span'>linked</span></h1>
                <p className='footer-top-text'>
                    Getlinked Tech Hackhathon is a technology innovation program
                    established by a group of organization with the aim of showcasing
                    young and talented individuals in the field of technology
                </p>
                
            <div className='footer-top-div2'>
                <h1 className='footer-top-header2'>Terms of Use</h1>
                <div className='footer-top-div3'></div>
                <h1 className='footer-top-header2'>
                    Privacy Policy
                </h1>
            </div>
            </div>
            <div className='footer-top-div4'>
                <h1 className='footer-top-header4'>Useful Links</h1>
                <ul className='footer-top-list'>
                    <li className='footer-top-item' onClick={scrollToTop}>
                        <Link to={'/overview'} className='footer-link'>Overview</Link>
                    </li>
                    <li className='footer-top-item' onClick={scrollToTop}>
                       <Link to={'/timeline'} className='footer-link'> Timeline</Link>
                    </li>
                    <li className='footer-top-item' onClick={scrollToTop}>
                    <Link to={'/faqs'} className='footer-link'>    FAQS</Link>
                    </li>
                    <li className='footer-top-item' onClick={scrollToTop}>
                        <Link to={'/register'} className='footer-link'>Register</Link>
                    </li>
                </ul>
                
                <div className='footer-top-div5'>
                   <h1 className='footer-top-header5'>Follow Us</h1>
                   <img src={img2} alt='img' className='footer-top-imgs'
                   onClick={()=> handleURL('https://instagram.com/wasiu_maleeka?igshid=OGQ5ZDc2ODk2ZA==')}/>
                   <img src={img3} alt='img' className='footer-top-imgs'
                   onClick={()=> handleURL('https://x.com/wasiu_maleek?t=EPtuY6LMRc3k3K-h_BIvPA&s=09')}/>
                   <img src={img4} alt='img' className='footer-top-imgs'
                   onClick={()=>handleURL('https://www.facebook.com/abdulmaleek.wasiu')}/>
                   <img src={img5} alt='img' className='footer-top-imgs' 
                   onClick={()=>handleURL('www.linkedin.com/in/wasiumaleek')}/>     
                </div>
            </div>
            <img src={img1} alt="img" className='footer-top-img2'/>
            <div className='footer-top-div6'>
                <h1 className='footer-top-header6'>Contact Us</h1>
                <div className='footer-top-div7'>
                    <img src={img7} alt='img' className='footer-top-img3'/>
                    <h1 className='footer-top-header7'>
                        +2347067981819
                    </h1>
                </div>
                <div className='footer-top-div7'>
                    <img src={img6} alt='img' className='footer-top-img4'/>
                    <p className='footer-top-header7'>
                        27, Alara Street<br/>
                        Yaba 10012<br/>
                        Lagos State
                    </p>
                </div>
            </div>
            <img src={img1} alt='img' className='footer-top-img5'/>
        </div>
        <div className='footer-bottom'>
            <img src={img1} alt='img' className='footer-bottom-img'/>
            <h1 className='footer-bottom-header'>
                All right reserved &copy; getlinked ltd
            </h1>
        </div>
        </div>
    )
}
export default Footer;