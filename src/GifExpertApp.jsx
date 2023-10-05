import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories])
    //otra forma
    //setCategories( cat => [ ...cat, 'Valorant' ] );
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        <AddCategory 
          //setCategories= { setCategories } 
          onNewCategory= { event => onAddCategory( event ) }
        />

        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        {/* Listado de Gif */}

        {/* <ol>
          { categories.map( category => {
            return 
              <div key={category}>
                <li >{category}</li>
              </div>
          })}
        
          
        </ol> */}
                
      
        { 
          categories.map( category => (
              <GifGrid key={ category } category={category}/>
          ))
        }
                    
        

        
            {/* Gif Item */}
      
    </>
  )
}


