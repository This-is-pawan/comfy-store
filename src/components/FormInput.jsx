

// eslint-disable-next-line react/prop-types
const FormInput = ({label,name,type,defaultValue}) => {
  return (
    <div className="form-control">
      <label className="label">
<span className="label-text">{label}</span>
      </label>
      <input type={type} name={name} 
      placeholder="Enter some input" 
      defaultValue={defaultValue}
      className="input input-bordered "
      />
      
    </div>
  )
}

export default FormInput
