import axios from 'axios'
import './App.css'
import Form from './page/Form/Form'

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;

  return (
    <>
    <Form/>
    </>
  )
}

export default App
