import { useState } from 'react';
import { Row, Divider, Button, Input } from 'antd';

function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    calories: '',
    image: '',
    servings: '',
  });

  function hancleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setAllFoods([...allFoods, form]);

    setForm({
      name: '',
      calories: '',
      image: '',
      servings: '',
    });
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={form.name}
        type="text"
        name="name"
        onChange={(handleChange) => {}}
      />

      <label>Calories</label>
      <Input
        value={form.calories}
        type="number"
        name="calories"
        onChange={(handleChange) => {}}
      />
      {/* render antd <Input /> type="number" here */}

      <label>Image</label>
      <Input
        value={form.image}
        type="text"
        name="image"
        onChange={(handleChange) => {}}
      />
      {/* render antd <Input /> type="text" here */}

      <label>Servings</label>
      <Input
        value={form.servings}
        type="number"
        name="servings"
        onChange={(handleChange) => {}}
      />
      {/* render antd <Input /> type="number" here */}

      <button type="submit" onClick={handleSubmit}>
        Create{' '}
      </button>
    </form>
  );
}

export default AddFoodForm;
