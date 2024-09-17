import javaLogo from '../assets/java.png'
import kotlinLogo from '../assets/kotlin-logo.png'
import swiftLogo from '../assets/swiftui.png'

const Skills = () => {

    const mySkills = [{id: 0, title: "Java", desc: "lorum", img: javaLogo}, 
                        {id: 0, title: "Kotlin", desc: "lorum", img: kotlinLogo}, 
                        {id: 0, title: "Swift", desc: "lorum", img: swiftLogo}
                    ]
    return (
        <div className="skills">
                
                {mySkills.map(skill => (
                    <div className="skill" key={skill.id}>
                        
                        <img src={skill.img} alt="" className='logo' />
                    </div>
                )) }
                {/* <div className="java skill">
                    <img src={java} alt="" className='logo'/>
                </div> */}

        </div>
      );
}
 
export default Skills;