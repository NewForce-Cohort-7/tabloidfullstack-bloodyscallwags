import React, { useState, useEffect } from "react";
import { getAllCategories } from "../Managers/CategoryManager";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then(allCategories => setCategories(allCategories)); 
  };

  useEffect(() => {
    getCategories();
  }, []); 



  return (  
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <img src={category.imageUrl} alt={category.title} />
          <p>
            <strong>{category.title}</strong>
          </p>
          <p>{category.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;