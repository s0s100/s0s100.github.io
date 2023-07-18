jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });

    $('body').scrollspy({ 
        target: '.fixed-side-navbar',
        offset: 200
    });
      
      // smoothscroll on sidenav click
    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
    })

    var owl = $("#owl-testimonials");
      owl.owlCarousel({
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : true // itemsMobile disabled - inherit from itemsTablet option
    });
});


const portfolioData = [
  {
    title: 'Multiverse rift',
    description:
      'Become a hero and conquer challenging procedurally generated levels in a 2D platformer style, where each attempt offers a unique experience. Embark on an epic 2D platformer adventure in a dynamically generated world of endless possibilities! In Epic Runner, every run is a unique experience as you explore thrilling locations and face challenging obstacles and bosses.',
    technologies: ['Unity', 'C#', 'GLSL'],
    image: 'img/gifs/Multiverse rift.gif',
    appStore: 'https://apps.apple.com/us/app/multiverse-rift/id6450510965',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.IvanWizardovsstudio.MultiverseRift'
  },

  {
    title: 'Graphics engine',
    description:
      'Custom graphics rendering engine utilizing GPU to process objects on the screen. The main idea is to implement multiple elements in combination with light and shadows.',
    technologies: ['C++', 'OpenGL', 'GLSL'],
    image: 'img/gifs/Final project showcase.gif',
    githubLink: 'https://github.com/s0s100/Final-Project'
  },

  {
    title: 'Mandelbrot & Julia sets',
    description:
      'After being inspired by fractal visualizers I have made my own using OpenGL by solving a few equations with imaginary numbers.',
    technologies: ['C++', 'OpenGL', 'GLSL'],
    image: 'img/gifs/Mandelbrot showcase.gif',
    githubLink: 'https://github.com/s0s100/FractalShader'
  },
  {
    title: 'Conway\'s Game of Life',
    description:
      'Interactive real-time mathematical life simulator.',
    technologies: ['Java'],
    image: 'img/gifs/GameOfLife showcase.gif',
    githubLink: 'https://github.com/s0s100/Conways-Game-of-Life'
  },
  {
    title: 'Mobile game',
    description:
      '2D Tower Defence project written with C# with Unity engine.',
    technologies: ['C#', 'Unity engine'],
    image: 'img/gifs/Mobile game showcase.gif'
  },
  {
    title: 'Voxel reader/renderer',
    description:
      'Computer graphics project with voxel reading for and displaying it in slice, different opacity, and 3D rendering with implemented light using CPU.',
    technologies: ['Java'],
    image: 'img/gifs/Voxel renderer.gif'
  }, 
  {
    title: 'Pacman project',
    description:
      'My first project with UI with text level editor, interface and simple enemy AI.',
    technologies: ['Pascal'],
    image: 'img/gifs/Pacman showcase.gif'
  }
  // Add more portfolio items as needed
];

const container = document.getElementById('portfolio-container');

portfolioData.forEach(item => {
  const row = document.createElement('div');
  row.classList.add('row', 'project', 'proj'); // Apply necessary CSS classes

  const colLeft = document.createElement('div');
  colLeft.classList.add('col-md-8', 'text-center');
  row.appendChild(colLeft);

  const title = document.createElement('h3');
  title.textContent = item.title;
  colLeft.appendChild(title);

  const projectInfo = document.createElement('div');
  projectInfo.classList.add('project-info');
  projectInfo.textContent = item.description + ' ';
  colLeft.appendChild(projectInfo);

  const technologies = document.createElement('x');
  technologies.textContent = item.technologies.join(' / ');
  projectInfo.appendChild(document.createElement('br'));
  projectInfo.appendChild(technologies);

  projectInfo.appendChild(document.createElement('br'));

  if (item.githubLink) {
    const gitLink = document.createElement('a');
    gitLink.classList.add('git-link');
    gitLink.href = item.githubLink;
    gitLink.innerHTML = '<i class="fab fa-github"></i> Git page';
    
    projectInfo.appendChild(gitLink);
  }

  if (item.appStore) {
    const gitLink = document.createElement('a');
    gitLink.classList.add('git-link');
    gitLink.href = item.appStore;
    gitLink.innerHTML = '<i class="fa-brands fa-apple"></i> App store    ';
    
    projectInfo.appendChild(gitLink);
  }

  if (item.googlePlay) {
    const gitLink = document.createElement('a');
    gitLink.classList.add('git-link');
    gitLink.href = item.googlePlay;
    gitLink.innerHTML = '<i class="fa-brands fa-android"></i> Google play';
    
    projectInfo.appendChild(gitLink);
  }  

  const colRight = document.createElement('div');
  colRight.classList.add('col-md-4');
  row.appendChild(colRight);

  const image = document.createElement('img');
  image.classList.add('project-gif');
  image.src = item.image;
  image.alt = '';
  colRight.appendChild(image);

  container.appendChild(row);
});