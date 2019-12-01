const hvoia = require('./index');

const data = [
    {
        name:'Eray Han',
        age:22,
        information:{
            level:37
        }
    },
    {
        name:'Irmak Han',
        age:30,
        information: {
            level: 33,
        }
    }
];

const result = hvoia(data,'information.level');
console.log(result);