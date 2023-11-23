import { ShoesWrapper } from "../components/Dynamic Components/Shoes Wrapper/ShoesWrapper";
import CommonTopPage from "../components/Dynamic Components/CommonTopPage/CommonTopPage";
import shoe7 from '../images/shoe7.png';
import EndCredits from "../components/Dynamic Components/EndCredits/EndCredits";

const MenPage = () => {

    return(
        <div>
            <CommonTopPage name="Men's" shoe={shoe7} width="250px" />
            <ShoesWrapper />
            <EndCredits />
        </div>

    )
}

export default MenPage;