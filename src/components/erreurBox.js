import React from 'react';

 /* Affiche une erreur si la requête échoue*/

function ErrorBox () {

    return(
       	<div className="textErreur">				
            <div>				
                La commune n'existe pas ou elle est mal orthographiée ...
            </div>				
        </div>
    )
}

export default ErrorBox