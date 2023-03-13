import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../layouts/admin/loader/Loader'
import { get_products } from '../../redux/features/ProductsSlice'
import AddModal from './addModal'
import SearchHeader from './searchHeader'

export default function Table() {

    const [showAdd, setshowAdd] = useState(false)

    const mounted = useRef(false)
    const dispatch = useDispatch()
    const loading = useSelector(state=> state.products.loading)
    const products = useSelector(state=> state.products.data)
    useEffect(() => {
      if(!mounted.current){
     
        dispatch(get_products())


        mounted.current = true
      }
     
    }, [])

    
 

  

    const handleSave = ()=>{
      dispatch(get_products())

    }

  return (
    <div  id="style-10">
          <div className='d-flex flex-column'>
          <button onClick={()=>setshowAdd(true)} className='btn btn-primary mb-4 text-left width-fit'>Add New WishList</button>
          <SearchHeader  />

          </div>
            <div className='table-responsive'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th className='' scope="col">name</th>
                            <th className='' scope="col">url</th>
                            <th  className='' scope="col">price</th>

                        </tr>
                    </thead>
                    <tbody>
                    {loading?
                      <tr >
                        <td>
                            <Loader/>
                        </td>
                      </tr>:<>
                    {  products.map((item,i)=>(
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td  className='' >{item.name}</td>
                            <td  className=' w-1/2'  ><a className='no-underline' target={"_blank"} href={item.url}>{item.url}</a> </td>
                            <td  className='' >{item.price + " " + "L.E"}</td>


                        </tr>
                    ))}
                    </>}   
                    </tbody>
                </table>
            </div>
          {showAdd?<AddModal show={showAdd} handleClose={()=>setshowAdd(false)} handleSave={handleSave} />:null}
    </div>
  )
}
