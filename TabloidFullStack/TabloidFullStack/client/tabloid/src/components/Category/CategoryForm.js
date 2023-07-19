import { useState } from "react"
import { addCategory } from "../Managers/CategoryManager";
import { useNavigate } from "react-router-dom";

export const CategoryForm = () => {

    const [newCategory, update] = useState({
        name: "",
        imageUrl: ""

    })

    const navigate = useNavigate();
}
