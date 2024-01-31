import React from 'react'
import './Donate.css'

function Donate() {
  return (
    <>
    <div className="mainPage">

        <div className="right">
          <div className="line1">
                 <form>
                 <p>
                <label>Give a little, change a lot.
                <br></br>
                    <input type="number" placeholder='  Enter Amount to Donate' />
                </label>
                 </p>
                </form>
             </div> 
            <div className="req">
                <p>
                    Required Amount
                    <br></br>
                    1000.0 Matic
                </p>
                
            </div>  
        </div>

        <div className="left">
            <button className='but'> Donate </button>
            <div className="rec">
                <p>
                    Recevived Amount
                    <br></br>
                    0.2 Matic
                </p>
                
            </div> 
        </div>

    </div>
    </>

  )
}

export default Donate