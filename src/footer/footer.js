import img1 from './sata gra.png';
import img2 from './Vector (11).png';
import img3 from './Vector (12).png';
import img4 from './Vector (13).png';
import img5 from './Vector (14).png';
import img6 from './Vector (15).png'
import img7 from './Group (1).png';
import './footer.css';



const Footer =()=>{
    const handleURL =(url)=>{
        window.open(url, '_blank')
    }
    return(
        <div className="footer">
            <div className='footer-top'>
            <img src={img1} alt="img" className='footer-top-img'/>
            <div className='footer-top-div'>
                <h1 className='footer-top-header'>get<span className='footer-top-span'>linked</span></h1>
                <p className='footer-top-text'>
                    Getlinked Tech Hackhathon is a technology innovation program<br/>
                    established by a group of organization with the aim of showcasing<br/>
                    young and talented individuals in the field of technology
                </p>
                
            <div className='footer-top-div2'>
                <h1 className='footer-top-header2'>Terms of Use</h1>
                <div className='footer-top-div3'></div>
                <h1 className='footer-top-header3'>
                    Privacy Policy
                </h1>
            </div>
            </div>
            <div className='footer-top-div4'>
                <h1 className='footer-top-header4'>Useful Links</h1>
                <ul className='footer-top-list'>
                    <li className='footer-top-item'>
                        Overview
                    </li>
                    <li className='footer-top-item'>
                        Timeline
                    </li>
                    <li className='footer-top-item'>
                        FAQS
                    </li>
                    <li className='footer-top-item'>
                        Register
                    </li>
                </ul>
                
                <div className='footer-top-div5'>
                   <h1 className='footer-top-header5'>Follow Us</h1>
                   <img src={img2} alt='img' className='footer-top-imgs'/>
                   <img src={img3} alt='img' className='footer-top-imgs'/>
                   <img src={img4} alt='img' className='footer-top-imgs'/>
                   <img src={img5} alt='img' className='footer-top-imgs'/>     
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