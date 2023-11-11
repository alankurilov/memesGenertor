import memes from "./memesData"
const btnMeme = document.querySelector("#memesButton")


function pasteAMeme(){
    const div = document.querySelector("#memes")
    div.appendChild(memes.picture)

}

btnMeme.onclick = pasteAMeme