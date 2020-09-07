const User = {
    users: findAll(),
    editIsEnabled: false,

    generateFirstCell(name) {
        const firstCell = document.createElement('td');
        const firstInput = document.createElement('input');
        firstInput.setAttribute('class', 'form-control user-table__user-name');
        firstInput.setAttribute('type', 'text');
        firstInput.setAttribute('name', 'userName');
        firstInput.disabled = true;
        firstInput.value=name;
        
        firstCell.appendChild(firstInput);
        
        return firstCell;

    },

    generateSecondCell(emailAddress) {
        const secondCell = document.createElement('td');
        const secondInput = document.createElement('input');
        secondInput.setAttribute('class', 'form-control user-table__user-email-address');
        secondInput.setAttribute('type', 'text');
        secondInput.setAttribute('name', 'userEmailAddress');
        secondInput.disabled = true;
        secondInput.value=emailAddress;
        // secondCell.textContent = emailAddress;
        secondCell.appendChild(secondInput);
        return secondCell;
    },

    generateThirdCell(address) {
        const thirdCell = document.createElement('td');
        const thirdInput = document.createElement('input');
        thirdInput.setAttribute('class', 'form-control user-table__user-address');
        thirdInput.setAttribute('type', 'text');
        thirdInput.setAttribute('name', 'userAddress');
        thirdInput.disabled = true;
        thirdInput.value=address;
    
        thirdCell.appendChild(thirdInput);

        return thirdCell;

    },

    generateFourthCell() {
        const fourthCell = document.createElement('td');

        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'btn btn-success d-none user-table__save-user');
        saveBtn.textContent = "Mentés";
        saveBtn.addEventListener('click', (event)=>{this.save(event)});
        fourthCell.appendChild(saveBtn);

        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'btn btn-primary user-table__edit-user');
        editBtn.textContent = "Szerkesztés";
        editBtn.addEventListener('click', (event)=>{this.edit(event)});
        fourthCell.appendChild(editBtn);

        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('class', 'btn btn-danger user-table__delete-user');
        removeBtn.textContent = "Törlés";
        removeBtn.addEventListener('click', (event) => {this.remove(event)});
        fourthCell.appendChild(removeBtn);
        return fourthCell;

    },

    addNewRow(user) {
        const tblBody = document.querySelector(".user-table__data");
        const newRow = document.createElement('tr');

        newRow.setAttribute('data-user-id', user.id);
        newRow.appendChild(this.generateFirstCell(user.name));
        newRow.appendChild(this.generateSecondCell(user.emailAddress));
        newRow.appendChild(this.generateThirdCell(user.address));
        newRow.appendChild(this.generateFourthCell());
        tblBody.appendChild(newRow);

    },

    init() {
        this.showAll();
        this.create();

    },

    showAll() {

        for (let i = 0; i < this.users.length; i += 1) {
            this.addNewRow(this.users[i]);
        }
    },

    

    create() {
      document.querySelector('.user-form__save-user')
      .addEventListener('click', () => {
          this.store(); });
    },

    getNewUserDatas(id) {
        return {
            id: id + 1,
            name:document.querySelector('.user-form__user-name').value,
            emailAddress: document.querySelector('.user-form__user-email-address').value,
            address:document.querySelector('.user-form__user-address').value,
        };
    },

    getMaxIdNumber() {
        let id = 0;
        for ( let i = 0; i < this.users.length; i += 1) {
            if (this.users[i].id > id) {
                id = this.users[i].id;
            }
        }
        return id;
    },

    store() {
        const id = this.getMaxIdNumber();
        const user = this.getNewUserDatas(id);
        this.users.push(user);
        this.addNewRow(user);
        document.querySelector('.user-form').reset();
        console.log(document.querySelector('.user-form').reset());
        return this.users;
    }, 

    toggleClass(element,className) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    },

    
    remove(event) {
        if (this.editIsEnabled==false && confirm("Biztos törli?")) 
        {
            const id=this.getUserId(event);
            for (let i=0; i<this.users.length; i++){
                if (this.users[i].id = id){
                    this.users.splice(i,1);
                    
                }
                
            }
            document.querySelector(`tr[data-user-id="${id}"]`).remove();
            
        }
     },

    getUserId(event){
        let id = event.currentTarget.parentElement.parentElement.getAttribute('data-user-id');
        return parseInt(id, 10);
    },

    getUserIndex(id){
        for (let i=0; i<this.users.length; i +=1) {
            if (this.users[i].id === id) {   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!4
                return i;
            }
        }
        return null;
    },



   edit(event){
    if (this.editIsEnabled == false && confirm("Biztos módosítja?")) {
        const id = this.getUserId(event);
        this.editIsEnabled = true;
        this.editorSave(id);
            }
    },

    editorSave(id) {
        const rowSelector = `tr[data-user-id="${id}"]`;
        const saveBtn = document.querySelector(`${rowSelector} .user-table__save-user`); 
        const editBtn = document.querySelector(`tr[data-user-id="${id}"] .user-table__edit-user`);
        console.log(saveBtn);
        const userInputs = Array.from(document.querySelectorAll(`${rowSelector} input`));
        this.toggleClass(saveBtn, 'd-none');
        this.toggleClass(editBtn, 'd-none');
        for (let i=0; i<userInputs.length; i++){
            userInputs[i].disabled = false;
        }
        

    },
  
    save(event) {
        const id = this.getUserId(event);
        const index = this.getUserIndex(id);
        const oldUser = this.users[index];
        const user = this.getUpdatedUserDatas(id);
        if (confirm("Biztos menti az új adatokat?")) {
            this.users[index] = user;
        } else {
            this.undoInputContents(id, oldUser);
        }
        this.editIsEnabled = false;
        this.editorSave(id);

        return this.users;
        

    },

    getUpdatedUserDatas(id){
        const rowSelector = `tr[data-user-id="${id}"]`;
        let newUser = {
            id,
            name: document.querySelector(`tr[data-user-id="${id}"] .user-table__user-name`).value,
            emailAddress: document.querySelector(`${rowSelector} .user-table__user-email-address`).value,
            address: document.querySelector(`${rowSelector} .user-table__user-address`).value,
        };
        return newUser;
    },

    undoInputContents(id, user) {
        const rowSelector = `tr[data-user-id="${id}"]`;
        const userInputs = Array.from(document.querySelector(`${rowSelector} input`));
        userInputs[0].value = user.name;
        userInputs[1].value = user.emailAddress;
        userInputs[2].value = user.address;
    }

}

User.init();