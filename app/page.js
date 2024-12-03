'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Home() {
  const [progress, setProgress] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            window.location.href = 'https://thptchuyenbentre.edu.vn';
          }, 500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 relative">
        {/* Logo với hiệu ứng float */}
        <div className="text-center mb-12 animate-float">
          <div className="relative w-40 h-40 mx-auto mb-6 rounded-full bg-white dark:bg-gray-800 shadow-2xl p-4 
                          hover:shadow-blue-500/50 transition-all duration-500">
            <Image
              src="/BenTreHighSchool.jpg"
              alt="Logo"
              width={120}
              height={120}
              className="w-full h-full object-contain rounded-full"
            />
            {/* Hiệu ứng glow xung quanh logo */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl -z-10"></div>
          </div>
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent
                         animate-gradient-x">
            Trường THPT chuyên Bến Tre
          </h1>
        </div>
        
        {/* Loading bar với hiệu ứng mới */}
        <div className="relative w-full mb-8">
          <div className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden">
            <div 
              className="h-full rounded-full relative"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #3B82F6)',
                backgroundSize: '200% 200%',
                animation: 'gradient 2s ease infinite'
              }}
            />
          </div>
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                         text-sm font-medium text-gray-600 dark:text-gray-300">
            {progress}%
          </span>
        </div>

        {/* Loading text với animation */}
        <div className="flex justify-center gap-1">
          <span className="text-blue-600 dark:text-blue-400">Loading</span>
          <span className="animate-bounce">.</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
        </div>
      </div>
    </div>
  );
}