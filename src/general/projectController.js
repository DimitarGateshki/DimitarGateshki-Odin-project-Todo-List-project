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


    createElement(){
        let main=document.getElementsByClassName('main')[0];

        let project=document.createElement('div');
        project.classList.add('project');

        let title=document.createElement('h3');
        title.classList.add('projectTitle');
        title.textContent=this.name;

        let description=document.createElement('p');
        description.classList.add('projectDescription');
        description.textContent=this.description;

        let tasks=document.createElement('ul');
        tasks.classList.add('tasks');

        project.appendChild(title);
        project.appendChild(description);
        project.appendChild(tasks);

        main.appendChild(project);
    }
    

}

class Task{

    constructor(name){
    this.name=name;
    };

    
};



export default Project;

