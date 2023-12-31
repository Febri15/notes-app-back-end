const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
 
        // response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
        // response.header('Allow-Insecure-Requests', '1');
        
        return response;
      }
    else {
        const response = h.response({
            status: 'fail',
            message: 'Catatan gagal ditambahkan',
          });
          response.code(500);
          return response;
    }
};

module.exports = { addNoteHandler };