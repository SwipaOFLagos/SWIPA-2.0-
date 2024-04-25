import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CategoryForm from "../../components/forms/CategoryForm";
import { useAuth } from "../../contexts/Auth";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AdminCategory = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [updateName, setUpdateName] = useState("");
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fetch categories
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("/category/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };
  // fetchCategories();
  useEffect(() => {
    fetchCategories();
  }, []);

  // handleFormSubmit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/category/create", { name });

      if (data?.success) {
        fetchCategories();
        setName("");
        toast.success("Category created successfully");
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data;
      toast.error(msg);
    }
  };
  // handleFormSubmit
  const handleCategoryUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/category/${selected._id}`, { name: updateName });

      if (!data?.error) {
        fetchCategories();
        setUpdateName("");
        toast.success("Category updated successfully");
        setShow(false);
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data;
      toast.error(msg);
    }
  };

  console.log(selected);

  return (
    <>
      <h1>All Categories</h1>
      {categories.length > 0 &&
        categories.map((category) => {
          return (
            <div className="" key={category._id}>
              <ul key={category._id}>
                <li>{category.name}</li>
              </ul>
            </div>
          );
        })}

      {/* Create category Form */}
      <CategoryForm
        value={name}
        setValue={setName}
        handleSubmit={handleFormSubmit}
        placeholder="Write category name"
      />

      <div className="">
        {categories?.map((c) => {
          return (
            <button
              className="btn btn-outline-primary m-3"
              key={c._id}
              onClick={() => {
                setSelected(c);
                handleShow();
              }}
            >
              {c.name}
            </button>
          );
        })}
      </div>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selected?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CategoryForm
              placeholder="update category name"
              handleSubmit={handleCategoryUpdate}
              value={updateName}
              setValue={setUpdateName}
              buttonText="Update"
            />
          </Modal.Body>
        </Modal>
      </>
    </>
  );
};

export default AdminCategory;