import React, {useState} from  'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import AuthForm from '../components/AuthForm';



const CreatePage = () => {
  const nav = useNavigate();
  const [formErrors, setFormErrors] = useState();
  
  const formSubmit = (authors) => {
    axios.post('http://localhost:4200/api/authors', authors)
    .then((res) => {
      nav("/")
    })
    .catch((err) => {
        console.log(err)
        const errorArr = Object.values(err.response.data.error.errors);
        setFormErrors(errorArr.map(err => err.message));
    });
  };


  return (
    <div>
      <h2>Favorite Author</h2>
      <AuthForm authors={''} 
      formSubmit={formSubmit}
      formErrors={formErrors}
      />
    </div>
  );
};

export default CreatePage;