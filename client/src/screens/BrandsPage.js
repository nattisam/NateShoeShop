import { ShoesWrapper } from "../components/Dynamic Components/Shoes Wrapper/ShoesWrapper";
import CommonTopPage from "../components/Dynamic Components/CommonTopPage/CommonTopPage";
import shoe7 from '../images/shoe7.png';
import EndCredits from "../components/Dynamic Components/EndCredits/EndCredits";
import TopBrandsPage from "../components/Dynamic Components/TopBrandsPage/TopBrandsPage";
import BrandsCarousel from "../components/Static Components/BrandsCarousel/BrandsCarousel";

import '../variables.scss'
import shoe1 from '../images/logoAdidas.png';
import shoe2 from '../images/logoNike.png';
import shoe3 from '../images/logoPuma.png';
import BrandsWrapper from "../components/Dynamic Components/BrandsWrapper/BrandsWrapper";


const BrandsPage = () => {
    const pageName = "Brands";

    return(
        <div>
            <TopBrandsPage name={pageName} shoe1={shoe1} shoe2={shoe2} shoe3={shoe3} width="150px" bgColor="#333" />
            <BrandsWrapper />
            <EndCredits bgColor="#333"/>
        </div>

    )
}

export default BrandsPage;