import React,{useState,useEffect} from "react";
import axios from "axios";
import ProductPrint from "./ProductPrint.js";
const SearchPrint = () =>
{
    const [data,getData] = useState(null);
    useEffect(()=>
    {
          axios.get("http://localhost:3002/getsearchdata")
          .then((response)=>
          {
              getData(response.data);
          })
    },[]);
    if(!data) return null;
    return(<div>
     {
         data.map((val)=>
         {
             return(<div>
                <ProductPrint name={val.searchname}/>
             </div>)
         })
     }
    </div>);
}
export default SearchPrint;