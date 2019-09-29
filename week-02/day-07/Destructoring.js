var car = {
    model:'Benz',
    color:'black',
    year:1886,
    doors:0,
    historical:true
};
var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: 16,
        HDMI: true,
        VGA: true
    },
    tower:{
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}

//before ES6
var model = car.model;
var color = car.color;
var year = car.year;
var doors = car.doors;
var historical = car.historical;

var type = computer.type;
var colorCom = computer.monitor.color;
var size = computer.monitor.size;
var HDMI = computer.monitor.HDMI;
var VGA = computer.monitor.VGA;
var colorTow = computer.monitor.tower;
var CPU = computer.monitor.CPU;
var memory = computer.monitor.memory;
var SSD = computer.monitor.SSD;


//from ES6
var{model, color, year, doors,  historical} = car;

var{type, monitor:{color, size, HDMI, VGA}, tower:{color, CPU, memory, SSD}} = COMPU