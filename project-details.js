let projects = [
    {
        id: "1",
        title: "My Portfolio Website",
        year: "2025",
        subtitle: "Web Portfolio – Front-End Development",
        role: "Front-End Developer / UI Designer",
        tools: "HTML, CSS, JavaScript, Figma, Git",
        description: `
            <p>Designed and developed a personal portfolio website to showcase my projects and skills.</p>
            <p>Created layouts in Figma with focus on user experience and clean design.</p>
            <p>Used HTML, CSS, and JavaScript to build a responsive, interactive site that works across browsers.</p>
            <p>Wrote clean, accessible code for easy updates and maintenance.</p>
            `,
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
        description:`
            <p>Created responsive skateboard animations for the main character, including:</p>
                <ul>
                    <li>Ollies</li>
                    <li>Flips</li>
                    <li>Grinds</li>
                    <li>Transitions</li>
                </ul>
            <p>Blended animations for smooth transitions and implemented them in Unreal Engine for real-time interaction.</p>
            `,
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
        description:`
            <p>Created a fully animated 3D character using a complete production pipeline:</p>
                <ul>
                    <li>Sculpting</li>
                    <li>Retopology</li>
                    <li>UV Mapping</li>
                    <li>Texturing</li>
                    <li>Rigging</li>
                    <li>Animation</li>
                </ul>
            <p>Collaborated with the team to integrate the character into Unreal Engine, ensuring visual consistency and real-time performance.</p>
            `,
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
        description:`
            <p>Animated multiple characters—including the chef, lobsters, and passengers—for a short film produced at Bellecour École (2020).</p>
            <p>Focused on expressive motion and character performance to enhance storytelling.</p>
            <p>Also contributed to:</p>
                <ul>
                    <li>Layout planning</li>
                    <li>Storyboarding</li>
                    <li>Performance clarity</li>
                    <li>Visual storytelling</li>
                </ul>
            `,
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
