import { ShoesWrapper } from "../components/Dynamic Components/Shoes Wrapper/ShoesWrapper";
import CommonTopPage from "../components/Dynamic Components/CommonTopPage/CommonTopPage";
import kids from '../images/kids6.png';
import EndCredits from "../components/Dynamic Components/EndCredits/EndCredits";

const KidsPage = () => {

    return(
        <div>
            <CommonTopPage name="Kids'" shoe={kids} width="200px" />
            <ShoesWrapper />
            <EndCredits />
        </div>

    )
}

export default KidsPage;