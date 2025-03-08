// const SectionOne = () => {
//   return (
    
//     <div className="header" id="header">
//       <div className="container">
//         <a href="#" className="logo">Elzero</a>
//         <ul className="main-nav">
//           <li><a href="#articles">Articles</a></li>
//           <li><a href="#gallery">Gallery</a></li>
//           <li><a href="#features">Features</a></li>
//               </ul>
//             </div>
//       </div>
//     </div>
//   )
// }

// export default SectionOne
import"../../components/button/ButtonOne";
import"./SectionOne.css"
const SectionOne = () => {
  return (
    <div className="header" id="header">
      <div className="container">
        <a href="#" className="logo">Padelytics</a>
        <ul className="main-nav">
          <li><a href="#articles">HOME</a></li>
          <li><a href="#gallery">SHOP</a></li>
          <li><a href="#features">PROFILE</a></li>
          <li><a href="#features">CONTACT</a></li>
        </ul>
        <button className="btn">LOGIN</button>
      </div>
    </div>
  );
}

export default SectionOne;

