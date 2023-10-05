import './ann.css';
import { useRef, useEffect } from 'react';

const Ann = ()=>{

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
        <>
        <div className="ann" ref={sectionRef}>

            <div className='ann-top'>
            <h1 className='ann-header'>
                Timeline
            </h1>
            <p className='ann-text'>
                Here is the breakdown of time we anticipate
                using for the upcoming event.
            </p>
            </div>




            <div className='ann-all'>
            <div className="ann-left">
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                        Hackathon Announcement
                    </h1>
                    <p className="ann-left-text">
                        The getlinked tech Hackathon1.0 is formally announced
                        to the general puublic and teams begin to get ready and register
                    </p>
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                        November 18, 2023
                    </h1>
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                        Team Registration Ends
                    </h1>
                    <p className="ann-left-text">
                        Interested Participants are no longer Allowed to register 
                    </p>
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                      November 18, 2023 
                    </h1>
                    
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                        getlinked Hackathon1.0 officially begins
                    </h1>
                    <p className="ann-left-text">
                        Accepted team can now proceed to build their
                        ground breaking skill driving solutions
                    </p>
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                        November 18, 2023
                    </h1>
                </div>
            </div>
            <div className="ann-center">
                <div className="line">

                </div>
                <div className="circle">
                    1
                </div>
                <div className='line2'>

                </div>
                
                <div className="circle">
                    2
                </div>
                
                <div className='line2'>

                </div>
                
                <div className="circle">
                    3
                </div>
                
                <div className='line2'>

                </div>
                
                <div className="circle">
                    4
                </div>
                
                <div className='line2'>

                </div>
                
                <div className="circle">
                    5
                </div>
                
                <div className='line2'>

                </div>
                
                <div className="circle">
                    6
                </div>
                </div>

            <div className="ann-right">
            <div className="ann-left-1">
                    <h1 className="ann-left-header">
                      November 18, 2023 
                    </h1>
                    
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                      Team Registration begins
                    </h1>
                    <p className="ann-left-text">
                       Interested team can now show their interest in the
                       getlinked Hackathon1.0 2023 by proceeding to register
                    </p>
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                        November 18, 2023
                    </h1>
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                        Announcement of the Accepted team and ideas

                    </h1>
                    <p className="ann-left-text">
                        All teams ideas that has been accepted into getlinked tech
                        Hackathon1.0 2023 are formally announced.  </p>
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                        November 18, 2023
                    </h1>
                </div>
                <div className="ann-left-1">
                    <h1 className="ann-left-header">
                        Demo Day 
                    </h1>
                    <p className="ann-left-text">
                        Teams get opportunity to pitch their projects to judges.
                        The winner of the Hackathon will also be announced on this day.
                    </p>
                </div>
                </div>
                </div>




                <div className='ann-mobile'>
                    <div className='ann-mobile-left'>
                        <div className="ann-mobile-line">

                        </div>
                        <div className="ann-mobile-circle">
                    1
                        </div>
                        <div className='ann-mobile-line'>

                        </div>
                
                        <div className="ann-mobile-circle">
                    2
                </div>
                
                <div className='ann-mobile-line'>

                </div>
                
                <div className="ann-mobile-circle">
                    3
                </div>
                
                <div className='ann-mobile-line'>

                </div>
                
                <div className="ann-mobile-circle">
                    4
                </div>
                
                <div className='ann-mobile-line'>

                </div>
                
                <div className="ann-mobile-circle">
                    5
                </div>
                
                <div className='ann-mobile-line'>

                </div>
                
                <div className="ann-mobile-circle">
                    6
                </div>
                </div>
                    <div className='ann-mobile-right'>
                    <h1 className="ann-left-header">
                        Hackathon Announcement
                    </h1>
                    <p className="ann-left-text">
                        The getlinked tech Hackathon1.0 is formally announced 
                        to the general puublic and teams begin to get ready and register
                    </p>
                    <h1 className="ann-left-header ann-left-header2">
                        November 18, 2023
                    </h1>
                    <h1 className="ann-left-header">
                        Team Registration Ends
                    </h1>
                    <p className="ann-left-text">
                        Interested Participants are no longer Allowed to register 
                    </p>
                    <h1 className="ann-left-header ann-left-header2">
                        November 18, 2023
                    </h1>
                    <h1 className="ann-left-header">
                        getlinked Hackathon1.0<br/> officially begins
                    </h1>
                    <p className="ann-left-text">
                        Accepted team can now proceed to build their
                        ground breaking skill driving solutions
                    </p>
                    <h1 className="ann-left-header">
                        November 18, 2023
                    </h1>
                    </div>
                </div>


        </div>
        </>
    )
}
export default Ann;