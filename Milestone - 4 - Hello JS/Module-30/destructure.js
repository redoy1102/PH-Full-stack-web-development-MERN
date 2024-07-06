const destruct = (cwr) => {
    return [cwr.name, cwr.phn];
}

const cwr = {
    name: 'Code with Redoy',
    phn: '01621025110',
    email: 'codewithredoy@gmail.com',
}

const [name, phn] = destruct(cwr);

console.log(name, phn);
