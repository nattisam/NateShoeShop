import { ShoesWrapper } from "../components/Dynamic Components/Shoes Wrapper/ShoesWrapper";
import CommonTopPage from "../components/Dynamic Components/CommonTopPage/CommonTopPage";
import kids from '../images/kids6.png';
import EndCredits from "../components/Dynamic Components/EndCredits/EndCredits";

const KidsPage = () => {
    const pageName = "Kids'";
    return(
        <div>
            <CommonTopPage name={pageName} shoe={kids} width="190px" bgColor="#160"/>
            <ShoesWrapper name={pageName}/>
            <EndCredits bgColor="#160"/>
        </div>

    )
}

export default KidsPage;