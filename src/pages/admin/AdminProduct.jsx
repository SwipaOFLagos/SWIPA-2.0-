import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts/Auth'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import Jumbotron from '../../components/cards/Jumbotron';

const AdminProduct = () => {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [shipping, setShipping] = useState(false)
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)

    const {auth} = useAuth()

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
  const handleFormSubmit = async (e) =>{
    e.preventDefault();

    const productData = new FormData();
    productData.append("name", name)
    productData.append("description", description)
    productData.append("price", price)
    productData.append("quantity", quantity)
    productData.append("shipping", shipping)
    productData.append("category", category)
    productData.append("images", images)

    try{
        setLoading(true)
        const { data } = await axios.post("/product/create", productData);

        if (data?.success) {
            fetchCategories();
            setName("");
            toast.success("Product created successfully");
            setLoading(false)
        }
    } catch (err){
        console.log(err);
        const msg = err?.response?.data
        toast.error(msg)
        setLoading(false)
    }
  }
  console.log(categories)
  return (
    <div>
        <Jumbotron title="Create Product" subTitle="Admin Dashboard"/>

        <div className="col-md-6 offset-md-3" style={{marginTop:"2rem"}} >
            <div>
                <input
                    type="text"
                    className='form-control p-2 mb-3'
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <textarea
                    type="text"
                    className='form-control p-2 mb-3'
                    placeholder="Write your description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="number"
                    className='form-control p-2 mb-3'
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="number"
                    className='form-control p-2 mb-3'
                    placeholder="Enter Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div>
                <select
                    type="text"
                    className='form-control p-2 mb-3'
                    placeholder="Choose a category"
                    onChange={(value) => setCategory(value)}>

                    {categories?.map((c) => (
                        <option key={c._id} value= {c._id}>
                            {c.name}
                        </option>
                    ))}
                    </select>
            </div>
            
        </div>
    </div>
  )
}

export default AdminProduct