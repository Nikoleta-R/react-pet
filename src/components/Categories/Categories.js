
import React, { useEffect, useState } from 'react'
import CategoryNavigation from './CategoryNavigation';
import * as petsServices from '../../services/petsServices';
import Pet from '../Pet';



const Categories = ({
    match,
}) => {
   
    const [pets, setPets] = useState([]);
    
   const category = match.params.category ? match.params.category :'';

    useEffect(()=>{
        petsServices.getAll(category)
        .then(res=>setPets(res));
     

     }, [category]);
    
   
  
  
   
return (
    <section className="dashboard">
        <h1>Dashboard</h1>
        <CategoryNavigation />
        <ul className="other-pets-list">
            {pets.map(x => <Pet key={x.id} data={x} />)}

        </ul>
    </section>
)
    }

export default Categories;