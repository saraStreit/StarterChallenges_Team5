
import './App.scss'
import Header from "./components/header/Header.tsx";
import WisdomDisplay from './components/statsblock/score.tsx';
import SavingThrows from './components/throws/throws.tsx';

function App() {

  return (
    <>
      <div className={"wrapper"}>
        <Header />
        <WisdomDisplay wisdomValue={0} smallValue={0} />
        <SavingThrows />
      </div>
    </>
  )
}

export default App
