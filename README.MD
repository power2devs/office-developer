# Global Office 365 Developer Bootcamp

Repositorio central criado a partir do bootcamp realizado no `Global Office 365 Bootcamp em Goiânia`. O grupo, em conjunto, decidiu criar uma aplicação Open Source que trabalha com a manipulação de endereços via CEP juntamente com a plataforma Office, que por enquanto será distribuído via Excel e Word.     

Como base de busca de endereço e CEP estamos usando o https://viacep.com.br.
Abaixo um item de retorno com os dados de um endereço qualquer.

```
URL: viacep.com.br/ws/01001000/json/?callback=callback_name 
UNICODE: viacep.com.br/ws/01001000/json/unicode/?callback=callback_name

    callback_name({
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "unidade": "",
      "ibge": "3550308",
      "gia": "1004"
    });
```

## Add-In Excel
Através de um CEP informado, na planilha corrente, é adicionado o endereço à uma célula predestinada.

## Add-In Word
Durante a manipulação do documento, é pssível selecionar um texto (CEP) e realizar a busca pelo endereço.


![alt text](https://github.com/dotnetgoias/office-developer/blob/master/assets/team.jpg "Time de Desemvolvedores")
