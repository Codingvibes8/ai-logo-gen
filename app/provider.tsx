

"use client";
import React, { ReactNode, use } from "react";
import { Header } from "./_components/Header";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    //save user data
    const CheckUserAuth = async () => {
        const { user } = useUser();
        useEffect(() => {
            user && CheckUserAuth();
        }, [user]);
        const result = await axios.post("/api/users", {
            userEmail: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
        });
        console.log(result.data);
    };
    return (
        <div>
            <Header />
            <div className="px-10 lg:px-32 xl:px-48 2xl:px-56">
                {children}
            </div>
        </div>
    );
};

export default Provider;