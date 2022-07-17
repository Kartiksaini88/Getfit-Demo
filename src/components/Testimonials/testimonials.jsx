import './testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
export const Testimonials = ()=>{

    const [selected , setslected]  = useState(0)
    const tlengeth = testimonialsData.length
    const trans = {type:'spring' , duration:3}
    return(
        <div className="testimonials">
            <div className='left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>Say about us</span>
                <motion.span
                key={selected}
                initial={{opacity:0 , x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:100}}
                transition={trans}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{
                        color:'var(--orange)'
                    }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className='right-t'>
                <motion.div
                initial={{opacity:0 , x : -100}}
                transition={{...trans,duration:2}}
                whileInView={{opacity:1,x:0}}
                ></motion.div>
                 <motion.div
                initial={{opacity:0 , x : 100}}
                transition={{...trans,duration:2}}
                whileInView={{opacity:1,x:0}}
                ></motion.div>
                <motion.img
                key={selected}
                initial={{opacity:0 , x:100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={trans}
                src={testimonialsData[selected].image} alt="" />
                <div className='arrows'>
                    <img
                    onClick={()=>{
                        selected==0?setslected(tlengeth-1):
                        setslected((prev)=>prev-1)
                    }}
                    src={leftArrow} alt="" />
                    <img
                    onClick={()=>{
                        selected==tlengeth-1?setslected(0):
                        setslected((prev)=>prev+1)
                    }}

                    src={RightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}