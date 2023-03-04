import { useState } from "react";
import "./side.scss";
import avatar from "../../assets/images/avatar.png";
import { GrScorecard } from "react-icons/gr";
import { FaUserFriends, FaBars } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { GiSwordClash } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

const Side = () => {
   const [open, setOpen] = useState(false);

   const sideClassName = open ? "side open" : "side";
   //
   return (
      <>
         <div className={sideClassName}>
            <div className="profile">
               <img src={avatar} alt="avatar" />
               <span className="username">@DevEmpower</span>
               <span className="fullname">Mamad Taheri</span>
            </div>
            <div className="links">
               <div className="link">
                  <GiSwordClash />
                  <span>ClashCon</span>
               </div>
               <div className="link">
                  <GrScorecard />
                  <span>Board</span>
               </div>
               <div className="link">
                  <FaUserFriends />
                  <span>Friends</span>
               </div>
               <div className="link">
                  <TiNews />
                  <span>News</span>
               </div>
               <div className="link">
                  <IoMdSettings />
                  <span>Settings</span>
               </div>
            </div>
            <div className="info">
               <span>SuperCOC</span>
               <span>v 1.0.0</span>
            </div>
         </div>
         <div className="toggle">
            <FaBars onClick={() => setOpen(!open)} />
         </div>
      </>
   );
};

export default Side;
