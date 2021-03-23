export const getAll = (category ="")=>{
   
    let url = 'http://localhost:5002/categories'
    url +=category ? `category = ${category}` : '';
    console.log(url)
 return fetch(url)
    .then((res) => res.json())
   
    .catch(err => console.log(err))
}