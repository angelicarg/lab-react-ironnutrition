import { useState } from 'react';
import 'antd/dist/antd.min.css';

function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
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
      image: '',
      calories: '',
      servings: '',
    });
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={(handleChange) => {}} />

      <label>Image</label>
      <Input value={undefined} type="image" onChange={(handleChange) => {}} />
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input value={undefined} type="number" onChange={(handleChange) => {}} />
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input value={undefined} type="number" onChange={(handleChange) => {}} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit" onClick={handleSubmit}>
        Create{' '}
      </button>
    </form>
  );
}

export default AddFoodForm;
