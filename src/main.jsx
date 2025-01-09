
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Routes

import TeenPattiC from './Routes/TeenPattiC.jsx'
import BollywoodCasino2 from './Routes/BollywoodCasino2.jsx'

//error
import UniqueRoullete from './Routes/UniqueRoullete.jsx'
import MiniSuperOver from './Routes/MiniSuperOver.jsx'
import Goal from './Routes/Goal.jsx'
//error
import AndarBahar150Cards from './Routes/AndarBahar150Cards.jsx'
import Lucky15 from './Routes/Lucky15.jsx'
import SuperOver2 from './Routes/SuperOver2.jsx'
import QueenTopOpenTeenPatti from './Routes/QueenTopOpenTeenPatti.jsx'
import JackTopOpenTeenPatti from './Routes/JackTopOpenTeenPatti.jsx'
import SicBo2 from './Routes/SicBo2.jsx'
import InstantTeenPatti3_0 from './Routes/InstantTeenPatti3_0.jsx'
import SicBo from './Routes/SicBo.jsx'
import BallByBall from './Routes/BallByBall.jsx'
import InstantTeenPatti2_0 from './Routes/InstantTeenPatti2_0.jsx'
import TeenPatti1Day from './Routes/TeenPatti1Day.jsx'
import TeenPatti20_20 from './Routes/TeenPatti20_20.jsx'

import TeenPattiTest from './Routes/TeenPattiTest.jsx'
import TeenPattiOpen from './Routes/TeenPattiOpen.jsx'
import Poker1Day from './Routes/Poker1Day.jsx'
import Poker20_20 from './Routes/Poker20_20.jsx'

import Poker6Players from './Routes/Poker6Players.jsx'
import Baccarat from './Routes/Baccarat.jsx'
import Baccarat2 from './Routes/Baccarat2.jsx'
import DragonTiger20_20 from './Routes/DragonTiger20_20.jsx'
import DragonTiger1day from './Routes/DragonTiger1day.jsx'
// import DTL20_20 from './Routes/DTL20_20.jsx'
import DragonTiger2_20_20 from './Routes/DragonTiger2_20_20.jsx'
import Cards32_A from './Routes/Cards32_A.jsx'
import Cards32_B from './Routes/Cards32_B.jsx'
//  error
import AndarBahar from './Routes/AndarBahar.jsx'
import AndarBahar2 from './Routes/AndarBahar2.jsx'
import Lucky7_A from './Routes/Lucky7_A.jsx'
import Lucky7_B from './Routes/Lucky7_B.jsx'



createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      
      <Route path="/TeenPattiC" element={<TeenPattiC />} />
      <Route path="/BollywoodCasino2" element={<BollywoodCasino2 />} />
      <Route path="/UniqueRoullete" element={<UniqueRoullete />} />
      <Route path="/MiniSuperOver" element={<MiniSuperOver />} />
      <Route path="/Goal" element={<Goal />} />
      <Route path="/AndarBahar150Cards" element={<AndarBahar150Cards />} />
      <Route path="/Lucky15" element={<Lucky15 />} />
      <Route path="/SuperOver2" element={<SuperOver2 />} />
      <Route path="/QueenTopOpenTeenPatti" element={<QueenTopOpenTeenPatti />} />
      <Route path="/JackTopOpenTeenPatti" element={<JackTopOpenTeenPatti />} />
      {/* Bleach Roullete have same games like Unique Roullete */}
      <Route path="/SicBo2" element={<SicBo2 />} />
      {/* Golden Roullete have same games like Unique Roullete */}
      <Route path="/InstantTeenPatti3_0" element={<InstantTeenPatti3_0 />} />
      <Route path="/SicBo" element={<SicBo />} />
      <Route path="/BallByBall" element={<BallByBall />} />
      <Route path="/InstantTeenPatti2_0" element={<InstantTeenPatti2_0 />} />
      {/* Roullete BL have same games like Unique Roullete */}
      <Route path="/TeenPatti1Day" element={<TeenPatti1Day />} />
      <Route path="/TeenPatti20_20" element={<TeenPatti20_20 />} />


      <Route path="/TeenPattiTest" element={<TeenPattiTest />} />
      <Route path="/TeenPattiOpen" element={<TeenPattiOpen />} />
      <Route path="/Poker1Day" element={<Poker1Day />} />
      <Route path="/Poker20_20" element={<Poker20_20 />} />


      <Route path="/Poker6Players" element={<Poker6Players />} />
      <Route path="/Baccarat" element={<Baccarat />} />
      <Route path="/Baccarat2" element={<Baccarat2 />} />
      <Route path="/DragonTiger20_20" element={<DragonTiger20_20 />} />
      <Route path="/DragonTiger1day" element={<DragonTiger1day />} />
     {/* <Route path="/DTL20_20" element={<DTL20_20 />} />  */}
      <Route path="/DragonTiger2_20_20" element={<DragonTiger2_20_20 />} />
      <Route path="/Cards32_A" element={<Cards32_A />} />
      <Route path="/Cards32_B" element={<Cards32_B />} />
      <Route path="/AndarBahar" element={<AndarBahar />} />
      <Route path="/AndarBahar2" element={<AndarBahar2 />} />
      <Route path="/Lucky7_A" element={<Lucky7_A />} />
      <Route path="/Lucky7_B" element={<Lucky7_B />} />
    </Routes>
  </BrowserRouter>
  
)
