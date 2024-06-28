import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("#000000")


  return (
    <> 
    <div className='container' style={{backgroundColor: color}} >

    <div className='colorbar'>
      <button type="button" id='redbtn' onClick={() => setcolor("red")}>Red</button>

      <button type="button" id='greenbtn' onClick={() => setcolor("green")}>Green</button>

      <button type="button" id='bluebtn' onClick={() => setcolor("blue")}>Blue</button>

      <button type="button" id='brownbtn' onClick={() => setcolor("brown")}>Brown</button>

      <button type="button" id='purplebtn'onClick={() => setcolor("purple")}>Purple</button>

      <button type="button" id='yellowbtn' onClick={() => setcolor("yellow")}>Yellow</button>

      <button type="button" id='aquabtn' onClick={() => setcolor("aqua")}>Aqua</button>

      <button type="button" id='pinkbtn' onClick={() => setcolor("pink")}>Pink</button>
      
      <button type="button" id='orangebtn' onClick={() => setcolor("orange")}>Orange</button>

      <button type="button" id='whitebtn' onClick={() => setcolor("white")}>White</button> 
      </div>

    </div>
     
    </>
  )
}

export default App
