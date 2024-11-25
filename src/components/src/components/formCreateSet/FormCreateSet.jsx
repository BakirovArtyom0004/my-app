import "./FormCreateSet.css";
// import { useState } from "react";
import { useForm } from "react-hook-form";

export function FormCreateSet(){
    const {register, handleSubmit, formState : {errors}} = useForm({defaultValues:{
        name:'',
        description:''
    }});
    
    // const [name, setName] = useState('')
    // const [description, setDescription] = useState('')

    // function handleNameChange(e){
    //     setName(e.target.value)
    // }
    // function handleDescriptionChange(e){
    //     setDescription(e.target.value)
    // }
    // function handleSubmit(e){        
    //     e.preventDefault();
    //     if(name == '' || description == ''){
    //         alert("Поля должны быть заполнены")
    //     } else {
    //         console.log(name);
    //         console.log(description);
    //     }        
    // }


    return (
        <form onSubmit={handleSubmit((data)=>{
            console.log(data)
        })}>
            <div className="form__item">
                <label htmlFor="name">Название набора</label>                    
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    {...register('name', 
                        {
                            required:"Заполните поле Название набора", 
                            minLength: {
                                value:4,
                                message: "Название набора должно содержать минимум 4 символа"
                            }
                        }
                    )}
                />
<p className="error-msg">{errors.name?.message}</p>                 
            </div>
            <div className="form__item">
                <label htmlFor="description">Описание</label>                
                <textarea 
                    name="description" 
                    id="description" 
                    {...register('description', {required:"Заполните поле Описание"})}
                />   
                <p className="error-msg">{errors.description?.message}</p>              
            </div>
            <div className="form__item">
                <input 
                    type="submit" 
                    value="Создать сет" 
                />
            </div>
        </form>
    )
}