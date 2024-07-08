import { useState, useEffect } from 'react';

function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from API or local storage
        const fetchUser = async () => {
            // Example API call
            const userData = await fetchUserFromAPI();
            setUser(userData);
        };

        fetchUser();
    }, []);

    return user;
}

export default useAuth;
