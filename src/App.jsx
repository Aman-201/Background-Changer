import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("bg-black mx-0 my-0 w-screen h-screen")

  return (
    <>
    <div className={color} >
      <div className="bg-slate-200 rounded-full px-5 py-5 grid grid-cols-7 gap-2 place-items-baseline	 " >
      <button onClick={()=>{setColor("bg-white mx-0 my-0 w-screen h-screen")}} class="rounded-full bg-white">Color</button>
      <button onClick={()=>{setColor("bg-black mx-0 my-0 w-screen h-screen")}} class="bg-black rounded-full">Color</button>
      <button onClick={()=>{setColor("bg-green-600 mx-0 my-0 w-screen h-screen")}} class="bg-green-600 rounded-full">Color</button>
      <button onClick={()=>{setColor("bg-yellow-600 mx-0 my-0 w-screen h-screen")}} class="bg-yellow-600 rounded-full">Color</button>
      <button onClick={()=>{setColor("bg-orange-600 mx-0 my-0 w-screen h-screen")}} class="bg-orange-600 rounded-full">Color</button>
      <button onClick={()=>{setColor("bg-purple-600 mx-0 my-0 w-screen h-screen")}} class="bg-purple-600 rounded-full">Color</button>
      <button onClick={()=>{setColor("bg-red-600 mx-0 my-0 w-screen h-screen")}} class="bg-red-600 rounded-full">Color</button>
      </div>
      </div>
    </>
  )
}

export default App
