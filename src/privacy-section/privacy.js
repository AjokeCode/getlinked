import img1 from './08 1.png';
import img2 from './Vector (10).png';
import img3 from './list terms.png';
import './privacy.css';


const Privacy =()=>{
    return(
        <div className="privacy">
            <div className="privacy-left">
                <h1 className='privacy-left-header'>
                    Privacy Policy and<br/><span className='privacy-left-span'>Terms</span>
                </h1>
                <h2 className='privacy-left-header2'>
                    Last updated on September 12, 2023
                </h2>
                <p className='privacy-left-text'>
                    Below are our privacy & policy, which outline alot of goodies<br/>
                    it's our aim to always take care of our participant
                </p>
                <div className='privacy-left-div'>
                    <p className='privacy-left-text2'>
                    At getlinked tech Hackhathon1.0, we value your privacy<br/>
                    and are committed to protect your personal information.<br/>
                    This Privacy Policy outlines how we collect, use, disclose<br/>
                    and safeguard your data when you participate in our tech<br/>
                    Hackhathon event. By participate in our event, you consent<br/>
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
                        The Standard License grant you an exclusive right to<br/>
                        navigate and register for our event.
                    </p>
                </div>
                
                <div className='privacy-left-div2'>
                    <img src={img3} alt='img' className='privacy-left-mark'/>
                    <p className='privacy-left-text3'>
                        You are Licensed to use the item available at any free source<br/>
                        sites for your project development 
                    </p>
                </div>
                <button className='privacy-left-btn'>
                    Read more
                </button>
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