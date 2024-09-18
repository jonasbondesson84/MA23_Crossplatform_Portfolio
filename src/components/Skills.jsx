import { useState } from 'react';
import javaLogo from '../assets/java.png';
import kotlinLogo from '../assets/kotlin-logo.png';
import swiftLogo from '../assets/swiftui.png';
import SelectedSkill from './SelectedSkill';
import powerAppsLogo from '../assets/powerapp.png';
import reactLogo from '../assets/react.svg'

const Skills = () => {

    const mySkills = [{id: 0, title: "Java", desc: "lorum", img: javaLogo, experience: 1}, 
                        {id: 1, title: "Kotlin", desc: "lorum", img: kotlinLogo, experience: 1}, 
                        {id: 2, title: "Swift", desc: "lorum", img: swiftLogo, experience: 1},
                        {id: 3, title: "React", desc: "lorum", img: reactLogo, experience: 1},
                        {id: 4, title: "Power Platform", desc: "lorum", img: powerAppsLogo, experience: 3}
                    ];
    const [selectedSkill, setSelectedSkill] = useState(null);


    return (
        <div className="skills">
            <div className="skill-tree">
                {mySkills.map(skill => (
                    <div className="skill" key={skill.id}>
                        
                        <img src={skill.img} alt="" className='logo' onClick={() => {setSelectedSkill(skill)}}/>
                    </div>
                )) }
                
            </div> 
            <br /> 
            {selectedSkill && <div className="selected-skill">
                     <SelectedSkill selectedSkill={selectedSkill}/>
            </div> }
        </div>
        
      );
}
 
export default Skills;