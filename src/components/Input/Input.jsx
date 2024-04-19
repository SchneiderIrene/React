import './styles.css';

function Input({name, type = 'text', placeholder, label, onInputChange}) {
  return (
    <div className='input-component-container'>
      <label htmlFor="">{label}</label>
      <input 
      className="input-component"
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onInputChange} />
    </div>

         
  );
}

export default Input;
