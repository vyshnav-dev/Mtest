import axios from 'axios';
import './Form.css'
import { useState } from 'react';

const Form = () => {
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const [wording, setWording] = useState('');
    const [select, setSelect] = useState('');

    function handleSelectChange(e) {
        setSelect(e.target.value);
    }

    const handleSubmit = async() =>{

        const res= await axios.post('/user/form',{
            Name:name,
            Age:age,
            Email:email,
            Phone:phone,
            Cource:wording,
            Education:select,

        })
        console.log(res.data)
    } 

  return (
    <>
      <div className='main'>
      <form className='form' onSubmit={handleSubmit} action="">
        <div className='first'>
        <label htmlFor="">Name : </label>
        <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" />
        </div>
        <div className='first1'>
        <label htmlFor="">Age : </label>
        <input value={age} onChange={(e) => {setAge(e.target.value)}} type="text" />
        </div> 
        <div className='first2'>
        <label htmlFor="">Email : </label>
        <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" />
        </div>
        <div className='first3'>
        <label htmlFor="">Phone No : </label>
        <input value={phone} onChange={(e) => {setPhone(e.target.value)}} type="text" />
        </div>
        <div onChange={(e) => setWording(e.target.value)}>
            <label htmlFor="">Cource :</label>
           
          <label>
            <input type="radio" value="CSS"  checked={wording === "CSS"}   />
            CSS
          </label>
          <label>
            <input type="radio" value="HTML" checked={wording === "HTML"}  />
            HTML
          </label>
          <label>
            <input type="radio" value="JAVA"  checked={wording === "JAVA"} />
            JAVA
          </label>
        </div>
        <div>
        <label>
          Educational background:
          <select onChange={handleSelectChange} >

            <option >Select</option>
            <option value="Diploma">Diploma</option>
            <option value="Degree">Degree</option>
            <option value="B-tech">B-tech</option>
            <option value="Other">Other</option>
          </select>
        </label>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
        
      </form>
    </div>
      
    </>
  );
}

export default Form;
