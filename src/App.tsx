import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./Main"
import {Queue} from "./Game/Queue"
import { BuildTree } from './LevelNodes/LevelNode';
import { Stage } from './Levels/Leveltmp';
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
