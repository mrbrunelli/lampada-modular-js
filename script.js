import lampada from './selector.js'
import msg from './msg.js'
import handleToggle from './function.js'

const { acesa, apagada, titulo } = lampada
const { acendeu, apagou } = msg

window.onload = () => {
    handleToggle(acesa, apagada)
}

apagada.addEventListener('mouseover', () => handleToggle(apagada, acesa, acendeu))
acesa.addEventListener('mouseout', () => handleToggle(acesa, apagada, apagou))
