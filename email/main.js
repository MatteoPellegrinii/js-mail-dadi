// const email = prompt("Scrivi la tua mail");
// console.log(email);

function myFunction() {
    let mailvera = document.getElementById("email").value;
    console.log(mailvera);

    const listpeople = ["mattepelle.mp@gmail.com", "vvcbvcbvcvb", "vgfhgf", "hgfhgfhjghgbh", "jhvhjvhj",];
    let check = false;


    for (let i=0; i< listpeople.length; i++) {
        console.log(listpeople[i]);
    
        if (mailvera == listpeople[i]) {
            check = true;
           
        }
    } 
    if (check == true) {
        document.getElementById("mailgiuste").innerHTML = ` la mail: ${mailvera} è corretta`;
    }
    else {
        document.getElementById("mailgiuste").innerHTML = ` la mail: ${mailvera} è sbagliata`;
    }
}











