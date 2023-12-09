import ShoeCard from '../../Static Components/ShoeCard/ShoeCard';
import './ShoesWrapper.scss';
import men from '../../../json/men.json';
import women from '../../../json/women.json';
import kids from '../../../json/kids.json';
import Filters from '../../Static Components/Filters/Filters';

export function ShoesWrapper (props) {

    let page;

    switch (props.name) {
        case "Men's":
            page = men;
            break;

        case "Women's":
            page = women;  
            break;
     
        case "Kids'":
            page = kids;
            break;
    
        default:
            break;
    }

    return(
        <div className='whole-shoes-wrapper'>
            <Filters />
            <div className="shoes-wrapper">
                {page.map((shoe, index) => (
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
    
