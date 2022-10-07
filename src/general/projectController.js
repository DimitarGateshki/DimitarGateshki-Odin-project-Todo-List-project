
class Project{
    constructor(name,description){
    this.name=name;
    this.description=description;
    this.tasks=[];
    };

    addTask(taskName){
        let task=Task(taskName);
        this.tasks.push(task);
    };

    finishTask(taskName){
       this.tasks= this.tasks.filter((e)=>{
            e.name !== taskName;
        });
    };


    createElement(n){
        let main=document.getElementsByClassName('main')[0];

        let project=document.createElement('div');
        project.classList.add('project');
        project.setAttribute('id',this.name);


        let title=document.createElement('h3');
        title.classList.add('projectTitle');
        title.textContent=this.name;

        let description=document.createElement('p');
        description.classList.add('projectDescription');
        description.textContent=this.description;
    
        let button=document.createElement('button');
        button.textContent='Add task';
        button.classList.add('addProjectBtn');

        button.addEventListener('click',()=>{
            document.getElementsByClassName('modal')[1].classList.add('active');
            document.getElementsByClassName('currentProjectName')[0].textContent=this.name;
        });

        project.appendChild(title);
        project.appendChild(description);
        project.appendChild(button);

        main.appendChild(project);
        document.getElementsByClassName('modal')[0].classList.remove('active');

    }
    

}



class Task{

    constructor(name){
    this.name=name;
    };

    
};



export default Project;

