const books = require('../models/library');

const libraryController = {};

libraryController.index = (req, res, next) => {
    books.getAll()
    .then((books) => {
        res.json({
            message: 'ok',
            data: { books },
        });
    })
    .catch(next);
};

libraryController.show = (req, res, next) => {
    books.getById(req.params.id)
    .then((books) => {
        res.json({
        message: 'ok',
        data: { message },
    });
    })
    .catch(next);
}

libraryController.create = (req, res, next) => {
    new books({
        title: req.body.title,
        description: req.body.description,
        out: req.body.out,
        image: req.body.image,
    })

    libraryController.update = (req, res, next) => {
         books.getById(req.params.id)
            .then((books) => 
            books.update({
                title:req.body.title,
                description: req.body.description,
                out: req.body.out,
                image: req.body.image,
            })
            )
            .then((books) => {
                res.json({
                    message: 'Book updated successfully!',
                    data: { books },
                });
            })
            .catch(next);      
    };
};

    libraryController.delete = (req, res, next) => {
        books.getById(req.params.id)
        .then((books) => books.delete())
        .then(() => {
            res.json({ 
                message: 'book deleted!',
            });
        })
        .catch(next);
    }

    module.exports = libraryController;