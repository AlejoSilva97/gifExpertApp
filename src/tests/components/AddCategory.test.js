import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);//se inicializa 2 veces para tener los snippets

    beforeEach(() => {
        //Esta funcion se utiliza para limpiar o quitar cualquier simulacion que se este haciendo antes de empezar otro test
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    });
   
    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    //Prueba para explicacion 
    test('Debe de cambiar el valor de el input', () => {
       
        const input = wrapper.find('input');
        const value = 'hola mundo';

        input.simulate('change', { target:{ value } });

        expect( wrapper.find('p').text().trim() ).toBe(value);

    });

    test('No debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
        
    });

    test('Debe llamar la funcion setCategories y limpiar la caja de texto(input)', () => {

        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', { target:{ value } });

        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('input').prop('value') ).toBe('');
        
    });
    
});
