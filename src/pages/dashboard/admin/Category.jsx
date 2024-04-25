import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CategoryForm from "../../../components/forms/CategoryForm";
import { useAuth } from "../../../contexts/Auth";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SiNamebase } from "react-icons/si";

const AdminCategory = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [updateName, setUpdateName] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //fetch categories
  const FetchCategories = async () => {
    try {
      const { data } = await axios.get("/category/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  //fetchcategory
  useEffect(() => {
    FetchCategories();
  }, []);

  //handelSubmit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/category/create", { name });
      if (data.success) {
        FetchCategories();
        setName("");
        toast.success("category created successfully");
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data;
      toast.error(msg);
    }
  };
  const handleCategoryUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.put(`/category/${selected._id}`, {
        name: updateName,
      });
      if (!data?.error) {
        FetchCategories();
        setUpdateName("");
        toast.success("category Updated successfully");
        setTimeout(() => {
          setShow(false);
          setLoading(false);
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data;
      toast.error(msg);
    }
  };

  return (
    <>
      <h1>All Categories</h1>
      {categories.length > 0 &&
        categories.map((category) => (
          <div key={category._id}>
            <ul key={category._id}>
              <li>{category.name}</li>
            </ul>
          </div>
        ))}

      {/* create CategoryForm */}
      <CategoryForm
        value={name}
        setValue={setName}
        placeholder="write category name"
        handleSubmit={handleFormSubmit}
      />

      <div className="">
        {categories?.map((category) => (
          <button
            className="btn btn-outline-primary m-4"
            key={category._id}
            onClick={() => {
              setSelected(category);
              handleShow();
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      {/* modal */}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selected?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CategoryForm
              placeholder="Update Category Name"
              handleSubmit={handleCategoryUpdate}
              value={updateName}
              setValue={setUpdateName}
              buttonText="Update"
              loading={loading}
            />
          </Modal.Body>
        </Modal>
      </>
    </>
  );
};

export default AdminCategory;
