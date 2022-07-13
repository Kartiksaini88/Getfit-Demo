import './programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
export const Program = ()=>{
    return(
        <div className="Programs" id="programs">

            <div className="programs-header">
                <span className="stroke-text">Explore Our</span>
                <span>Programs</span>
                <span className="stroke-text">To Shape You</span>
            </div>

            <div className="programs-categories">
                {programsData.map((e)=>(
                    <div className='category'>
                        {e.image}
                        <span>{e.heading}</span>
                        <span>{e.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}