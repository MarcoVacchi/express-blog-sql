// Importiamo il file di connessione al database
const posts = require('../data/blog');
// Index
function index(req, res) {
  // prepariamo la query
  const sql = 'SELECT * FROM posts';
  // eseguiamo la query!
  posts.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    res.json(results);
  })
};

function destroy(req, res) {
  // recuperiamo l'id dall' URL
  const { id } = req.params;
  //Eliminiamo la pizza dal menu
  posts.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: 'Failed to delete pizza' });
    res.sendStatus(204)
  })
};

function show(req, res) {
  // recuperiamo l'id dall' URL
  const id = req.params.id
  const sql = 'SELECT * FROM posts WHERE id = ?';
  posts.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    if (results.length === 0) return res.status(404).json({ error: 'Pizza not found' });
    res.json(results[0]);
  });
}

// function show(req, res) {

//   const currentId = Number(req.params.id);

//   const currentPost = posts.find(posts => posts.id === currentId);

//   currentPost ? res.json(currentPost)
//     : res.status(404).json({
//       error: "Id non trovato",
//       message: "Inserisci un id valido!"
//     });
// };


// function destroy(req, res) {
//   const currentId = Number(req.params.id);

//   const currentPost = posts.findIndex(posts => posts.id === currentId);

//   if (currentPost !== -1) {
//     posts.splice(currentPost, 1)
//     res.status(204).json()
//     console.log(posts);
//   } else {
//     res.status(404).json({
//       error: "Id non trovato",
//       message: "Inserisci un Id valido!"
//     })
//   }

// };

// function index(req, res) {
// // ciao();
// if (req.query.tags) {
//   console.log("filtro per ingrediente");

//   let filteredPosts = posts.filter(posts => posts.tags.includes(req.query.tags.toString()))
//   return res.json(filteredPosts);
// }
// res.json(posts);
// // res.send("Lista dei post"); 
// };

function store(req, res) {
  const newId = posts[posts.length - 1].id + 1;
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

  if (currentPost !== -1) {
    console.log(currentPost)
    res.json(currentPost)
  } else {
    res.status(204).json({
      status: 404,
      error: "invalid id",
      message: "inserisci un id valido"
    })
  };
}

module.exports = { index, show, destroy, store, update };
