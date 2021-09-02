import React, { useContext} from 'react';
import { UserContext } from './MyContext';

const api = {
	key : process.env.REACT_APP_TOKEN,
	base :"https://api.openweathermap.org/data/2.5/"
  }

const apiGeo = {
key : process.env.REACT_APP_TOKEN,
base :"https://api.openweathermap.org/geo/1.0/direct"
}

function SearchBox () {  
    
    const {query}=useContext(UserContext)
    const {setQuery}=useContext(UserContext)   
    const {setResult}=useContext(UserContext)    
    const {villePays}=useContext(UserContext)    
    const {setVillePays}=useContext(UserContext)    
           
    /*recherche fait dans l'input*/
	const Search = () =>{
            
		if (query.length>2){

            fetch(`${apiGeo.base}?q=${query}&appid=${api.key}&limit=5`)
			.then((response)=>response.json())
            .then(async (dataJson) => {                
                setVillePays(dataJson)             	
			})				
			.catch(console.error)          
		}			
	}	

    const searchMeteoCity = event=>{  
       
        const data=event.target.innerHTML.split(' ')
              
        fetch(`${api.base}forecast?q=${data[0]},${data[1]}&units=metric&appid=${api.key}&lang=fr`)
        .then((response)=>response.json())
        .then(async (dataJson) => {                
            setResult(await dataJson)					
            setQuery('') 
            setVillePays('')                            	
        })				
        .catch(console.error)    
    }
    
    return(        
        <div>
            <div className="search-box" >
                    <input
                        id="query"
                        type="text"
                        className="search-bar"
                        placeholder=" Recherche par nom de ville..."
                        onChange={event => setQuery(event.target.value)}
                        value={query}
                        onKeyUp={Search}/>                                                  
            </div>   

            <div className="p-2">
                {(villePays.length>0)
                    ? ( <div className="cityList">
                            {villePays.map((data,index)=>(
                            <div className="mx-1" key={index}>
                                <div className="btn btn-info"
                                onClick={searchMeteoCity}
                                >
                                {data.name+' '+data.country}
                                </div>
                            </div>
                            ))}                            
                        </div>                 
                    )  
                    : (
                    <button className="invisible btn"> Espace blanc </button>
                    ) 
                }                              
            </div>           
        </div>
     )      
}

export default SearchBox