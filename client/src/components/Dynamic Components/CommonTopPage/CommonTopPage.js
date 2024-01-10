import { Waves } from "../../Static Components/Waves/Waves";
import NavBar from "../../Static Components/NavBar/NavBar";
import './CommonTopPage.scss';
import DraggableImage from "../../Static Components/DraggableImage";
import { useEffect, useState } from "react";

const CommonTopPage = (props) => {

    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    let shoeWidth;

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      switch (props.name) {
        case "Men's":
            shoeWidth = screenWidth > 960 ? "220px" : "150px";
            break;
        case "Women's":
            shoeWidth = screenWidth > 960 ? "230px" : "150px";
            break;
        case "Kids'":
            shoeWidth = screenWidth > 960 ? "200px" : "150px";
            break;
        default: 
            shoeWidth = screenWidth > 960 ? "220px" : "150px";
            break;
      }
      
    return(
        <div className='header' style={{ backgroundColor: props.bgColor }}>
            <NavBar />
            <div className='outer-header common-outer-header'>  
                    <div className="section-and-pic">
                        <div className="section-title">
                            <h1>{props.name}</h1>
                            <h1  style={{ opacity: 0.8 }}>Shoes</h1>
                        </div>
                        <div className="section-shoe">
                            <DraggableImage shoe={props.shoe} width={shoeWidth}/>
                        </div>
                </div>
            </div>
            <Waves />    
        </div>

    )
}

export default CommonTopPage;