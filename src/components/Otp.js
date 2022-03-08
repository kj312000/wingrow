import React , {useState , useContext} from 'react'
import firebase from './firebase'
import ShopContext from '../context/shop-context';
import './Otp.css'
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const context = useContext(ShopContext);
  const [toggle, setToggle] = useState(true)
  const {phone} = context.user
  const navigate = useNavigate()

  console.log(phone)
  const [state, setState] = useState({
    mobile:"",
    otp:""
  })
  const handleChange = (e) =>{
    const {name, value } = e.target
    setState({
        [name]: value
      })
  }

  const onSignInSubmit = (e) => {
    e.preventDefault()
    configureCaptcha()
    const phoneNumber = "+91" + phone
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          alert("OTP has been sent")
          setToggle(!toggle)
        }).catch((error) => {
          alert("SMS not sent")
          console.log(error)
        });
  }

  const configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  
  const onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      navigate('../feed')
    }).catch((error) => {
      alert("Wrong OTP")
      console.log(error)
    });
  }
    return (
      <div>
        {toggle?
        <div className='otp_verify'>
          <h2>OTP Verification</h2>
        <form onSubmit={onSignInSubmit}>
          <div id="sign-in-button"></div>
          <h3>{phone}</h3>
          <button type="submit">Send Otp</button>
        </form>
        </div>:
        <div className='otp_verify'>
        <h2>Enter OTP</h2>
        <form onSubmit={onSubmitOTP}>
          <input type="number" name="otp" placeholder="Enter OTP here" required onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
        </div>}
      </div>
    )
  }
export default Otp