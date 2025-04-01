

import React from 'react';
import furniture from '../jsfile/furniture'; // Import the furniture array
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink, useParams } from 'react-router-dom';


const Furniture = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location
    
    return (
        <div className="menu pt-20 flex justify-evenly gap-8 mt-8 ">
        {furniture.map((item, index) => (
            <div
            key={index}
            className={`flex items-center justify-center
                hover:bg-blue-600 hover:scale-105 hover:underline hover:decoration-white duration-500 h-0.5 ${
                location.pathname === item.link ? 'bg-blue-600 underline underline-offset-4' : ''
                }`}
            style={location.pathname === item.link ? { textDecorationColor: 'white' } : {}}
            >
            <RouterLink to={item.link} className="block isActive">
                <p className="text-2xl py-2 mt-5">{item.name}</p>
            </RouterLink>
            </div>
        ))}
        </div>
    );
    }
export default Furniture;