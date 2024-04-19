import './styles.css';

function TextArea({ name, placeholder, label }) {
  return (
    <div className='text-area'>
      <label>{label}</label>
      <textarea name={name} placeholder={placeholder}></textarea>
    </div>
  );
}
export default TextArea;
