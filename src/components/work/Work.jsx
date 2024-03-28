import "./work.css"
import icon from "../images/home2.jpeg"
export default function Work() {

    return (
        <div className="about-sec">
        <p className="about-para">What I Do</p>
        <div className="work">
           
            <div className="work-details">
                <img src={icon} alt=""></img>
                <div className="work-para">
                    <h3>App Development</h3>
                    <span>Design direction for business. Get your business on <br></br>the next level. We help to create great experiences.</span>
                </div>
            </div>

            <div className="work-details">
                <img src={icon} alt=""></img>
                <div className="work-para">
                    <h3>UI/UX Solutions</h3>
                    <span>Design direction for business. Get your business on<br></br> the next level. We help to create great experiences.</span>
                </div>
            </div>

          
        </div>

        <div className="work">
           
           <div className="work-details">
               <img src={icon} alt=""></img>
               <div className="work-para">
                   <h3>Web & App</h3>
                   <span>I build brands through cultural insights & strategic vision.<br></br> Custom crafted business solutions.</span>
               </div>
           </div>

           <div className="work-details">
               <img src={icon} alt=""></img>
               <div className="work-para">
                   <h3>Global Marketing</h3>
                   <span>Custom marketing solutions. Get your business<br></br> on the next level. We provide worldwide marketing.</span>
               </div>
           </div>

         
       </div>

       <div className="work">
           
           <div className="work-details">
               <img src={icon} alt=""></img>
               <div className="work-para">
                   <h3>Brand Consultant</h3>
                   <span>I build brands through cultural insights & strategic vision. <br></br>Custom crafted business solutions.</span>
               </div>
           </div>

           <div className="work-details">
               <img src={icon} alt=""></img>
               <div className="work-para">
                   <h3>Wordpress Development</h3>
                   <span>Design a beautiful website without coding skills.&nbsp;&nbsp;</span>
               </div>
           </div>

         
       </div>
        </div>
    )
}