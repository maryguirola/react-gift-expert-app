import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ( { category } ) => {


    
    const { loading, data: images } = useFetchGifs( category );
    
    return ( 
        <>
            <h3 > { category } </h3>

            { loading && <p> Loading </p> }

          <div className="card-grid">
                
                    {
                        images.map( ( img ) => (
                            <GifGridItem 
                                key= {img.id}  
                                { ...img } />
                        ))
                    }  
            </div>
        </>
    )
}
