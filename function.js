import lampada from './selector.js'
const { titulo } = lampada

export default function handleToggle(hide, show, txt) {
    txt = typeof txt === 'undefined' ? 'Encoste na Lâmpada' : txt
    hide.style.display = 'none'
    show.style.display = 'block'
    titulo.innerHTML = txt
}
