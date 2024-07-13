const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
/*
//creo una funzione per la creazione dei post nel DOM
function createPosts(posts) {

    //recupero l'lelemento del dom che contiene i post
    let container = document.getElementById('post')

    posts.forEach((elem) => {
        container.innerHTML +=
        `
        <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${elem.author.image}" alt="${elem.author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${elem.author.name}</div>
                            <div class="post-meta__time">${elem.created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${elem.content}</div>
                <div class="post__image">
                    <img src="${elem.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${elem.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${elem.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
        `;
    });

}

//recupero tutti gli elementi che hanno la classe .post
const posting = document.querySelectorAll('post')

//eseguo la funzione per creare i post quando il documento è pronto
document.addEventListener(function() {
    createPosts(posts);
})
*/


//recupero l'lelemento del dom che contiene i post
let container = document.getElementById('post')

//utilizzando un ciclo for each, ciclo l'array dei post per poter sostituire il contenuto del div "post" del file index.html con una struttura html simile in cui però ho modificando pezzi sfruttando gli elementi delle proprietà dell'array post
posts.forEach((elem) => {
    container.innerHTML +=
    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${elem.author.image}" alt="${elem.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${elem.author.name}</div>
                        <div class="post-meta__time">${elem.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${elem.content}</div>
            <div class="post__image">
                <img src="${elem.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#${elem.id}" data-postid="${elem.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter${elem.id}" class="js-likes-counter">${elem.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
});

// creo una costante che comprenda tutti i div .js-like-button
const likeButton = document.querySelectorAll('.js-like-button')
console.log(likeButton);

// creo un array vuoto
const likeId = []

//utilizzo un ciclo forEach per aggiungere l'evento click ad ogni bottone 
likeButton.forEach((button) => {
    button.addEventListener("click", function() {
        // aggiungo la classe che mi permette di colorare il bottone
        button.classList.add('like-button--liked');
        // creo una costante che il valore dell'attributo data-postid che equivale ad un numero
        const dataPostId = button.getAttribute('data-postid');
        // creo una costante per recuperare il contatore in base al valore recuperate con dataPostId
        const counter = document.getElementById('like-counter'+dataPostId);
        // decido che SE l'array likeId NON contine il valore dataPostId può aggiungerlo
        if (!likeId.includes(dataPostId)) {
            likeId.push(dataPostId)
            //inotre il contenuto della costante counter aumenta di uno
            counter.innerHTML++
        }
    }) 
}) 

/*
//selezioni il bottone like
document.addEventListener(function () {
    const likeButton = document.getElementsByClassName("js-like-button")
    const likeCounter = document.getElementsByClassName("js-likes_counter")

    //aggiungo un secondo listener per l'evento click del bottone "like"
    likeButton.addEventListener("click", function() {
        //applico il toggle sul bottone liked
        likeButton.classList.toggle("liked");
        console.log(likeButton.classList);

        //verifico il valore corrente del contatore
        let count = parseInt(likeCounter.textContent);
        console.log(count);

        //incremento il contatore di like
        if (likeButton.classList.contains("liked")) {
            count += 1; //aumenta il contatore di 1
            console.log(count);
        }

        //aggiorno il test del contatore con il nuovo valore
        likeCounter.textContent = count;
    })
});
*/