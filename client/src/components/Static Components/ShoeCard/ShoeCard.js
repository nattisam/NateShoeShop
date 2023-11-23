import './ShoeCard.scss';

function ShoeCard(props){
    return(
        <div className='whole-shoe-container'>
            <div className='shoe-container'>
                <div className='inner-container'>
                    <div className="img-container">
                        <img src={props.shoe} alt="shoe" className='shoe-img'/>
                    </div>
                </div>
                <div className='shoe-info'>
                    <span className='double-prices'>
                        {props.section === 'sale' ? (<p className='original-price'>{props.originalprice}</p>) : null}
                        <p className={props.section === 'sale' ? "new-arrivals-price sale-price" : "new-arrivals-price"}>{props.price}</p>
                    </span>
                    <p className="new-arrivals-details">{props.name}</p>
                    <p className="new-arrivals-details new-arrivals-category">{props.category}</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ShoeCard;