import services from "../jsfile/services";

export const Services = () => {
  return (
    <div className="our-services m-10 mb-10">
      <p className="text-center font-semibold text-5xl text-blue-700 m-10">
        {" "}
        "Working Process to Progress Your Work"
        <p className="text-2xl font-normal">
          can be explained as a step-by-step journey that ensures quality, efficiency and client satisfaction.
          Here's how Vesun Interior transforms ideas into stunning spaces.
        </p>
      </p>

      <div className="service-card-containeer flex flex-col gap-10 mt-10 w-50">
        {services.map((item, index) => (
          console.log(index),
          <div
            key={index}
            className={`flex items-center w-30 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } bg-blue-700 shadow-lg overflow-hidden rounded-full`}>
            <div className={`img-div flex-shrink-0 ${
                index % 2 === 0 ? "ml-[0px]" : "mr-[0px]"
              }`}>
              <img src={item.image} alt={item.heading} className="w-50 h-80 object-cover rounded-full border-4 shadow-lg" />
            </div>
            <div className={`text-div text-white p-10 flex-grow ml-10 ${
                index % 2 === 0 ? "mr-[150px]" : "ml-[150px]"
              }`}>
              <p className="text-2xl font-semibold">{item.heading}</p>
              <ul className="list-disc list-inside mt-2">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-lg">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {/* <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
           
            <div className="img-div">
              <img src="3D-plan.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700 mt-5"> 3D Plan</p>
            </div>
          </div>
          <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
            <div className="img-div">
              <img src="site-visiting.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700"> Site Visiting</p>
            </div>
          </div>
          <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
            <div className="img-div">
              <img src="furniture.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700"> Furniture</p>
            </div>
          </div>
          <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
            <div className="img-div">
              <img src="furniture.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700">Construction</p>
            </div>
          </div>
          <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
            <div className="img-div">
              <img src="furniture.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700">Fasle Cieling</p>
            </div>
          </div> */}
      </div>
    </div>
  );
};
