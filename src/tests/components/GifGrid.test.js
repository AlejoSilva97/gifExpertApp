import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
    
    const category = 'Naruto';
   
    test('Debe mostrar <GifGrid /> correctamente', () => {

        //Asi simulamos un estado de nuestro useFetchGifs
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: '123ABC',
            title: 'Naruto Gif',
            url: 'https://cualquiercosa.jpg'
        },
        {
            id: '456DFG',
            title: 'Naruto Gif',
            url: 'https://cualquiercosa.jpg'
        }];

        //Asi simulamos un estado de nuestro useFetchGifs
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        //Un mock se usa para fingir hacer algo
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    
});
