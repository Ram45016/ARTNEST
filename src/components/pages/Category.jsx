import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AddCategory, GetCategory, updateCategory, deleteCategory } from '../services/Api';
import '../../assets/css/category.css';

function CategoryComponent() {
    const [categories, setCategories] = useState([]);
    const [categoryData, setCategoryData] = useState({ id: '', name: '' });
    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await GetCategory();
            setCategories(response.data);
        } catch (error) {
            setCategories([]); // Set categories to an empty array in case of an error
        }
    };

    const handleAddCategory = async () => {
        await AddCategory(categoryData).then(() => {
            fetchCategories();
            setCategoryData({ id: '', name: '' }); // Clear the input fields
        });
    };

    const handleUpdateCategory = async (id) => {
        await updateCategory(id, categoryData).then(() => {
            fetchCategories();
            setCategoryData({ id: '', name: '' }); // Clear the input fields
        });
    };

    const handleDeleteCategory = async(id) => {
        await deleteCategory(id).then(() => {
            fetchCategories();
        });
    };

    return (
        <div className="category-container">
            <div className="add-category">
                <div>
                    <input
                        type="text"
                        placeholder="Category ID"
                        value={categoryData.id}
                        onChange={(e) => setCategoryData({ ...categoryData, id: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Category Name"
                        value={categoryData.name}
                        onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })}
                    />
                </div>
                <button onClick={handleAddCategory}>Add</button>
            </div>

            <ul className="category-list">
                <li className="category-list-item">
                    <span>ID</span>
                    <span>Name</span>
                </li>
                {categories.length === 0 ? (
                    <li className="category-list-item">
                        <span>No categories available</span>
                    </li>
                ) : (
                    categories.map((category) => (
                        <li className="category-list-item" key={category.id}>
                            {editingCategory === category.id ? (
                                <>
                                    <input
                                        value={categoryData.name}
                                        onChange={(e) =>
                                            setCategoryData({ ...categoryData, name: e.target.value })
                                        }
                                    />
                                    <button onClick={() => handleUpdateCategory(category.id)}>Save</button>
                                    <button onClick={() => setEditingCategory(null)}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <span>{category.id}</span>
                                    <span>{category.name}</span>
                                    <button onClick={() => setEditingCategory(category.id)}>Edit</button>
                                    <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default CategoryComponent;
