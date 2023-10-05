import Header from "../header/header";
import img1 from './3d-graphic-designer-showing-thumbs-up-png 1.png';
import './register.css';
import img2 from './congratulation.png';
import { Link } from "react-router-dom";
import img4 from './1f6b6-2640.png';
import img5 from './image_processing20200511-10310-13mnlsx.png';
import { useState, useRef, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
const Register =()=>{
    const [isLoading, setIsLoading]= useState(false)
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
    const [formData, setFormData] = useState({
        team_name: '' ,
        phone_number: '',  
        email: '',
        project_topic: '',
        category: '',
        group_size: '',
        privacy_poclicy_accepted: 'false'

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    const [isSuccessful, setIsSuccessful] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
          const response = await fetch('https://backend.getlinked.ai/hackathon/registration', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            setIsLoading(false)
            setIsSuccessful(true)
            
          } else {
            setIsLoading(false)
            alert("There is error submitting this form please submit again");
            console.error(response)
            
          }
        } catch (error) {
            alert('Unexpected error occur')
            
        }};
    
    return(
        
        <>
        <Header/>
        <div className={`${isSuccessful ? 'modal' : 'none'}`}>
            <div className="modal-div">
                <img src={img2} alt="img"/>
                <h1 className="modal-header">
                    Congratulations<br/>
                    You have successfully registered
                </h1>
                <p className="modal-text">
                    Yes! It wasn't easy and you did it!<br/>
                    Check your mail box for next step
                </p>
                <button className="register-btn">
                <Link to={'/'} className="modal-link">Back to home</Link>
                </button>
            </div>
        </div>
        <div className="register" ref={sectionRef}>
            <img src={img1} alt="img" className="register-img-3"/>
            
            <form onSubmit={handleSubmit} className="register-form">
                <h1 className="register-form-header">
                    Register
                </h1>
                <div className="register-form-div">
                    <p className="register-form-text">
                        Be part of this movement
                    </p>
                    <img src={img4} alt="img" className="register-form-img1"/>
                    <img src={img5} alt="img" className="register-form-img1"/>
                </div>
                <h1 className="register-form-header2">
                    CREATE YOUR ACCOUNT
                </h1>
                <div className="form-grid">
                    <div className="form-grid-1">
                        <label className="label">Team's Name</label>
                        <input placeholder="Enter the name of your group" required type="text"
                        onChange={handleChange} name="team_name"  className="input"/>
                    </div>
                    <div className="form-grid-1">
                        <label className="label">Phone</label>
                        <input placeholder="Enter your phone number" required type="tel"
                        onChange={handleChange} name="phone_number"  className="input"/>
                    </div>
                    <div className="form-grid-1">
                        <label className="label">Email</label>
                        <input placeholder="Enter your email address" required type="email"
                        onChange={handleChange} name="email"  className="input"/>
                    </div>
                    <div className="form-grid-1">
                        <label className="label">Project Topic</label>
                        <input placeholder="What is your group project topic" required type="text"
                        onChange={handleChange} name="project_topic" className="input"/>
                    </div>
                    <div className="form-grid-1">
                    <label className="label">Category</label>
                        <select required onChange={handleChange}  className="input" name="category">
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                        </select>
                    </div>
                    <div className="form-grid-1">
                        <label className="label">Group Size</label>
                        <select required onChange={handleChange} className="input" name="group_size">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <h1 className="register-header3">Please Review your registration details before submitting</h1>
                <div className="register-header-div">
                    <input type="radio"
                     onClick={()=> formData.privacy_poclicy_accepted === 'true'}/>
                    <p className="register-text">
                        I agreed with the event's Terms and Conditions and Privacy Policy
                    </p>
                </div>
                <button type="submit" className="register-btn" >
                {isLoading?  (<BallTriangle
                        height={80}
                        width={80}
                        radius={5}
                        color="#ffffff"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                        />): (<>Register</>)}
                </button>
            </form>
        </div>
        </>
    )
}
export default Register