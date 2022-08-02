console.log('test')

import {data} from './data.js'

const articleAsHtml = ` <article>
        <h1>First Article</h1>
        <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quam, sed? Aliquam animi asperiores at
                cumque debitis dignissimos distinctio dolor dolore ducimus, esse eum fuga fugiat illum impedit ipsum
                iure iusto labore maiores minus molestias necessitatibus numquam odit officiis optio, quae quaerat qui
                quisquam quos reprehenderit sequi tempore ut voluptate, voluptates?
            </p>
        </div>
        <footer>Author: John Smith</footer>
    </article>`

start()

function start(){
    const main = document.querySelector('main')
    main.innerHTML = 'Hello'
}
