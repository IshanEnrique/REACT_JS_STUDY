import React, { useContext } from "react";
import contextValue from '../context/alert/alertContext';


export default function Alert() {
  const context = useContext(contextValue);
  const { alert} = context;
    const capilaize=(message)=>{
        let m=message.toLowerCase();
        return m.charAt(0).toUpperCase() + m.slice(1);
    }

  return (

    <div style={{height: "80px"}}>

 
 {alert &&   <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capilaize(alert.type!=="danger"?alert.type:"failed")}</strong> : {alert.msg}
      
    </div>}
    </div>
  );
}