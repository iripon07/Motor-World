import React, { useEffect, useState } from 'react';

const useGetInventories = () => {

    const [inventories, setInventories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`https://motor-world-server.herokuapp.com/manage`)
        .then((res) => res.json())
        .then((data) => setInventories(data));
        setLoading(false)
    }, []);

    return [inventories, setInventories, setLoading, loading];
};

export default useGetInventories;