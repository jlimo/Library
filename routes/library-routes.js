const express = require('express');
const libraryRoutes = express.Router();

const libraryController = require('../controllers/library-controller');

libraryRoutes.get('/', libraryController.index);
libraryRoutes.post('/', libraryController.create);

libraryRoutes.get('/:id', libraryController.show);
libraryRoutes.put('/:id', libraryController.update);
libraryRoutes.delete('/:id', libraryController.delete);

module.exports = libraryRoutes;