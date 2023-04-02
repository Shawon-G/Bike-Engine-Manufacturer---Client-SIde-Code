import { useEffect, useState } from 'react';

const useToken = (user) => {

    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://enigmatic-anchorage-70082.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }
        // console.log("User From useToken", user);
    }, [user])
    return [token];
};

export default useToken;