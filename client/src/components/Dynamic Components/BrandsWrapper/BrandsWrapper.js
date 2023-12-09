import BrandsCarousel from "../../Static Components/BrandsCarousel/BrandsCarousel"
import Filters from "../../Static Components/Filters/Filters"
import './BrandsWrapper.scss';

const BrandsWrapper = () => {
    const brands = ["Adidas", "Nike", "Puma"];

    return (
        <div className="brands-wrapper">
            <Filters />
            <BrandsCarousel brand={brands[0]} />
            <BrandsCarousel brand={brands[1]} />
            <BrandsCarousel brand={brands[2]} />
        </div>
    )
}

export default BrandsWrapper;