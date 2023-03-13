import React from 'react'
import { Urls } from '../helper' 

export default function BtnSendData({ name,onclick,loadSearch=false,dir='',id=`${name}_id`, parent_class="",col_md = "12", col = "12", classes = "" }) {
   
  
  return (
      // <div className={`col-md-${col_md} text-${dir} col-${col} ${parent_class}`}>
                      <button id={id} disabled={loadSearch} onClick={onclick} className={`d-flex flex-row btn btn-light ${classes}`}>
                               <span className='ml-2'>{name}</span> 
                               <span>{loadSearch?<img style={{marginInline:10}} src={ Urls.public + "imgs/loading.gif"} width={15} height={15} />:null  }</span>
                                

                            </button>
    // </div>
  )
}
