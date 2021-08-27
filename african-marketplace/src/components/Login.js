import React,{ useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'

const initialFormValues = {
    username: "",
    password: "",
  };
  
  const initialErrors = {
    username: "",
    password: "",
  };

export default function Login() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true);
    
    const history = useHistory();

    const loginSchema = yup.object().shape({
        email: yup
            .string()
            .trim()
            .required('Email is required')
            .min(6, 'Username must be at least 6 characters long'),
        password: yup
            .string()
            .min(8).max(16)
            .required('Password is required'),
    })

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const doSubmit = (e) => {
        e.preventDefault();
        axios.post('http://placeholder', userData)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }

    return (
        <div>
            <form  onSubmit={doSubmit}>
                <h2>Sign In</h2>
                <label>
                    Email Address: 
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={userData.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password: 
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </label>
                <section className='form-footer'>
                    <button type="submit" disabled={disabled}>Submit</button>
                </section>
        </form>
        </div>
    );
}