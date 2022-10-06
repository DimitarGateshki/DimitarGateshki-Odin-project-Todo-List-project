import  Project  from "./projectController"; 




function buildProject(){
    let title= document.getElementById('title').value;
    let description=document.getElementById('description').value;

    let project=new Project(title,description);
    project.createElement();
    

    
}




function loadPopUp(){
    document.getElementsByClassName('modal')[0].classList.add('active');
}


export default loadPopUp;