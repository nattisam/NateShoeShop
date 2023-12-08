import { Waves } from "../../Static Components/Waves/Waves";
import { ShoesWrapper } from "../Shoes Wrapper/ShoesWrapper";
import NavBar from "../../Static Components/NavBar/NavBar";
import './CommonTopPage.scss';
import DraggableImage from "../../Static Components/DraggableImage";

const CommonTopPage = (props) => {
    return(
        <div className='header' style={{ backgroundColor: props.bgColor }}>
            <NavBar />
            <div className='outer-header common-outer-header'>  
                    <div className="section-and-pic">
                        <div>
                            <h2>{props.name} Shoes</h2>
                        </div>
                        <div>
                            <DraggableImage shoe={props.shoe} width={props.width}/>
                        </div>
                </div>
            </div>
            <Waves />    
        </div>

    )
}

export default CommonTopPage;