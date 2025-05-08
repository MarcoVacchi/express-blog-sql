const posts = require("../data/posts");


//index, show, destroy;

// function index(req, res) {

//     res.json(posts);
    
// }; // primo index prima del bonus;


function show(req, res) {

    const currentId = Number(req.params.id);
      
    const currentPost = posts.find(posts => posts.id === currentId);
      
    currentPost ? res.json(currentPost) 
                : res.status(404).json({
                      error : "Id non trovato",
                      message: "Inserisci un id valido!"
                    });
};


function destroy(req, res) {
    const currentId = Number(req.params.id);
      
    const currentPost = posts.findIndex(posts => posts.id === currentId);

    if(currentPost !== -1) {
         posts.splice(currentPost,1)
         res.status(204).json()
        console.log(posts);
    } else {
        res.status(404).json({
        error : "Id non trovato",
        message : "Inserisci un Id valido!"
  })}
                        
};


// bonus;
function index(req, res) {
   // ciao();
    if(req.query.tags){
        console.log("filtro per ingrediente");

        let filteredPosts = posts.filter(posts => posts.tags.includes(req.query.tags.toString()))
        return res.json(filteredPosts); 
      }
      res.json(posts); 
      // res.send("Lista dei post"); 
};

// per aggiungere un oggetto (post);

// function store(res, req) {

//   // const newId = posts[posts.length-1].id + 1;
//   // const { title, content, image, tags } = req.body;
//   console.log("creazione di un nuovo")
//   // const newPosts = {
//   //   id: newId,
//   //   title: req.body.title,
//   //   content: req.body.content,
//   //   image: req.body.image,
//   //   tags: req.body.tags // HO PERSO UN'ORA PERCHE NON MI SONO ACCORTO CHE AVEVO INVERTITO I PARAMETRI :)
//   // }

//   // posts.push(newPosts);
//   // res.json(posts);

 
// };

function store(req, res) {
  // console.log(req.body);
  // res.json(req.body.title)
  const newId = posts[posts.length-1].id+1;
  // const newPosts = {
  //   id: newId,
  //   title: req.body.title,
  //   content: req.body.content,
  //   image: req.body.image,
  //   tags: req.body.tags
  // }
  const { title, content, image, tags } = req.body;
  const newPosts = {
    newId,
    title,
    content,
    image,
    tags
  }

  posts.push(newPosts);
  res.json(posts);
}

function update(req, res) {
  const currentId = Number(req.params.id);
      
  const currentPost = posts.find(posts => posts.id === currentId);
  currentPost.title = req.body.title;
  currentPost.content = req.body.content;
  currentPost.image = req.body.image;
  currentPost.tags = req.body.tags;

  if(currentPost !== -1) {
    console.log(currentPost)
    res.json(currentPost)
  } else { res.status(204).json({
        status: 404,
        error: "invalid id",
        message: "inserisci un id valido"
  })
  };
}

// per aggiornare un oggetto già esistente (put);

// {index, show, store, update, modify, destroy};
module.exports = { index, show, destroy, store, update };


// {
    
//   "title": "nuovo dolce",
//   "content": "ciaoooooooooooooooo",
//   "image": "path-ss",
//   "tags": [
//           "dolce",
//           "ricetta"
//   ]
// }