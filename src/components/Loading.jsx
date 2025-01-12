import React from "react";

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-24 h-24 border-8 border-gray-300 border-t-white rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;
