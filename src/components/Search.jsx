import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../api";
function Search({ onSearchchange }) {

    const [search, setSearch] = useState(null);
    function handleonchange(searchData) {
        setSearch(searchData);
        onSearchchange(searchData);
    }


    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name},${city.countryCode}`,
                        }
                    })
                }
            }
            )
            .catch(err => console.error(err));



    }







    return (
        <>
      
        <AsyncPaginate
            placeholder="Search for cities"
            debounceTimeout={600}
            value={search}
            onChange={handleonchange}
            loadOptions={loadOptions}


        />
        {!search&&(
            <h2 style={{textAlign:"center" ,marginTop:"100px"}}>Select city to load data</h2>
        )}

        </>
    )
}


export default Search;