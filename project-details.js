let projects = [
    {
        id: "1",
        title: "My Portfolio Website",
        year: "2025",
        subtitle: "Web Portfolio – Front-End Development",
        role: "Front-End Developer / UI Designer",
        tools: "HTML, CSS, JavaScript, Figma, Git",
        description:
            `Designed and developed a personal portfolio website<br>
        to showcase my projects and skills.<br><br>
        Created layouts in Figma<br>
        with focus on user experience and clean design.<br><br>
        Used HTML, CSS, and JavaScript<br> 
        to build a responsive, interactive site<br>
        that works across browsers.<br><br>
        Wrote clean, accessible code<br>
        for easy updates and maintenance.`,
        image: "images/logo01.png",
        video: "https://copeihsinoc.github.io/TP/",
        bgImage: "images/MyPortfolioWeb-bg.png"
    },
    {
        id: "2",
        title: "One Last Grind",
        year: "2024",
        subtitle: "Skateboarding Game – Character & Animation",
        role: "Character & Skateboarding Animator",
        tools: "Maya (Animation), Unreal Engine (In-Game Rendering)",
        description:
            `Created responsive skateboard animations for the main character, including:
            ．Ollies
            ．Flips
            ．Grinds
            ．Transitions
        Blended animations for smooth transitions and implemented them in Unreal Engine for real-time interaction.`,
        image: "images/on-last-grind02.png",
        video: "https://www.youtube.com/embed/INAOgAJLBmg",
        bgImage: "images/on-last-grind01.jpg"
    },
    {
        id: "3",
        title: "Invictus",
        year: "2024",
        subtitle: "Character Creation Project – Full 3D Pipeline",
        role: "3D Character Artist & Animator",
        tools: "Blender (Sculpting), Maya (Modeling, Rigging, Animation), Unreal Engine (In-Game Rendering)",
        description:
            `Created a fully animated 3D character using a complete production pipeline:<br>
        sculpting, retopology, UV mapping, texturing, rigging, and animation.<br><br>
        Collaborated with the team to integrate the character into Unreal Engine,<br>
        ensuring visual consistency and real-time performance.`,
        image: "images/invictus02.png",
        video: "https://sketchfab.com/models/680d19e4f89b41dcbe6ecbeff4ffbf0e/embed",
        bgImage: "images/invictus03.png"
    },
    {
        id: "4",
        title: "Fresh Lobster",
        year: "2020",
        subtitle: "3D Animated Short Film – Character Animation",
        role: "Character Animator",
        tools: "Maya (Animation, Rendering)",
        description:
            `Brought multiple characters to life—including the chef, lobsters,
        and passengers—through expressive animation for a short film produced at Bellecour École (2020).<br><br>
        Supported the production pipeline by contributing to layout and storyboarding, 
        focusing on performance clarity and visual storytelling.`,
        image: "images/fresh-lobster-05.png",
        video: "https://drive.google.com/file/d/1XfmKpJQGHOB6yRXPJ-EcqsOW9IuWQgTm/view?usp=drive_link",
        bgImage: "images/fresh-lobster02.jpg"
    },
];

//stores the string values from URL
let params = new URLSearchParams(window.location.search);
let projectId = params.get('id');

index = projects.findIndex(p => String(p.id) === projectId);

if (index === -1) index = 0; //if cant find return -1 then show the first one(index = 0


function updateProject() {
    let project = projects[index];

    document.getElementById('year').textContent = project.year;
    document.getElementById('title').textContent = project.title;
    document.getElementById('subtitle').textContent = project.subtitle;
    document.getElementById('role').textContent = project.role;
    document.getElementById('tools').textContent = project.tools;
    document.getElementById('description').innerHTML = project.description;
    document.getElementById('image').src = project.image;
    document.getElementById('image').alt = project.title;
    document.querySelector('.bg').style.backgroundImage = `url('${project.bgImage}')`;

    //click & open the links
    if (document.getElementById('videoBtn')) {
        document.getElementById('videoBtn').onclick = () => {
            window.open(project.video, '_blank');
        };
    }
}

//title action
function updateNewTitle() {
    //index-1 = prev. +length in case wont' be -1   % projects.length(back to last one)
    let prev = (index - 1 + projects.length) % projects.length;
    //index+1 = next if now is the last one =>% projects.length(next to the 0)
    let next = (index + 1) % projects.length;
    //add title
    document.getElementById('prevTitle').textContent = projects[prev].title;
    document.getElementById('nextTitle').textContent = projects[next].title;
}
//button action
function slidePrev() {
    index = (index - 1 + projects.length) % projects.length;
    updateProject();
    updateNewTitle();
}

function slideNext() {
    index = (index + 1) % projects.length;
    updateProject();
    updateNewTitle();
}

//call for update
document.addEventListener('DOMContentLoaded', ()=>{
    updateProject();
    updateNewTitle();

    document.querySelector('.btnPrev button').addEventListener('click', slidePrev);
    document.querySelector('.btnNext button').addEventListener('click', slideNext);
});
