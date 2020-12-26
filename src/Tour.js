import React, { useState } from 'react'

function Tour({tour, removeTour}) {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='single-tour'>
            <img src={tour.image} alt={tour.name}/>
            <footer>
                <div className='tour-info'>
                    <h4>{tour.name}</h4>
                    <h4 className='tour-price'>$ {tour.price}</h4>
                </div>
                <p>
                    {readMore ? tour.info : `${tour.info.substring(0,200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less':'show more '}</button>
                    <button className='delete-btn' onClick={()=>removeTour(tour.id)}>Remove</button>
                </p>
            </footer>
        </article>
    )
}

export default Tour
