import backimg from '../images/winterBall.jpg';
import Item from './Item';
const ItemListContainer = (props) => {
    return (
        <div className="hero h-96" style={{backgroundImage: `url(${backimg})`,}}
        >
            <div className="" />
            <div className="text-center hero-content text-neutral-content">
                <div className="w-full">
                    <Item/>
                    <h1 className="mb-6 text-5xl font-bold">
                        {props.greeting}
                    </h1>
                </div>
            </div>
            
        </div>
        
        
    );
};
export default ItemListContainer;