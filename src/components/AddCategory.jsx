import { useState } from "react";

export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue, setInputValue] = useState('One Punch');
    
    //desestructurar event
    //const onInputChange= (target) => {
    const onInputChange= (event) => {
        setInputValue( event.target.value )
        //setInputValue( target.value )
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if( inputValue.trim().length <= 1  ) return;

        //console.log(inputValue)
        //setCategories( (categories) => [ inputValue, ...categories ] )
        onNewCategory( inputValue.trim() )

        setInputValue("");
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gift" 
                value={ inputValue } 
                onChange={ (event) => onInputChange(event) }/>
                {/* onChange={ onInputChange } */}
        </form>
    )
}


