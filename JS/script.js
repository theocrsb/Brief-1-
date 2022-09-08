// code a copier 4 fois pour 4 liste a cacher
// creation des variables avec let ... = doc ect 
let zoneaclique = document.getElementById("zoneaclique");
let listearetirer = document.getElementById("listearetirer");

// fonction click sur une zone definie
zoneaclique.addEventListener("click", () => {
    if (getComputedStyle(listearetirer).display != "none") {
        listearetirer.style.display = "none";
    } else {
        listearetirer.style.display = "flex";
    }
})
// 2
let zoneaclique2 = document.getElementById("zoneaclique2");
let listearetirer2 = document.getElementById("listearetirer2");


zoneaclique2.addEventListener("click", () => {
    if (getComputedStyle(listearetirer2).display != "none") {
        listearetirer2.style.display = "none";
    } else {
        listearetirer2.style.display = "flex";
    }
})
// 3
let zoneaclique3 = document.getElementById("zoneaclique3");
let listearetirer3 = document.getElementById("listearetirer3");


zoneaclique3.addEventListener("click", () => {
    if (getComputedStyle(listearetirer3).display != "none") {
        listearetirer3.style.display = "none";
    } else {
        listearetirer3.style.display = "flex";
    }
})
// 4
let zoneaclique4 = document.getElementById("zoneaclique4");
let listearetirer4 = document.getElementById("listearetirer4");


zoneaclique4.addEventListener("click", () => {
    if (getComputedStyle(listearetirer4).display != "none") {
        listearetirer4.style.display = "none";
    } else {
        listearetirer4.style.display = "flex";
    }
})
// fin des fonctions JS pour cacher les listes
