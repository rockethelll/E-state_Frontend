
const home = () => {
  
  const fetchApi = () => {
    try {
      const response = fetch('https://estate-api.herokuapp.com/estates')
        .then((res) => res.json())
        .then((data) => console.log(data))

    } catch (error){
    console.log(error.message)
    }
  } 
  fetchApi()

  return (
    <div className="text-3xl font-bold underline">
      <h1>Home page</h1>

    </div>
  );
};

export default home;