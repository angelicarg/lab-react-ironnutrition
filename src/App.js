import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from '../src/components/FoodBox';
import AddFoodForm from '../src/components/AddFoodForm';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      <div>
        {allFoods.map((element) => {
          return (
            <FoodBox
              name={element.name}
              calories={element.calories}
              image={element.image}
              servings={element.servings}
            />
          );
        })}
      </div>
      <div>
        <AddFoodForm></AddFoodForm>
      </div>
    </div>
  );
}

export default App;
