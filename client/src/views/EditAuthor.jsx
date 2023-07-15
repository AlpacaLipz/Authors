import React, {useState, useEffect} from  'react';
import { Form } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateAuth = () => {
  const [author, setAuthor] = useState('');
  const [formErrors, setFormErrors] = useState('');
  const {id} = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4200/api/authors/${id}`)
    .then((res) => {
      setAuthor(res.data.author);
      console.log(res.data.author.name)
    })
  }, []);

  const updateAuthor = (updatedAuthor) => {
    axios
    .put(`http://localhost:4200/api/authors/${id}`, updatedAuthor)
    .then((res) => {
      nav('/');
    })
    .catch((err) => {
      console.log(err)
      const errorRes = err.response.data.error.errors;
      console.log(errorRes)
      setFormErrors(errorRes)
    })
  }

  return (
    <div>
      <h2>Favorite Author</h2>
      {author.name && <AuthForm formSubmit={updateAuthor}     
      fromErrors={formErrors} authors={author.name} />}
      
    </div>
  );
}

export default UpdateAuth;