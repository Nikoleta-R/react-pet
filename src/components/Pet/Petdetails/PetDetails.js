import React, { useEffect, useState } from 'react';
const PetDetails = ({
    match
}) => {
    const [pet, setPet] = useState([]);
    
    const id = match.params.id
 
    
    
     useEffect(()=>{
         fetch(`http://localhost:5002/pets/${id}`)
         .then(res => res.json())
         .then(res=>setPet(res));
      
 
      }, [id]);


    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
                    Pet</button></a>
            </p>
            <p class="img"><img src={pet.imageURL}/></p>
                <p class="description">{pet.description}</p>
        </section>

    )

}
export default PetDetails;