import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
   
    test('Debe mostrar <GifExpertApp /> correctamente', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar una lista de categorias', () => {

        const categories = ['Naruto', 'Dragon ball'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    
});
