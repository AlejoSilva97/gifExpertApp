import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'
 
export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //Cuando el segundo parametro es un arreglo vacio el useEffect me permite ejecutar lo que este adentro 
    //la primera vez que se renderize el componente y no cada que detecte cambios en un estado y, 
    //si el arreglo tiene algo, ejecutara lo que este adentro cada que lo que hay en el arreglo cambie.
    useEffect(() => {
        
        //getGifs nos regresa una promesa con las imagenes
        getGifs(category)
            .then((images) => {
                    setstate({
                        data: images,
                        loading: false
                    });
            });

    }, [ category ])

    //Si llamamos la funcion getGifs() en este nivel esta llamara la funcion setImages() 
    //y se volvera a renderizar el componete ya que detecta cambios en un estado, para evitar esto 
    //usamos useEffect() que nos permite llamar la funcion getGifs() solo la primera vez que se renderiza el componente
    //y asi evitamos que se vuelva a ejecutar el llamado a la API
    
    //getGifs();

    return state;
}
