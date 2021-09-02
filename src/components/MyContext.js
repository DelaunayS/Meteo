import React from 'react';

const defaultContext ={   
    //questionne le nom de la commune
    query: "",
    setQuery: () => {},
    //stocke le résultat de la requête API météo
    result:{},    
    setResult: () => {} ,
    //stocke la recherche de la ville et le code pays
    villePays:{},
    setVillePays: () => {} 
};

export const UserContext=React.createContext(defaultContext)