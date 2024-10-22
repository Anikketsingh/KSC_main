import React from 'react'
import './Reasons.css'
import image1 from "../assets/g1.jpeg";
import image2 from "../assets/g3.jpeg";
import image3 from "../assets/g2.jpeg";
import image4 from "../assets/g4.jpeg";
import tick from "../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>

        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className="stroke-text">why</span>
                <span> choose us?</span>
            </div>
            <div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt=""></img>
                        <span>EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>SPECIAL DISCOUNT FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>RELIABLE PARTNERS</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>EXCELLENT AMBIENCE</span>
                    </div>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>QUALITY EQUIPMENTS</span>
                    </div>
                </div>
            </div>
            <span style={{
                color: 'var(--gray)',
                fontWeight: "normal,"
            }}>
               
            </span>
           
        </div>
    </div>
  )
}

export default Reasons