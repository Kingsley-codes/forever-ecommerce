import { useState } from "react";
import { backendUrl } from "../App";
import axios from 'axios';
import { toast } from "react-toastify";

const Login = ({setToken}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const  response = await axios.post(backendUrl+ '/api/user/admin', {email, password});
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 w-[57%] md:w-96 h-[70%]'>
        <h1 className='text-2xl font-bold text-gray-700 mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>Email</p>
                <input onChange={(e)=> setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder="your@email.com" required />
            </div> 

            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                <input onChange={(e)=> setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder="Password" required />
            </div>
            <button className="mt-6 hover:bg-slate-700 w-full py-2 px-5 rounded-md text-white bg-gray-800" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
