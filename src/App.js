import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from '../src/components/FoodBox';
import AddFoodForm from '../src/components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Row, Divider, Button, Input } from 'antd';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}></Row>
      <div>
        <AddFoodForm />
      </div>
      <div>
        {allFoods
          .filter((element) => {
            return element.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((element) => {
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
    </div>
  );
}

export default App;
