import { createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { getAuth,  } from "firebase/auth";







const Register = () => {
  const [errorRegister, setErrorRegister] = useState('');
  const [passcode, setPasscode] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);



  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };


  const handleForm = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setErrorRegister('')
    setPasscode('');
    

    if (password.length < 6) {
      setErrorRegister('password should be at least 8 character or more');
      return;
    }
    else if (!/[a-zA-Z0-9]/.test(password)) {
      setErrorRegister('Please complete the requirement');
      return;
    }
    else if (!termsAccepted) {
      setErrorRegister('please accept our term and condition')
      return;
    }

    const auth = getAuth();
  createUserWithEmailAndPassword(auth,email,password )
      .then(result => {
        console.log(result.user)
        setPasscode('user created successfully')
       
  })
      
    
      .catch(error => {
        console.error(error)
        setErrorRegister(error.message)
      })
  }



  return (
    <div>
      <div className="mx-auto mt-40 md:w-1/2 ">
        <h1 className="text-3xl mb-4">please register</h1>
        <form onSubmit={handleForm}>
          <input className="w-3/4 mb-4 border rounded-md py-3 px-2" type="email" name="email" id="" placeholder="email address" required /><br />
          <input className="w-3/4 mb-4 border rounded-md py-3 px-2" type="password" name="" id="password" placeholder="password" required />
          <input className="w-3/4 border btn btn-secondary" type="submit" value="register" disabled={!termsAccepted} />
        </form>
        {
          errorRegister && <p className="mt-6 text-red-600 text-3xl">{errorRegister}</p>
        }
        {
          passcode && <p className="text-green-500">{passcode}</p>
        }
        <div className="flex">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={ handleCheckboxChange}
        />
        <div>I accept the terms and conditions</div>
        </div>
     
      </div>

    </div>
  );
};

export default Register;