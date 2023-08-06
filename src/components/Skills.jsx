import React from 'react'
import HTMLImage from '../assets/html.png'
import CSSImage from '../assets/css.png'
import JSImage from '../assets/javascript.png'
import ReactImage from '../assets/react.png'
import FirebaseImage from '../assets/firebase.png'
import BootstrapImage from '../assets/bootstrap.png'
import SassImage from '../assets/sass.png'
import GithubImage from '../assets/github.png'
const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <div className="skills_content">
            <div className="skills_content--headingbox">
                <h2 className="skills_content-heading">Umiejętności</h2>
            </div>
            <div className="skills_content-wrapper">
                <div className="skills_content-wrapper_row">
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <img src={HTMLImage} alt="" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">HTML</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <img src={CSSImage} alt="" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">CSS</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <img src={SassImage} alt="" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Sass</p>
                    </div>

                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <img src={JSImage} alt="" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Javascript</p>
                    </div>
                </div>
                <div className="skills_content-wrapper_row">
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <img src={ReactImage} alt="" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">React JS</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <img src={BootstrapImage} alt="" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Bootstrap</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <img src={GithubImage} alt="" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Github</p>
                    </div>
                    <div className="skills_content-wrapper_row-box" data-aos="zoom-in">
                        <img src={FirebaseImage} alt="" className='skills_content-wrapper_row-box_img'/>
                        <p className="skills_content-wrapper_row-box_nameofskill">Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills