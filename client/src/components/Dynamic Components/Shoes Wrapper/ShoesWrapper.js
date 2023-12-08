import ShoeCard from '../../Static Components/ShoeCard/ShoeCard';
import men1 from '../../../images/men1.jpg';
import './ShoesWrapper.scss';
import men from '../../../json/men.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export function ShoesWrapper () {
    const shoeCategory = ["Casual", "Sport", "Work", "Fashion"];

    return(
        <div className='whole-shoes-wrapper'>
            <div className='shoes-filter'>
                <div>
                    <p>Color</p>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div>
                    <p>Size</p>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div>
                    <p>Brand</p>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div>
                    <p>Price</p>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <div className="shoes-wrapper">
                {men.map((shoe, index) => (
                    <ShoeCard
                        key={index}
                        name= {shoe.name}
                        category= {shoe.category}
                        img= {shoe.img}
                        price= {shoe.price}
                    />
                ))}
            </div>
        </div>
       

    )
}
    
