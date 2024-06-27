import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['cats']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const clearCategories = () => {
    setCategories([]);
  };

  return (
    <>
      <h1>Gif App</h1>
      <div className='control-box'>
        <div className='search-box'>
          <AddCategory onNewCategory={onAddCategory} />
        </div>
        <div className='btn-box'>
          <button onClick={clearCategories}>Clear Gifs</button>
        </div>
      </div>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
