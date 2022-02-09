const express = require('express');
const app = express();
const axios = require('axios');

app.use('/public' ,express.static('public'));
require('dotenv').config();

app.listen(process.env.PORT, () => {
    console.log('정상출력')
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/airline', (req, res) => {
    const { airline, date } = req.query;
    const url = `https://ubikais.fois.go.kr:8030/sysUbikais/biz/pib/routeType/selectSchedule.fois?today=${date}&downloadYn=&srchDate=2022-02-09&srchDatesh=${date}&srchAl=${airline}&srchFln=&srchDep=&srchArr=&dummy=06530859&cmd=get-records&limit=100&offset=0`
    const headers = { 'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36' }
    const getHTML = async () => {
        try {
            console.log('정상실행중')
            return await axios.get(url,{ headers: headers });
        } catch (error) {
            console.log(error)
        }
    }

    getHTML()
    .then(html => {
        res.status(200).send({records : html.data.records})
    })
})