var tipVehicul = prompt("Ce tip de vehicul aveti? (motocicleta, autoturism, autoutilitara, autobuz, tractor)");

while( tipVehicul === null || tipVehicul === "" ) {
    alert("Trebuie sa introduceti valorile dorite!");
    tipVehicul = prompt("Ce tip de vehicul aveti?");
}

var capacitateCilindrica = prompt("Care este capacitatea cilindrica a vehiculului?");

while( capacitateCilindrica === null || capacitateCilindrica === "" ) {
    alert("Trebuie sa introduceti valorile dorite!");
    capacitateCilindrica = prompt("Care este capacitatea cilindrica a vehiculului?");
}

switch(tipVehicul) {
    case 'motocicleta': if ( capacitateCilindrica < 1600 ) {
        console.log(`Pentru o motocicleta cu ${capacitateCilindrica}cm aveti de plata ${Math.ceil(capacitateCilindrica/200) * 8} lei pe an.`);
    } else {
        console.log(`Pentru o motocicleta cu ${capacitateCilindrica}cm aveti de plata ${Math.ceil(capacitateCilindrica/200) * 9} lei pe an.`);;
    }
    break;

    case 'autoturism': if ( capacitateCilindrica < 1600 ) {
        console.log(`Pentru un autoturism cu ${capacitateCilindrica} cm aveti de plata ${Math.ceil(capacitateCilindrica/200) * 8} lei pe an.`);
    } else if (capacitateCilindrica > 1601 && capacitateCilindrica < 2000){
        console.log(`Pentru un autoturism cu ${capacitateCilindrica}cm aveti de plata ${Math.ceil(capacitateCilindrica/200) * 20} lei pe an.`);
    } else if (capacitateCilindrica > 2001 && capacitateCilindrica < 2600){
        console.log(`Pentru un autoturism cu ${capacitateCilindrica}cm aveti de plata ${Math.ceil(capacitateCilindrica/200) * 79} lei pe an.`);
    } else if (capacitateCilindrica > 2601 && capacitateCilindrica < 3000){
        console.log(`Pentru un autoturism cu ${capacitateCilindrica}cm aveti de plata ${Math.ceil(capacitateCilindrica/200) * 159} lei pe an.`);
    } else {
        console.log(`Pentru un autoturism cu ${capacitateCilindrica}cm aveti de plata ${Math.ceil(capacitateCilindrica/200) * 320} lei pe an.`);
    }
    break;

    case 'autoutilitara': console.log(`Pentru o autoutilitara aveti de plata ${Math.ceil(capacitateCilindrica/200) * 32} lei pe an.`);
    break;

    case 'autobuz': console.log(`Pentru un autobuz aveti de plata ${Math.ceil(capacitateCilindrica/200) * 26} lei pe an.`);
    break;

    case 'tractor': console.log(`Pentru un tractor aveti de plata ${Math.ceil(capacitateCilindrica/200) * 20} lei pe an.`);
    break;
}