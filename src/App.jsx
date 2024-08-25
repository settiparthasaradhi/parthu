import Assessment from "./Components/Assessment"
import {jsQuizz} from "./constants.json"
import "./App.css"
import FetchDataComponent from "./Components/FetchDataComponent"
function App() {
    // return <Assessment questions={jsQuizz.questions} />
    return <FetchDataComponent />
}

export default App
