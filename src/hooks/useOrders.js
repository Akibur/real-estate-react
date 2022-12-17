import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const [userOrders, setUserOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://sheltered-crag-02874.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);

            }).catch((err) => {
            });
    }, [isLoading]);


    const updateOrder = (id, status) => {
        setIsLoading(true);
        const order = { status: status };
        fetch(`https://sheltered-crag-02874.herokuapp.com/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(
                (data) => {
                    setIsLoading(false);
                    data.json();
                });

    };

    return [
        orders,
        setOrders,
        isLoading,
        updateOrder
    ];
};

export default useOrders;