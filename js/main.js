// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

let student = {
    nome : 'Matteo',
    cognome : 'De Marchi',
    eta : 31,
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (let key in student) {
    console.log(key + ' ' + student[key]);
}

// Creare un array di oggetti di studenti.

let Arr_obj_students = [
    {
        nome : 'Matteo',
        cognome : 'De Marchi',
        eta : 31,
    },

    {
        nome : 'Gigi',
        cognome : 'Biga',
        eta : 25,
    },

    {
        nome : 'Ajeje',
        cognome : 'Brazorf',
        eta : 40,
    }
]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (let i = 0; i < Arr_obj_students.length; i++) {
    console.log(Arr_obj_students[i]['nome'] + ' ' + Arr_obj_students[i]['cognome']);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

btn_new_student.addEventListener('click',

    function() {

        let new_student = {
            nome : prompt('Inserisci il NOME del nuovo studente'),
            cognome : prompt('Inserisci il COGNOME del nuovo studente'),
            eta : parseInt(prompt('Inserisci l'+ "' " + 'ETA' + "' " + 'del nuovo studente')),
        }

        console.log(new_student);
        Arr_obj_students.push(new_student);
        console.log(Arr_obj_students);
    } 
    
)
