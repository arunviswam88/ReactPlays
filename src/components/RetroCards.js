const RestroCards = (props) => {
    const { info } = props.restroData;
    return (
        <div className='restro-cards'>
            <div className='food'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+info.cloudinaryImageId}></img>
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