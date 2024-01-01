
// In the below code. We are fetching the button through their id using query selector.
const addButton=document.querySelector('#add');

//Add the click event for adding the new note.
addButton.addEventListener('click',()=>addNewNote());

const addNewNote=(text='')=> {
//Yaha par hamne div tag ko banakar note variable mai store kar liyea.
 const note=document.createElement('div');
 //To yaha hamne uski class ka naam note rakh diya.
 note.classList.add('note');
 // yha maine html data banaya us div ke andar uppend karne ke liye.
 const htmlData = `<div class="operation tools">
 <button class="edit"><i class="fas fa-edit"></i></button>
 <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text ? " ": "hidden"}"></div>
<textarea class="${text ? "hidden" :""}"></textarea>`;
note.insertAdjacentHTML('afterBegin',htmlData);

//Getting The Refrence
const editButton =note.querySelector('.edit');
const delButton =note.querySelector('.delete');
const mainDiv =note.querySelector('.main');
const textarea =note.querySelector('textarea');

//delete the node
delButton.addEventListener('click',()=>{
    note.remove();
    updateLSData();
});

//Function for creating the new element.
const updateLSData = (() => {
    const textarea = document.querySelectorAll('textarea');
    const notes=[];
    console.log(notes);
    textarea.forEach((note)=> {
        return notes.push(note.value);
    })
    localStorage.setItem('notes', JSON.stringify(notes));
});

//toggle using edit button
textarea.value=text;
mainDiv.innerHTML=text;
editButton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
})

//textarea par event laga rakha hai.
textarea.addEventListener('change',(event)=>{
const value = event.target.value;
mainDiv.innerHTML=value;
updateLSData();
})
document.body.appendChild(note);
}

 //GETTING DATA BACK FROM STORAGE
const notes=JSON.parse(localStorage.getItem('notes'));
console.log(notes);
if(notes){ notes.forEach((note)=>addNewNote(note))};