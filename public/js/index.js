document.addEventListener("DOMContentLoaded", () => {
    //DOMContentLoaded la cai de khi ma DOM duoc load len, thi no se lam gi.
    //O ben jquery thi la $.document.ready hoac $(function())

    //goi render vao day
    //
    render();
});

let users = [
    {
        name: "Phong Tran",
        email: "tranphongbb@outlook.com",
    },
    {
        name: "Thao Pham",
        email: "pphuongthao22@gmail.com",
    },
];

function render() {
    //loop qua cai list object
    for (let i = 0; i < users.length; i++) {
        //cai nay don gian ma =))\
        let user = users[i];
        let htmlString =
            "<tr>" +
            "<td>" +
            user.name +
            "</td>" +
            "<td>" +
            user.email +
            "</td>" +
            "<td><button class='ui negative basic button' onclick='deleteUser(" +
            i +
            ")'>Delete</button></td>";
        ("</tr>");

        document.getElementById("dataTable").insertAdjacentHTML("beforeend", htmlString);
    }
}

function addNewUser() {
    //lay value tu o input id name
    let name = document.getElementById("name").value;
    //lay value tu o input email
    let email = document.getElementById("email").value;

    //tao 1 object user moi, vi key va value cua chung no nhu nhau nen viet kieu nay luon nhe, tuc la:
    //name: name => name thoi dc roi
    let newUser = {
        name,
        email,
    };

    //tao xong object moi nhe
    //add no vao list o tren dau nhe

    users.push(newUser);

    //next, render lai list user, bang cach goi ham render thoi
    //vi phai render lai toan bo list, nen can phai clear cai body cua selector cu di, render cai moi
    document.getElementById("dataTable").innerHTML = "";
    render();
}

function deleteUser(index) {
    users.splice(index, 1);

    document.getElementById("dataTable").innerHTML = "";
    render();
}



const app = new Vue({
    //mock up
    el: '#app',
    //initial cai data, nhu cach minh tao 1 list object nhu o tren nhe
    data: {
        users: [
            {
                name: 'Phong Tran',
                email: 'tranphongbb@outlook.com'
            },
            {
                name: 'Ha Dam',
                email: 'abc@gmail.com'
            }
        ],
        name: 'Hoac neu toi thich co du lieu khoi tao thi sao?',
        email: ''
    },
    methods: {
        addNewUser() {
            let newUser = {
                name: this.name,
                email: this.email
            };

            this.users.push(newUser);
        },
        deleteUser(index) {
            this.users.splice(index, 1);
        }
    }
})




