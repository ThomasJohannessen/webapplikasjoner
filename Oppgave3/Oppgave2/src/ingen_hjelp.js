import { users } from './util.js';

// TODO: Hent HTML #id med getElementById
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const filterBtn = document.getElementById('filter');
    const userPrint = document.getElementById('users');

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
    const createUserList = (users) => {
        userPrint.innerHTML = "";
        userPrint.innerHTML += '<li><div>Id</div><div>Navn</div><div>Alder</div></li>';
        
        for(const user of users) {
            userPrint.innerHTML += `<li><div>${user.id}</div><div>${user.name}</div><div>${user.age}</div></li>`;
        }
    };

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket

    const searchhandler = () => {
        const searchName = nameInput.value;

        if(searchName) {
            const searchResult = users.find((user) => user.name.toLowerCase() == searchName.toLowerCase());

        if(searchResult) {
            createUserList([searchResult]);
        }
        else{
            userPrint.innerHTML = `Fant ingen med navnet ${searchName}`;
        }
    }
    else{
        createUserList(users);
    }
    }

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret

    const filterHandler = () => {
        const filterValue = ageInput.value;

        if(filterValue && Number(filterValue)){
            const filterResult = users.filter((user) => user.age > filterValue);
            if(filterResult && filterResult.length > 0) {
                createUserList(filterResult);
            }
            else {
                userPrint.innerHTML = `Fant ingen over ${filterValue} år`;
            }
        }
        else {
            createUserList(users);
        }
    };

    const main = () =>{
        createUserList(users);
    };

    main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)

    nameInput.addEventListener('keyup', searchhandler);

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

    filterBtn.addEventListener('click', filterHandler);