import React from 'react';

export default function TtaFunConp1(props) {
  return (
    <div>
      <h2>Props is an object</h2>
      <p><b>Information</b></p>
        <p>Full Name: {props.renderInfo.fullName}</p>
        <p>Age: {props.renderInfo.age}</p>
        <p>Phone: {props.renderInfo.phone}</p>

  
    </div>
    
  );
}
