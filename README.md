esercizio di oggi: *Social Posts*
nome repo: **js-social-posts
Descrizione**
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
*Milestone 1* - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed attraverso javascript.
*Milestone 2* - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
Numero push minimo: 10/12
P.S. Occhio al nome della repo! Ricordatevi che deve essere js-social-posts!
***BONUS*
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*Consigli del giorno:*
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

1 - recupero l'lelemento del dom che contiene i post;
1.2 - utilizzando un ciclo for each, ciclo l'array dei post per poter sostituire il contenuto del div "post" del file index.html con una struttura html simile in cui però ho modificando pezzi sfruttando gli elementi delle proprietà dell'array post:
1.1.1 - sostituisco il contenuto di src con l'elemento (dell'array di oggetti post) author.image;
1.1.2 - sostituisco il contenuto di di alt con l'elmento author.name del div .post-meta_icon;
1.1.3 - sostituisco il contenuto del div .post-meta_author con con l'elmento author.name;
1.1.4 - sostituisco il contenuto del div .post-meta_time con con l'elmento created;
1.1.5 - sostituisco il contenuto del div .post_text con con l'elmento content;
1.1.6 - sostituisco il contenuto di src del div .post_image  con con l'elmento media;
1.1.7 - sostituisco il contenuto di data-postid del div .like-button con con l'elmento id;
1.1.8 - sostituisco il contenuto del div .js-likes counter con con l'elmento likes;
2 - recuopero tutti gli elementi che hanno la classe post
3 - cancello l'interno del div .post poiché verrà sostitita da ciclo for each applicato all'array  di oggett post;