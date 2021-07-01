import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con helpers/getGifs.js fetch', () => {

    test('Debe traer 10 elementos ', async() => {

        const gifs = await getGifs('Naruto');

        expect(gifs.length).toBe(10);
        
    });

    test('Debe traer un arreglo vacio si no se envia parametro ', async() => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
        
    });
    
});
