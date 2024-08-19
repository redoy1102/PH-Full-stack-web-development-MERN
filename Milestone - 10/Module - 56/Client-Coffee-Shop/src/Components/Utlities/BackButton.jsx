import { IoIosArrowRoundBack } from "react-icons/io";
import {Link} from "react-router-dom";

const BackButton = () => {
    return (
        <Link
            to="/" className="inline-flex p-2 my-6 items-center space-x-2 bg-transparent hover:bg-[#D2B48C] rounded-lg transition-all ease-in-out"
        >
            <IoIosArrowRoundBack className="text-5xl text-black" />
            <span className="text-lg font-semibold text-[#3E414D]">Back to home</span>
        </Link>
    );
};

export default BackButton;