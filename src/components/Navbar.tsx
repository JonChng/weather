import React from 'react';
import { IoIosSunny } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { GrLocation } from 'react-icons/gr';
import SearchBox from './SearchBox';

type Props = {};

export default function Navbar(props: Props) {
    return (
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
            <div className="h-[80px] w-full flex justify-between item-center max-w-7xl px-3 mx-auto">
                <p className="flex items-center justify-center gap-2">
                    <h2 className="text-gray-500 text-3xl">Weather</h2>
                    <IoIosSunny className="text-3xl mt-1 text-yellow-300"/>
                </p>
                <section className="flex gap-2 items-center">
                    <FaLocationCrosshairs className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer"/>
                    <GrLocation className="text-3xl  hover:opacity-80 cursor-pointer"/>
                    <p className="text-slate-900/80 text-sm">Singapore</p>
                    <div>{/*SearchBox */} <SearchBox/> </div>
                </section>
            </div>
        </nav>
    );
    }