
import './App.css';
import Main from "./Main"
import {Queue} from "./Game/Queue"

function App() {

    const Q = new Queue<number>()
    Q.Enquene(1)
    Q.Enquene(2)
    Q.Enquene(3)
    Q.Enquene(4)
    console.log(Q)



return(
    <Main/>

)
}

export default App;
