function headerGenerator(className,text){
    const header=document.createElement('header');
    header.classList.add(className);

    const logo=document.createElement('h1');
    logo.textContent=text;

    header.appendChild(logo);

    return header;
}

function sidebarElGenerator(className,text){
    const btn=document.createElement('button');
    btn.classList.add(className);

    const span=document.createElement('span');
    span.textContent=text;

    btn.appendChild(span);
    btn.classList.add('tab');

    return btn;
}

function sidebarGenerator(className){
    const sidebar=document.createElement('div');

    sidebar.classList.add(className);

    const inbox=sidebarElGenerator('inbox', 'inbox');
    const today=sidebarElGenerator('today', 'Today');
    const thisWeek=sidebarElGenerator('thisWeek', 'This Week');

    const project=document.createElement('h2');
    project.classList.add('projectsTitle');

    const addProject=sidebarElGenerator('addProject','Add Project');

    sidebar.appendChild(inbox);
    sidebar.appendChild(today);
    sidebar.appendChild(thisWeek);
    sidebar.appendChild(project);
    sidebar.appendChild(addProject);

    return sidebar;
}

function mainGenerator(className){
    const main=document.createElement('main');
    main.setAttribute('id',className);
    main.classList.add(className);

    return main;
}

function footerGenerator(className,text){

    const footer=document.createElement('footer');
    footer.classList.add(className);

    const h3=document.createElement('h3');
    h3.textContent=text;

    footer.appendChild(h3);

    return footer;
}

function onLoad(){
    const content=document.getElementById('container');
    
    const header=headerGenerator('header','ToDo List');
    const sidebar=sidebarGenerator('sidebar');
    const main=mainGenerator('main');
    const footer=footerGenerator('footer','Copyright © 2022 DimitarGateshki');

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);
    content.appendChild(footer);
}

export default onLoad;