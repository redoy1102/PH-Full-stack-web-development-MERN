import {useLoaderData} from "react-router-dom";
import BackButton from "./Utlities/BackButton.jsx";

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const {name, coffeeSupplier, coffeeCategory, coffeeTaste, chefName, coffeeDetails, photoUrl, coffeePrice} = coffee;
    // console.log(coffee)

    const coffeeInfo = [
        { label: "Name", value: name },
        { label: "Chef", value: chefName },
        { label: "Supplier", value: coffeeSupplier },
        { label: "Taste", value: coffeeTaste },
        { label: "Category", value: coffeeCategory },
        { label: "Details", value: coffeeDetails },
    ];

    return (
        <div className="mx-4 md:mx-32">
            <BackButton></BackButton>

            <div className="flex justify-evenly items-center bg-[#F5F4F1] p-6">
                <img src={photoUrl} alt={name}/>
                <div>
                    {
                        coffeeInfo.map((item, index) =>
                            (
                                <h1 key={index} className="tex-lg mb-2">
                                    <span className="font-semibold">{item.label}: </span>
                                    <span>{item.value}</span>
                                </h1>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;