import './App.css'
import Heading from './components/Heading'
import MenuSection from './components/MenuSection'
import ProductSection from './components/ProductSection'
import PromoSection from './components/PromoSection'

function App() {

  return (
    <div className='w-[600px] min-h-[100vh] m-auto border-x-4'>
      <Heading />
      <MenuSection />
      <ProductSection />
      <PromoSection />
    </div>
  )
}

export default App
