const SelectedSkill = ({selectedSkill}) => {
    return (
        <div className="selected-skill">
            <p id='title'>{selectedSkill.title}</p>
            <p className="desc">My knowledge: {selectedSkill.desc}</p>
            <p className="experience">Years in use: {selectedSkill.experience}</p>
            
            <img src={selectedSkill.img} alt="" className="logo"/>
        </div>
      );
}
 
export default SelectedSkill;