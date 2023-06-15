import axios from "axios";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

export default function New() {
  const token = Cookies.get("token");
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    console.log(e);
    axios
      .post("https://estate-api.herokuapp.com/estates", e, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
  };
  return (
    <main className="mt-10 text-lightGrey min-h-[50vh] h-full">
      <form className="form gap-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-1 h-full">
          <div className="file__wrapper">
            <label className="label">Upload images</label>
            <span className="add--btn">+</span>
            <input type="file" />
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-between w-full">
          <div className=" input__wrapper">
            <label className="label" htmlFor="">
              Titre
            </label>
            <input
              className="input h-[30px]"
              type="text"
              name="title"
              {...register("title")}
            />
          </div>
          <div className="details flex ">
            <div className="input__wrapper">
              <label className="label">Prix</label>
              <input
                className=" input h-[35px]"
                type="number"
                name="price"
                min={0}
                max={1000000000000}
                defaultValue={0}
                {...register("price")}
              />
            </div>
            <div className="input__wrapper w-[80px] ml-10">
              <label className="label">Chambres</label>
              <input
                className=" input pl-[5px] h-[35px]"
                type="number"
                defaultValue={0}
                max={20}
                min={0}
                name="rooms"
                {...register("rooms")}
              />
            </div>
            <div className=" input__wrapper w-[80px] ml-10 pt-2 pl-1 h-[35px]">
              <label className="label">Meublé</label>
              <select
                className="pl-[5px] input h-[35px]"
                name="furnished"
                {...register("furnished")}
              >
                <option value="false">Non</option>
                <option value="true">Oui</option>
              </select>
            </div>
            <div className=" input__wrapper w-[80px] ml-10">
              <label className="label" htmlFor="">
                Surface
              </label>
              <input
                className=" input pl-[5px] h-[35px]"
                type="number"
                defaultValue={0}
                name="area"
                {...register("area")}
              />
            </div>
          </div>
          <div className=" input__wrapper">
            <label className="label" htmlFor="">
              Adresse
            </label>
            <input className="input h-[35px]" type="text" />
          </div>
          <div className=" input__wrapper">
            <label className="label">Description</label>
            <textarea
              rows={4}
              className="input"
              type="text"
              name="description"
              {...register("description")}
            />
          </div>
          <input type="submit" className="btn btn bg-black text-white" />
        </div>
      </form>
    </main>
  );
}
