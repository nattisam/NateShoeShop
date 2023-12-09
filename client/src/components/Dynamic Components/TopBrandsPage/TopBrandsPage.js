import { Waves } from "../../Static Components/Waves/Waves";
import NavBar from "../../Static Components/NavBar/NavBar";
import './TopBrandsPage.scss';
import DraggableImage from "../../Static Components/DraggableImage";

const TopBrandsPage = (props) => {
    return(
        <div className='header' style={{ backgroundColor: props.bgColor }}>
            <NavBar />
            <div className='outer-header common-outer-header'>  
                    <div className="section-and-pic">
                        <div>
                            <h1>{props.name}</h1>
                        </div>
                        <div className="logo-container">
                            <div><DraggableImage shoe={props.shoe1} width={props.width}/></div>
                            <div><DraggableImage shoe={props.shoe2} width={props.width}/></div>
                            <div><DraggableImage shoe={props.shoe3} width={props.width}/></div>
                        </div>
                </div>
            </div>
            <Waves />    
        </div>

    )
}

export default TopBrandsPage;