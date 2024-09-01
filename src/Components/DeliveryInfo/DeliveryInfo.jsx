import React from "react";
import "./DeliveryInfo.css";

function DeliveryInfo({ setDeliveryData }) {
  const handleChange = (e) => {
    setDeliveryData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="left-top-panel">
      <h3>Delivery Information</h3>
      <div className="name">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="address"
        onChange={(e) => handleChange(e)}
        required
      />
      <div className="city-state">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="State"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className="zip-country">
        <input
          type="text"
          name="zip"
          id="zip"
          placeholder="Zip"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <input
        type="tel"
        name="phone"
        id="pnone"
        placeholder="Phone"
        onChange={(e) => handleChange(e)}
        required
      />
    </div>
  );
}

export default DeliveryInfo;
