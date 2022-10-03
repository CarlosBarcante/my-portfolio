import axios from 'axios';

export const save = (data) => {
    const config = {
        method: 'post',
        url: 'https://sheet.best/api/sheets/5c03ba1a-03d8-44b6-8c04-e6a77d111cea',
        data,
    }

    axios(config).then(() => {
        alert('Mensagem enviada com sucesso!');
        return true;
    }).catch(() => {
        alert('Ocorreu um erro, tente novamente.');
        return false;
    })
}