import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../Managers/CategoryManager";

export const CategoryForm = () => {

    const [newCategory, update] = useState({
        name: ""

    })

    const navigate = useNavigate();

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const categoryToSendToAPI = {
            Name: newCategory.name
     
            
        };
            return addCategory(categoryToSendToAPI)
            .then(navigate("/categoriesList"));
            
        };

    return (
        <form className="category-form">
            <h2 className="category-form-name">Create a New Category</h2>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name of Category:</label>
                        <input
                            type="text"
                            id="name"
                            value={newCategory.name}
                            onChange={
                                (event) => {
                                    const copy = { ...newCategory }
                                    copy.name = event.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">Save Category</button>
        </form>
    );
};
