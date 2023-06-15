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
      <form
        className=" flex justify-between gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-1 h-full">
          <div className="file__wrapper">
            <label className="absolute top-[-15px] left-[5px] bg-white px-3">
              Upload images
            </label>
            <span className="add--btn">+</span>
            <input type="file" />
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-between w-full">
          <div className=" relative flex flex-col border border-lightGrey">
            <label
              className="absolute top-[-15px] left-[15px] bg-white px-3"
              htmlFor=""
            >
              Titre
            </label>
            <input
              className="bg-white h-[30px]"
              type="text"
              name="title"
              {...register("title")}
            />
          </div>
          <div className="details flex ">
            <div className="flex flex-col w-[150px] relative">
              <label
                className="absolute top-[-15px] left-[15px] bg-white px-3"
                htmlFor=""
              >
                Prix
              </label>
              <input
                className=" bg-white border border-lightGrey h-[35px]"
                type="number"
                name="price"
                min={0}
                max={1000000000000}
                defaultValue={0}
                {...register("price")}
              />
            </div>
            <div className="flex flex-col w-[80px] ml-10 relative">
              <label
                className="absolute top-[-15px] left-[5px] bg-white px-3"
                htmlFor=""
              >
                Chambres
              </label>
              <input
                className=" bg-white border border-lightGrey pl-[5px] h-[35px]"
                type="number"
                defaultValue={0}
                max={20}
                min={0}
                name="rooms"
                {...register("rooms")}
              />
            </div>
            <div className="flex flex-col ml-10  w-[60px] relative">
              <label
                className="absolute top-[-15px] left-[5px] bg-white px-3"
                htmlFor=""
              >
                Meublé
              </label>
              <select
                className="pl-[5px] bg-white h-[35px] border border-lightGrey"
                name="furnished"
                {...register("furnished")}
              >
                <option value="false">Non</option>
                <option value="true">Oui</option>
              </select>
            </div>
            <div className="flex flex-col w-[80px] ml-10 relative">
              <label
                className="absolute top-[-15px] left-[5px] bg-white px-3"
                htmlFor=""
              >
                Surface
              </label>
              <input
                className=" bg-white border border-lightGrey pl-[5px] h-[35px]"
                type="number"
                defaultValue={0}
                name="area"
                {...register("area")}
              />
            </div>
          </div>
          <div className=" flex flex-col relative">
            <label
              className="absolute top-[-15px] left-[15px] bg-white px-3"
              htmlFor=""
            >
              Adresse
            </label>
            <input
              className="bg-white border border-lightGrey h-[35px]"
              type="text"
              {...register("adress")}
            />
          </div>
          <div className=" flex flex-col relative">
            <label
              className="absolute top-[-15px] left-[15px] bg-white px-3"
              htmlFor=""
            >
              Description
            </label>
            <textarea
              rows={4}
              className="bg-white border border-lightGrey"
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
