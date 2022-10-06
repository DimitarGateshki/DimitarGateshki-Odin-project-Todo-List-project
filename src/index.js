import loadPopUp  from "./general/addProject";


function init(){
    addProjectAction();
}

function addProjectAction(){
    const addProject=document.getElementsByClassName('tab')[0];
    addProject.onclick=loadPopUp;

}

init();
