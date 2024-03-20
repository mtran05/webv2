'use client';

import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function MFA_Page() {
    return (
        <main className="flex items-center justify-center md:h-screen">
          <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
            <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
              <div className="w-32 text-white md:w-36">
                <BrowserRouter>
                <App/>
                <ToastContainer />
                </BrowserRouter>
              </div>
            </div>
          </div>
        </main>
    );
  }