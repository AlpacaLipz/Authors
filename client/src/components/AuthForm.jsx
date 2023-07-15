import React, { useState } from "react";
import { Link } from "react-router-dom";


const AuthForm = ({ authors, formSubmit, formErrors }) => {
  console.log('========= ', formErrors)
  console.log(authors)
  const [name, setName] = useState(authors);
  
// console.log({formErrors})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    formSubmit({
      name,
    });
  };
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label id="auth_name">Name: </label>
      <input
        type="text"
        value={name}
        id="auth_name"
        onChange={(e) => setName(e.target.value)}
      />
      { formErrors && formErrors.map((err, index) => <p className="error" key={index}>{err}</p>) }
      <button>Submit</button>
      <Link className="linkerStyle" to={`/`}>
        {" "}
        <button>Cancel</button>{" "}
      </Link>
    </form>
    </div>
  );
};

export default AuthForm;
