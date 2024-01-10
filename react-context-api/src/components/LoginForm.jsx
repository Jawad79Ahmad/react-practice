import { useContext, useState } from "react"
import { LoginFormContext } from "../context/LoginFormContext";

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setLoginFormContext} = useContext(LoginFormContext);

  const submitLoginFormData = () => {
    setLoginFormContext({username, password});
  }

  return (
    <div className="flex flex-col space-y-2 p-6 border shadow-md dark:border-gray-700 rounded-lg dark:bg-gray-800">
      <p className="text-lg text-center mb-4">Login Form</p>
      <input type='text' value={username} onChange={ (e) => { setUsername(e.target.value) }} placeholder='Enter Username' className="border w-full rounded-md border-gray-300 px-2 py-1 text-gray-700"/>
      <input type='password' value={password} onChange={ (e) => { setPassword(e.target.value) }} placeholder='Enter Password' className="border w-full rounded-md border-gray-300 px-2 py-1 text-gray-700"/>
      <button type='button' onClick={submitLoginFormData} className="text-white bg-blue-500 hover:bg-blue-600 rounded-md py-1">Submit</button>
    </div>
  )
}
