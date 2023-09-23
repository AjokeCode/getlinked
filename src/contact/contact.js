import Header from "../header/header";
import img1 from '../intro-section/sata gra.png';
import img2 from '../footer/Vector (11).png';
import img3 from '../footer/Vector (12).png';
import img4 from '../footer/Vector (13).png';
import img5 from '../footer/Vector (14).png';
import img6 from '../register/congratulation.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import './contact.css';
import '../register/register.css';

const Contact =()=>{
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        message: '',
        topics: '',

    });
    const [isSuccessful, setIsSuccessful] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://backend.getlinked.ai/hackathon/contact-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            console.log(response);
            setIsSuccessful(true)
          } else {
            const errorData = await response.json();
            alert("There is error submitting this form please submit again");
            console.error(errorData);
            
          }
        } catch (error) {
            alert('Unexpected error occur')
            console.error(error)
        }};
    return(
        <>
        <Header/>
        <div className={`${isSuccessful ? 'modal' : 'none'}`}>
            <div className="modal-div">
                <img src={img6} alt="img" className="modal-img"/>
                <h1 className="modal-header">
                    Congratulations<br/>
                    We have successfully recieved your message<br/>
                    
                </h1>
                <p className="modal-text">
                    We will get back to you as soon as possible
                </p>
                <div className="reg-btn">
                <button className="register-btn">
                <Link to={'/'} className="modal-link">Back to home</Link>
                </button>
                </div>
            </div>
        </div>
        <div className="contact">
            <div className="contact-left">
                <img src={img1} alt="img" className="contact-star"/>
                <h1 className="contact-left-header">
                    Get in Touch
                </h1>
                <h2 className="contact-left-header-2 all">
                    Contact <br/>
                    Information
                </h2>
                <h2 className="contact-left-header-3 all">
                    27, Alara Street<br/>
                    Yaba 100012<br/>
                    Lagos State
                </h2>
                <h2 className="contact-left-header-4 all">
                    Call us: 07067981819
                </h2>
                <h2 className="contact-left-header-5 all">
                We are open from Monday-Friday<br/>
                08:00am-05:00pm
                </h2>
                
                    <h1 className="share-header all">
                        Share on
                    </h1>
                    <div className="share-div">
                    <img src={img2} alt='img' className='share-imgs'/>
                   <img src={img3} alt='img' className='share-imgs share-img' />
                   <img src={img4} alt='img' className='share-imgs share-img'/>
                   <img src={img5} alt='img' className='share-imgs share-img'/>
                </div>
            </div>
            <form className="contact-right"  onSubmit={handleSubmit}>
                <h1 className="contact-right-header">
                    Questions or need assistance?<br/>
                    Let us know about it
                </h1>
                <input placeholder="First Name" type="text" name="first_name"
                required onChange={handleChange}  className="contact-right-input"/>
                <input placeholder="Mail" type="email" name="email"
                required onChange={handleChange}  className="contact-right-input"/>
                
                <input placeholder="Topics" type="text" name="topics"
                required onChange={handleChange}  className="contact-right-input"/>
                <textarea placeholder="Message" name="message"
                required onChange={handleChange} 
                className="contact-right-input contact-right-input1"
                ></textarea>
                <button type="submit" className="contact-right-btn">
                    Submit
                </button>
            </form>
            <div className="share-mobile">
            <h1 className="share-header all">
                        Share on
                    </h1>
                    <div className="share-div">
                    <img src={img2} alt='img' className='share-imgs'/>
                   <img src={img3} alt='img' className='share-imgs share-img' />
                   <img src={img4} alt='img' className='share-imgs share-img'/>
                   <img src={img5} alt='img' className='share-imgs share-img'/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;