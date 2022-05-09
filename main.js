var email = prompt("Scrivi la tua mail");
console.log(email);

var prova = [email]

var listpeople = ["mattepelle.mp@gmail.com, vvcbvcbvcvb, vgfhgf, hgfhgfhjghgbh, jhvhjvhj"];

for (let i=0; i< listpeople.length; i++) {
    console.log(listpeople[i]);
    if (prova = listpeople[i]) {
        document.getElementById("mailgiuste").innerHTML = ` la mail:${prova} è corretta`
    } else {
        document.getElementById("mailgiuste").innerHTML = ` la mail:${prova} è sbagliata`
    }
}



