export async function getPeople(page) {
    try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log("Error Fetching data " + error);
        
    }
}

export async function getCharacterId(id) {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log("Error Fetching data " + error);
    }
}


export async function searchCaracther(name) {
    try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
        const data = await response.json()
        return data;

    } catch (error) {
        console.log("Error Search the name" + error);
        
    }
}



