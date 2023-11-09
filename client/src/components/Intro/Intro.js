import './Intro.scss';
import ShoeCard from '../ShoeCard/ShoeCard';

const Intro = () => {
    return(
        <div className="intro-container">
            <div className="text-holder">
                <div className="title">
                    <h1>New Arrivals</h1>
                </div>
                <div className='card-holder'>
                    <ShoeCard />
                    <ShoeCard />
                    <ShoeCard />
                </div>
            </div>
        </div>
    )
}

export default Intro;