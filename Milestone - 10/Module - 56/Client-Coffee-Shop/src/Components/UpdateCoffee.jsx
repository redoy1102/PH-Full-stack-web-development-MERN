import BackButton from "./Utlities/BackButton.jsx";
import {useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const {_id, name, coffeeSupplier, coffeeCategory, coffeeTaste, chefName, coffeeDetails, photoUrl, coffeePrice} = coffee;

    const coffeeFieldsLeft = [
        {span: "Name", name: "name" ,placeHolder: "Enter coffee name", defaultValue: name},
        {span: "Supplier", name: "coffeeSupplier" ,placeHolder: "Enter coffee supplier", defaultValue: coffeeSupplier},
        {span: "Category", name: "coffeeCategory" ,placeHolder: "Enter coffee category", defaultValue: coffeeCategory},
    ]


    const handleUpdateCoffee = e => {
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

        const updatedCoffee = {name, coffeeSupplier, coffeeCategory, coffeeTaste, chefName, coffeeDetails, photoUrl, coffeePrice};

        console.log(updatedCoffee)

        // send coffee to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0)
                {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Okay!'
                    })
                }
            })
    }
    return (
        <div className="mx-4 md:mx-32">
            <BackButton></BackButton>

            <div className="bg-[#F4F3F0] rounded p-2 md:p-10 lg:p-14">

                <div className="text-center">
                    <h1 className="text-xl md:text-4xl text-[#374151] font-bold">Update Existing Coffee Details</h1>
                    <p className="text-base md:text-lg my-8 text-[#1B1A1A]">It is a long established fact that a reader
                        will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                        opposed to using Content here.
                    </p>
                </div>

                <form onSubmit={handleUpdateCoffee}>
                    <div className="grid md:grid-cols-12 gap-6">
                        <div className="col-span-1 md:col-span-6">
                            {
                                coffeeFieldsLeft.map((coffeeField, index) =>
                                    (
                                        <div className="form-control" key={index}>
                                            <label className="label">
                                                <span className="label-text">{coffeeField.span}</span>
                                            </label>
                                            <input type="text" name={coffeeField.name} defaultValue={coffeeField.defaultValue} className="input input-bordered" placeholder={coffeeField.placeHolder} required/>
                                        </div>
                                    )
                                )
                            }
                        </div>


                        <div className="col-span-1 md:col-span-6">
                            <div className="col-span-1 md:col-span-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <input type="text" name="chefName" defaultValue={chefName} className="input input-bordered"
                                           placeholder="Enter coffee chef" required/>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Taste</span>
                                        </label>
                                        <input type="text" name="coffeeTaste" defaultValue={coffeeTaste} className="input input-bordered"
                                               placeholder="Enter coffee taste" required/>
                                    </div>


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="coffeePrice" defaultValue={coffeePrice} className="input input-bordered"
                                               placeholder="Enter coffee price" required/>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name="coffeeDetails" defaultValue={coffeeDetails} className="input input-bordered"
                                           placeholder="Enter coffee details" required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photoUrl" defaultValue={photoUrl} className="input input-bordered" placeholder="Enter photo url"
                               required/>
                    </div>

                    <button
                        className="btn w-full my-6 bg-[#D2B48C] md:text-2xl border-2 border-[#331A15] hover:border-[#331A15] hover:bg-[#D2B48C]">Update
                        Coffee Details
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;