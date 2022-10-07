import  Project  from "./projectController"; 




function buildProject(){
    let title= document.getElementById('title');
    let description=document.getElementById('description');

    let project=new Project(title.value,description.value);

   project.createElement(title.value);

   title.value="";
   description.value="";

}




function loadPopUp(){
    document.getElementsByClassName('modal')[0].classList.add('active');
}


export { loadPopUp, buildProject};