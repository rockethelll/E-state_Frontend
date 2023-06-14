export default function New() {
  return (
    <main className="mt-10 text-lightGrey min-h-[50vh] h-full">
      <div className=" flex justify-between gap-10">
        <div className="flex-1 h-full">
          <div className="file__wrapper">
            <label className="absolute top-[-15px] left-[5px] bg-white px-3">
              Upload images
            </label>
            <span className="add--btn">+</span>
            <input type="file" />
          </div>
        </div>
        <form className="flex flex-col flex-1 justify-between w-full" action="">
          <div className=" relative flex flex-col border border-lightGrey">
            <label
              className="absolute top-[-15px] left-[15px] bg-white px-3"
              htmlFor=""
            >
              Titre
            </label>
            <input className="bg-white h-[30px]" type="text" />
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
                type="text"
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
              />
            </div>
            <div className="flex flex-col ml-10  w-[60px] relative">
              <label
                className="absolute top-[-15px] left-[5px] bg-white px-3"
                htmlFor=""
              >
                Meublé
              </label>
              <select className="pl-[5px] bg-white h-[35px] border border-lightGrey">
                <option>Non</option>
                <option>Oui</option>
              </select>
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
            />
          </div>
          <input type="submit" className="btn btn bg-black text-white" />
        </form>
      </div>
    </main>
  );
}
