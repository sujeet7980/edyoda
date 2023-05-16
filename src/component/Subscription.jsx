
import React, { useEffect, useState } from "react";

const Subscription = ({ total, monthlyCharges,months ,disabled,recommend,selected,onSelect}) => {
    const [select, setSelected] = useState();
  const handleSubscriptionChange = () => {
    if (!disabled) {
      setSelected(select);
      onSelect(months);
    }
  };
 useEffect(()=>{
 },[selected])
  return (
    <>
      <div className="mb-2">
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "16px",
            gap: "12px",
            isolation: "isolate",
            height: "65px",
            background: disabled ? "#E7E7E7" : selected=== months ? "#D7EDDD" : "#E7E7E7",
            border: `2px solid ${disabled===true ? "#E7E7E7": selected === months ? "#47BA68" : "#BEBEBE"}`,
            borderRadius: "4px",
          }}
          onClick={handleSubscriptionChange}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "50px",
                backgroundColor: disabled? "#F77171": recommend ? "#47BA68": "transparent",
                padding: "2px 6px",
                borderRadius: "4px",
                color: "white",
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
             { disabled? "Offer expired": recommend?"Recommended":""}
            </div>
            <label>
              <input
                type="radio"
                name="subscription"
                value={`${months}months`}
                checked={disabled? false: selected? true: selected === months? true : false}
                onChange={handleSubscriptionChange}
                style={{
                  display: "none",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: "1px solid #BEBEBE",
                  background:
                   disabled===true? "transparent": selected===months? 
                       "#47BA68"
                      : "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!disabled && selected === months && (
                  <span
                    style={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: "24px",
                    }}
                  >
                    ✓
                  </span>
                )}
              </div>
            </label>
            <div>
              <span style={{ fontSize: "15px", fontWeight: "500" , color:  disabled? "#BEBEBE":"black" }}>
                {months}-Months Subscription
              </span>
            </div>
          </div>
          <div
            style={{
              flex: "none",
              marginLeft: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "-10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontSize: "12px", verticalAlign: "bottom" }}>
                Total
              </span>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  marginLeft: "3px",
                  verticalAlign: "bottom",
                }}
              >
                ₹{total}
              </span>
            </div>
            <p style={{ marginTop: "-4px", fontSize: "12px" }}>
            ₹{monthlyCharges} <small>/mon</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;


