import menus from "../jsfile/menu"
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const Menu = () => {
    const location = useLocation(); // Get the current location

    return (
        <div className="menu pt-20 flex justify-evenly gap-8 mt-8 ">
            {menus.map((item, index) => (
                console.log(item),
                <div
                    key={index}
                    className={`menu-items w-36 h-20 bg-blue-700 rounded-lg flex items-center justify-center
                       hover:bg-blue-600 hover:scale-105 hover:underline hover:decoration-white duration-500 h-0.5 ${
                            location.pathname === item.link ? "bg-blue-600 underline underline-offset-4" : ""
                        }`}
                        style={location.pathname === item.link ? { textDecorationColor: "white" } : {}}
                >
                    <RouterLink to={item.link} className="block isActive">
                        <p className="text-2xl py-2 mt-5 text-white">{item.name}</p>
                    </RouterLink>
                </div>
            ))}
        </div>
    )
} 