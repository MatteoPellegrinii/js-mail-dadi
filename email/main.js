const email = prompt("Scrivi la tua mail");
console.log(email);

const listpeople = ["mattepelle.mp@gmail.com", "vvcbvcbvcvb", "vgfhgf", "hgfhgfhjghgbh", "jhvhjvhj",];

let check = false;

for (let i=0; i< listpeople.length; i++) {
    console.log(listpeople[i]);

    if (email == listpeople[i]) {
        check = true;
       
    }
} 
if (check == true) {
    document.getElementById("mailgiuste").innerHTML = ` la mail: ${email} è corretta`;
}
else {
    document.getElementById("mailgiuste").innerHTML = ` la mail: ${email} è sbagliata`;
}








