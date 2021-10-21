'use strict'
function arrayParseCSV(text) {
    let array = text.split('\n')
        .filter(s => s !== "" && !s.startsWith("#"))
        .map(a => {
            let res = a.split(',');
            return {x: res[0], y: res[1], name: res[2], population: res[3]}
        })
        .sort((a, b) => b.population - a.population)
        .slice(0, 10)
        .reduce((a, b, c) => {
            a[b.name] = {population: b.population, rating: c};
            return a;
        });
    return array;
}

function citiReplace(text, arrayCiti) {
    console.log(arrayCiti);
    function textReplace (text) {
        return text + " ('население: " + arrayCiti[text]['population'] + ", рейтинг: " + arrayCiti[text]['rating'] + ")";
    }
    return text
        .split(' ')
        .map(a => {        
           if (arrayCiti[a]) {
                return textReplace (a);
            }
            let b = a.split(',');
            if (arrayCiti[b[0]]) {
                return textReplace (b[0]) + ',';
            }
            return a;
        })    
        .reduce((a, b) => {        
            return a + " " + b;
        });
}

const textCSV = `44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в этом файле три строки-коммента :)
`

const citiAr = arrayParseCSV(textCSV);
let testText = `Бердичів лежить на березі річки Гнилоп'яті, притоки Тетерева, за 44 км на південь від Житомира.
Місто є значним залізничним вузлом, де сходяться магістралі Бердичів — Житомир та Козятин — Шепетівка.
Від Бердичева відходять автомобільні шляхи на Житомир, Вінниця, Любар, Хмільник, Біла Церква.`;

console.log(citiReplace(testText, citiAr));