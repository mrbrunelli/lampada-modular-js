import lampada from './selector.js'
const { titulo } = lampada

export default function handleToggle(hide, show, txt) {
    if (typeof txt === 'undefined') txt = 'Encoste na Lâmpada'
    hide.style.display = 'none'
    show.style.display = 'block'
    titulo.innerHTML = txt
}
