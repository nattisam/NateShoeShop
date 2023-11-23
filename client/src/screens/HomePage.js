import TopHomePage from '../components/Dynamic Components/TopHomePage/TopHomePage.js';
import Intro from '../components/Dynamic Components/Intro/Intro.js';
import EndCredits from '../components/Dynamic Components/EndCredits/EndCredits.js';

function HomePage() {
  return (
    <div>
      <TopHomePage />
      <Intro />
      <EndCredits />
    </div>
    
  );
}

export default HomePage;