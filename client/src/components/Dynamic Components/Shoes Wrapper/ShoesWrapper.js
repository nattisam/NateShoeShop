import { useState, useEffect, useRef } from 'react';
import ShoeCard from '../../Static Components/ShoeCard/ShoeCard';
import './ShoesWrapper.scss';
import shoes from '../../../json/shoes.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import shoeConstants from '../../../constants/shoeConstants';

export function ShoesWrapper (props) {

    const [colorVisible, setColorVisible] = useState(false);
    const [sizeVisible, setSizeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [priceVisible, setPriceVisible] = useState(false);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const shuffleArray = (array) => {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;
      
        // While there remain elements to shuffle
        while (0 !== currentIndex) {
      
          // Pick a remaining element
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // Swap it with the current element
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      };

    const handleColor = () => {
        setColorVisible(!colorVisible);
        setSizeVisible(false);
        setBrandVisible(false);
        setSizeVisible(false);
    };

    const handleSize = () => {
        setSizeVisible(!sizeVisible);
        setBrandVisible(false);
        setColorVisible(false);
        setPriceVisible(false);
    };
    
    const handleBrand = () => {
        setBrandVisible(!brandVisible);
        setSizeVisible(false);
        setColorVisible(false);
        setPriceVisible(false);
    };

    const handlePrice = () => {
        setPriceVisible(!priceVisible);
        setSizeVisible(false);
        setColorVisible(false);
        setBrandVisible(false);
    };
  
    const filterColor = (colorName) => {
        setSelectedColor(colorName);
        setColorVisible(false);
        setSizeVisible(false);
        setBrandVisible(false);
        setPriceVisible(false);
    };

    const filterSize = (sizeName) => {
        setSelectedSize(sizeName);
        setColorVisible(false);
        setSizeVisible(false);
        setBrandVisible(false);
        setPriceVisible(false);
    };
  
    const filterBrand = (brandName) => {
        setSelectedBrand(brandName);
        setColorVisible(false);
        setSizeVisible(false);
        setBrandVisible(false); 
        setPriceVisible(false);  
    };

    const filterPrice = (priceName) => {
        setSelectedPrice(priceName);
        setColorVisible(false);
        setSizeVisible(false);
        setBrandVisible(false); 
        setPriceVisible(false);  
    };
  
    const dropdownRef = useRef(null);
    
    useEffect(() => {
        shoes = shuffleArray(shoes);
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setColorVisible(false);
                setSizeVisible(false);
                setBrandVisible(false);
                setPriceVisible(false);
            }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    const menShoes = shoes.filter(shoe => shoe.section === "Men");
    const womenShoes = shoes.filter(shoe => shoe.section === "Women");
    const kidsShoes = shoes.filter(shoe => shoe.section === "Kids");

    let page;

    switch (props.name) {
        case "Men's":
            page = menShoes;
            break;

        case "Women's":
            page = womenShoes;  
            break;
     
        case "Kids'":
            page = kidsShoes;
            break;
    
        default:
            break;
    }

    if (selectedColor) {
        page = selectedColor === "All"  ? page : page.filter((shoe) => shoe.color.toLowerCase().includes(selectedColor.toLowerCase()));
    }

    switch (selectedSize) {
        case "All":
            break;
        case "30-31":
            page = page.filter((shoe) => shoe.size === 30 || shoe.size === 31);
            break;
        case "32-33":
            page = page.filter((shoe) => shoe.size === 32 || shoe.size === 33);
            break;
        case "34-35":
            page = page.filter((shoe) => shoe.size === 34 || shoe.size === 35);
            break;
        case "36-37":
            page = page.filter((shoe) => shoe.size === 36 || shoe.size === 37);
            break;
        case "38-39":
            page = page.filter((shoe) => shoe.size === 38 || shoe.size === 39);
            break;
        case "40-41":
            page = page.filter((shoe) => shoe.size === 40 || shoe.size === 41);
            break;
        case "42-43":
            page = page.filter((shoe) => shoe.size === 42 || shoe.size === 43);
            break;
        case "44-45":
            page = page.filter((shoe) => shoe.size === 44 || shoe.size === 45);
            break;
        default:
            break;
    }

    if (selectedBrand) {
        page = selectedBrand === "All"  ? page : page.filter((shoe) => shoe.brand.toLowerCase().includes(selectedBrand.toLowerCase()));
    }

    switch (selectedPrice) {
        case "All":
            break;
        case "":
            page = page.filter((shoe) => shoe.price < 3000);
            break;
        case "3000-5000":
            page = page.filter((shoe) => shoe.price >= 3000 && shoe.price < 5000);
            break;
        case "5000-7000":
            page = page.filter((shoe) => shoe.price >= 5000 && shoe.price < 7000);
            break;
        case "7000-9000":
            page = page.filter((shoe) => shoe.price >= 7000 && shoe.price < 9000);
            break;
        case ">9000":
            page = page.filter((shoe) => shoe.price > 9000);
            break;
        default:
            break;
    }
    
    return(
        <div className='whole-shoes-wrapper'>
            <div className='shoes-filter'  ref={dropdownRef}>
                <div>
                    <button style={{ borderColor: props.bgColor }} onClick={handleColor}>
                        <p style={{ color: props.bgColor }}>Color</p>
                        <FontAwesomeIcon icon={faAngleDown} color={props.bgColor}/>
                    </button>
                    {colorVisible && 
                    <div>
                        {shoeConstants.colors.map((color, index) => (
                            <button key={index} onClick={() => filterColor(color)}>
                                <p>{color}</p>
                            </button>
                        ))}
                    </div>
                    }
                </div>
                <div>
                    <button style={{ borderColor: props.bgColor }} onClick={handleSize}>
                    <p style={{ color: props.bgColor }}>Size</p>
                        <FontAwesomeIcon icon={faAngleDown} color={props.bgColor}/>
                    </button>
                    {sizeVisible && 
                    <div>
                        {shoeConstants.sizes.map((size, index) => (
                            <button key={index} onClick={() => filterSize(size)}>
                                <p>{size}</p>
                            </button>
                        ))}
                    </div>
                    }
                </div>
                <div>
                    <button style={{ borderColor: props.bgColor }} onClick={handleBrand}>
                    <p style={{ color: props.bgColor }}>Brand</p>
                        <FontAwesomeIcon icon={faAngleDown} color={props.bgColor}/>
                    </button>
                    {brandVisible && 
                        <div>
                            {shoeConstants.brands.map((brand, index) => (
                                <button key={index} onClick={() => filterBrand(brand)}>
                                    <p>{brand}</p>
                                </button>
                            ))}
                        </div>
                    }
                </div>
                <div>
                    <button style={{ borderColor: props.bgColor }} onClick={handlePrice}>
                    <p style={{ color: props.bgColor }}>Price</p>
                        <FontAwesomeIcon icon={faAngleDown} color={props.bgColor}/>
                    </button>
                    {priceVisible && 
                        <div>
                            {shoeConstants.prices.map((price, index) => (
                                <button key={index} onClick={() => filterPrice(price)}>
                                    <p>{price}</p>
                                </button>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <div className="shoes-wrapper">
                <div className='shoes-container'>
                    {
                    page.length === 0 
                    ?
                        ( <div className='no-items'><FontAwesomeIcon icon={faSearch} size='20px' color='gray' /><p>No Items Found</p></div> )
                    :
                        ( page.map((shoe, index) => (
                        <ShoeCard
                            key={index}
                            name= {shoe.name}
                            category= {shoe.category}
                            img= {shoe.img}
                            price= {shoe.price}
                        /> )
                    ))}
                </div>
            </div>
        </div>
    )
}
    
