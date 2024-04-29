import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CategoryForm from "../../components/forms/CategoryForm";
import { useAuth } from "../../contexts/Auth";
import Modal from "react-bootstrap/Modal";
import AdminMenu from "../../components/nav/AdminMenu";
import Jumbotron from "../../components/cards/Jumbotron";
import LoadBtn from "../../components/utils/LoadBtn";

const AdminProduct = () => {
  const [catergories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState([]);
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [shipping, setShipping] = useState();
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState();

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
    const productData = new FormData();
    productData.append("name", name);
    productData.append("description", description);
    productData.append("price", price);
    productData.append("quantity", quantity);
    productData.append("category", category);
    productData.append("shipping", shipping);
    productData.append("images", image);
    productData.append("name", name);
    productData.append("name", name);

    try {
      setLoading(true);
      const { data } = await axios.post("/product/create", { name });

      if (data?.success) {
        fetchCategories();
        setName("");
        toast.success("Category created successfully");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      const msg = err?.response?.data;
      toast.error(msg);
      setLoading(false);
    }
  };

  return (
    <>
      <Jumbotron title="create product" subTitle="Admin Dashboard" />
      <div className="col-md-6 offset-md-3">
        <div>
        <input
          type="text"
          className="form-control p-2 mb-3 "
          placeholder="Write a name"
          value={name}
          onClick={(e) => setName(e.target.value)}
        />
        </div>
        <div>
        <textarea
          type="textarea"
          className="form-control p-2 mb-3 "
          placeholder="Write a description"
          value={desc}
          onClick={(e) => setDesc(e.target.value)}
        />
        </div>
        <div>
        <input
          type="number"
          className="form-control p-2 mb-3 "
          placeholder="Enter Price"
          value={price}
          onClick={(e) => setPrice(e.target.value)}
        />
        </div>
        <div>
        <input
          type="number"
          className="form-control p-2 mb-3 "
          placeholder="Enter quantity"
          value={quantity}
          onClick={(e) => setQuantity(e.target.value)}
        />
        </div>
        <div>
        <select
          className="form-control p-2 mb-3 "
          onClick={(value) => setCategory(e.target.value)}
        >
            <option value="1">Choose a category</option>
            {catergories.map((c)=>(
                <option value={c._id} key={c._id}>{c.name}</option>
            ))}
        </select>
        </div>
        <div>
        <select
          className="form-control p-2 mb-3 "
          onChange={(value) => setShipping(e.target.value)}
        >
            <option value="1">Choose shipping</option>
            {catergories.map((c)=>(
                <option value={c._id} key={c._id}>{c.name}</option>
            ))}
        </select>
        </div>
        <button className="btn btn-primary" onClick={handleFormSubmit}>Summit</button>
      </div>
    </>
  );
};

export default AdminProduct;
