import img1 from './Partner and sponsors section.png';
import './sponsor.css';

const Sponsor =()=>{
    return(
        <div className="sponsor">
            <div className='sponsor-top'>
            <h1 className='sponsor-header'>
                Partners and Sponsors
            </h1>
            <p className='sponsor-text'>
                Getlinked Hackhathon1.0 is honored to have the following major<br/>
                companies as its partner and sponsors
            </p>
            </div>
            <img src={img1} alt='img' className='sponsor-img'/>
        </div>
    )
}
export default Sponsor;