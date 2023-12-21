// // Write your code here!
// const element = document.createElement("div");
// document.body.append(element);

// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++){
//     const li = document.createElement("li");
//     li.textContent  = (i + 1).toString();
//     ul.append(li);
// }
// element.append(ul);
// document.querySelector('main').to.not.exist
let Main = document.querySelector('#main');


if (Main) {

    Main.remove();
} else {
    console.log ("not found")
}

// const h1 = document.createElement("h1");
// h1.textContent = "victory"
// document.head.append(h1);
// const newHeader = document.querySelector('h1#victory');






// function addH1WithId(id) {
//     let h1 = document.createElement("h1");
//     h1.textContent = "ELIAB KARAN is the champion";
//     h1.id = id;
//     document.head.append(h1);
// }

let newHeader;


function addH1WithId(id, Eliabkaran) {
    newHeader = document.createElement("h1");
    newHeader.textContent = Eliabkaran + " is the champion";
    newHeader.id = id;
    document.head.append(newHeader);
    return newHeader;
}


addH1WithId("victory", "YOUR-NAME");









