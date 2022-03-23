import React,{useEffect, useState} from "react";

const App = () =>
{
    const [hour,setHour] = useState(0);
    const [min,setMin] = useState(0);
    const [sec,setSec] = useState(0);
    useEffect(()=>{
      const timer=setInterval(()=>{
        if(sec+1>60)
        {
          setMin(min+1);
          setSec(0);
        }
        else
            setSec(sec+1);    
        if(min+1>60)
        {
          setHour(hour+1);
          setMin(0);
        }    
      },1000);
      return () => clearInterval(timer);
    });
    return(<>
    <p>{hour}:{min}:{sec}</p></>);
}

export default App;
