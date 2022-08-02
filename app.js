console.log('test')

import {data} from './data.js'


start()

function start(){
    const main = document.querySelector('main')
    main.innerHTML = data.map(article=>articleTemplate(article)).join('')
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
