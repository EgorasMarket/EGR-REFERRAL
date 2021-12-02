import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { useCookies } from "react-cookie";


export const Referal = ({ match }) => {



  const [formData2, setFormData2] = useState({
    ref: ''
  });

  
useEffect(() => {
    console.log(match.params);
    
    localStorage.setItem('referrer', match.params.ref);
    
}, []);






if (typeof localStorage.referrer !== 'undefined') {
    return <Redirect to='/signup' />;
    // console.log('okkkk');
    
  }


  return (
    <Fragment>
        <div></div>
    </Fragment>
  );
};

export default Referal;

