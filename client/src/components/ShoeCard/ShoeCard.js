import { Button } from 'bootstrap';
import shoe2 from '../../images/shoe2.png';
import './ShoeCard.scss'

function ShoeCard(){
    return(
        <div className='container'>
            <div className='inner-container'>
                <img src={shoe2} className='shoe-img'/>
            </div>
            <div className='shoe-info'>
                <p>Nike Blue</p>
                <p>9,200Br</p>
                <p>Add to Cart</p>
            </div>
        </div>
    )
}

export default ShoeCard;