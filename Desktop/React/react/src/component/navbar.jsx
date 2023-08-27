import React from "react"

export default function NavBar(props) {

  const [control, setControl] = React.useState(props.toggle)
    
     function set(params) {
        setControl(prev => !prev)
     }
  

    return(
        <header className="flex flex-row space-x-8 text-cente bg-gray-900 w-3/4 mx-auto text-3xl text-white p-6 mt-8 rounded-t-lg font-inter">
            <div>
                <h1 className="text-cyan-400 font-bold ">ReactFacts</h1>
            </div>
            <div>
                
              <div className="flex flex-row text-xl ml-60 space-x-2">

                <div>
                    <p>light</p>
                </div>
         
                {
                    control == false ? <div className="bg-black w-12 h-6 mt-1 rounded-full">
                        <button onClick={set}  className="bg-white rounded-full w-4 h-4 ml-1"></button> 
                    </div>  : <div className="bg-white w-12 h-6 mt-1 rounded-full">
                      <button onClick={set} className="bg-gray-500 rounded-full w-4 h-4 ml-6">
                      </button>
                    </div>
                }


                <div>
                    <p>dark</p>
                </div>

              </div>

            </div>
        </header>
    )
}

