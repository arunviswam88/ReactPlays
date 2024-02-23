import { IMAGE_URL } from "../utils/env";

const RestroCards = (props) => {
    const { info } = props.restroData;
    return (
        <div className='restro-cards'>
            <div className='food'>
                <img src={IMAGE_URL+info.cloudinaryImageId}></img>
            </div>
            <div className='food-info'>
                <div className='items name'>{info.name}</div>
                <div className='items'>{info.cuisines.join(',')}</div>
                <div className='rating'>Rating: {info.avgRating}*</div>
            </div>
        </div>
    )
}
export default RestroCards;