import adidas from '../../../json/adidas.json';
import nike from '../../../json/nike.json';
import puma from '../../../json/puma.json';
import Carousel from 'react-multi-carousel';
import ShoeCard from '../ShoeCard/ShoeCard';
import './BrandsCarousel.scss';
import "react-multi-carousel/lib/styles.css";
import '../Filters/Filters';

const BrandsCarousel = (props) => {
  let brand;

  switch (props.brand) {
      case "Adidas":
          brand = adidas;
          break;

      case "Nike":
          brand = nike;  
          break;
   
      case "Puma":
          brand = puma;
          break;
  
      default:
          break;
  }
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

    return (
        <div className='carousel-container'>
            <div className='title'>
                <h2>{props.brand}</h2>
            </div>
            <Carousel responsive={responsive}>
                {brand.map((shoe, index) => (
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
    )
}

export default BrandsCarousel;