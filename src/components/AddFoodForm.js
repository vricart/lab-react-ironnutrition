import { Divider, Input } from 'antd';
import React, { useState } from 'react';


function AddFoodForm(props) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")


    const addNameHandler = (event) => {
        setName(event.target.value)
    }

    const addImageHandler = (event) => {
        setImage(event.target.value)
    }

    const addCaloriesHandler = (event) => {
        setCalories(event.target.value)
    }

    const addServingsHandler = (event) => {
        setServings(event.target.value)
    }



   const submitHandler = (event) => {
        event.preventDefault();

        const addNewFoodItem = { 
            name: name, 
            calories: calories, 
            image: image, 
            servings: servings
        };

        props.onAddFoodForm(addNewFoodItem)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
   }


    return (
        <form onSubmit={submitHandler}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input 
            value={name} 
            type="text" 
            onChange={addNameHandler}
        />

        <label>Image</label>
        <Input 
            value={image} 
            type="text" 
            onChange={addImageHandler}
        />

        <label>Calories</label>
        <Input 
            value={calories} 
            type="number" 
            onChange={addCaloriesHandler}
        />

        <label>Servings</label>
        <Input 
            value={servings} 
            type="number" 
            onChange={addServingsHandler}
        />

        <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;