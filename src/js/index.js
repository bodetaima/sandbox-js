import "../css/index.css";

let users = [
    {
        name: "Phong Tran",
        email: "tranphongbb@outlook.com",
    },
    {
        name: "Minh Pham",
        email: "pquangminh@gmail.com",
    },
];

let user = {
    name: "",
    email: "",
};

document.addEventListener("DOMContentLoaded", () => {
    render();
});

function render() {
    users.map((user, index) => {
        let renderString =
            "<tr>" +
            "<td class='px-4 py-2 border'>" +
            user.name +
            "</td>" +
            "<td class='px-4 py-2 border'>" +
            user.email +
            "</td>" +
            "<td class='px-4 py-2 border'>" +
            "<button class='bg-red-500 text-white rounded hover:bg-white hover:text-red-500 hover:border-red-500 border px-4 py-2' onclick='deleteUser(" +
            index +
            ")'>" +
            "Delete" +
            "</button>" +
            "</td>" +
            "</tr>";
        return document.getElementById("datatable").insertAdjacentHTML("beforeend", renderString);
    });
}

function handleInput(e) {
    let value = e.target.value;
    user = {
        ...user,
        [e.target.name]: value,
    };
}
window.handleInput = handleInput;

function saveNewUser() {
    if (user.name !== "" && user.email !== "") {
        users.push(user);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        user = {
            name: "",
            email: "",
        };
        document.getElementById("datatable").innerHTML = "";
        render();
    }
}
window.saveNewUser = saveNewUser;

function deleteUser(index) {
    users.splice(index, 1);
    document.getElementById("datatable").innerHTML = "";
    render();
}
window.deleteUser = deleteUser;
