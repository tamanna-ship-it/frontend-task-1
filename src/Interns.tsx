import React from 'react';
import { useNavigate } from 'react-router-dom';

const Interns: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4 min-h-screen bg-[#111315] p-8 items-center justify-center font-sans select-none">
            <h1 className="text-4xl font-black text-white mb-8 tracking-tight uppercase text-center">
                Estetica
            </h1>
            <div className="flex flex-col gap-4 w-full max-w-xl">
                <button 
                    onClick={() => navigate('/kranthi')}
                    className="bg-yellow-500 hover:bg-yellow-600 p-6 rounded-2xl h-[120px] flex items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/20 active:scale-[0.98] border-none outline-none"
                >
                    <span className="text-4xl font-bold text-white">Kranthi</span>
                </button>
                <button 
                    onClick={() => navigate('/rishita')}
                    className="bg-green-500 hover:bg-green-600 p-6 rounded-2xl h-[120px] flex items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.98] border-none outline-none"
                >
                    <span className="text-4xl font-bold text-white">Rishita</span>
                </button>
                <button 
                    onClick={() => navigate('/shubhang')}
                    className="bg-blue-500 hover:bg-blue-600 p-6 rounded-2xl h-[120px] flex items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] border-none outline-none"
                >
                    <span className="text-4xl font-bold text-white">Shubhang</span>
                </button>
            </div>
        </div>
    );
};

export default Interns;