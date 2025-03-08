import padel from"../../assets/images/freepik__the-style-is-candid-image-photography-with-natural__10867-removebg-preview.png"
import"./SectionTwo.css"
import 'animate.css';
const SectionTwo = () => {
  return (
    <div>
      <header>
        <div className="header-content">
          <div className="header-text animate__animated animate__slideInLeft">
            <p>
              <b>Analyze,<br />Improve,Win<br /></b>
            </p>
            <p className="p-sectionTwo-two">
            Take Your Padel Skills to the Next Level!
            </p>
            <button
              type="button"
              className="btn" > Get Started
            </button>
          </div>
          <div>
            <img
              src={padel}
              className="hover-image" alt="padel racket Image" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default SectionTwo;
