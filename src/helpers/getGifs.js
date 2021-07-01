
//Esta funcion obtiene los datos de los gif para pasarselo a el estado de las imagenes
export const getGifs = async( category ) => {

    //Para mandar un parametro por una url javascript tiene una funcion llamada encodeURI(), que permite mandar el parametro de forma correcta para una url
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=GNaNXgUO4lddtShbE9BWWb9NhA02dKHN`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    //console.log(data);

    const gifs = data.map((img) => {
        return {
            id:img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    //console.log(gifs);
    return gifs;

}