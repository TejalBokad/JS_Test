function removeSpaces(str) {
    return str.split(' ').join('');
}

const stringWithSpaces = "Hii There!! How are You?";
console.log(removeSpaces(stringWithSpaces));