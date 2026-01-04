import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../../AuthContext/AuthContext';

const useRole = () => {
    const { user } = useContext(AuthContext)

    const { data: role = "User" } = useQuery({
        queryKey: ["user-role", user?.email],
        queryFn: async () => {
            const res = await axios.get(
              `https://plateshare-community-server.vercel.app/users/role?email=${user?.email}`
            );
            return res.data?.userRole || "";
        }
    })
console.log(role);

    return { role };
};

export default useRole;