import img from './Group 4.png';
import './criteria.css';

const Criteria =()=>{
    return(
        <div className='criteria'>
            <div className='criteria-left'>
                <img src={img} alt='img' className='criteria-left-img'/>
            </div>
            <div className='criteria-right'>
                <h1 className='criteria-right-header criteria-right-header1'>Judging Criteria</h1>
                <h1 className='criteria-right-header criteria-right-header2'>Key Attributes</h1>

                <p className='criteria-right-text'>
                    Innovation and Creativity<span  className='criteria-right-span'>: Evaluate the uniqueness and creativity of the <br/>
                    solution. Consider whether it addresses a real world problem in a novel<br/>
                    way or introduces innovative features.</span>
                </p>
                <p className='criteria-right-text'>Functionality<span className='criteria-right-span'>: Access how well the solution works.
                does it perform its<br/>intended function effectively and without major issues? Judge would<br/>
                consider the completeness and robustness of the solution.</span></p>
                <p className='criteria-right-text'>
                    Impact and Relevance<span className='criteria-right-span'>: Determine the potential impact of the solution<br/>
                    in the real world. Does it address a significant problem and is it relevant<br/>
                    to the target audience? Judge will access the potential social,<br/>
                    economic or environmental benefits.</span>
                </p>
                <p className='criteria-right-text'>
                    Technical Complexity<span className='criteria-right-span'>: Evaluate the technical sophistication of the solution<br/>
                    Judges would consider the complexity of the code. the use of advanced<br/>
                    technologies or algorithms, and the scalability of the solutions.</span>
                </p>
                <p className='criteria-right-text'>Adherence to Hackathon Rules<span className='criteria-right-span'>
                    : Judges will ensure that the team adhered<br/>
                    to the rules and the guidelines of the hackathon, including deadlines, use of <br/>
                    specific technology or APIs, and any other competition specific requirements.</span></p>
                    <button className='criteria-right-btn'>
                        Read more 
                    </button>
            </div>
        </div>
    )
} 
export default Criteria;