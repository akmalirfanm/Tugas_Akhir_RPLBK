import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from './Alert';
import Button from './Button';
import './FormAdd.css';

export default function FormAdd() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    image: '',
    status: '',
    species: '',
    gender: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://63879ccfe399d2e4730446ad.mockapi.io/characters', data)
      .then((res) => {
        Alert('Success', 'Article has been added', 'success');
        setData({
          name: '',
          image: '',
          status: '',
          species: '',
          gender: '',
        });
        setTimeout(() => {
          navigate('/characters');
        }, 1500);
      })
      .catch((err) => {
        console.error(err);
        Alert('Error', 'Something went wrong', 'error');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-add">
      <div className="container-input">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
      </div>
      <div className="container-input">
        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image" onChange={handleChange} />
      </div>
      <div className="container-input">
        <label htmlFor="species">Species</label>
        <input
          type="text"
          id="species"
          name="species"
          onChange={handleChange}
        />
      </div>
      <div className="container-input">
        <label htmlFor="status">Status</label>
        <input type="text" id="status" name="status" onChange={handleChange} />
      </div>
      <div className="container-input">
        <label htmlFor="gender">Gender</label>
        <input type="text" id="gender" name="gender" onChange={handleChange} />
      </div>
      <div className="container-button">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
