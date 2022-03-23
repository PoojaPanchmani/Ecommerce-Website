import React,{useState} from "react";
import axios from "axios";
import "./Searchbar.css";
import {useHistory} from "react-router-dom";
const Searchbar = () =>
{
    const history = useHistory();
    const [searchvalue,setSearchValue] = useState({
        searchname:""
    });
    const handleInput = (event) =>
    {
       const  {name,value} = event.target;
       setSearchValue({[name]:value});
    }
    const searchData = (e) =>
    {
        e.preventDefault();
        const {searchname} =searchvalue;
        axios.post("http://localhost:3002/product",{
             searchname
        })
        .then((response)=>{
          console.log(response);
          history.push("/product");
    
        })
        .catch((err)=>alert(err));    
    }
    return(<>
    <div className="search_div">
        <div className="input-group">
          <input  type="text" name="searchname" placeholder="Search" style={{width:"600px"}}
           className="search_input form-control" value={searchvalue.searchname}
           autoComplete="off" onChange={handleInput}/>
           <a href="/product">      
           <button className="zmdi zmdi-search-for material-icons-name  search-input-button"
           type="button" onClick={searchData}>
          </button>
          </a>
      </div>
   </div>
   </>);  
}
export default Searchbar;