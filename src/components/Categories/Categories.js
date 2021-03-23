
import React, { useEffect, useState } from 'react'
import CategoryNavigation from './CategoryNavigation'
import Pet from '../Pet'
import { Component } from 'react';


const Categories = ({
    match,
}) => {
   
    const [pets, setPets] = useState([]);
    
   const category = match.params.category ? match.params.category :'';

   
   
    useEffect(()=>{
        fetch(`http://localhost:5002/categories/${category}`)
        .then(res => res.json())
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