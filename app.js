// TODO

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const localizedFormat = require('dayjs/plugin/localizedFormat');
const express = require('express');
require('dayjs/locale/fr')

const capitalCities = require('./my_modules/capitalCities');

const PORT = 3000;

const app = express();

dayjs.extend(localizedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.locale('fr');


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/city/:city', (req, res) => {

    
    let foundCity = capitalCities.find((arrayElm) => { return arrayElm.name.toLowerCase() === req.params.city; });

    if(foundCity) {
        res.send(`${foundCity.name} : ${dayjs().tz(foundCity.tz).format('LLLL')}` );
    }  else {
        res.status(404).send('City not found');
    }

});
// const timestamp = "2014-06-01 12:00"
// const tz = "America/New_York"

// const dayjsLocal = dayjs(timestamp).utc();
// console.log('');

// console.log('dayjsLocal', dayjsLocal.format('DD/MM/YYYY HH:mm'));
// console.log('dayjsLocal', dayjsLocal.toISOString());
// console.log('');

// const dayjsAmerica = dayjsLocal.tz(tz);

// console.log('dayjsAmerica', dayjsAmerica.format('DD/MM/YYYY HH:mm'));
// console.log('dayjsAmerica',dayjsAmerica.toISOString());
// console.log('');

// const dayjsAmericaKeep = dayjsLocal.tz(tz, true);

// console.log('dayjsAmericaKeep', dayjsAmericaKeep.format('DD/MM/YYYY HH:mm'));
// console.log('dayjsAmericaKeep', dayjsAmericaKeep.toISOString());
// console.log('');


app.listen(PORT, () => {
  console.log('Server started on port 3000');
});


// const dayjsParis = dayjsLocal.tz('Europe/Paris');

// console.log('dayjsParis', dayjsParis.format('DD/MM/YYYY HH:mm'));