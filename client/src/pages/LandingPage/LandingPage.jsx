import { LandingPageContainer } from "./../../styles/LandingPage/LandingPageContainer";

import LandingPageCover from "./../../assets/Images/LandingPage_cover.svg";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <div className="left-side">
        <h3>Welcome to Indeed Jobify</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quo eum excepturi recusandae, cumque tempore
          culpa dolores, quaerat, libero reprehenderit quia. Aspernatur earum, numquam accusamus ipsa ratione alias
          impedit pariatur.
        </p>
      </div>
      <div className="right-side">
        <img className="landingpage-cover" src={LandingPageCover} alt="Landing-Page-cover" />
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
