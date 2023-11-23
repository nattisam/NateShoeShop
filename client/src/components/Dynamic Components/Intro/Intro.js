import './Intro.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ShoeCard from '../../Static Components/ShoeCard/ShoeCard';
import shoe from '../../../images/ShoeArrivalNavyRunningShoe.jpg';
import shoe2 from '../../../images/ShoeArrivalLaceupRunningShoe.jpg';
import shoe3 from '../../../images/ShoeArrivalLeopardPrintSneakers.jpg';
import shoe4 from '../../../images/ShoeArrivalCasualFlatShoe.jpg';
import shoe5 from '../../../images/ShoeArrivalSleekLeatherShoe.jpg';
import shoeFemale1 from '../../../images/shoeFemale1.jpg';
import shoeFemale2 from '../../../images/shoeFemale2.jpg';
import shoeFemale3 from '../../../images/shoeFemale3.jpg';

import shoe8 from '../../../images/shoe8.jpg';
import shoe9 from '../../../images/shoe9.jpg';
import shoe10 from '../../../images/shoe10.jpg';
import shoe11 from '../../../images/shoe11.jpg';
import shoe12 from '../../../images/shoe12.jpg';
import shoe13 from '../../../images/shoe13.jpg';

const Intro = () => {

    const shoeCategory = ["Casual", "Sport", "Work", "Fashion"];

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <div className="intro-whole">
            <div className="intro-container">
                <div className="text-holder">
                    <div className="title">
                        <h1>New Arrivals</h1>
                    </div>

                    <Carousel responsive={responsive}>
                        <ShoeCard shoe={shoe3} name="Women Leopard Print Sneakers" category={shoeCategory[1]} price="8,800 Br"/>
                        <ShoeCard shoe={shoeFemale2} name="Women low heel strap" category={shoeCategory[3]} price="6,800 Br"/>
                        <ShoeCard shoe={shoe2} name="Women Laceup Running Shoe" category={shoeCategory[1]} price="6,800 Br"/>
                        <ShoeCard shoe={shoe4} name="Men Flat Leather Shoes" category={shoeCategory[0]} price="8,900 Br"/>
                        <ShoeCard shoe={shoe5} name="Men Sleek Leather Shoes" category={shoeCategory[0]} price="6,300 Br"/>
                        <ShoeCard shoe={shoeFemale1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                        <ShoeCard shoe={shoe} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                    </Carousel>
                </div>
            </div>
            <div className="intro-container sale-container">
                <div className="text-holder">
                    <div className="title sale-title">
                        <h1>Sale</h1>
                    </div>
                        <Carousel responsive={responsive}>
                            <ShoeCard section="sale" shoe={shoe12} name="Men Sleek Leather Shoes" category={shoeCategory[0]} originalprice="4,850" price="2,900 Br"/>
                            <ShoeCard section="sale" shoe={shoe13} name="Men Navy Running Shoes" category={shoeCategory[1]} originalprice="6,370" price="5,300 Br"/>
                            <ShoeCard section="sale" shoe={shoeFemale3} name="Women Laceup Running Shoe" category={shoeCategory[1]} originalprice="6,550" price="5,260 Br"/>
                            <ShoeCard section="sale" shoe={shoe8} name="Men Navy Running Shoes" category={shoeCategory[1]} originalprice="6,100" price="4,950 Br"/>
                            <ShoeCard section="sale" shoe={shoeFemale2} name="Women low heel strap" category={shoeCategory[3]} originalprice="5,950" price="4,800 Br"/>
                            <ShoeCard section="sale" shoe={shoe2} name="Women Laceup Running Shoe" category={shoeCategory[1]} originalprice="8,000" price="6,800 Br"/>
                            <ShoeCard section="sale" shoe={shoe9} name="Women Laceup Running Shoe" category={shoeCategory[1]} originalprice="4,450" price="3,500 Br"/>
                            <ShoeCard section="sale" shoe={shoe10} name="Women Leopard Print Sneakers" category={shoeCategory[1]} originalprice="6,350" price="5,200 Br"/>
                            <ShoeCard section="sale" shoe={shoe11} name="Men Flat Leather Shoes" category={shoeCategory[0]} originalprice="3,800" price="3,100 Br"/>
                        </Carousel>
                </div>
            </div>
            <div className="intro-container">
                <div className="text-holder">
                    <div className="title">
                        <h1>Best Sellers</h1>
                    </div>
                        <Carousel responsive={responsive}>
                            <ShoeCard shoe={shoeFemale3} name="Women Laceup Running Shoe" category={shoeCategory[1]} price="6,800 Br"/>
                            <ShoeCard shoe={shoe8} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                            <ShoeCard shoe={shoe9} name="Women Laceup Running Shoe" category={shoeCategory[1]} price="6,800 Br"/>
                            <ShoeCard shoe={shoe10} name="Women Leopard Print Sneakers" category={shoeCategory[1]} price="8,800 Br"/>
                            <ShoeCard shoe={shoe11} name="Men Flat Leather Shoes" category={shoeCategory[0]} price="8,900 Br"/>
                            <ShoeCard shoe={shoe12} name="Men Sleek Leather Shoes" category={shoeCategory[0]} price="6,300 Br"/>
                            <ShoeCard shoe={shoe13} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                        </Carousel>
                </div>
            </div>
        </div>
        )
}

export default Intro;