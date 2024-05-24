import './Gig.css'

const Gig = (props) => {

    const toggleFavourite = () => {
        props.setGigs((prevGigs) => 
            prevGigs.map((prevGig) => 
                prevGig.id === props.id ? {...prevGig, isFavourite:!prevGig.isFavourite}: prevGig
            )
        )
    }

    return (
        <article className='gig-container'>
            <h3 className='artist'>{props.artist}</h3>
            <div className='gig'>
                <div className='title-img'>
                    <img src={`src/assets/${props.img}`} className='artist-image' alt="An image of the artist"/>
                </div>
                <div className='info'>
                <button 
                    data-testid = {props.id}
                    className='favourite_button' 
                    onClick={()=>toggleFavourite()} 
                    style={{ backgroundColor: props.isFavourite ? 'rgb(241, 84, 220)' : 'rgb(221, 216, 221)' }}
                    >
                        💙
                    </button>                    
                <p className='gig-description'>
                        {props.description}
                    </p>
                    <section className='gig-details'>
                        <p className='gig-time'>Time: {props.time}</p>
                        <p className='gig-date'>Date: {props.date}</p>
                        <h4>At</h4>
                        <p className='gig-location'>{props.location}</p>
                        {/* <p className='gig-name'>{props.eventName}</p> */}
                    </section>
                </div>
            </div>
        </article>
    )
}

export default Gig



{/* <button className={`favourite_button ${isFavourite ? 'green' : 'pink'}`} onClick={toggleFavourite}> */}