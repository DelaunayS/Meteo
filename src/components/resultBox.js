import React, { useContext } from 'react';
import { UserContext } from './MyContext';
import editeurDate from './dateEditeur';
import traductionMeteo from './traductionMeteo';

function ResultBox () {

    const {result}=useContext(UserContext)
	
    return(
		<div className="textReponse">			
			 <div className="location">
			{result.city.name} {result.city.country}											
			</div>	
			<div className="date">
				{editeurDate(new Date())}
			</div>			
			<div className="température">
			{Math.round(result.list[0].main.temp)}°c
			</div>
			<div className="weather">
			{traductionMeteo(result.list[0].weather[0].main)} : {result.list[0].weather[0].description}					
			</div>					
		</div>   
		   
    )    
}

export default ResultBox