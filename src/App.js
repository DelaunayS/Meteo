import React, { useState } from 'react';
import { UserContext } from './components/MyContext';

import SearchBox from './components/searchBox'
import ResultBox from './components/resultBox'
import GeoLocalisation from './components/geolocalisation'
import ErrorBox from './components/erreurBox';
import FiveDays from './components/fiveDays'

import 'bootstrap/dist/css/bootstrap.css'

function App() {

	/* requête du nom de la ville */
	const [query, setQuery] = useState ('')

	/*stocke le résultat de la requête*/
	const [result, setResult] = useState ({})
	
	/*stocke la recherche de la ville et le code pays*/
	const [villePays,setVillePays]= useState('')

	const contextValue = {
		query,setQuery,
		result,setResult,
		villePays,setVillePays			
	  };


  return (
    <div className={
		(typeof result.list !="undefined") 
		?  result.list[0].weather[0].main
		:'intro'}>		

		<UserContext.Provider value={contextValue}>
     	<main>	
			
			<div className='container-fluid'>
			<SearchBox></SearchBox>	
			</div>
			
			<div className='container-fluid'>
				<div className="row">
					<div className="col-3">
						<GeoLocalisation></GeoLocalisation>
					</div>
								
					<div className="col-9">								
						{(result.cod ==='200') 
							? (<ResultBox></ResultBox>)
							: null
						}																			
					</div>	
				</div>
				<div className="row">
						{(result.cod ==='200') 
							? (<FiveDays></FiveDays>)
							: null
						}	
				</div>						
			 </div>	

			<div className='container-fluid'>
				{(result.cod ==='404') 
					? <ErrorBox></ErrorBox>
					: null
				}
			</div>			
			
			
     	</main>
	  	</UserContext.Provider>
    </div>  
  )
}

export default App;