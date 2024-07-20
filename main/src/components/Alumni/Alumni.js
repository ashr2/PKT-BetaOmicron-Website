import AlumniCard from "./AlumniCard";

const person = {
    name: 'John Doe',
    image: 'https://headshots-inc.com/wp-content/uploads/2021/01/FINAL-Blog-Images.jpg',
    pledgeClass: "Beta Alpha",
    currentCareer: 'Software Engineer at XYZ Company',
    description: 'John is currently working at XYZ Corp, focusing on web development and cloud computing.',
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