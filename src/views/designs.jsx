import Slider from "react-slick";
import designs from "../jsfile/designs";
import { useNavigate } from "react-router-dom";

export const Designs = () => {
  const navigate = useNavigate();
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 100,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  // };
  return (
    <div id="designs" className="our-designs m-10 mb-10">
      <p className="text-center font-semibold text-5xl text-zinc-700 m-10 underline">
      </p>

      <div className="card_div flex flex-wrap gap-6 mt-5">
          {designs.map((item, index) => (
            <div
              key={index}
              className="design-card p-6 hover:shadow-2xl  transition-transform transform hover:scale-105  duration-300 ease-in-out"
              onClick={() => navigate(`/design/${item.id}`)} 
           >
              <div className="img-div">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-60 h-60 object-cover rounded-lg"
                />
              </div>
              <p className="text-2xl py-2 text-zinc-700 mt-5"> {item.name}</p>
            </div>
          ))}
       
      </div>
    </div>
  );
  //  return (
  //  <div className="our-designs m-10 mb-10">
  //         <p className="text-center font-semibold text-5xl text-zinc-700 m-10 underline">
  //           Our Designs
  //         </p>

  //         <div className="card_div mt-5 ">
  //           <Slider {...settings}>
  //             <div className="design-card  p-6  hover:shadow-2xl  transition-transform transform hover:scale-105  duration-300 ease-in-out">
  //               <div className="img-div">
  //                 <img src="cafe.jpg" alt="" className="w-80 h-60" />
  //               </div>
  //               <p className="text-2xl py-2 text-zinc-700 mt-5"> Cafe Design</p>
  //             </div>

  //             <div className="service-card p-6  hover:shadow-2xl transition-transform transform hover:scale-105  duration-300 ease-in-out">
  //               <div className="img-div">
  //                 <img src="cafe.jpg" alt="" className="w-80 h-60" />
  //               </div>
  //               <p className="text-2xl py-2 text-zinc-700 mt-5"> Office Design</p>
  //             </div>

  //             <div className="service-card  p-6  hover:shadow-2xl transition-transform transform hover:scale-105  duration-300 ease-in-out">
  //               <div className="img-div">
  //                 <img src="cafe.jpg" alt="" className="w-80 h-60" />
  //               </div>
  //               <p className="text-2xl py-2 text-zinc-700 mt-5">
  //                 {" "}
  //                 Bedroom Design
  //               </p>
  //             </div>

  //             <div className="service-card  p-6  hover:shadow-2xl transition-transform transform hover:scale-105  duration-300 ease-in-out">
  //               <div className="img-div">
  //                 <img src="cafe.jpg" alt="" className="w-80 h-60" />
  //               </div>
  //               <p className="text-2xl py-2 text-zinc-700 mt-5">
  //                 {" "}
  //                 Study Room Design
  //               </p>
  //             </div>
  //           </Slider>
  //           {/* <div className="service-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
  //             <div className="img-div">
  //               <img src="cafe.jpg" alt="" className="w-80 h-60" />
  //             </div>
  //             <p className="text-2xl py-2 text-zinc-700"> Modular Kitchen</p>

  //           </div> */}
  //         </div>
  //       </div>
  //  )
};
