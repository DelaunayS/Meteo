/*traduction des conditions météos de l'anglais vers le français*/

const traductionMeteo = (key) =>{
    switch (key) {
        case 'Rain':
            return 'Pluie'			
            
        case 'Thunderstorm':
            return 'Orage'				
            
        case 'Drizzle':
            return 'Bruine'				
            
        case 'Snow':
            return 'Neige'

        case 'Atmosphere':
        return 'Climat'

        case 'Clear':
        return 'Soleil'

        case 'Clouds':
        return 'Nuages'
            
        default:				
            break;
    }
}

export default traductionMeteo