import foodImg from '../assets/684bb4bc6b1bb645e0d0fa7d62171d93.jpg';
import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <form>
        <input type='text' placeholder='Your Name' />
        <br />

        <input type='email' placeholder='Your Email' />
        <br />

        <input type='number' placeholder='Your Mobile Number' />
        <br />
        <button>LOGIN</button>
      </form>
      <img src={foodImg} alt='' />
    </div>
  );
};

export default Login;
