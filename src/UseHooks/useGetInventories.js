import React, { useEffect, useState } from 'react';

const useGetInventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/manage`)
        .then((res) => res.json())
        .then((data) => setInventories(data));
    }, []);
    return [inventories, setInventories];
};

export default useGetInventories;