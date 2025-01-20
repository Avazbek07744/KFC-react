import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Oops! Sahifa topilmadi.</h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">
                Siz izlagan sahifa mavjud emas yoki o'chirib yuborilgan. Iltimos, bosh sahifaga qayting.
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
                Bosh sahifaga qaytish
            </button>
        </div>
    );
};

export default ErrorPage;
