import Footer from "../../Modules/Footer";
import SectionOne from "../../Modules/HomeFeature/SectionOne";
import  SectionThree  from '../../Modules/HomeFeature/SectionThree';
import SectionTwo from "../../Modules/HomeFeature/SectionTwo";
import Team from "../../Modules/HomeFeature/Team";
import UploadSection from "../../Modules/UploadSection";
import './home.css'

const Home = () => {
  return (
     <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <UploadSection/>
      <Team/>
      <Footer/>
     </div>
  );
}

export default Home
