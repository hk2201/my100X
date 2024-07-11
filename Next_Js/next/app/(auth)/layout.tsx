import React from "react";

interface myType {
    children: React.ReactNode
}

export default function ({
    children }: myType) {
    return (
        <div className="text-center border-b">
            20% off for the next 3 days
            {children}
        </div>
    );
}