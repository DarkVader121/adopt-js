export async function fetchDogs(dogFilter){
    const { breed } = dogFilter.breed; 
    const headers = {
        'X-RapidAPI-Key': '757a6ac137mshc8c72e05fb891d9p131fb8jsn85084f49a794',
		'X-RapidAPI-Host': 'dogs-by-api-ninjas.p.rapidapi.com'
    }
    console.log('Breed:', breed);

    const response = await fetch(`https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=${breed}`, {
        headers: headers
    });

    const result = await response.json();

    return result; 
}
