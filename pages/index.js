import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Countdown from 'react-countdown'
import { useState, useEffect } from 'react'


import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../components/WelcomeBanner';
import Banner from '../partials/Banner';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
   <div className="flex h-screen overflow-hidden">

   {/* Sidebar */}
   <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

   {/* Content area */}
   <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

     {/*  Site header */}
     <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

     <main>
       <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

         {/* Welcome banner */}
         <WelcomeBanner />

         {/* Dashboard actions */}
         <div className="sm:flex sm:justify-between sm:items-center mb-8">


         </div>

         {/* Cards */}
         <div className="grid grid-cols-12 gap-6">


           
         </div>

       </div>
     </main>

     <Banner />

   </div>
 </div>

  )
}
