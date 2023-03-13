import { Button, Modal } from "react-bootstrap";
import React, { useState,useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import BtnSendData from "../../forms/btnSendData";
import InputData from "../../forms/InputData";
import TextAreaData from '../../forms/TextAreaData'
import { urls } from "../../urls";
import { error_state, post } from "../../helper";
import { get_products } from "../../redux/features/ProductsSlice";

export default function AddModal({show,handleClose,handleSave}) {
  const dispatch = useDispatch()

  const mounted = useRef(false)


  const [loadSearch, setloadSearch] = useState(false)
    const [Data, setData] = useState({
      name:"",
      url:"",
      description:"",
      price:"",
  })
    const [RequiredData, setRequiredData] = useState({
      name:"",
      url:"",
      description:"",
      price:"",
})




const sendData = (type, e, item = null) => {

    setData((prevState) => ({
    ...prevState,
    [type]: e.target.value
    }));
  
}

const sendDataObj = ()=>{
  setloadSearch(true)
  fetch_create_product_wishlist()
}

const fetch_create_product_wishlist = async () => {
  try {
    const res = await post(urls.product_store,Data)
    if(res.statusMsg == "success"){
      setloadSearch(false)
      dispatch(get_products())
      handleClose()

    }else{
      error_state(setRequiredData,RequiredData,res.data)
      setloadSearch(false)

    }
    
  } catch (err) {
    
  }
};


return (
      <div className="mt-40">

        <Modal backdrop={"static"} show={show}  onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>{"Add Product Wishlist"}</Modal.Title>
          </Modal.Header>

          <Modal.Body className="h-md-80 h-60 overflow-y-scroll">
               <div className="row">
                  <InputData  
                  placeholder={"Name"} 
                  required={true} 
                  col_md={6} 
                  col={12}  
                  parent_class=" mb-2"
                  error={RequiredData}  
                  input_type="text"  
                  type={`name`} 
                  value={Data.name} 
                  onChange={sendData} />

                  <InputData  
                  placeholder={"Price"} 
                  required={true} 
                  col_md={6} 
                  col={12}  
                  parent_class=" mb-2"
                  error={RequiredData}  
                  input_type="number"  
                  type={`price`} 
                  value={Data.price} 
                  onChange={sendData} />

                  <InputData  
                  placeholder={"Url"} 
                  required={true} 
                  col_md={12} 
                  col={12}  
                  parent_class=" mb-2"
                  error={RequiredData}  
                  input_type="text"  
                  type={`url`} 
                  value={Data.url} 
                  onChange={sendData} />

                  <TextAreaData
                  value={Data.description}
                  type={'description'}
                  onChange={sendData} 
                  error={RequiredData}  
                  required={true} 
                  col_md={12}
                  placeholder={"Description"}
                  number_rows={3}
                />
                    
              </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex flex-row">
            <BtnSendData classes="mx-2" onclick={sendDataObj} loadSearch={loadSearch} name={"Save"} />

                  <Button variant="secondary" onClick={handleClose}>
                    {"Close"}
                  </Button>
            </div>


          </Modal.Footer>
        </Modal>
      </div>
    );
  }
