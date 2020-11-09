const Element = ['Mahasiswa MDP', 'Gamer'];
let count = 0;
let txtIndex = 0;
let currenTxt = '';
let words = '';

(function ngetik() {

    if (count == Element.length) {
        count = 0;
    }

    currenTxt = Element[count];

    words = currenTxt.slice (0, ++txtIndex);
    document.querySelector ('.efek').textContent = words;

    if(words.length == currenTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout (ngetik, 500);

}());