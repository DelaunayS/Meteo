import React, { useContext } from 'react';
import { UserContext } from './MyContext';

function GeoLocalisation () {   
    
    const {setQuery}=useContext(UserContext)       
    const {setResult}=useContext(UserContext)
    const {setVillePays}=useContext(UserContext)
    
    const api = {
        key : process.env.REACT_APP_TOKEN,
        base :"https://api.openweathermap.org/data/2.5/"
      }       

    const localise = ()=>{
       
        if (navigator.geolocation){
            (navigator.geolocation.getCurrentPosition((position)=>{
                let lat=position.coords.latitude
                let lon=position.coords.longitude
                
                    fetch(`${api.base}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}&lang=fr`)
                    .then((response)=>response.json())
                    .then(async (dataJson) => {	                					
                        setResult(await dataJson)					
                        setQuery('')   
                        setVillePays('')                         	
                    })				
                    .catch(console.error)       		              
                               
            }))

        }else{
            console.log("Geolocation n'est pas supporté")
        }  
        }

            
    return(
        <div>
            <button className="btn btn-info btn-lg "
                onClick={localise}>
                    Météo de ma position
            </button>
            
        </div>
    )
}

export default GeoLocalisation