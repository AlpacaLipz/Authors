const AuthorsController = require('../controllers/authors.controller.js')



module.exports = (app) => {
    app.get('/api/authors', AuthorsController.getAll);
    app.post('/api/authors', AuthorsController.create);
    app.get('/api/authors/:id', AuthorsController.getOne);
    app.put('/api/authors/:id', AuthorsController.update);
    app.delete('/api/authors/:id', AuthorsController.delete);
};
