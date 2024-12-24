import { FormInput,SubmitBtn } from "../components"
import { Form,Link } from "react-router-dom" 

const Login = () => {
  return <section className="h-screen grid place-items-center">
    <form method="post" className="card w-96 p-8 bg-base-200 shadow-lg flex-col gap-y-4">
<h4 className="text-center text-3xt font-bold">Login</h4>
<FormInput type='email' label='email' name='identifier' defaultValue='test@test.com'/>
<FormInput
type='password' label='password' name='password' defaultValue='secret'
/>
<div className="mt-5">
  <SubmitBtn text='login'/>
</div>
<button type="submit" className="btn btn-secondary btn-block">guest user</button>
  <p className="text-center">
    not a member yet ? <Link to='/register' className="ml-2 link-hover link-primary capitalize">register</Link>
  </p>
    </form>

  </section>
}

export default Login
