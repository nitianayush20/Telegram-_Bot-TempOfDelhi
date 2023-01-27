var weather = require('openweather-apis');
weather.setLang('en');

weather.setCity('Delhi');
weather.setUnits('metric');
weather.setAPPID('5d233127bcca19dc10054acb912f6a4f');
var temperature=0;

weather.getTemperature(function(err, temp){
    console.log(temp);
    temperature=temp;
    module.exports=  vtemp;
});

//module.exports= temperature;
