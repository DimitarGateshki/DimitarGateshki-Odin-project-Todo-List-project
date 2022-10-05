import  Project  from "./projectController"; 


function projectPopUpGenerator(){
    const modal=document.createElement('div');
    modal.classList.add('modal');

    const form=document.createElement('form');
    form.classList.add('addNewProject');

    const title=document.createElement('input');
    title.setAttribute('type','text');
    title.setAttribute('id','nameInput');
    title.setAttribute('placeholder','Project name');

    const description=document.createElement('input');
    description.setAttribute('type','text');
    description.setAttribute('id','descriptionInput');
    description.setAttribute('placeholder','Project description');

    const error=document.createElement('p');
    p.classList.add('error');

    const button=document.createElement('button');
    button.classList.add('btnSubmit');
    button.setAttribute('type','submit');
    button.textContent="Add project";
    button.addEventListener(('click'),buildProject);

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(error);
    form.appendChild(button);

    modal.appendChild(form);

    return modal;
}

function buildProject(){
    let title= document.getElementById('nameInput').value;
    let description=document.getElementById('descriptionInput').value;

    let project=new Project(title,description);
    project.createElement();
    

    
}



function addModal(){
    document.getElementById('container').appendChild(projectPopUpGenerator());


}

function loadPopUp(){
    document.getElementsByClassName('modal')[0].classList.add('active');
}


export { addModal, loadPopUp};