import './App.css';
import { getCharacterId, getPeople, searchCaracther } from './api/people';
import data from "./data.json";
import { useState, useEffect, useRef } from 'react';

function App() {
    const [isLoading, setLoading] = useState(true);
    const [people, setPeople] = useState([]);
    const [detail, setDetail] = useState(null);
    const [textSearch, setTextSearch] = useState("");
    const [page, setPage] = useState(1)
    //nos permite tener la referencia del elemento
    const inputSearch = useRef(); 

    useEffect( () => {
        fetchPeople(page);
        setLoading(false);
    }, [page]); 

    const fetchPeople = async(page) => {
        const result = await getPeople(page);
        setPeople(result)
    }
    
    const showDetails = (item) => {
        //Get the ID
        const id = Number(item.url.split('/').slice(5)[0]);
        fetchCharacterId(id)
    }
    
    const fetchCharacterId = async(id) => {
        const result = await getCharacterId(id);
        setDetail(result)
    }
    
    const onChangeTextSearch = (event) => {
        event.preventDefault();
        const text = inputSearch.current.value;
        setTextSearch(text)
    }
    
    const search = () => {
        inputSearch.current.value = '';
        setDetail(null);
        fetchCharacter()
    }

    const fetchCharacter = async() => {
        const result = await searchCaracther(textSearch)
        setPeople(result)
    }
    
    const onChangePage = (value) => {
        if(!people.previous && page + value <= 0 ) return;
        if(!people.next && page + value >= 9) return;
        
        setPage(page + value);
    }

    if(isLoading){
        return <p>Loading....</p>
    }
    
    return (
        <>
            {/* Input Search */}
            <input 
                ref={inputSearch}
                type='text' 
                placeholder='Search a person'
                onChange={onChangeTextSearch}
            />
            <button onClick={search}>Search</button>

            {/* List*/}
            <ul>
                { people?.results?.map(item => (
                    <li key={item.name} onClick={ () => showDetails(item)} className='click'>
                        {item.name}
                    </li>
                ))}
            </ul> 

            {/* Pagination */}
            <section>
                <button onClick={ () => onChangePage(-1)}>Prev</button>  
                <button onClick={ () => onChangePage(+1)}>Next</button>
            </section>

            {/* Detail*/}
            { detail
                ? ( <aside>
                        <h1>{detail.name}</h1>
                        <ul>
                            <li>Height: {detail.height}</li>
                            <li>Mass: {detail.mass}</li>
                            <li>Year of Birth: {detail.birth_year}</li>
                        </ul>
                    </aside>) 
                : null
            }
        </>
    );
}

export default App;
/* <pre>{JSON.stringify(data, null, 2)}</pre> */
