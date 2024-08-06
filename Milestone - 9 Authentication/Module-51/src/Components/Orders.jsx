

const Orders = () => {
    const items = [1,2,3,4]
    return (
        <div>
            {
                items.map((item, index) => (
                    <p key={index}>Item - {item}</p>
                ))
            }
        </div>
    );
};

export default Orders;