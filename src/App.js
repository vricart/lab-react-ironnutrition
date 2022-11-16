
import './App.css';

import foodData from './foods.json';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';

import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchFood from './components/SearchFood';




function App() {

  const [foods, setFood] = useState(foodData) 

  const addFoodHandler = (newFoodData) => {
    const newFoodDataList = [...foods]
    newFoodDataList.push(newFoodData)

    setFood(newFoodDataList)
    
  }

  const searchHandler = (queryItem) => {
    const filterQuery = [...foods].filter((food) => {
      return food.name.toLowerCase().includes(queryItem)
    })

    setFood(filterQuery)
  }

  const deleteHandler = (deleteItem) => {
    const filterItem = [...foods].filter((food) => {
      return food.name !== deleteItem
    })

    setFood(filterItem)
  }



  return (
    <div className="App">

    <div> 
      <div>
        <SearchFood onSearch={searchHandler}/>
      </div>
      <div>
        <AddFoodForm onAddFoodForm={addFoodHandler}/>
      </div> 

      { foods.map (food => {
        return (
          <div>
            <FoodBox 
              food={food} 
              onDeleteFoodItem={deleteHandler}
            />
          </div>
        )
      })}
    </div>

    </div>
  );
}

export default App;
