import BackButton from "./Utlities/BackButton.jsx";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AddCoffee = () => {
    const navigate = useNavigate();

    const coffeeFieldsLeft = [
        {span: "Name", name: "name" ,placeHolder: "Enter coffee name"},
        {span: "Supplier", name: "coffeeSupplier" ,placeHolder: "Enter coffee supplier"},
        {span: "Category", name: "coffeeCategory" ,placeHolder: "Enter coffee category"}
    ]

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const coffeeSupplier = form.coffeeSupplier.value;
        const coffeeCategory = form.coffeeCategory.value;
        const chefName = form.chefName.value;
        const coffeeTaste = form.coffeeTaste.value;
        const coffeeDetails = form.coffeeDetails.value;
        const photoUrl = form.photoUrl.value;
        const coffeePrice = form.coffeePrice.value;

        const coffee = {name, coffeeSupplier, coffeeCategory, coffeeTaste, chefName, coffeeDetails, photoUrl, coffeePrice};

        console.log(coffee)

        //send coffee to the server using axios
        axios.post('https://coffee-shop-backend-1-ppmw.onrender.com/coffee', coffee)
            .then(data => {
                if (data.data.insertedId)
                {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee added successfully.",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    form.reset();
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="mx-4 md:mx-32">
            <BackButton></BackButton>

            <div className="bg-[#F4F3F0] rounded p-2 md:p-10 lg:p-14">
                <div className="text-center">
                    <h1 className="text-xl md:text-4xl text-[#374151] font-bold">Add New Coffee</h1>
                    <p className="text-base md:text-lg my-8 text-[#1B1A1A]">It is a long established fact that a reader
                        will be distraceted by the readable content of a page
                        when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using Content here.
                    </p>
                </div>

                <form onSubmit={handleAddCoffee}>
                    <div className="grid md:grid-cols-12 gap-6">
                        <div className="col-span-1 md:col-span-6">
                            {
                                coffeeFieldsLeft.map((coffeeField, index) =>
                                    (
                                        <div className="form-control" key={index}>
                                            <label className="label">
                                                <span className="label-text">{coffeeField.span}</span>
                                            </label>
                                            <input type="text" name={coffeeField.name} className="input input-bordered"
                                                   placeholder={coffeeField.placeHolder} required/>
                                        </div>
                                    )
                                )
                            }
                        </div>


                        <div className="col-span-1 md:col-span-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" name="chefName" className="input input-bordered"
                                       placeholder="Enter coffee chef" required/>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="text" name="coffeeTaste" className="input input-bordered"
                                           placeholder="Enter coffee taste" required/>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="coffeePrice" className="input input-bordered"
                                           placeholder="Enter coffee price" required/>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name="coffeeDetails" className="input input-bordered"
                                       placeholder="Enter coffee details" required/>
                            </div>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photoUrl" className="input input-bordered"
                               placeholder="Enter photo url" required/>
                    </div>

                    <button
                        className="btn w-full my-6 bg-[#D2B48C] md:text-2xl border-2 border-[#331A15] hover:border-[#331A15] hover:bg-[#D2B48C]">Add
                        Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;