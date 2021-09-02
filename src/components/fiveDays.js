import React, { useContext } from 'react';
import { UserContext } from './MyContext';
import jourDate from './jourEditeur';
import ReactTooltip from 'react-tooltip';

function FiveDays (){

    const {result}=useContext(UserContext)  
            
    return (
        <div className='fiveDayMeteo overflow-auto'>                
                  {result.list.map((data,index)=>(
                      <ul  data-tip={data.weather[0].description} className="squareMeteo border border-dark p-2" key={index}>
                          <li>{jourDate(data.dt_txt)}</li>
                          <li><img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt='icone meteo'/></li>
                          <li>{Math.round(data.main.temp)}°C</li>  
                     </ul>                    
                  ))}  
                  <ReactTooltip className="tooltip" effect="solid" place="bottom" getContent={(dataTip)=>`${dataTip}`}/>
         
                              
        </div>
    )
}

export default FiveDays