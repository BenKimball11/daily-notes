/* const searchTerm = 1 */

const notes = [
    {
        id: 1,
        subject: "objects",
        feeling: "better",
        timeSpent: "3 hours"
    },
    {
        id: 2,
        subject: "objects",
        feeling: "good.",
        timeSpent: "3 hours"
    }
]


const noteAboutToday ={
    id: 3,
    subject: "push",
    feeling: "better",
    timeSpent: "2 hours"
}

notes.push(noteAboutToday)


const dateCreated = Date()
const createNote = (note) => {
    
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    note.id = idForNewNote
    note.dateCreated = dateCreated


    notes.push(note)
}

// Create a new note object
const moreNewerNote = {
    subject: "Creating a new note",
    feeling: "okay",
    timeSpent: "1 hour"
}

// Specify object as argument for function
//         |
//         |
//         V
createNote(moreNewerNote)



const searchTerm = (feeling) => {
    for (const note of notes) {
        if (feeling === note.feeling) {
            console.log(note)
        }
    }
}


searchTerm("okay")




