import axiosClient from "../axiosClient.js";
import useSessionCookie from "../createCookie.js";

const Signup = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const [email, password] = e.target;
    const data = { user: { email: email.value, password: password.value } };
    createUser(data)
  }

  const createUser = async (data) => {
    const response = await axiosClient.post("/signup", data);
    useSessionCookie(response)
  }

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
    </>
  );
};

export default Signup;