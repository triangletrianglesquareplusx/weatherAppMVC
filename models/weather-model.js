export default class WeatherModel{
    url = 'https://weather-proxy.freecodecamp.rocks/';

    //currently no need to parse - just testing the api
    load(){
        return fetch(this.url)
        .then(rawData => rawData.text())
        .then(dataFormatted => dataFormatted);
    }
}