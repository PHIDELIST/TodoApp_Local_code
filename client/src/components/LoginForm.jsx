import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import './loginform.css';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios';
import { login } from '../redux/userSlice'; 
import { apiDomain } from '../utils/utils';

export default function LoginForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Axios.post(`${apiDomain}/auth/login`, data)
      .then(({ data }) => {
        console.log(data)
        if (data.token) {
          dispatch(login({token: data.token, name: data.username, email: data.email }));
          navigate('/todos');
        }
      })
      .catch((error) => {
        alert('An error occurred during login. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form">
      <p className="loginBanner">Login Page</p>
      <>
        <input type="text" placeholder="Username" {...register('username')} />
        <p>{errors.username?.message}</p>
      </>
      <>
        <input type="password" placeholder="Password..." {...register('password')} />
        <p>{errors.password?.message}</p>
      </>

      <input className="submitBtn" type="submit" value="Submit" />
    </form>
  );
}
