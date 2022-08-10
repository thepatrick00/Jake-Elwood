import Header from './components/Header/Header.js'
import Hero from './components/Hero/Hero.js'
import InfoBlock from './components/InfoBlock/InfoBlock.js'
import Footer from './components/Footer/Footer.js'


const root = document.getElementById('root');
const main = document.getElementById('main');

main.innerHTML += Header
main.innerHTML += Hero
root.innerHTML += InfoBlock
root.innerHTML += Footer
// root.append(InfoBlock)