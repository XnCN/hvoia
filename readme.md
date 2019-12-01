# hvoia

This library that finds the highest value object in the array.

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install hvoia.

```bash
npm install hvoia
```

## Usage

```javascript
const hvoia = require('hvoia');
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
        age:10,
        information: {
            level: 33,
        }
    }
];

const result = hvoia(data,'information.level');
console.log(result); 
//{ name: 'Eray Han', age: 22, information: { level: 37 } }
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

##Thanks
Jetbrains/Webstorm