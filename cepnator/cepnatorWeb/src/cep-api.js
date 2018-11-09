var _cepApiBaseUrl = "https://viacep.com.br";

function getCep(cep) {
    return new Promise(function (resolve, reject) {
        var url = _cepApiBaseUrl + "/ws/" + cep + "/json/";
        if (!isValidCep(cep)) {
            return reject(new Error('Invalid CEP'));
        }

        $.get(url, function (result) {
            return resolve(result);
        });
    });
}

function isValidCep(cep) {
    var reg = /\d{5}[-]\d{2,3}|\d{8}/g;
    return reg.test(cep);
}