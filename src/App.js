import './styles/style.css'
import MainApp from './Pages/MainApp';
import {Routes, Route} from 'react-router-dom'
import MarketGraph from './Pages/MarketGraph';


function App() {
  

  return (
    <>
    <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/coin" element={<MarketGraph />}>
          <Route path=":coinId" element={<MarketGraph />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
