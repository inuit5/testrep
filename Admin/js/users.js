const User = {
    users: findAll(),
    editIsEnabled: false,

    generateFirstCell(name) {
        const firstCell = document.createElement('td');
        firstCell.textContent = name;
        return firstCell;

    },

    generateSecondCell(emailAddress) {
        const secondCell = document.createElement('td');
        secondCell.textContent = emailAddress;
        return secondCell;
    },

    generateThirdCell(address) {
        const thirdCell = document.createElement('td');
        thirdCell.textContent = address;
        return thirdCell;

    },

    generateFourthCell() {
        const fourthCell = document.createElement('td');

        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'btn btn-success d-none user-table__save-user');
        saveBtn.textContent = "Mentés";
        //saveBtn.addEventListener('click', (event)=>{this.save(event)});
        fourthCell.appendChild(saveBtn);

        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'btn btn-primary user-table__edit-user');
        editBtn.textContent = "Szerkesztés";
        // editBtn.addEventListener('click', (event)=>{this.edit(event)});
        fourthCell.appendChild(editBtn);

        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'btn btn-danger user-table__delete-user');
        removeBtn.textContent = "Törlés";
       // removeBtn.addEventListener('click', (event) => { this.remove(event) });
        fourthCell.appendChild(removeBtn);
        return fourthCell;

    },

    addNewRow(user) {
        const tblBody = document.querySelector(".user-table__data");
        const newRow = document.createElement('tr');

        // newRow.setAttribute();
        newRow.appendChild(this.generateFirstCell(user.name));
        newRow.appendChild(this.generateSecondCell(user.emailAddress));
        newRow.appendChild(this.generateThirdCell(user.address));
        newRow.appendChild(this.generateFourthCell());
        tblBody.appendChild(newRow);

    },


    showAll() {

        for (let i = 0; i < this.users.length; i += 1) {
            this.addNewRow(this.users[i]);
        }
    },


    init() {
        this.showAll();

    },


    
  /*   getUserID(event){
        let id = event.currentTarget.parentElement.parentElement.getAttribute('data-user-id');
        return parseInt(id);
    },


    remove(event) {
               if (this.editIsEnabled==false && confirm("Biztos törli?)) {
                   const currentId=this.getUserId(event);
                   for (let i=0; i<this.users.lenght; i++){
                       if (this.user[i].id == currentId){
                           this.users.splice(i,1);
                       }
                   }
                   document.QuerySelector('tr[data-user-id="${currentId}"]').remove();
               }
            },

    edit(event){
    if (this.editIsEnabled == false && confirm("Biztos módosítja?")) {
        const currentId = this.getUserId(event);
        this.editIsEnabled = 
            }
    }

    
   
  */

}

User.init();
