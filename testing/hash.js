var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);


var hash = bcrypt.hashSync('enter123>run>child', 8);

console.log(hash);





bcrypt.compare('Bounce1234', '$2a$08$WAjimX3y6NnDvfpdV7pcCOB/KsPbd7rMPvvjfs/CiYQJC7tRu9MwS', function(err, res) {
    // res === true
    console.log(res);
});