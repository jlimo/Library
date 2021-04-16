const db = require('../db/config');

class Movie {
    constructor({ id, title, author, description, genre, out}) {
        this.id = id || null;
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.out = out;
    }

    static getAll() {
        return db.manyOrNone('SELECT * FROM books ORDER BY id ASC')
        .then((books) => books.map((books) => new this(books)));
    }

    static getById(id) {
        return db
        .oneOrNone('SELECT * FROM books WHERE id = $1', [id])
        .then ((books) => {
            if(books) return new this(books);
            throw new Error(`Book ${id} not found`);
        });
    }

    save() {
        return db
        .one(
            `INSERT INTO books
            (title, description, genre, out)
            VALUES ($/title/, $description/, $/genre/, $/out/)
            RETURNING *`,
            this
        )
        .then((books) => Object.assign(this, books));
    }

    update(changes) {
        Object.assign(this, changes);
        return db
        .one(
            `UPDATE books SET 
            title = $/title/,
            description = $/description/,
            genre = $/genre/
            out = $/out/
            RETURNING *`,
            this
        )
        .then((books) => Object.assign(this, books));
    }

    delete() {
        return db.none('DELETE FROM books WHERE id = $1', this.id);
    }
}

module.exports = books;