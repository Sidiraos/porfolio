import React from 'react'
import Card from './Card';
function Projects() {
    const projets = [
        {
            title :"Calculator App",
            img : "https://cdn.dribbble.com/users/166931/screenshots/1117179/rebound.png",
            description : "A calculator app that can add, subtract, multiply and divide with react",
            link : "https://sidiraos.github.io/Calculator_App/"
        } ,
        {
            title :"Air Quality App",
            img : "https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png",
            description : "An App wich measures the air quality that can fetch the air quality of any city with vanilla Js",
            link : "https://sidiraos.github.io/Air-quality-App-/"

        } , 
        {
            title :"Infinite Scroll",
            img : "https://www.creativefabrica.com/wp-content/uploads/2023/01/28/Infinity-logo-and-symbol-vector-line-Graphics-17822479.jpg" ,
            description : "Infinite Scroll with generate free image unsplash api when scrolling down the page",
            link : "https://sidiraos.github.io/infinity_scroll-App/"
        } , 
        {
            title :"Typing Game",
            img : "https://thepurposefulnest.com/wp-content/uploads/2020/04/Typing-Games-for-Kids-.jpg" ,
            description : "Try To Type fast on the keyboard the random quote generate by Api and get hight score before 60s",
            link : "https://sidiraos.github.io/Typing-Game-App/"
        }
    ]
  return (
  <section id="projects" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Featured Projects</h2>
      <div className="row">
        {
            projets.map((item,index) => {
                return (
                <div className={`col-md-${6} col-12 mb-4`} key={index}>
                        <Card title={item.title} img = {item.img} description = {item.description} link = {item.link} />
                  </div>
                )
            })
        }
      </div>
    </div>
  </section>
  )
}

export default Projects