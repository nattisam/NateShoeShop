import { ShoesWrapper } from "../components/Dynamic Components/Shoes Wrapper/ShoesWrapper";
import CommonTopPage from "../components/Dynamic Components/CommonTopPage/CommonTopPage";
import shoe7 from '../images/shoe7.png';
import EndCredits from "../components/Dynamic Components/EndCredits/EndCredits";

const MenPage = () => {
    const pageName = "Men's";

    return(
        <div>
            <CommonTopPage name={pageName} shoe={shoe7} width="230px" bgColor="#002"/>
            <ShoesWrapper name={pageName}/>
            <EndCredits bgColor="#002"/>
        </div>

    )
}

export default MenPage;