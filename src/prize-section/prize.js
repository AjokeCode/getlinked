import img1 from './9486889 1.png';
import img2 from './Rewards.png';
import './prize.css';

const Prize =()=>{
    return(
        <div className="prize">
            
                <img src={img1} alt='img' className='prize-left-img'/>
        
            <div className="prize-right">
                <h1 className='prize-right-header'>Prizes and <br/>
                <span className='prize-right-span'>Rewards</span></h1>
                <p className='prize-right-text'>
                    Highlight of the prizes or rewards for winners and <br/>
                    for Participants.
                </p>
                <img src={img2} alt='img' className='prize-right-img'/>
            </div>
        </div>
    )
}

export default Prize;