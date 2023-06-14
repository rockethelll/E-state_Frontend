import Cookies from "js-cookie";

const Signup = () => {



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