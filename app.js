console.log('test')

import {data, nav as links} from './data.js'

import {createTemplate} from "./engine.js";


start()

async function start(){
    const main = document.querySelector('main')
    const navTag= document.querySelector('nav ul')
    // navTag.innerHTML = links.map(nav => navTemplate(nav)).join('')

    const articleTemplateAsString = await (await fetch('./templates/article.html')).text()
    const articleTemplate = createTemplate(articleTemplateAsString)
    // console.log(articleTemplate(data[0]))

    main.innerHTML = data.map(article=>articleTemplate(article)).join('')
    console.log(data.map(article=>articleTemplate(article)))
}
// function articleTemplate(article){
//
//     return `<article>
//         <h1>${article.title}</h1>
//         <div class="content">
//             <p>${article.content}
//             </p>
//         </div>
//         <footer>Author: ${article.author}</footer>
//     </article>`
// }
//
// function navTemplate(nav){
//     return `<li><a href="${nav.href}">${nav.label}</a>`
// }
