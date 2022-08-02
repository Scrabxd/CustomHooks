import { useState } from "react";

export const useForm = (initialForm = {} ) => {


    // {
    //     username:'',
    //     email:'',
    //     password:'',
    // }

    const [formState, setFormState] = useState(initialForm);


    // todo este proceso es para tener los datos en un "hook" estamos metiendo los datos en un objeto automaticamente, lo cual nos ayudara a poder usarlos despues tal vez jeje

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value,
        });
    }


    const onResetForm = () =>{
        setFormState(initialForm);
    }
  
 return{
    ...formState,
    formState,
    onInputChange,
    onResetForm,
 } 
}
