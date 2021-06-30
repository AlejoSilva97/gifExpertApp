import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //Este es un custom hook creado por nosotros mismos
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            {/* Estas clases son animaciones de la libreria animate.css */}
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {/* Si loading esta true entonces ponemos un parrafo que indica que esta cargando las imagenes */}
            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
                {
                    images.map((img)=>(
                        <GifGridItem
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
