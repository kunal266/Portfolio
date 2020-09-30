import React from "react";
import bitcoin from "./BITCOIN_DEPOSIT.png";
import bat from "./BAT_DEPOSIT.png";
import xrp from "./XRP_DEPOSIT.png";
export default function Donation(){
    return (
        <div className ="mx-auto bg-gray-800 font-semibold text-center text-yellow-500">
        <div >Like My Work ?
        </div>
        <div className ="pb-3">
        You can help me by donating <span role = "img" aria-label ="hanf">🙏</span>
        </div>
        <div className ="grid grid-cols-2 gap-6 justify-items-auto w-2/4 mx-auto pb-3">
        <div className ="pt-3 text-xl ">
        Bitcoin</div>
        <div className ="item-left">
        <div className ="mdlg:hidden">
        3DCmAhX9Wn2tvyo5bKjVD7imHhb6WJciSu
        </div>
        <img
        src ={bitcoin}
        alt = "3DCmAhX9Wn2tvyo5bKjVD7imHhb6WJciSu"
        className ="mx-auto mt-2 "
        /></div>
        <div className =" pt-6">
        XRP</div>
        <div>
        <div className ="mdlg:hidden">
        rNxCw7HUbd51dvUMUyC7ju5XivXmCM1Bvr
        </div>
        <img
        src ={xrp}
        alt ="xrp"
        className = "mx-auto mt-2"
        /></div>
        <div className =" pt-3">
        BAT</div>
        
       
      <div>
        <div className ="mdlg:hidden">
        0x59f8fec8bc185b44bc119e5507c8d0b9ef784874
        </div>
        <img
        src ={bat}
        alt ="bat"
        className = "mx-auto mt-2 pb-3"
        />
        </div>
        
        
        
        </div>
        </div>
    )
}