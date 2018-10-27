# Global Office 365 Developer Bootcamp - Goiânia, BRA

Central repository created from the bootcamp held at the Global Office 365 Bootcamp in Goiânia city, Brazil. The group, together, decided to create an Open Source application that works with the address manipulation via CEP (Zip Code) along with the Office platform, which for now will be distributed via Excel and Word.

As a search base for address and zip code we are using https://viacep.com.br. 
Below is a return item with data from any address.

```
URL: viacep.com.br/ws/01001000/json/?callback=callback_name 
UNICODE: viacep.com.br/ws/01001000/json/unicode/?callback=callback_name

    callback_name({
      "cep": "01001-000",
      "logradouro": "Av. 85",
      "complemento": "nº 300",
      "bairro": "St. Sul",
      "localidade": "Goiânia",
      "uf": "GO",
      "unidade": "",
      "ibge": "3550308",
      "gia": "1004"
    });
```

## Add-In Excel
Through an informed CEP, in the current worksheet, the address is added to a predestined cell.
To get the source code, access the repository https://github.com/dotnetgoias/enderecos-excel-add-in

## Add-In Word
While manipulating the document, you can select a text (Zip Code) and perform the address search.


![alt text](https://github.com/dotnetgoias/office-developer/blob/master/assets/team.jpg "Time de Desemvolvedores")
_Local Developer Team in this Bootcamp_

[View the presentation in SlideShare](https://www.slideshare.net/rodrigokono/global-office-365-developer-bootcamp/rodrigokono/global-office-365-developer-bootcamp)
