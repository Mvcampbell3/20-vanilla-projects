const projects = [
  {
    name: 'Intro!',
    link: null,
    description: 'This is the description for what this site will be'
  },
  {
    name: 'Form Validator',
    link: '/formValidator.html',
    description: 'This is a form validator project that uses HTML, CSS, and JS to control what inputs get sent to the backend'
  }
]

let displayProject = projects[0];

const project_holder = document.querySelector('.project-holder');
projects.forEach(project => {
  const proDiv = document.createElement('div');
  proDiv.classList = 'project';
  proDiv.setAttribute("data-project", project.name);

  proDiv.innerHTML = `
    <div class="project-name">${project.name}</div>
  `;

  proDiv.addEventListener('click', function() {
    displayProject = projects.filter(project => project.name === this.dataset.project)[0];
    console.log(displayProject)
    setDisplay();
  })

  project_holder.append(proDiv)
})

function setDisplay() {
  const project_name = displayProject.name;
  const project_description = displayProject.description;
  const project_link = displayProject.link;

  const title = document.querySelector('.project-name-section');
  const info = document.querySelector('.project-description-section');
  const link = document.querySelector('.project-link-section');

  title.textContent = project_name;
  info.textContent = project_description;
  link.setAttribute('href', project_link);

  if (!project_link) {
    link.style.visibility = 'hidden'
  } else {
    link.style.visibility = 'visible'

  }
}

setDisplay();