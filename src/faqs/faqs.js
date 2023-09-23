import { useState } from 'react';
import './faqs.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';
import img from './cwok_casual_21 1.png';
import img1 from './_.png';
import img2 from './_ (1).png';


const FAQ = () => {
    
  const initialStates = Array(6).fill(false); // Adjust the size based on the number of FAQ items
  const [isClickArray, setIsClickArray] = useState(initialStates);

  const handleClick = (index) => {
    const newIsClickArray = [...isClickArray];
    newIsClickArray[index] = !newIsClickArray[index];
    setIsClickArray(newIsClickArray);
  };
  

  return (
        <div className='faq'>
            <div className='faq-left'>
                <h1 className='faq-left-header'>Frequently Ask<br/>
                <span className='faq-left-span'>Questions</span></h1>
                <p className='faq-left-text'>We got answers to the questions that you might<br/>
                want to ask about <span className='faq-left-span2'>getlinked Hackathon1.0</span></p>
                <div className='faq-que'>
                    <div className='faq-que-headers'>
                    <h2 className='faq-que-header'>
                        Can I work on a project i started before Hackathon?
                    </h2>
                    <i className='faq-left-pad-icon'>
              {
                !isClickArray[0] ? <RiArrowDropDownLine onClick={() => handleClick(0)} />
                  : <RiArrowDropUpLine onClick={() => handleClick(0)} />
              }
            </i>
            </div>
            <p className={`${!isClickArray[0] ? 'none' : 'faq-left-pad-text'}`}>
                Offcourse you can! So far there is no plagiarism
            </p>
            </div>
                <div className='faq-que'>
                <div className='faq-que-headers'>
                    <h2 className='faq-que-header'>
                        What happens if i need help during Hackathon?
                    </h2>
                    <i className='faq-left-pad-icon'>
              {
                !isClickArray[1] ? <RiArrowDropDownLine onClick={() => handleClick(1)} />
                  : <RiArrowDropUpLine onClick={() => handleClick(1)} />
              }
            </i>
            </div>
            <p className={`${!isClickArray[1] ? 'none' : 'faq-left-pad-text'}`}>
                Our help center is always available at your services anytime
            </p>
                </div>
                <div className='faq-que'>
                <div className='faq-que-headers'>
                    <h2>
                        What happens if i dont have idea for a project
                    </h2>
                    <i className='faq-left-pad-icon'>
              {
                !isClickArray[2] ? <RiArrowDropDownLine onClick={() => handleClick(2)} />
                  : <RiArrowDropUpLine onClick={() => handleClick(2)} />
              }
            </i>
            </div>
            <p className={`${!isClickArray[2] ? 'none' : 'faq-left-pad-text'}`}>
                We need tech enthusiast who is ready to have fun in learning more,<br/> so 
                you might not be a professional to be qualify
            </p>
                </div>
                <div className='faq-que'>
                <div className='faq-que-headers'>
                    <h2>
                        Can i join a team or do i have to come with one?
                    </h2>
                    <i className='faq-left-pad-icon'>
              {
                !isClickArray[3] ? <RiArrowDropDownLine onClick={() => handleClick(3)} />
                  : <RiArrowDropUpLine onClick={() => handleClick(3)} />
              }
            </i>
            </div>
            <p className={`${!isClickArray[3] ? 'none' : 'faq-left-pad-text'}`}>
                Offcourse team is more than two member so you have to join a team
            </p>
        </div>
        <div className='faq-que'>
        <div className='faq-que-headers'>
                    <h2>
                        What happens after the Hackathon ends?
                    </h2>
                    <i className='faq-left-pad-icon'>
              {
                !isClickArray[4] ? <RiArrowDropDownLine onClick={() => handleClick(4)} />
                  : <RiArrowDropUpLine onClick={() => handleClick(4)} />
              }
            </i>
            </div>
            <p className={`${!isClickArray[4] ? 'none' : 'faq-left-pad-text'}`}>
                Irrespective of who winners are you are all winners<br/>
                moreover you stand chance to solve real-life problem.
            </p>
            </div>

        </div>
        <div className='faq-right'>
            <div className='faq-right-top'>
                <img src={img1} alt='img' className='faq-right-top-imgs faq-right-top-img1'/>
                <img src={img2} alt='img' className='faq-right-top-img2'/>
                <img src={img1} alt='img' className='faq-right-top-imgs faq-right-top-img3'/>
            </div>
            <img src={img} className='faq-right-img' alt='img'/>
        </div>
         </div>
  )
}

export default FAQ;
