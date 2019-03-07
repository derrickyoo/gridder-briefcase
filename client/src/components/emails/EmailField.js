import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <input {...input} className="validate" />
        {touched && error}
        <label for="email">{label}</label>
      </div>
    </div>
  );
};
