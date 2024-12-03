'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Home() {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          window.location.href = 'https://thptchuyenbentre.edu.vn';
          return 100;
        }
        return prevProgress + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md p-8 relative">
        {/* Logo Container với animation */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-white dark:bg-gray-800 shadow-lg p-4">
            <Image
              src="/BenTreHighSchool.jpg"
              alt="Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Trường Trung học phổ thông chuyên Bến Tre
          </h1>
        </div>
        
        {/* Thanh loading với hiệu ứng và phần trăm bên trong */}
        <div className="relative w-full">
          <div className="w-full bg-gray-200 rounded-full h-8 dark:bg-gray-700 shadow-inner overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-8 rounded-full transition-all duration-300 ease-out shadow-lg relative min-w-[40px]"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
              }}
            >
              {/* Phần trăm nằm trong thanh progress */}
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold w-full">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        {/* Text loading với animation */}
        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-300 animate-pulse">
              Comming soon...
        </p>
      </div>
    </div>
  );
}