import { FormInput,SubmitBtn } from "../components"
import { Form,Link
 } from "react-router-dom"

const Register = () => {
  return <section className="h-screen grid place-items-center">
<form method="POST" className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4">
<h4 className="text-center text-3xl font-bold ">Register</h4>
<FormInput type='text' label='username' name='username'/>
<FormInput type='email' label='email' name='email'/>
<FormInput type='password' label='password' name='password'/>
<div className="mt-4">
  <SubmitBtn text='regster'/>
</div>
<p className="text-center">
   Already a member? <Link to='/login' className="ml-2 link-hover link-primary capitalize">Login</Link>
  </p>
</form>
  </section>
}

export default Register