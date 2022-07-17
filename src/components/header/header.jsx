
import './header.css'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

export const Header = ()=>{
    const mobile = window.innerWidth<=768?true:false
    const [menu , setmenu]= useState(false)
    return(
        <div className='header'>
           <img src={logo} className="logo" alt="" /> 
           {menu===false && mobile===true?(
            <div
            style={{
               background:'var(--appColor)',
               padding:'0.5rem',
               borderRadius:"5px",
            }}
            onClick={()=>setmenu(true)}
            >
                <img src={Bars} alt="" style={{
                    width:'1.5rem',
                    height:'1.5rem'
                }}/>
            </div>
           ):(
            <ul className='header-menu'>
            <li >
                <Link
                onClick={()=>setmenu(false)}
                to="home"
                span={true}
                smooth={true}
                >Home</Link>
                </li>
            <li onClick={()=>setmenu(false)}>
            <Link
                onClick={()=>setmenu(false)}
                to="programs"
                span={true}
                smooth={true}
                >Programs</Link>
            </li>
            <li>
            <Link
                onClick={()=>setmenu(false)}
                to="reasons"
                span={true}
                smooth={true}
                >Why us</Link>
            </li>
            <li > <Link
                onClick={()=>setmenu(false)}
                to="plans"
                span={true}
                smooth={true}
                >Plans</Link></li>
            <li ><Link
            onClick={()=>setmenu(false)}
            to='testimonials'
            span={true}
            smooth={true}
            >Testimonials</Link></li>
        </ul>
           )
         
           }
   
        </div>
    )
}