import './join.css'


export const Join = ()=>{
    return(
        <div className='Join' id='join-us'>
         <div className='left-j'>
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
         </div>
         <div className='right-j'>
            <form className='email-container' action="">
                <input type="email" name="user_name" id="" placeholder='Entre your Email address' />
            <button className='btn btn-j'> Join Now </button>
            </form>
         </div>
        </div>
    )
}