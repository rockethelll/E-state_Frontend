import Cookies from "js-cookie";
import axios from 'axios'

const Signup = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [email, password] = e.target;
    const data = { user: { email: email.value, password: password.value }}
  }

  const getAuthToken = () => {
    const bearer = Cookies.get("token");
    return bearer ? `Bearer ${bearer}` : null;
  }

  const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:4000/signup',
    headers: {
      "Content-type": "application/json"
    },
  })

  axiosClient.post

    // if (response.ok && response.headers.has('Authorization')) {
    //   const bearer = response.headers.get("Authorization");
    //   const jwt = bearer.split(" ")[1];
    //   Cookies.set("token", jwt);
    //   const responseData = await response.json();
    //   console.log(`responseData : %c ${responseData.status.message} `, 'color: green');
    // } else {
    //   console.log(`responseData : %c ${response.status}`, 'color: orange');
    // }


  return (
    <>
      <h1>S'inscrire</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label name='email'>Email</label>
        <input
          type='email'
          name='email'
        />

        <label name='password'>Mot de passe</label>
        <input
          type='password'
          name='password'
        />

        <input
          type="submit"
          style={
            {
              color: 'white',
              background: 'black',
              padding: 15,
              cursor: 'pointer'
            }
          }
        />
      </form>
      <hr />
    </>
  );
};

export default Signup;