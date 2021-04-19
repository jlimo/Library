const express = require('express');
const libraryRoutes = express.Router();

const libraryController = require('../controllers/library-controller');

libraryRoutes.get('/', libraryController.index);
libraryRoutes.post('/', libraryController.create);

libraryRoutes.get('/', libraryController.show);
libraryRoutes.put('/', libraryController.update);
libraryRoutes.delete('/', libraryController.delete);

module.exports = libraryRoutes;