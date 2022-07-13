import { Header } from '../header/header'
import './hero.css'
// import '../../App.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'




export const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div >
                        <span>
                            In Here We Will Help You To Shape And Build Your Ideal Body And Live Up Your Life To Fullest
                        </span>

                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Experts Couches</span>
                    </div>

                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>

                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>

                </div>
                <div className="hero-buttons">
                    <buttons className='btn'>Get Started</buttons>
                    <buttons className='btn'>Learn More</buttons>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart rate</span>
                    <span>116 bpm</span>
                </div>
                <img src={hero_image} className="hero-image" alt="" />
                <img src={hero_image_back} className="hero-image-back" alt="" />

                <div className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>

                </div>
            </div>
        </div>
    )
}