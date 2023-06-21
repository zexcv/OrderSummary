/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

import { setupCounter } from '../../../global-scripts/scripts/counter/counter.js'

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("btn").innerHTML = "<img class='gif' src='./images/loading.gif'></img>"
})


setupCounter(document.querySelector('#counter'))
