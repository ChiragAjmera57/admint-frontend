import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { dispatchDashLoading, dispatchDashSuccess } from '../Redux/reducerType';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const genderOptions = [
  { value: 'select', label: 'Select Gender' },
  { value: 'Women', label: 'Male' },
  { value: 'Men', label: 'Female' },
];
const manCat = [
  { value: '', label: 'Select Category' },

  { value: 'Shirts', label: 'Shirts' },
  { value: 'Jeans', label: 'Jeans' },
  { value: 'Trousers', label: 'Trousers' },
  { value: 'Suits', label: 'Suits' },
];
const femaleCat = [
  { value: '', label: 'Select Category' },
  { value: 'Saree', label: 'Saree' },
  { value: 'Kurti', label: 'Kurti' },
  { value: 'Lehenga', label: 'Lehenga' },
  { value: 'Jackets', label: 'Jackets' },
];
const priceOption = [
  { value: '', label: 'Sort by Price' },
  { value: 'asc', label: 'Acending' },
  { value: 'desc', label: 'Desending' },
];

export default function Dashboard() {
  
  const [selectedOption, setSelectedOption] = useState(genderOptions[0]);
  const [selectedOption1, setSelectedOption1] = useState(manCat[0]);
  const [selectedOption2, setSelectedOption2] = useState(priceOption[0]);
  const [toggle,settoggle] = useState(true)
  const navigate = useNavigate();


  const state = useSelector((state)=>state)
  const dispatch = useDispatch();
  const getdata = (neq,catNeq,priceSort)=>{
    dispatch(dispatchDashLoading())
    axios.get(`https://mock-json-server-rdn1.onrender.com/products?gender_ne=${neq}&q=${catNeq}&_sort=price&_order=${priceSort}`).then((res)=>{
      dispatch(dispatchDashSuccess(res.data))
    })
  }
  const deleted = (id)=>{
      axios.delete(`https://mock-json-server-rdn1.onrender.com/products/${id}`).then((res)=>settoggle(!toggle))
  }
  useEffect(()=>{
    getdata(selectedOption.value,selectedOption1.value,selectedOption2.value)
  },[selectedOption,selectedOption1,selectedOption2,toggle])
  return (
    <div className='dashContainer'>
      <div className='sorting'>
        <input type="text" placeholder='Search Products' />

      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={genderOptions}
      />
     <Select
        defaultValue={selectedOption1}
        onChange={setSelectedOption1}
        options={selectedOption.value=="Men"?femaleCat:manCat}
      />
     <Select
        defaultValue={selectedOption2}
        onChange={setSelectedOption2}
        options={priceOption}
      />
       <div className="addbtn">
    <Button onClick={()=>navigate("/add-product")} colorScheme='blue'>Add Product</Button>
    </div>
      </div>
   
  <div className="dataContainer">
    <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Product Name</td>
          <td>Gender</td>
          <td>Category</td>
          <td>Price</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
          {
            state.isLoading?<h1>Loading...</h1>:state.data?.map((ele)=>{
              return <tr>
              <td> <img src="" alt="img" /> </td>
              <td>{ele.product_name}</td>
              <td>{ele.gender}</td>
              <td>{ele.category}</td>
              <td>{ele.price}</td>
              <td><Button colorScheme='blue'>Edit</Button></td>
              <td onClick={()=>deleted(ele.id)}><Button colorScheme='red' >Delete</Button></td>
            </tr>
            })
          }
      </tbody>
    </table>
  </div>
    </div>
  )
}
