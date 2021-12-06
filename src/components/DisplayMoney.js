import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';

const DisplayMoney = (props) => {
  const [xdata, setXdata] = useState({});

    useEffect(() => {
        let isNaira = false;
       
        let origin = localStorage.getItem("origin");
        let xrate = localStorage.getItem("xrate");
    
        if(origin !== undefined && origin == "Nigeria"){
          isNaira = true;
         
        }
        setXdata({...xdata, 
        ['isNaira']: isNaira,
        ['xrate']: xrate
        })
      }, [])
    return (
        <span>
            {xdata.isNaira ? (<span>&#8358;</span>): "$"}
                 {
                   xdata.isNaira ? (

                    <NumberFormat
                    thousandSeparator={true}
                    thousandsGroupStyle="usd"
                    displayType={"text"}
                    value={parseFloat(parseFloat(props.amount)).toFixed(2)}
                  />
                   ) : (
                    <NumberFormat
                    thousandSeparator={true}
                    thousandsGroupStyle="usd"
                    displayType={"text"}
                    value={parseFloat(parseFloat(props.amount) / xdata.xrate).toFixed(2)}
                  />
                   )
                 }
        </span>
    )
}

export default DisplayMoney;



    
    