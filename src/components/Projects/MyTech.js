import React , {useRef} from 'react';
import html from '../../assets/technologies_logo/vscode-icons_file-type-html.png';
import js from '../../assets/technologies_logo/vscode-icons_file-type-js-official.png';
import git from '../../assets/technologies_logo/logos_git-icon.png';
import react from '../../assets/technologies_logo/logos_react.png';
import firebase from '../../assets/technologies_logo/firebase.png';
import redux from '../../assets/technologies_logo/Vector.png';
import css from '../../assets/technologies_logo/vscode-icons_file-type-css.png';
import github from '../../assets/technologies_logo/akar-icons_github-fill.png';
import bootstrap from '../../assets/technologies_logo/logos_bootstrap.png';
import sass from '../../assets/technologies_logo/logos_sass.png';
import tailwind from '../../assets/technologies_logo/vscode-icons_file-type-tailwind.png';
import vscode from '../../assets/technologies_logo/vscode-icons_file-type-vscode.png';
import typeScript from '../../assets/technologies_logo/Typescript_logo.png';
import python from '../../assets/technologies_logo/python.png';
import nodeJs from '../../assets/technologies_logo/nodejs.jpg';
import mongoDb from '../../assets/technologies_logo/MongoDB-Logo.jpg';
import useObserver from '../../customHooks/useObserver';
 const nextJs  = 'https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png'


const MyTech = () => {
    const techStack = [html , js ,git , react , firebase , redux , css , github , bootstrap , sass , tailwind , vscode , typeScript , python , nodeJs , mongoDb , nextJs]
    const techStackTitleRef = useRef()
    const techStackParagraphRef = useRef()
    const techStackImageRef = useRef()

    useObserver(techStackTitleRef)
    useObserver(techStackParagraphRef)
    useObserver(techStackImageRef)

  return (
    <div className='container d-flex flex-column gap-3 '  id='tech-stack'>
            <h1 ref={techStackTitleRef} className='text-center tech-stack-title title-style'>My Tech Stack</h1>
            <p className='text-center tech-stack-paragraph' ref={techStackParagraphRef}> Technologies I’ve been working with recently</p>
            <div className='tech-stack-logo-container mt-5' ref={techStackImageRef}>
                {
                    techStack.map((item , index)=> {
                        return <div className='tech-logo-box' key={index}><img className='tech-logo-img' src={item} alt={item} /></div>
                    })
                }

            </div>

    </div>
  )
}

export default MyTech