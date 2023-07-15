import React, {useState, useEffect} from  'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

  

const Dashboard = () => {
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:4200/api/authors')
    .then((res) => {
      console.log(res.data.authorList)
      setAuthorList(res.data.authorList)
    })
    .catch((err) => console.log(err))
    console.log(authorList)
  }, [])

  const deleteAuthor = (authorToDelete) => {
    axios
    .delete(`http://localhost:4200/api/authors/${authorToDelete._id}`)
    .then((res) => {
        console.log(res);
        setAuthorList(authorList.filter((author) => author._id !== authorToDelete._id))
    })
    .catch((err) => console.log(err))
};
  return (
    <div>
      <h2>Favorite Author</h2>
      <Link to='/new'>Add an author</Link>
      <table className="center" >
                <thead>
                    <tr>
                        <th>Authors</th>
                    </tr>
                </thead>
                <tbody>
                    {authorList && authorList.map((authors, idx) => (
                        <tr key={idx}>
                            <td> {authors.name} </td>
                            <td>
                                <Link className='linkerStyle' to={`/authors/${authors._id}/edit`}> <button>Edit</button></Link>    |
                                <button onClick={() => deleteAuthor(authors)}> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  );
};

export default Dashboard;