import './Intro.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ShoeCard from '../../Static Components/ShoeCard/ShoeCard';

import newArrivals from '../../../json/newArrivals.json';
import sale from '../../../json/sale.json';
import bestSellers from '../../../json/bestSellers.json';
import shoes from '../../../json/shoes.json';

const Intro = () => {

    const newArrivalShoes = shoes.filter(shoe => shoe.special === "New Arrivals");
    const saleShoes = shoes.filter(shoe => shoe.special === "Sale");
    const bestSellerShoes = shoes.filter(shoe => shoe.special === "Best Sellers");


    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1500 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1500, min: 1150 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1150, min: 850 },
          items: 3
        },
        smalltablet: {
          breakpoint: { max: 850, min: 550 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 550, min: 0 },
          items: 1
        }
      };

    return(
        <div className="intro-whole">
            <div className="intro-container">
                <div className="text-holder">
                    <div className="title">
                        <h2>New Arrivals</h2>
                    </div>
                    <Carousel responsive={responsive}>
                        {newArrivalShoes.map((shoe, index) => (
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
                        <h2>Sale</h2>
                    </div>
                        <Carousel responsive={responsive}>
                            {saleShoes.map((shoe, index) => (
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
                        <h2>Best Sellers</h2>
                    </div>
                    <Carousel responsive={responsive}>
                        {bestSellerShoes.map((shoe, index) => (
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