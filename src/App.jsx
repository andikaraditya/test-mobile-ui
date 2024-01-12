import './App.css'
import Heading from './components/Heading'
import MenuSection from './components/MenuSection'
import ProductSection from './components/ProductSection'

function App() {

  return (
    <div className='w-[600px] min-h-[100vh] m-auto border-x-4'>
      <Heading />
      <MenuSection />
      <ProductSection />
    </div>
  )
}

export default App
