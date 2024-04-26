import React, { useState, useEffect} from 'react'
import { useAuth } from '../../contexts/Auth'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Jumbotron from '../../components/cards/Jumbotron'

const AdminProduct = () => {
  const [categories, setCategories] = useState([])
  const [name, setName] = useState("")
  const [description, setdescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [shipping, setShipping] = useState(false)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const {auth} = useAuth

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

  console.log(categories);

  // handleFormSubmit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    ///javascript object for productData
    const productData = new FormData()  //new FormData serves as form data in postman
    productData.append("name", name)
    productData.append("description", description)
    productData.append("price", price)
    productData.append("quantity", quantity)
    productData.append("category", category)
    productData.append("images", images)
    productData.append("shipping", shipping)
    try {
      setLoading(true);
      const { data } = await axios.post("/product/create", productData);

      if (data?.success) {
        fetchCategories();
        setName("");
        toast.success("Product created successfully");
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
    <div>
      <Jumbotron title="Create Product" subTitle='Admin Dashboard'/>  
      {/* form */}
        <div className="col-md-6 offset-md-3" style={{marginTop: "2rem"}}>
          <div className="">
            <input type="text" 
            className='form-control p-2 mb-3' 
            placeholder='Write a name' 
            value={name} 
            onChange={(e)=>(e.target.value)}/>
          </div>

          <div className="">
            <textarea type="text" 
            className='form-control p-2 mb-3' 
            placeholder='Write a Description' 
            value={description}  
            onChange={(e)=>(e.target.value)}/>
          </div>

          <div className="">
            <input type="number" 
            className='form-control p-2 mb-3' 
            placeholder='Enter Price' 
            value={price} 
            onChange={(e)=>(e.target.value)}/>
          </div>

          <div className="">
            <input type="number" 
            className='form-control p-2 mb-3' 
            placeholder='Enter Quantity' 
            value={quantity}
            onChange={(e)=>(e.target.value)}/>
          </div>

          <div className="">
            <select
            className='form-control p-2 mb-3' 
            placeholder='Choose a Category' 
            onChange={(value)=>setCategory(value)}>
              {categories?.map((category)=> (
                  <option key={category._id} value={category._id}>
                      {category.name}
                  </option>
              ))}
            </select>
            
          </div>
          <div className="">
            <select
            className='form-control p-2 mb-3' 
            placeholder='yes or no' 
            onChange={(value)=>setShipping}>
                <option>yes</option>
                <option>no</option>
            </select>
          </div> 
             {/* <div className="">
              <button></button>
             </div> */}
        </div>
    </div>
  )
}

export default AdminProduct