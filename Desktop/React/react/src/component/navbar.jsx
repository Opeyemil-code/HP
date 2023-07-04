import React from "react"

export default function NavBar(params) {
    return(
        <header className="flex flex-row space-x-8 text-center bg-gray-900 w-3/4 mx-auto text-3xl text-white p-6 mt-8 rounded-t-lg font-inter">
            <div>
                <h1 className="text-cyan-400 font-bold ">ReactFacts</h1>
            </div>
            <div>
                <h3 className="ml-5">React Course - project 1</h3>
            </div>
        </header>
    )
}