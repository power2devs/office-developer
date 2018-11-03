function nextChar(str, index) {
    if (index === 0 || !index) {
        index = 1;
    }

    return String.fromCharCode(str.charCodeAt(0) + index);
}

function getOnlyCharacters(str) {
    return str.replace(/[^a-zA-Z]+/g, "");
}
function getOnlyNumbers(str) {
    return str.replace(/[^0-9]+/g, "");
}

function getExcelColumnIndex(char) {
    var characterCode = 96;
    return (char.toLowerCase().charCodeAt(0) - characterCode) - 1;
}

function getExcelCell(str) {
    var columnStr = getOnlyCharacters(str);
    return {
        "column": getExcelColumnIndex(columnStr),
        "row": parseInt(getOnlyNumbers(str)) - 1
    };
}