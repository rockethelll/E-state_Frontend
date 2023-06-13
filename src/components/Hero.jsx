export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-content w-fit">
          <h1 className="text-6xl font-bold">
            Discover a place <br />
            you will love to live
          </h1>
          <form className="mt-5 px-5 py-2 flex justify-between bg-white items-center w-100">
            <input
              className="  text-3xl font-semibold bg-white "
              type="search"
              placeholder="Start finding your happiness"
            />
            <img
              src="@/../public/images/search_icon.svg"
              width={"45px"}
              alt=""
            />
          </form>
        </div>
      </div>
    </div>
  );
}
