import React, { useState } from 'react'
import Select from 'react-select';
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios';

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
export default function AddProduct() {
    
  const [selectedOption, setSelectedOption] = useState(genderOptions[0]);
  const [proName,setproName] = useState("")
  const [price,setprice] = useState(null)
  const [selectedOption1, setSelectedOption1] = useState(manCat[0]);

  
  const addTodb = ()=>{
    axios.post(`https://mock-json-server-rdn1.onrender.com/products`,{
        img:"",
        product_name:proName,
        gender:selectedOption.value,
        category:selectedOption1.value,
        price:price
    }).then(()=>{
      setSelectedOption(genderOptions[0])
      setprice(null)
      setSelectedOption1(manCat[0])
      setproName("")

    })
  }
  return (<>
  
    <div className='addContainer'>
        <input type="text" placeholder='Enter Name here' value={proName} onChange={(e)=>setproName(e.target.value)}/>
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
      <input  type="number" placeholder='Enter Price here' value={price} onChange={(e)=>setprice(e.target.value)}/>
    </div>
    <div className='add-box'>

    <Button m="auto" onClick={()=>addTodb()}>Add Product</Button>

    </div>
    </>
  )
}
