const target = {a:1, b:1, c:1};

const handler = {
    get: function(targetObject, field){
        if (field === 'nextId'){
           if(targetObject[field] === undefined){
            targetObject[field] = 1;
           }else{
            targetObject[field]++;
           }
        }

        return targetObject[field]
       
    },
};


const proxyObject = new Proxy(target, handler);

console.log(proxyObject.nextId);
console.log(proxyObject.nextId);
console.log(proxyObject.nextId);