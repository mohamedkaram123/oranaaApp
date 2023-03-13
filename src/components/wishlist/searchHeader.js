import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import InputData from '../../forms/InputData';
import { get_products } from '../../redux/features/ProductsSlice';

export default function SearchHeader() {
  const dispatch = useDispatch()

    const [data, setdata] = useState({
        name:"",
        url:"",
        description:"",
        price:"",
    })
    const [validateData, setvalidateData] = useState({
      name:"",
      url:"",
      description:"",
      price:"",
    })
    const setDatas = ( type, e, item = null) => {
        setdata((prevState) => ({
            ...prevState,
            [type]: e.target.value
        }));  
        let json = data;
        json[type] = e.target.value
        dispatch(get_products(json))
      }

  
  
  return (
    <div className='card'>
        <div className='card-header'> 
            <div className='card-title'>
               <label className='text-indigo-600 font-bold'> Search Products </label>
            </div>
        </div>
        <div className='card-body'>
            <div className='d-flex flex-row row'>
                  <InputData  
                    placeholder={"Name"} 
                    required={true} 
                    col_md={3} 
                    col={6}  
                    parent_class=" mb-2"
                    error={validateData}  
                    input_type="text"  
                    type={`name`} 
                    value={data.name} 
                    onChange={setDatas} />
            
                  <InputData  
                    placeholder={"Url"} 
                    required={true} 
                    col_md={3} 
                    col={6}  
                    parent_class=" mb-2"
                    error={validateData}  
                    input_type="text"  
                    type={`url`} 
                    value={data.url} 
                    onChange={setDatas} />

                    <InputData  
                    placeholder={"Description"} 
                    required={true} 
                    col_md={3} 
                    col={6}  
                    parent_class=" mb-2"
                    error={validateData}  
                    input_type="text"  
                    type={`description`} 
                    value={data.description} 
                    onChange={setDatas} />

                    <InputData  
                    placeholder={"Price"} 
                    required={true} 
                    col_md={3} 
                    col={6}  
                    parent_class=" mb-2"
                    error={validateData}  
                    input_type="number"  
                    type={`price`} 
                    value={data.price} 
                    onChange={setDatas} />

             </div>
        </div>
    </div>

  )
}
