const projects = [
  {
    name: 'Intro!',
    link: null,
    description: 'These are the projects I made while taking Brad Traversy\'s Udemy course "20 Vanilla HTML, CSS, JS Projects". I wanted to have a place to display them all. I highly recommend taking this course for yourself and following Brad Traversy on YouTube. He makes great content and is a great teacher!',
    img_url: './images/intro.jpg' 
  },
  {
    name: 'Form Validator',
    link: '/formValidator.html',
    description: 'This is the form validator project that kicked off the course. Uses great CSS and JS interaction for being able to control form-validation on the front end',
    img_url: './images/formValidator.png'
  },
  {
    name: 'Movie Booking',
    link:'/movieBooking.html',
    description: 'Using localStorage, we set up a movie seat picking app which saves the seats and movie you selected.',
    img_url: './images/movieBooking.png'
  },
  {
    name: 'Custom Movie Player',
    link: '/moviePlayer.html',
    description: 'Adds custom controls for play/pause/stop buttons, progess bar, and timestamp using CSS, JS, and the Video API.',
    img_url: './images/movieViewer.png'
  }
]

let displayProject = projects[0];

function setProjects() {
  const project_holder = document.querySelector('.project-holder');
  project_holder.innerHTML = '';
  projects.forEach(project => {
    const proDiv = document.createElement('div');
    proDiv.classList = displayProject === project ? 'project active': 'project';
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
}



function setDisplay() {
  const project_name = displayProject.name;
  const project_description = displayProject.description;
  const project_link = displayProject.link;
  const project_img = displayProject.img_url;

  const title = document.querySelector('.project-name-section');
  const info = document.querySelector('.project-description-section');
  const link = document.querySelector('.project-link-section');
  const img = document.querySelector('.project-img-section');

  title.textContent = project_name;
  info.textContent = project_description;
  
  if (!project_link) {
    link.style.visibility = 'hidden'
  } else {
    link.style.visibility = 'visible'
    link.setAttribute('href', project_link);

  }

  if (!project_img) {
    img.style.visibility = 'hidden';
    console.log('no img')
  } else {
    img.style.visibility = 'visible'
    img.setAttribute('src', project_img);
  }

  setProjects()
}

setDisplay();