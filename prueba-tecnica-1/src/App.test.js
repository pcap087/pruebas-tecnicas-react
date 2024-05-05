import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data.json';


describe('Star Wars APP', () => {
    beforeAll(() => {
        jest.spyOn(window, 'fetch')
    })

    // test('should show a list of characters from a JSON file ', () => {
    //     render(<App />)
    //     for (const character of data.results) { 
    //         expect(screen.getByText(character.name)).toBeInTheDocument()
    //     }
    // })

    // test('should show an error message when has a network error', async () => {
    //     window.fetch.mockRejectedValueOnce(new Error('Network error'));
        
    //     render(<App />)
    //     expect(await screen.findByText("Network error")).toBeInTheDocument();

    // });

});









 // test('Should show list of characteres including Luke Skywalker ', () => {
    //     render(<App />)
    //     expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();

    // });

    // test('should show a list of characters from a JSON file ', () => {
    //     render(<App />)
    //     for (const character of data.results) { 
    //         expect(screen.getByText(character.name)).toBeInTheDocument()
    //     }
        
// });