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

import newArrivals from '../../../json/newArrivals.json';
import sale from '../../../json/sale.json';
import bestSellers from '../../../json/bestSellers.json';

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
                        {newArrivals.map((shoe, index) => (
                            <ShoeCard
                            key={index}
                            name={shoe.name}
                            category={shoe.category}
                            img={shoe.img}
                            price={shoe.price}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className="intro-container sale-container">
                <div className="text-holder">
                    <div className="title sale-title">
                        <h1>Sale</h1>
                    </div>
                        <Carousel responsive={responsive}>
                            {sale.map((shoe, index) => (
                                <ShoeCard
                                key={index}
                                section='sale'
                                name={shoe.name}
                                category={shoe.category}
                                img={shoe.img}
                                originalPrice={shoe.originalPrice}
                                price={shoe.price}
                                />
                            ))}
                        </Carousel>
                </div>
            </div>
            <div className="intro-container">
                <div className="text-holder">
                    <div className="title">
                        <h1>Best Sellers</h1>
                    </div>
                    <Carousel responsive={responsive}>
                        {bestSellers.map((shoe, index) => (
                            <ShoeCard
                            key={index}
                            name={shoe.name}
                            category={shoe.category}
                            img={shoe.img}
                            price={shoe.price}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
        )
}

export default Intro;