import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Filters.scss';

const Filters = () => {
    return (
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
    )
}

export default Filters;