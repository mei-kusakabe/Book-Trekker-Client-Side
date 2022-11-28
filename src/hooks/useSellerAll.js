import React, { useEffect, useState } from 'react';

const useSellerAll = (usertype) => {
    const [isSellerAll, setIsSellerAll] = useState(false);
    const [isSellerAllLoading, setIsSellerAllLoading] = useState(true);
    useEffect(() => {
        if (usertype) {
            fetch(`http://localhost:5000/allusers/sellerAll/${usertype}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSellerAll(data.isSellerAll);
                    setIsSellerAllLoading(false);
                })
        }
    }, [usertype])
    return [isSellerAll, isSellerAllLoading]
};

export default useSellerAll;


