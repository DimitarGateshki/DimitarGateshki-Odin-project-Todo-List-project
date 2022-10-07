import {loadPopUp ,buildProject}  from "./general/addProject";
import  addTask  from "./general/addTask";


function init(){
    addProjectAction();
}

function addProjectAction(){
    const addProject=document.getElementsByClassName('tab')[0];
    addProject.onclick=loadPopUp;
    const createProject=document.getElementsByClassName('btnSubmit')[0];
    createProject.addEventListener('click',buildProject)
    const createTask=document.getElementsByClassName('btnSubmit')[1];
    createTask.addEventListener('click',addTask);

}

init();
