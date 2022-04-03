import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Countdown from 'react-countdown'
import { useState, useEffect } from 'react'


import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WelcomeBanner from '../components/WelcomeBanner';
import Banner from '../components/Banner';
import DashboardCard01 from '../components/DashboardCard01'

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
       <div className="px-4 sm:px-6 lg:px-8 py-8 w-full mx-auto">

    <div
         className="bg-blue-200 px-6 py-4 my-4 rounded-md text-lg flex items-center w-fill"
         >

      <span className="text-blue-800 flex"> <i class="fa-solid fa-gear fa-spin p-2" style={{fontSize:'70px'}}></i><br></br> <span class="text-2xl font-bold my-auto ml-4">We are getting Ready, just finishing a few things...</span></span>
    </div>

         {/* Welcome banner */}
         <WelcomeBanner/>

         {/* Dashboard actions */}
         <div className="sm:flex sm:justify-between sm:items-center mb-8">


         </div>

         {/* Cards */}
         <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                      <div className="w-full bg-white shadow-lg rounded-sm border border-slate-200 p-6">
                          <h1 class="text-2xl font-bold text-gray-900 mb-5">
                            Next Launch
                          </h1>
                          <div class="flex gap-x-8">
                          <div className="w-3/4 flex-grow rounded" style={{backgroundImage: 'url(https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210310075447.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                          </div>
                          <div class="text-xl text-gray-900 mt-2">

              <h2 class="font-bold text-3xl mt-2">
                VELO-1 Launch
              </h2>

              <p class="mt-5"> 
                Vehicle: 
                <a href="#" class="text-blue-600"> Falcon 9 </a>
              </p>

              <p> 
                Launch Agency: 
                <a href="#" class="text-blue-600"> SpaceX </a>
              </p>
              <p> 
                Launchpad: 
                <a href="#" class="text-blue-600"> Lynx </a>
              </p>
              <p> 
                Crewed:
                <a href="#" class="text-blue-600"> No </a>
              </p>

              <h3 class="font-bold text-xl mt-8">  </h3>
              <p class="font-light opacity-0"> ... </p>

              <h3 class="font-bold text-2xl mt-8"> T- 00 Days : 00 Hours : 00 Minutes : 00 Seconds </h3>
              <p class="font-light">4/6/2022, 1:05:00 PM</p>

              <button class="bg-blue-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group">
                <p> WATCH </p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
                </div>
                </div>
            </div>
            <div className="w-full bg-white shadow-lg rounded-sm border border-slate-200 p-6">
                <h1 class="text-2xl font-bold text-gray-900 mb-5">
                  Launchpads
                </h1>
                <div class="flow-root">
        <ul role="list" class="">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-12 h-12 rounded-full object-cover" src="http://www.nasa.gov/sites/default/files/thumbnails/image/59_vab.jpg" alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                          Kennedy Space Center
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                          Cape Canaveral
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        0°C
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://i0.wp.com/youthsdaily.com/wp-content/uploads/2021/11/2358a8abeb9e5a448c9fa7d8181cf0bf.jpg?fit=1200%2C896&ssl=1" alt="Bonnie image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            SpaceX Starbase Spaceport
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            Boca Chica, Texas
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900">
                      0°C
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-12 h-12 rounded-full object-cover" src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Mid-Atlantic_Regional_Spaceport_-_aerial_photo.jpg" alt="Michael image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Maine Spaceport Complex
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            Washington County, Maine
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      0°C
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-12 h-12 rounded-full object-cover" src="/Rocket-Lab-LC-1-Pad-B.jpg" alt="Lana image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Launch Complex 1 
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            New Zealand
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      -999°C
                    </div>
                </div>
            </li>
        </ul>
   </div>
            </div>
         </div>

         <div className="w-full bg-white shadow-lg rounded-sm border border-slate-200 p-6 mt-5">
                <h1 class="text-2xl font-bold text-gray-900">
                  More upcoming launches
                </h1>
                <h1 class="text-xl text-gray-900 mt-2">
                  We are unable to load the information at the moment.
                </h1>
            </div>

       </div>
     </main>

     <Banner />

   </div>
 </div>

  )
}
