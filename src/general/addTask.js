


function addTask(){
    let token=document.getElementsByClassName('currentProjectName')[0].textContent;
    let field=document.getElementById('task');


    let project=document.getElementById(token);


    let task=document.createElement('div');
    task.classList.add('taskEl');
    task.textContent=field.value;
    field.value='';
    task.addEventListener('click',()=>{

        project.removeChild(task);
    })

    project.appendChild(task);
    document.getElementsByClassName('modal')[1].classList.remove('active');

}


export default addTask;