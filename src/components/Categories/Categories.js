
import {useEffect, useState } from 'react'
import CategoryNavigation from './CategoryNavigation'
import Pet from './Pet'
const Categories = ({
    match,
})=> {
    
    const [pets, setPets] = useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/pets')
            .then((res)=>res.json())
            .then(res =>setPets(res))
           
            .catch(error=>console.log(error));
    }, [])
    console.log(pets);
    return(
        <section className="dashboard">
        <h1>Dashboard</h1>
        <CategoryNavigation/>
        <ul className="other-pets-list">
           <Pet/>
        </ul>
    </section>
   
    )

}
export default Categories;