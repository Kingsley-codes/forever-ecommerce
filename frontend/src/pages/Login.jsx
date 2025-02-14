import { useContext, useEffect, useState } from "react";
import { ShopContext } from '../context/ShopContext';
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendURL} = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendURL + '/api/user/register', {name, email, password});
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
          } else {
            toast.error(response.data.message);
          }       
      } else {
        const response = await axios.post(backendURL + '/api/user/login', {email, password});
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
          } else {
            toast.error(response.data.message);
          }               
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  useEffect (()=> {
    if (token) {
      navigate('/')
    } else {
      
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col h-96 items-center w-[90%] sm:max-w-96 m-auto mt-14 border rounded-lg gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      { currentState === 'Login' ? '' : <input type="text" required onChange={(e)=>setName(e.target.value)} value={name} className="w-4/5 mx-3 px-3 py-2 border border-gray-800 rounded-md" placeholder="Name" />}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required className="w-4/5 mx-3 px-3 py-2 border border-gray-800 rounded-md" placeholder="Email" />
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" required className="w-4/5 mx-3 px-3 py-2 border border-gray-800 rounded-md" placeholder="Password" />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="pl-4 cursor-pointer">Forgot Password?</p>
        {
          currentState === 'Login' ? 
          <p className="pr-4 cursor-pointer" onClick={()=> setCurrentState('Sign Up')}>Create Account</p>:
          <p className="pr-4 cursor-pointer" onClick={()=> setCurrentState('Login')}>Already have an account? Login</p>
        }
      </div>

      <button className="bg-black text-white rounded-md font-light px-8 py-2 mt-6">{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
