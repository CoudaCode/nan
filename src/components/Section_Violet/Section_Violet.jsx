import React from "react";
import "./Section_Violet.css"

import { RxHamburgerMenu } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import {  BiMicrophone } from "react-icons/bi";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineCamera,
} from "react-icons/ai";
import { MdInsertEmoticon } from "react-icons/md";
import things from "./../../assets/images/pourDashboard.jpeg";

function SectionViolet() {
    return (
      <>
     <div className="bg-gray-100 p-4">
       <div className="container mx-auto">
         <div className="flax text-purple-800">
           <div className="premiText">
             <div className="misApart">
               <h1 className="text-purple-900">NaN-SEND</h1>
             </div>
             <div className="paragraphe">
               <p>
                 Rejoignez plus de 10 000 <br />
                 organisations à succès
               </p>
             </div>
             <div className="etoile">
               <div className="cors">
                 <AiFillStar className="icon" />
                 <AiFillStar className="icon" />
                 <AiFillStar className="icon" />
                 <AiFillStar className="icon" />
                 <AiOutlineStar className="icon" />
               </div>
               <p>Basé sur plus de 100 avis</p>
             </div>
           </div>

           <div className="cool">
             <div className="cara">
               <div className="caro grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <div className="second">
                   <p>
                     La vision de NaN repose sur ce que doit être l&apos;avenir de
                     l&apos;Afrique francophone
                   </p>
                   <div className="forImg">
                     <div className="photo">
                       <img src={things} alt="" />
                     </div>
                     <div className="look">
                       <p>Marie Kossiwa Mariam</p>
                       <div className="loop">
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                       </div>
                     </div>
                   </div>

                   <div className="bout">
                     <div className="search">
                       <AiOutlinePlus />
                       <div className="recher">
                         <input type="text" />
                         <MdInsertEmoticon className="ic" />
                       </div>
                       <div className="fin">
                         <AiOutlineCamera />
                         <BiMicrophone />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <br />
               <div className="caro">
                 <div className="second">
                   <p>
                     La vision de NaN repose sur ce que doit être l&apos;avenir de
                     l&apos;Afrique francophone
                   </p>
                   <div className="forImg">
                     <div className="photo">
                       <img src={things} alt="" />
                     </div>
                     <div className="look">
                       <p>Marie Kossiwa Mariam</p>
                       <div className="loop">
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                       </div>
                     </div>
                   </div>

                   <div className="bout">
                     <div className="search">
                       <AiOutlinePlus />
                       <div className="recher">
                         <input type="text" />
                         <MdInsertEmoticon className="ic" />
                       </div>
                       <div className="fin">
                         <AiOutlineCamera />
                         <BiMicrophone />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <br />
              
             </div>

             <div className="care">
               <div className="caro">
                 <div className="second">
                   <p>
                     La vision de NaN repose sur ce que doit être l&apos;avenir de
                     l&apos;Afrique francophone
                   </p>
                   <div className="forImg">
                     <div className="photo">
                       <img src={things} alt="" />
                     </div>
                     <div className="look">
                       <p>Marie Kossiwa Mariam</p>
                       <div className="loop">
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                       </div>
                     </div>
                   </div>

                   <div className="bout">
                     <div className="search">
                       <AiOutlinePlus />
                       <div className="recher">
                         <input type="text" />
                         <MdInsertEmoticon className="ic" />
                       </div>
                       <div className="fin">
                         <AiOutlineCamera />
                         <BiMicrophone />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <br />

               <div className="caro">
                 <div className="second">
                   <p>
                     La vision de NaN repose sur ce que doit être l&apos;avenir de
                     l&apos;Afrique francophone
                   </p>
                   <div className="forImg">
                     <div className="photo">
                       <img src={things} alt="" />
                     </div>
                     <div className="look">
                       <p>Marie Kossiwa Mariam</p>
                       <div className="loop">
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                         <AiFillStar className="ico" />
                       </div>
                     </div>
                   </div>

                   <div className="bout">
                     <div className="search">
                       <AiOutlinePlus />
                       <div className="recher">
                         <input type="text" />
                         <MdInsertEmoticon className="ic" />
                       </div>
                       <div className="fin">
                         <AiOutlineCamera />
                         <BiMicrophone />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>

      
    </>

    )
}
export default SectionViolet;