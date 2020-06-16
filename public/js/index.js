document.addEventListener('DOMContentLoaded', () => {
    console.log('created');
    render();
    console.log('mounted');
})

let users = [
    {
        name: "Phong Tran",
        email: "tranphongbb@outlook.com"
    },
    {
        name: "Thao Pham",
        email: "pphuongthao22@gmail.com"
    }
];

if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify(users));
}

function render() {
    let storedUsers = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < storedUsers.length; i++) {
        let user = storedUsers[i];
        let table = "<tr>" +
            "<td>"+ user.name  +"</td>" +
            "<td>"+ user.email +"</td>" +
            "<td><button class='ui negative basic button' onclick='deleteUser("+ i +")'>Delete</button></td>" +
            "</tr>";
        document.getElementById('dataTable').insertAdjacentHTML('beforeend', table);
    }
}

function addNewUser() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let newUser = {
        name,
        email
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('dataTable').innerHTML = '';
    render();
}

function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('dataTable').innerHTML = '';
    render();
}
