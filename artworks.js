let artworks = [
    {
        category: "3d",
        id: "diorama-bread-truck",
        title: "Diorama-bread truck",
        mainImage: "images/diorama-bread-truck.jpg",
        description: `Designed and textured 3D models with precise UV mapping, 
        then imported and rendered them in Unity to achieve stunning visuals.`,
        details: [
            {label: "3D & UV Mapping & Textures",tool: "Maya & Substance Painter"},
            {label: "Rendered", tool: "Unity"}
        ],
    },
    {
        category: "3d",
        id: "kiki-bakery",
        title: "Kiki's bakery",
        mainImage: "images/kikis-bakery.jpg",
        gallery: [
            "images/kikis-bakery01.jpg",
            "images/kikis-bakery02.jpg"
        ],
        description: `Crafted stylized textures for Kiki's Bakery using Substance, 
        with precise UV mapping and 3D modeling in Blender. 
        Final renders were produced directly in Blender to capture the scene’s cozy atmosphere.`,
        details: [
            {label: "3D Modeling & UV Mapping" ,tool: "Blender"},
            {label: "Texturing" ,tool: "Substance Painter"},
            {label: "Rendering" ,tool: "Blender"},
            {label: "Post-production" ,tool: "Photoshop"}
        ],
    },
    {
        category: "3d",
        id: "tea-pet",
        title: "Tea Pet",
        mainImage: "images/tea-pet02.jpg",
        gallery: [
            "images/tea-pet01.jpg",
            "images/tea-pet03.jpg"
        ],
        description: `Created a 3D tea pet with three distinct texture styles, 
        highlighting material and surface variations.`,
        details: [
            {label: "Modeling & Retopology & UV Mapping" ,tool: "Maya"},
            {label: "Texturing & Rendering" ,tool: "Substance Painter"},
            {label: "Post-production" ,tool: "Photoshop"}
        ],
    },
    {
        category: "3d",
        id: "a-quirky-old-elf",
        title: "A quirky old elf",
        mainImage: "images/elf04.png",
        gallery: [
            "images/elf01.png",
            "images/elf02.png",
            "images/elf03.png"
        ],
        description: `Completed model retopology and UV mapping in Maya, 
        created textures and post-processed renders in Photoshop.`,
        details: [
            {label: "Modeling & Retopology & UV Mapping" ,tool: "Maya"},
            {label: "Texturing" ,tool:"Photoshop"},
            {label: "Rendering" ,tool:"Maya"},
            {label: "Post-production" ,tool:"Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "les-aventures-Oliver-Twist",
        title: "Les aventures D'Oliver Twist",
        mainImage: "images/oliver-twist.jpg",
        gallery: [
            "images/oliver-twist01.jpg"
        ],
        description: `An escape adventure game inspired by Oliver Twist, 
        where Oliver must evade villains against the backdrop of Big Ben within a time limit. 
        I designed the game menu and created the character design for Fagin.`,
        details: [
            {label: "Game Menu Design & Character Design" ,tool:"Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "martha-boddy-dream-home",
        title: "Martha Boddy's Dream Home",
        mainImage: "images/martha-boddy.jpg",
        gallery: [
            "images/martha-boddy01.jpg"
        ],
        description: `A former assassin turned reclusive hermit living in 
        a small cottage by the eerie bayous. An elderly woman battling alcoholism, 
        she spends her days hunting alligators and living in constant paranoia, 
        believing someone is out to kill her. 
        Passionate about Russian literature and history, 
        she keeps a weapon for protection and cares deeply for her pet cat.`,
        details: [
            {label: "Interior & Exterior Environment Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "dragon-slaver-aratorn",
        title: "Dragon Slaver ー Aratorn",
        mainImage: "images/aratorn.jpg",
        description: `I designed "Dragon Slaver – Aratorn" to have a fun, 
        lighthearted feel. Instead of looking like a typical cold, 
        ruthless dragon slayer, he wears simple, primitive clothes. 
        I also worked on making his pose dynamic and lively to bring him to life.`,
        details: [
            {label: "Character Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "camping-sunset",
        title: "A camping sunset",
        mainImage: "images/camping-sunset.jpg",
        description: `A sunset camping scene, 
        focusing on practicing color contrast between warm and cool tones.`,
        details: [
            {label: "Environment Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "photobashing",
        title: "Photobashing",
        mainImage: "images/photobashing.jpg",
        description: `Tried photobashing using beans, chili peppers, 
        and a slice of watermelon. It was a bit tricky fitting them all together, 
        but I gave it my best shot!`,
        details: [
            {label: "Fun Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "dream-of-the-lucky-cat",
        title: "Dream of the Lucky Cat",
        mainImage: "images/lucky-cat01.jpg",
        gallery: [
            "images/lucky-cat02.jpg",
            "images/lucky-cat03.jpg"
        ],
        description: `A homebody makes a wish at a lucky cat shrine 
        and suddenly turns into a cat after meeting one! 
        Freaked out, he runs off and ends up in Cat Utopia. 
        Then, just like that, he’s back to reality—
        dropping a gold coin his cat tries to catch.<br><br>
        
        He’s a middle schooler with chuunibyou, a big heart, 
        and totally obsessed with cats!`,
        details: [
            {label: "Storyboard & Character Design" ,tool: "Photoshop"}
        ]
    },
    {
        category: "concept",
        id: "the-purchase",
        title: "The Purchase",
        mainImage: "images/the-purchase01.jpg",
        gallery: [
            "images/the-purchase02.jpg",
            "images/the-purchase03.jpg"
        ],
        description: `A boy gets a mysterious doll as a gift. 
        One day, he’s playing with it when his mom walks by and looks in. 
        As she turns away, she spots a shadow that looks like a monster. 
        Shocked, she grabs the doll, but the boy holds on tight. 
        In the struggle, the doll rips apart and even sheds a tear, 
        while thunder rolls outside.<br><br>

        This doll showed up in my dream. 
        It’s super cute and pretty normal—except it has no eyeballs.`,
        details: [
            {label: "Storyboard & Character Design" ,tool:"Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "mixed-waters",
        title: "Mixed Waters",
        mainImage: "images/mixed-waters01.jpg",
        gallery: [
            "images/mixed-waters02.jpg"
        ],
        description: `A witch is looking for a black cat. 
        She spots it enter a café and follows. Asking the waiter about the cat, 
        she notices a white cat nearby. She smiles, 
        realizing the black cat is hiding in its shadow. 
        She decides to stop searching and focus on this one — he’s the one!<br><br>

        The character design was inspired by Japanese comedian Miyuki Torii, 
        who has the perfect mysterious vibe for a witch.`,
        details: [
            {label: "Storyboard & Character Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "marche-au-tissu",
        title: "Marché au Tissu",
        mainImage: "images/marche-au-tissu.jpg",
        gallery: [
        ],
        description: `Used mostly grayscale colors—still not perfect, but a good try!`,
        details: [
            {label: "Environment Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "takoyaki-shop",
        title: "たこ焼き屋",
        mainImage: "images/heyanotakoyaki.jpg",
        description: `I’m a big fan of takoyaki, so why not make it?`,
        details:[
            {label: "Environment Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "fungus-girl",
        title: "菌の少女",
        mainImage: "images/fungus-girl.jpg",
        description: `The final look wasn’t perfect, but I’m still totally digging the fungus vibes!`,
        details: [
            {label: "Environment & Character Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "concept",
        id: "texture",
        title: "Texture",
        mainImage: "images/texture01.jpg",
        gallery: [
            "images/texture02.jpg",
            "images/texture03.jpg"
        ],
        description: `Designed three textures—mur, ocean, and sakura. 
        It was pretty fun working in Photoshop, 
        trying to make some seamless (tileable) textures 
        that can repeat smoothly in all directions.`,
        details: [
            {label: "Texture Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "illustration",
        id: "silent-gaze",
        title: "Silent Gaze",
        mainImage: "images/silent-gaze02.jpg",
        gallery: [
            "images/silent-gaze01.jpg",
            "images/silent-gaze03.jpg"
        ],
        description: `A series of three images showing girls’ loneliness 
        through their eyes, with summer and red representing the flow of time 
        and fading moments.`,
        details: [
            {label: "Fun Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "illustration",
        id: "no-face",
        title: "No Face",
        mainImage: "images/no-face01.jpg",
        gallery: [
            "images/no-face02.jpg",
            "images/no-face03.jpg"
        ],
        description: `The NO FACE series shows lost love between couples, 
        capturing the beautiful fantasies of naive girls. 
        Each guy’s face is erased, symbolizing that the past can’t be recovered.`,
        details:[
            {label: "Fun Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "illustration",
        id: "cat",
        title: "貓",
        mainImage: "images/cat01.jpg",
        gallery: [
            "images/cat02.jpg",
            "images/cat03.jpg"
        ],
        description: `Just love cats — showing the simple connection between them and people.`,
        details: [
            {label: "Fun Design" ,tool: "Photoshop"}
        ],
    },
    {
        category: "illustration",
        id: "her",
        title: "彼女 Her",
        mainImage: "images/her01.jpg",
        gallery: [
            "images/her02.jpg",
            "images/her03.jpg"
        ],
        description: `The "Her" series shows girls' quiet strength — 
        eyes closed, refusing to face what’s in front of them.`,
        details: [
            {label: "Fun Design" ,tool: "Photoshop"}
        ],
    },
];


