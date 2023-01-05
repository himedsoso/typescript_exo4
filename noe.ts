interface AnimauxInterface {
    pattes : number;
    couleur : string;
}


class Animaux implements AnimauxInterface{
    pattes : number;
    couleur : string;

    constructor(pattes : string, couleur : string){
        this.pattes = pattes;
        this.couleur = couleur;
    }
}

class Chats extends Animaux{

}

class ChatChartreux extends Chats {

}

class ChatEuropeen extends Chats{

}

class ChienTerreNeuve extends Chiens{

}

class Oiseaux extends Animaux{

}

class Merle extends Oiseaux{

}

class Poissons extends Animaux{

}
class Thon extends Animaux{

}
class Requin extends Poissons{

}
class Asticot extends Animaux {

}
////////// ACTIONS ///////////


function photo (animal : Animaux) {
    console.log("dis cheese");
}

function miaule(chat : chats){
    console.log("miaouuuu");
}

function aboie(chien : chiens){
    console.log("wouf");
}

function voler(oiseaux : Oiseaux){
    console.log("voooole");
}

function nager(poisson : Poissons){
    console.log("naaage");

}
function caresser(animal : Animaux){

    if(animal.pattes === 4){

        console.log("caresse");
    }else {
        console.log("pas le droit de caresser");
   

} 
}

function nourrir(animal : Animaux){
    if(animal.couleur === "noir"){
        console.log("bon app");
    } else {
        console.log("pas bon app");
    }
}

const rex = new ChienTerreNeuve(4, "noir");
const bob = new Thon(0, "bleu");


caresser(bob);
nourrir(bob);
