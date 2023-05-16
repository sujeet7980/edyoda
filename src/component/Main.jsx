import React, { useState } from "react";
import Subscription from "./Subscription";

const Main = () => {
  const [selectedSubscription, setSelectedSubscription] = useState(12);
  const handleSelectSubscription = (months) => {
    setSelectedSubscription(months);
  };
  return (
    <div className="w-100 h-100">
      <div className="row px-4 justify-content-between">
        <div className="col-8 text-white " style={{ paddingLeft: "100px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "50px", fontWeight: "600" }}>
              Access curated courses worth
            </span>
            <span style={{ fontSize: "50px", fontWeight: "600" }}>
            ₹ &nbsp;
              <span style={{ position: "relative" }}>
               18,500 
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: "6px",
                    background: "red",
                    content: "",
                  }}
                ></span>
              </span>
              &nbsp;at just <span style={{color:"#0096FF"}}>₹ 99</span> per year!
            </span>
            
          </div>

          <div className="mt-5">
            <div className="row  w-75 px-1 justify-content-between mb-4">
              <div className="col-1 d-flex">
                <span
                  class="material-symbols-outlined"
                  style={{ fontSize: 50 }}
                >
                  schedule
                </span>
              </div>
              <div
                className="col-10 d-flex align-items-center
              "
              >
                <span style={{fontSize:'32px',fontWeight:'400'}}> <span style={{color:"#0096FF"}}>100+</span> Job relavent courses</span>
              </div>
            </div>
            <div className="row  w-75 px-1 justify-content-between mb-4">
              <div className="col-1 d-flex">
                <span
                  class="material-symbols-outlined"
                  style={{ fontSize: 50 }}
                >
                  schedule
                </span>
              </div>
              <div
                className="col-10 d-flex align-items-center
              "
              >
                <span style={{fontSize:'32px',fontWeight:'400'}}><span style={{color:"#0096FF"}}>20,000+</span> Hours of  content </span>
              </div>
            </div>
            <div className="row  w-75 px-1 justify-content-between mb-4">
              <div className="col-1 d-flex">
                <span
                  class="material-symbols-outlined"
                  style={{ fontSize: 50 }}
                >
                  schedule
                </span>
              </div>
              <div
                className="col-10 d-flex align-items-center
              "
              >
                <span style={{fontSize:'32px',fontWeight:'400'}}><span style={{color:"#0096FF"}}>Exclusive</span> webinar access</span>
              </div>
            </div>
            <div className="row  w-75 px-1 justify-content-between mb-4">
              <div className="col-1 d-flex">
                <span
                  class="material-symbols-outlined"
                  style={{ fontSize: 50 }}
                >
                  schedule
                </span>
              </div>
              <div
                className="col-10 d-flex align-items-center
              "
              >
                <span style={{fontSize:'32px',fontWeight:'400'}}>Scholarship worth<span style={{color:"#0096FF"}}> ₹94,500</span> </span>
              </div>
            </div>
            <div className="row  w-75 px-1 justify-content-between mb-4">
              <div className="col-1 d-flex">
                <span
                  class="material-symbols-outlined"
                  style={{ fontSize: 50 }}
                >
                  schedule
                </span>
              </div>
              <div
                className="col-10 d-flex align-items-center
              "
              >
                <span style={{fontSize:'32px',fontWeight:'400'}}><span style={{color:"#0096FF"}}>Ad Free</span>  learning experience</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4  " style={{ borderRadius: "8px"}}>
        <div className="bg-white p-3" style={{width:'90%' , borderRadius:'8px'}}>
          <div className="d-flex justify-content-around m-3">
            <div className="text-center">
              <span className="circle">1</span>
              <p>Sign Up</p>
            </div>
            <div className="text-center">
              <span className="circle">2</span>
              <p>Subscribe</p>
            </div>
          </div>
          <div className="text-center mb-4">
            <h4>Select your Subscription plan</h4>
          </div>
          <Subscription total={99} monthlyCharges={8} months={12}  disabled={true} recommend={false} selected={selectedSubscription} onSelect={handleSelectSubscription}  />
          <Subscription total={179} monthlyCharges={15} months={12} recommend={true} disabled={false} selected={selectedSubscription} onSelect={handleSelectSubscription} />
          <Subscription total={149} monthlyCharges={25} months={6} disabled={false} recommend={false} selected={selectedSubscription} onSelect={handleSelectSubscription}  />
          <Subscription total={99} monthlyCharges={33} months={3} disabled={false} recommend={false} selected={selectedSubscription} onSelect={handleSelectSubscription} />
          <hr style={{ height: "2px", marginBottom: "0px" }} />
          <div className="p-3">
            <div className="row" style={{ padding: "5px" }}>
              <div
                className="col"
                style={{ fontSize: "16px", fontWeight: "400" }}
              >
                Subscription Fees{" "}
              </div>
              <div
                className="col text-end"
                style={{ fontSize: "16px", fontWeight: "500" }}
              >
                {" "}
                ₹18,500
              </div>
            </div>
            <div
              className="row limited-offer"
              style={{
                border: "2px solid red",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <div className="col ">
                <div className="d-flex flex-column justify-content-center">
                  <span
                    style={{
                      color: "red",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Limited time offer
                  </span>
                  <span
                    style={{
                      color: "red",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span class="material-symbols-outlined">alarm</span>
                    <span style={{ fontWeight: "500" }}>
                      {" "}
                      &nbsp; Offer valid 25th March 2023
                    </span>
                  </span>
                </div>
              </div>
              <div
                className="col-3 text-end"
                style={{ fontSize: "16px", fontWeight: "500" }}
              >
                -₹18,401
              </div>
            </div>
            <div className="row" style={{ padding: "5px" }}>
              <div
                className="col"
                style={{ fontSize: "16px", fontWeight: "400" }}
              >
                <strong>Total</strong>( incl. of 18% GST){" "}
              </div>
              <div
                className="col-3 text-end"
                style={{ fontSize: "16px", fontWeight: "500" }}
              >
                {" "}
                ₹149
              </div>
            </div>
            <div className="row mt-4">
              <div className="col p-1">
                <button
                  class="button w-100"
                  role="button"
                  style={{
                    border: "1px solid red",
                    backgroundColor: "white",
                    color: "red",
                  }}
                >
                  CANCEL
                </button>
              </div>
              <div className="col p-1">
                <button class="button w-100" role="button">
                  PROCEED TO PAY
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
