function dodaj(){
    let liczba = document.getElementById("liczba").innerText;
    //to int
    console.log(liczba);
    liczba = parseInt(liczba) + 1 ;
    console.log(liczba);
    //change dom element
    document.getElementById("liczba").innerText = liczba.toString();
    
}


//funkcja dodajaca lub usuwajaca kolor czerwony z elementu

function kolor(){

    let element = document.getElementById("liczba");
    // jesli kolor czcionki jest czerwony to zmien na czarny
    if (element.style.color == "red"){
        element.style.color = "black";
    }
    else{
        element.style.color = "red";
    }

}