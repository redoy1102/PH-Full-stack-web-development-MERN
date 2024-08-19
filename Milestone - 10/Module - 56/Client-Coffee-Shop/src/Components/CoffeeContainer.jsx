import { FaEye, FaPencilAlt  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeContainer = ({coffee, coffees, setCoffees}) => {
    const {_id, name, photoUrl, chefName, coffeePrice} = coffee;

    const handleCoffeeDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount > 0)
                        {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Deleted successfully.",
                                showConfirmButton: false,
                                timer: 1000
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="mx-4 md:mx-32">

            <div className="flex items-center justify-between gap-4 bg-[#F5F4F1] p-6">
                <img src={photoUrl} alt="Coffee image" className="w-40 h-52"/>
                <div>
                    <h1 className="text-lg">
                        <span className="font-bold">Name: </span>
                        <span className="font-semibold text-[#5C5B5B]">{name}</span>
                    </h1>
                    <h1 className="text-lg my-2">
                        <span className="font-bold">Chef: </span>
                        <span className="font-semibold text-[#5C5B5B]">{chefName}</span>
                    </h1>
                    <h1 className="text-lg">
                        <span className="font-bold">Price: </span>
                        <span className="font-semibold text-[#5C5B5B]">{coffeePrice}</span>
                    </h1>
                </div>

                <div className="inline-flex flex-col">
                    <Link
                        to={`/details/${_id}`}
                        className="rounded inline-flex bg-[#D2B48C] p-2 text-white">
                        <FaEye className="text-xl"/>
                    </Link>

                    <Link
                        to={`/updateCoffee/${_id}`}
                        className="my-3 rounded inline-flex bg-[#3C393B] p-2 text-white">
                        <FaPencilAlt className="text-xl"/>
                    </Link>

                    <button
                        onClick={() => handleCoffeeDelete(_id)}
                        className="rounded inline-flex bg-[#EA4744] p-2 text-white">
                        <MdDelete className="text-xl"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeContainer;