import { Header } from '../header/header'
import './hero.css'
// import '../../App.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
import { useRef } from 'react'


export const Hero = () => {
    const constraintsRef = useRef(null);
    const trans = {type:'spring' , duration:3}
    const mobile = window.innerWidth<=768?true:false

    return (
        <div className='hero' id="home">
            <div className='blur hero-blur'></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                    initial={{left:mobile? '138px':"238px"}}
                    whileInView={{left:'8px'}}
                    transition={{...trans , type:'tween'}}
                    > 
                    </motion.div>
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
                        <span>
                            <NumberCounter end={150} start={100} delay='4' preFix="+"></NumberCounter>
                        </span>
                        <span>Experts Couches</span>
                    </div>

                    <div>
                        <span><NumberCounter end={970} start={800} delay='4' preFix="+"></NumberCounter></span>
                        <span>members joined</span>
                    </div>

                    <div>
                        <span><NumberCounter end={50} start={30} delay='4' preFix="+"></NumberCounter></span>
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

                <motion.div
                ref={constraintsRef}
                drag dragConstraints={constraintsRef}
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                
                transition={trans}
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart rate</span>
                    <span><NumberCounter end={116} start={90} delay='4' postFix="bpm"></NumberCounter></span>
                </motion.div>
                <img src={hero_image} className="hero-image" alt="" />
                <motion.img 
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={trans}
                src={hero_image_back} className="hero-image-back" alt="" />

                <motion.div
                 initial={{right:'37rem'}}
                 whileInView={{right:'28rem'}}
                 transition={trans}
                className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span><NumberCounter end={220} start={180} delay='4' postFix="kcal"></NumberCounter></span>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}