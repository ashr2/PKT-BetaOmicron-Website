import AlumniCard from "./AlumniCard";
import perry from './perry_simon.png'

const person = {
    name: 'Perry Simon',
    image: perry,
    major: "Marketing and International Business",
    pledgeClass: "Beta Alpha",
    currentCareer: 'Audio Visual Technician at Electrosonic Inc',
    description: 'My experience in Phi Tau defined a lot of what I became as a young professional. ' + 
    'I learned about leadership, comradery, and responsibility all while having the time of my life. ' + 
    'Being president of Phi Tau is still one of my proudest achievements and I truly treasure the connections ' + 
    'I made during my time with the chapter.',
  };

function Alumni() {
    return(
        <div>
            <h1> Alumni</h1>
            <AlumniCard person={person}/>
        </div>
    )
}

export default Alumni;