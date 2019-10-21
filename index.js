const getValue = (pathArray,data) => pathArray.reduce((a,v) => a[v], data);
const hvoia = (data,path) =>{
    const pathArray = path.split('.');
    return data.reduce((prev, current) => (getValue(pathArray,prev) > getValue(pathArray,current)) ? prev : current);
}

module.exports = hvoia;