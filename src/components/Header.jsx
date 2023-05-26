// import {IoMdSearch} from "react-icons/io";
// import {BsGithub} from "react-icons/bs";

//passing data to the app component from our input value
function SideBar({ searchValue, error }) {
  const onSubmit = (e) => {
    e.preventDefault();
    searchValue(e.target[0].value);
    e.target[0].value = "";
    console.log("select")
  };

  return (
    <header className="flex items-center  bg-[#fafafa] p-3 rounded-lg">
      <div className="flex-auto sm:flex-1">
        
        <span className="font-bold text-[#5d83ff] font-Poppins">
          <a href="/">Mausam - Weather App</a>
        </span>
      </div>
      <div className="w-60 relative  sm:w-[11rem] flex-auto">
        <form className="flex" onSubmit={onSubmit}>
          <input
            placeholder="City Name (Specify Country)"
            type="search"
            className="flex-1 text-sm text-gray-600 w-full py-2 px-7 rounded-lg relative focus:outline-none placeholder:text-xs shadow-sm"
          />
          {error && (
            <span className=" text-xs text-red-500 absolute top-14 left-0 bg-[#fafafa] py-3 px-2 rounded-lg">
              {error}
            </span>
          )}
          <span className="bg-[#91abff] text-white flex-2 text-center justify-center items-center w-20 mt-1 mb-1 mr-10 ml-5 rounded-[20px]"><button>Search</button></span>
        </form>

        {/* <IoMdSearch className="absolute left-2 top-[30%] text-slate-500" /> */}
       
      </div>
    </header>


  );
}

export default SideBar;
