import React, { useState, useEffect } from "react";
import { getAllCategories } from "../Managers/CategoryManager";
import { Table } from "reactstrap";

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then(allCategories => setCategories(allCategories)); 
  };

  useEffect(() => {
    getCategories();
  }, []); 

  //returns list of all categories
  return (  
    <Table striped size="sm" className="table1_index" id="categoryTable">
    <thead>
        <tr>
            <th>Id</th>
            <th>Category Name</th>
        </tr>
        </thead>
        <tbody>
            {categories.map((category) => (
                <tr key={category.id}>
                    <th scope="row">{category.id}</th>
                    <td>{category.name}</td>
                </tr>
            ))}
    </tbody>
</Table>
);


};
export default CategoryList;