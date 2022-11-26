import {AppContextProvider} from "./AppContext"
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <AppContextProvider>
      <Navbar/>
    </AppContextProvider>
  );
}

export default App;
