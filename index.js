document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('noteInput');
    const saveNoteButton = document.getElementById('saveNote');
    const noteList = document.getElementById('noteList');

    // Função para carregar notas do armazenamento local
    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(note => {
            addNoteToList(note);
        });
    };

    // Função para adicionar uma nota à lista
    const addNoteToList = (note) => {
        const li = document.createElement('li');
        li.textContent = note;
        noteList.appendChild(li);
    };

    // Função para salvar a nota
    saveNoteButton.addEventListener('click', () => {
        const note = noteInput.value.trim();
        if (note) {
            addNoteToList(note);
            saveNoteToLocal(note);
            noteInput.value = '';
        }
    });

    // Função para salvar nota no armazenamento local
    const saveNoteToLocal = (note) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    };

    // Nota de exemplo
    const exampleNote = "Título: Reunião com a equipe\nData: 24/10/2024\nNota: Hoje, tivemos uma reunião com a equipe para discutir o progresso do projeto.";
    
    // Verifica se já existe a nota de exemplo no armazenamento
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (!notes.includes(exampleNote)) {
        saveNoteToLocal(exampleNote);
    }
    addNoteToList(exampleNote);

    // Carregar notas ao iniciar
    loadNotes();
});
