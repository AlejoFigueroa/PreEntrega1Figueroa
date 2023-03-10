import "./App.css"
import Button from "./components/Button"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>my app</h1>
      <Button texto="home "/>
      <Button texto="about"/>
      <Button texto="contacto"/>
    </div>
  )
}

export default App
