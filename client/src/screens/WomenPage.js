import { ShoesWrapper } from "../components/Dynamic Components/Shoes Wrapper/ShoesWrapper";
import CommonTopPage from "../components/Dynamic Components/CommonTopPage/CommonTopPage";
import women7 from '../images/women7.png';
import EndCredits from "../components/Dynamic Components/EndCredits/EndCredits";

const WomenPage = () => {

    return(
        <div>
            <CommonTopPage name="Women's" shoe={women7} width="220px"/>
            <ShoesWrapper />
            <EndCredits />
        </div>

    )
}

export default WomenPage;