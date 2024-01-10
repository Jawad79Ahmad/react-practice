import { useContext } from "react"
import { LoginFormContext } from "../context/LoginFormContext"

export default function ShowLoginFormData() {
  const {loginFormContext} = useContext(LoginFormContext);

  if(!loginFormContext || (!loginFormContext.username && !loginFormContext.password)) return (<div>Please fill your login form</div>);
  if(!loginFormContext.username) return (<div className="text-red-600 dark:text-red-500">Username is blank</div>);
  if(!loginFormContext.password) return (<div className="text-red-600 dark:text-red-500">Password is blank</div>);

  return (
    <div className="flex flex-col justify-center items-center">
      <p>Username is <span className="text-teal-600 italic dark:text-green-600">({loginFormContext.username})</span></p>
      <p>Password is <span className="text-teal-600 italic dark:text-green-600">({loginFormContext.password})</span></p>
    </div>
  )
}
