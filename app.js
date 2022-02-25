require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const serviceKey = process.env.SERVICE_KEY;


app.use('/public' ,express.static('public'));


app.listen(process.env.PORT, () => {
    console.log('정상출력')
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`, {});
})

const getAixos = async (url, headers = {}) => {
    try {
        const response = await axios.get(url,{ headers: headers });
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

app.get('/airline', (req, res) => {
    const { airline, date } = req.query;
    const url = `https://ubikais.fois.go.kr:8030/sysUbikais/biz/pib/routeType/selectSchedule.fois?today=${date}&downloadYn=&srchDate=2022-02-09&srchDatesh=${date}&srchAl=${airline}&srchFln=&srchDep=&srchArr=&dummy=06530859&cmd=get-records&limit=100&offset=0`
    const headers = { 'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36' }
    
    getAixos(url, headers)
        .then(response => {
            res.status(200).send({records : response.records})
        })
})

app.get('/taf', (req, res) => {
    const { icao } = req.query;
    const url = `http://apis.data.go.kr/1360000/AftnAmmService/getTaf?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&dataType=JSON&icao=${icao}`

    getAixos(url)
        .then(response => {
            const taf = response.response.body.items.item[0].tafMsg;
            res.status(200).send({taf : taf})
        })
})
