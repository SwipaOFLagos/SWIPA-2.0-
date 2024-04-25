import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import CategoryForm from '../../components/forms/CategoryForm';
import { useAuth } from '../../contexts/Auth';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AdminCategory = () => {
    const [name, setName] = useState("");
    const [categories, setCategories] = useState([]);
    const [updateName, setUpdateName] = useState([]);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Fetch categories
    // async function is used because it is waiting for a Promise
    const fetchCategories = async () => {
        try {
            const { data } = await axios.get("/category/categories");
            setCategories(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    // fetchCategories();
    useEffect(() => {
        fetchCategories();
    }, [])

    // Handle Submit function
    // use async to await something that may not be ready 
    const handleFormSubmission = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/category/create", { name });
            if (data?.success) {
                fetchCategories();
                setName("")
                toast.success("Category created successfully")
            }
        } catch (err) {
            const message = err?.response?.data
            toast.error(message)
        }
    }
    // console.log(selected);

    const handleCategoryUpdate = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const { data } = await axios.put(`/category/${selected._id}`, { name: updateName });
            if (!data?.error) {
               
                fetchCategories();
                setUpdateName("");
                toast.success("Category updated successfully");
            }
            setLoading(false)
        } catch (err) {
            const message = err?.response?.data
            toast.error(message)
        }
    }

    return (
        <div>
            <h1>All Categories</h1>
            {categories.length > 0 && categories?.map((category) => {
                return (
                    <div key={category._id}>
                        <ul key={category._id}>
                            <li>
                                {category.name}
                            </li>
                        </ul>
                    </div>
                )
            })}

            {/* Create Category Form */}
            <CategoryForm value={name} setValue={setName} placeholder="Write Category name" handleSubmit={handleFormSubmission} />

            <div className=''>
                {categories?.map((category) => {
                    return (
                        <button className='btn btn-outline-primary m-3' key={category._id} onClick={() =>{ setSelected(category); handleShow()}}>{category.name}</button>
                    )
                })}
            </div>

            {/* Modal */}
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selected?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    
                        <CategoryForm placeholder="Update category name" handleSubmit = {handleCategoryUpdate} value = {updateName} setValue={setUpdateName} buttonText='Update'/>
                         {loading?( <>
                        <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                  </>)
                  :( '')
                         }
                    </Modal.Body>
                    
                </Modal>
            </>
        </div>
    )
}

export default AdminCategory