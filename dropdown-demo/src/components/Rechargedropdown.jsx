import React, { useState } from "react";
import "./RechargeDropdown.css";

const RechargeDropdown = () => {
  const [selectedOperator, setSelectedOperator] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const operators = {
    Jio: ["399", "299", "249", "19", "29"],
    Airtel: ["250", "349", "300", "600"],
    Vodafone: ["20", "299", "250", "1000"],
  };

  const handleOperatorChange = (e) => {
    setSelectedOperator(e.target.value);
    setSelectedPlan(""); // Reset plan when operator changes
  };

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <h2>Mobile Recharge</h2>

      {/* Operator Dropdown */}
      <select
        className="dropdown-select"
        value={selectedOperator}
        onChange={handleOperatorChange}
      >
        <option value="">Select Operator</option>
        {Object.keys(operators).map((operator) => (
          <option key={operator} value={operator}>
            {operator}
          </option>
        ))}
      </select>

      {/* Plan Dropdown */}
      {selectedOperator && (
        <select
          className="dropdown-select"
          value={selectedPlan}
          onChange={handlePlanChange}
          style={{ marginLeft: "10px" }}
        >
          <option value="">Select Plan</option>
          {operators[selectedOperator].map((plan) => (
            <option key={plan} value={plan}>
              ₹{plan}
            </option>
          ))}
        </select>
      )}

      {/* Result Box */}
      {selectedOperator && selectedPlan && (
        <div className="result-box">
          <h3>
            You selected: <span>{selectedOperator}</span> → ₹
            <span>{selectedPlan}</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default RechargeDropdown;