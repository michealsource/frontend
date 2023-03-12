import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from './store/redux/store'

function App() {
  return (
    <ReduxProvider store={reduxStore}>
        <HomePage />
    </ReduxProvider>
  )
}

export default App
