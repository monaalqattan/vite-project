// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquarePollVertical ,faGear,faPenFancy,faHandFist} from "@fortawesome/free-solid-svg-icons";
// import"./SectionThree.css"
// import{AboutUsImage} from"../../assets/images/pexels-roger-aribau-gisbert-19420784-15612082.jpg"
// const SectionThree = () => {
//   return (
//     <>
//       <section className="about-section">
//       <h2 className="about-title">About Us</h2>
//     </section>
//     <div className="aboutUs">
//     <div className="firstPart">
//       <div className="aboutUsIconPlusText">
//         <div className="aboutUsIcon">
//         <FontAwesomeIcon icon={faSquarePollVertical} className="text-[#9fe870] text-4xl" />
//         </div>
//         <div className="aboutUsIconText">
//           <h5>Advanced Analytics</h5>
//           <p>Get precise data on your padel performance, including detailed statistics and reports to help you improve your game.</p>
//         </div>
//         <div className="aboutUsIcon">
//         <FontAwesomeIcon icon={faGear} className="text-[#9fe870] text-4xl" />
//         </div>
//         <div className="aboutUsIconText">
//           <h5>Great Usability</h5>
//           <p>A simple and intuitive design that allows you to track and analyze your performance effortlessly, without requiring technical knowledge.</p>
//         </div>
//         <div className="aboutUsIcon">
//         <FontAwesomeIcon icon={faPenFancy} className="text-[#9fe870] text-4xl"/>
//         </div>
//         <div className="aboutUsIconText">
//           <h5>Unique Design</h5>
//           <p>A sleek and modern interface that offers a seamless user experience, making data interaction both engaging and efficient.</p>
//         </div>
//         <div className="aboutUsIcon">
//         <FontAwesomeIcon icon={faHandFist} className="text-[#9fe870] text-4xl" />
//         </div>
//         <div className="aboutUsIconText">
//           <h5>Quick & Powerful</h5>
//           <p>A powerful analytics engine that delivers instant and accurate results, helping you make smarter decisions on the court.</p>
//         </div>
        
        
//       </div>
//     </div>
//     <div className="">
//       <img src={AboutUsImage} className="" alt="Description of the image"/>
//     </div>
//     <div className="">
//       <pre >
//     Dorem the pain itself is important, it will be followed
//     bythe client is education. As it flatters,
//     except for the sad 
//     saying. No urn fear, vestibule and members eBut
//     that you may see whence all this born error is
//     the pleasure of those who accuse and the pain 
//     of those who praise the whole of the remrutrumDore
//     the pain itself is important,it is followed by 
//     the adipiscing elit. But as you observe.
        
//     The pain is very painful.enhanced monitoring 
//     procedures.As it flatters, except for the sad 
//     saying.No urn fear, vestibule and members eBut 
//     that you may see whence all this born error is
//     the pleasure of those who accuse and the pain
//     of those who praise the whole remrutrumDore the 
//     pain itself is important, it will be followed.

//     <button type="button" className="btn btn-primary">learn more</button>
//             </pre>
//     </div>
//   </div>
//     </>
//   )
// }

// export default SectionThree
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical, faGear, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import AboutUsImage from "../../assets/images/pexels-roger-aribau-gisbert-19420784-15612082.jpg"; // Ensure the path is correct
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <>
      <section className="about-section">
        <h2 className="about-title">About Us</h2>
      </section>
      <div className="aboutUs">
        <div className="firstPart">
          <div className="aboutUsIconPlusText">
            {/* Advanced Analytics */}
            <div className="aboutUsIconText">
              <h5>Advanced Analytics               <FontAwesomeIcon icon={faSquarePollVertical} className="text-[#9fe870] text-2xl" />              </h5>
              <p>Get precise data on your padel performance, including detailed statistics and reports to help you improve your game.</p>
            </div>

            {/* Great Usability */}
            <div className="aboutUsIconText">
              <h5>Great Usability <FontAwesomeIcon icon={faGear} className="text-[#9fe870] text-2xl" /></h5>
              <p>A simple and intuitive design that allows you to track and analyze your performance effortlessly, without requiring technical knowledge.</p>
            </div>

            {/* Unique Design */}
            {/* <div className="aboutUsIcon"> */}
              {/* <FontAwesomeIcon icon={faPenFancy} className="text-[#9fe870] text-4xl" /> */}
            {/* </div> */}
            <div className="aboutUsIconText">
              <h5>Unique Design <FontAwesomeIcon icon={faPenFancy} className="text-[#9fe870] text-2xl" /></h5>
              <p>A sleek and modern interface that offers a seamless user experience, making data interaction both engaging and efficient.</p>
            </div>

            {/* Quick & Powerful */}
            {/* <div className="aboutUsIcon">
              <FontAwesomeIcon icon={faHandFist} className="text-[#9fe870] text-4xl" />
            </div>
            <div className="aboutUsIconText">
              <h5>Quick & Powerful</h5>
              <p>A powerful analytics engine that delivers instant and accurate results, helping you make smarter decisions on the court.</p>
            </div> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="aboutUsImage">
          <img src={AboutUsImage} className="aboutUsImage" alt="About Us" />
        </div>

        {/* Text Section */}
        <div className="aboutUsText">
          <p>
          At Padelytics, we are passionate about helping padel players unlock their full potential through cutting-edge performance analysis. Whether you are a beginner looking to refine your skills or a seasoned player aiming for precision, our platform provides in-depth insights, statistics, and data-driven recommendations to enhance your game.

Our mission is to bridge the gap between technology and sports, giving you the tools to track your progress, identify strengths, and improve weaknesses. With intuitive analytics and real-time feedback, we empower you to play smarter, train harder, and win more.

<br/><br/><b><span>Join us and take your padel performance to the next level!</span></b> 
          </p>
          {/* <button type="button" className="btn btn-primary learnMoreButton">Learn More</button> */}
        </div>
      </div>
    </>
  );
};

export default SectionThree;