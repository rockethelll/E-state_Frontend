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
        <form className="form flex-1" action="">
          <div className=" input__wrapper">
            <label className=" label" htmlFor="">
              Titre
            </label>
            <input className="input h-[30px]" type="text" />
          </div>
          <div className="details flex ">
            <div className="input__wrapper">
              <label className="label" htmlFor="">
                Prix
              </label>
              <input className=" input h-[35px]" type="text" />
            </div>
            <div className="input__wrapper w-[80px] ml-10">
              <label className="label" htmlFor="">
                Chambres
              </label>
              <input
                className=" input pl-[5px] h-[35px]"
                type="number"
                defaultValue={0}
                max={20}
                min={0}
              />
            </div>
            <div className=" input__wrapper w-[80px] ml-10 pt-2 pl-1 h-[35px]">
              <label className="label" htmlFor="">
                Meublé
              </label>
              <select className="input">
                <option>Non</option>
                <option>Oui</option>
              </select>
            </div>
          </div>
          <div className=" input__wrapper">
            <label className="label" htmlFor="">
              Adresse
            </label>
            <input className="input h-[35px]" type="text" />
          </div>
          <div className=" input__wrapper">
            <label className="label" htmlFor="">
              Description
            </label>
            <textarea rows={4} className="input" type="text" />
          </div>
          <input type="submit" className="btn btn bg-black text-white" />
        </form>
      </div>
    </main>
  );
}
