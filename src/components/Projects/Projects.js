import React , {useRef} from 'react';
import Card from './Card';
import { projects } from './projectsData';
import useObserver from '../../customHooks/useObserver';
function Projects() {
const titleRef = useRef();
useObserver(titleRef);
  return (
  <section id="projects" className="py-5 mt-5">
    <div className="container">
      <h2 className="text-center title-style project-title" ref={titleRef}>Featured Projects</h2>
      <p className='text-center tech-stack-paragraph'>Things I’ve built so far</p>
      <hr className="title-hr" />
      <div className="row mt-5">
        {
            projects.map( item => {
                return (
                <div className={`col-md-${6} col-lg-${4} col-12 mb-4`} key={item.id}>
                        <Card title={item.title} img = {item.img} description = {item.description} link = {item.link} codeLink = {item.codeLink} techStack = {item.techStack} />
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