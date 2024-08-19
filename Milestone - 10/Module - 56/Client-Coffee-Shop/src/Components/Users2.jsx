

const Users2 = () => {
    return (
        <div>
            <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="border-b px-4 pb-6">
                    <div className="text-center my-4">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-32 rounded-full ring ring-offset-2">
                                <img src={imageLink} />
                            </div>
                        </div>

                        <div className="py-2">
                            <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{name}</h3>
                            <div className="inline-flex gap-2 my-1 text-gray-700 dark:text-gray-300 items-center">
                                <FaPhoneAlt />
                                {phone}
                            </div>
                            <h1>Last Login: {lastLoggedAt}</h1>
                        </div>
                    </div>
                    <div className="flex justify-evenly gap-2 px-2">

                        <button className="flex items-center px-2 py-2 rounded-full btn btn-outline btn-primary">
                            <div className="flex items-center">
                                <MdEmail className="text-2xl" />
                                <span className="text-lg font-medium">Email</span>
                            </div>
                        </button>

                        <button onClick={() => handleUserDelete(_id)} className="btn flex items-center px-2 py-2 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105">

                            <MdDelete className="text-2xl" />
                            <span className="text-lg font-medium">Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users2;