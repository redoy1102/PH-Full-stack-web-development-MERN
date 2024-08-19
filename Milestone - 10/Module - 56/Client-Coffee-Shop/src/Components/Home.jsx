import {Link, useLoaderData} from "react-router-dom";
import { TbMug } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import CoffeeContainer from "./CoffeeContainer.jsx";
import {useState} from "react";


const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div>
            <div className="text-center mt-28">
                <p className="text-xl">--- Sip & Savor ---</p>
                <h1 className="text-5xl text-[#331A15]">Our Popular Products: {coffees.length}</h1>

                <div className="inline-flex gap-2">
                    <Link to="/addCoffee">
                        <button className="btn w-full my-6 bg-[#D2B48C] md:text-xl border-2 border-[#331A15] hover:border-[#331A15] hover:bg-[#D2B48C]">
                            <div className="flex items-center">
                                <span className="text-2xl mr-2">Add Coffee</span>
                                <TbMug className="text-[#331A15] text-4xl"/>
                            </div>
                        </button>
                    </Link>

                    <Link to="/users">
                        <button className="btn w-full my-6 bg-[#D2B48C] md:text-xl border-2 border-[#331A15] hover:border-[#331A15] hover:bg-[#D2B48C]">
                            <div className="flex items-center">
                                <span className="text-2xl mr-2">Admins</span>
                                <FaUsers className="text-[#331A15] text-4xl"/>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {
                    coffees.map((coffee) => <CoffeeContainer
                        coffee={coffee}
                        key={coffee._id}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeContainer>)
                }
            </div>
        </div>
    );
};

export default Home;