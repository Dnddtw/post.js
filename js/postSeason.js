$(document).ready(function() {

    // Пора року. Argument: language (string). Default: 'UA'
    postSeason(/*'ua'*/); 		

});

function postSeason(language) {

    var seasons = [],
    	month = new Date().getMonth() + 1;

    month = month == 12 ? 0 : month;

    switch(language) {
        case 'ro':  // Romania
            seasons = ['Iarna', 'Primăvara', 'Vara', 'Toamna'];
            break;
        case 'hr':  // Croatia
            seasons = ['Zima', 'Proljeće', 'Ljeto', 'Jesen'];
            break;
        case 'vn':  // Vietnam
            seasons = ['Mùa đông', 'Mùa xuân', 'Mùa hè', 'Mùa thu'];
            break;
        case 'cz':  // Czechia
            seasons = ['Zimá', 'Jaro', 'Léto', 'Podzim'];
            break;
        case 'si':  // Slovenia
            seasons = ['Zima', 'Pomlad', 'Poletje', 'Jesen'];
            break;
        case 'sk':  // Slovakia
            seasons = ['Zimá', 'Jár', 'Letné', 'Jeseň'];
            break;
        case 'bg':  // Bulgaria
            seasons = ['Зима', 'Пружина', 'Лято', 'Есен'];
            break;
        case 'pl':  // Poland
            seasons = ['Zima', 'Wiosna', 'Lato', 'Jesień'];
            break;
        case 'fr':  // France
            seasons = ['L’hiver', 'Le printemps', 'L’été', 'L’automne'];
            break;
        case 'hu':  // Hungary
            seasons = ['Tél', 'Tavasz', 'Nyár', 'Ősz'];
            break;
        case 'pt':  // Portugal
            seasons = ['Inverno', 'Primavera', 'Verão', 'Outono'];
            break;
        case 'es':  // Spain
            seasons = ['Invierno', 'Primavera', 'Verano', 'Otoño'];
            break;
        case 'it':  // Italy
            seasons = ['Inverno', 'Primavera', 'Estate', 'Autunno'];
            break;
        case 'gr':  // Greece
        case 'cy':  // Cyprus (Кіпр)
            seasons = ['χειμώνας', 'Άνοιξη', 'καλοκαίρι', 'φθινόπωρο'];
            break;
        case 'ru':  // Russia
            seasons = ['Зима', 'Весна', 'Лето', 'Осень'];
            break;
        case 'ua':  // Ukraine
        default: 
            seasons = ['Зима', 'Весна', 'Літо', 'Осінь'];
    }

    $('.season').text(seasons[~~(month / 3)]);
}
