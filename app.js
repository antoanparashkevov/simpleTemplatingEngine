console.log('test')

import {data, nav as links} from './data.js'


start()

function start(){
    const main = document.querySelector('main')
    main.innerHTML = data.map(article=>articleTemplate(article)).join('')
    const navTag= document.querySelector('nav ul')
    navTag.innerHTML = links.map(nav => navTemplate(nav)).join('')

    console.log(data.map(article=>articleTemplate(article)))
}
function articleTemplate(article){

    return `<article>
        <h1>${article.title}</h1>
        <div class="content">
            <p>${article.content}
            </p>
        </div>
        <footer>Author: ${article.author}</footer>
    </article>`
}

function navTemplate(nav){
    return `<li><a href="${nav.href}">${nav.label}</a>`
}
