import WeatherModel from "../models/weather-model.js";
import WeatherView from "../views/weather-view.js";

export default class WeatherController{
    constructor(){
        this.model = new WeatherModel();
        this.view = new WeatherView();

        this.model
        .load()
        .then(d=>{
            console.log(d);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}