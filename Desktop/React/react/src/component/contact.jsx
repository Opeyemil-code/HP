import React from "react";

export default function Joke(props) {
    

  const [isShown, setIsshown] = React.useState(false)

  function Toggle(params) {
    setIsshown(prev => !prev)
  }


  return(
  <div className="mx-auto mt-10 text-center">
   <h1 className="text-2xl font-bold font-mono">{props.setup}</h1>
   {isShown && <p>{props.punchline}</p>}
   <button onClick={Toggle} className="border border-black">show Punch</button>
   <hr />
  </div>
)
}