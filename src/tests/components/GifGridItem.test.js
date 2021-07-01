import React from 'react';
import { shallow } from "enzyme";

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componente <GifGridItem />', () => {

    const title = 'Titulo de la imagen';
    const url = 'https://unaimagen.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrarse el componente <GifGridItem /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener un parrafo con el title ', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe(title);
        
    });
    
    test('Debe tener una imagen con url y alt de las props', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
    });

    test('el div debe tener animate fadeIn en las clases', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
        //expect(div.prop('className')).toContain('animate__fadeIn'); Este lo hize yo y funciona, no se que tan correcto esté hacerlo de esta manera
        
    });
    
});


