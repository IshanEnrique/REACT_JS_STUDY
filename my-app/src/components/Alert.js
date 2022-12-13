import React, { useState } from "react";

export default function Alert(props) {
    const capilaize=(message)=>{
        let m=message.toLowerCase();
        return m.charAt(0).toUpperCase() + m.slice(1);
    }

  return (

    <div style={{height: "80px"}}>

 
 {props.alert &&   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capilaize(props.alert.type)}</strong> : {props.alert.msg}
      {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>}
    </div>
  );
}
