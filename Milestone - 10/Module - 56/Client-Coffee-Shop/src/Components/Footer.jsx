import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    const handleFooterMessage = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const userMessage = {name, email, message}
        console.log(userMessage)
    }
    return (
        <div className="mt-28">
            <div className="bg-[url('https://i.imgur.com/GzTELyJ.jpeg')] bg-cover bg-center bg-no-repeat">
                <div className="pt-16 pb-12 mx-4 md:mx-32 grid md:grid-cols-12 items-center gap-x-20">
                    <div className="col-span-1 md:col-span-6">
                        <img src="https://i.imgur.com/FncAPa3.png" className="mb-6 w-16 h-20" alt=""/>
                        <h1 className="mb-8 text-[#331A15] text-4xl">Espresso Emporium</h1>
                        <p className="mb-8 text-[#1B1A1A] text-xl">Always ready to be your friend. Come & Contact with
                            us to share your memorable moments, to share
                            with your best companion.</p>

                        {/*icons*/}
                        <div className="flex items-center gap-3 mb-8">
                            <FaFacebook className="text-[#331A15] w-12 h-10"/>
                            <FaTwitter className="text-[#331A15] w-12 h-10"/>
                            <FaInstagram className="text-[#331A15] w-12 h-10"/>
                            <FaLinkedin className="text-[#331A15] w-12 h-10"/>
                        </div>
                        <h1 className="mb-8 text-[#331A15] text-4xl">Get in Touch</h1>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-[#331A15] w-6 h-6 mr-4"/>
                            <span className="text-lg">+88 01533 333 333</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <MdEmail className="text-[#331A15] w-6 h-6 mr-4"/>
                            <span className="text-lg">info@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaLocationDot className="text-[#331A15] w-6 h-6 mr-4"/>
                            <span className="text-lg">72, Wall street, King Road, Dhaka</span>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-6">
                        <h1 className="mb-8 text-[#331A15] text-4xl text-center">Connect with Us</h1>
                        <form onSubmit={handleFooterMessage}>
                            <div className="form-control">
                                <input type="text" name="name" className="input input-bordered mb-4" placeholder="Name" required/>
                                <input type="email" name="email" className="input input-bordered mb-4" placeholder="Email" required/>
                                <textarea rows="4" name="message" placeholder="Message" className="textarea textarea-bordered w-full mb-4"></textarea>

                                <div className="inline-flex ">
                                    <button className="btn btn-active btn-ghost rounded-full md:text-xl border-2 hover:border-[#331A15] mb-6">Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div
                className="p-3 bg-[url('https://i.imgur.com/nbpPMXe.jpeg')] bg-cover bg-center bg-no-repeat w-full text-white ">
                <h1 className="text-xl text-center">Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
        </div>
    );
};

export default Footer;