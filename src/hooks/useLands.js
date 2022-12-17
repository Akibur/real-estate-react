import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useLands = () => {
    const [lands, setLands] = useState([]);
    const [displayLands, setDisplayLands] = useState([]);
    const [userLands, setUserLands] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const user = useAuth();


    useEffect(() => {
        console.log("loading state", isLoading);
        fetch('http://localhost:5000/lands')
            .then(res => res.json())
            .then(data => {
                setLands(data);
                setDisplayLands(data);
                const userL = data.filter(land => land.owner.email == user.user.email);
                console.log(userL);
                console.log(user.user.email);
                setUserLands(userL);
            }).catch((err) => {
            });
    }, [isLoading]);

    const deleteLand = (id) => {
        setIsLoading(true);
        fetch(`http://localhost:5000/lands/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'content-type': 'application/json'
            },
        })
            .then(
                (data) => {
                    data.json();
                    setIsLoading(false);
                });

    };

    const createLand = (land) => {
        setIsLoading(true);
        fetch(`http://localhost:5000/lands/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(land)
        })
            .then(
                (data) => {
                    data.json();
                    setIsLoading(false);
                });

    };

    const updateLand = (id, update) => {
        console.log("ID", id);
        console.log("Land Update", update);
        setIsLoading(true);
        fetch(`http://localhost:5000/lands/${id}`, {
            method: 'PATCH',
            headers: {
                "authorization": `Bearer ${localStorage.getItem('idToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(
                (data) => {
                    data.json();
                    setIsLoading(false);
                });

    };



    return [
        lands,
        userLands,
        displayLands,
        setDisplayLands,
        isLoading,
        deleteLand,
        createLand,
        updateLand
    ];
};

export default useLands;