import ShoeCard from '../../Static Components/ShoeCard/ShoeCard';
import men1 from '../../../images/men1.jpg';
import './ShoesWrapper.scss';

export function ShoesWrapper () {
    const shoeCategory = ["Casual", "Sport", "Work", "Fashion"];

    return(
        <div className='whole-shoes-wrapper'>
            <div className='shoes-filter'>
                <div><p>Color</p></div>
                <div><p>Color</p></div>
                <div><p>Color</p></div>
                <div><p>Color</p></div>
            </div>
            <div className="shoes-wrapper">
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
                <ShoeCard shoe={men1} name="Men Navy Running Shoes" category={shoeCategory[1]} price="8,500 Br"/>
            </div>
        </div>
       

    )
}
    
