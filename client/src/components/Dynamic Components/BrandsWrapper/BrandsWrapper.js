import './BrandsWrapper.scss';
import Carousel from "react-multi-carousel";
import shoes from '../../../json/shoes.json';
import ShoeCard from "../../Static Components/ShoeCard/ShoeCard";
import shoeConstants from '../../../constants/shoeConstants';

const BrandsWrapper = () => {

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
      
    return (
        <div className="brands-wrapper">
            {shoeConstants.brands.filter(brand => brand !== 'All').map((brand, index) => (
                <div key={index} className='carousel-container'>
                    <div className='title'>
                        <h2>{brand}</h2>
                    </div>
                    <Carousel responsive={responsive}>
                        {shoes.filter(shoe => shoe.brand === brand).map((shoe, index) => (
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
            ))}
        </div>
    )
}

export default BrandsWrapper;