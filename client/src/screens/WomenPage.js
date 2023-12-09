import { ShoesWrapper } from "../components/Dynamic Components/Shoes Wrapper/ShoesWrapper";
import CommonTopPage from "../components/Dynamic Components/CommonTopPage/CommonTopPage";
import women7 from '../images/women7.png';
import EndCredits from "../components/Dynamic Components/EndCredits/EndCredits";

const WomenPage = () => {

    const pageName = "Women's";

    return(
        <div>
            <CommonTopPage name={pageName} shoe={women7} width="220px" bgColor="#703" />
            <ShoesWrapper name={pageName}/>
            <EndCredits bgColor="#703"/>
        </div>

    )
}

export default WomenPage;