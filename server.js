var express = require('express');
var app = express();

app.use(express.static(__dirname));
//SQL FAKE
var listProduct = [
    {
        id:1,
        name:'microwave'
    }
];
var correntId = 2;

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/ellen',function(req, res){
    res.sendFile(__dirname + '/src/views/ellen.html');
});

app.get('/jonathan',function(req, res){
    res.sendFile(__dirname + '/src/views/jonathan.html');
});







app.get('/products',function(req, res){
    var productname = req.body.name;
    correntId++;

    listProduct.push({
        id: correntId,
        name: productname
    });
    res.send('Great! Sucessfully Create Product');
});

app.put('/products/:id', function(req, res){
    var id = req.params.id;
    var newName = req.body.newName;

    var found = false;

    listProduct.forEach(function(product, index){
        if(!faud && product.id === number (id)){
            product.name = newName;
        }
    });
    
    res.send('Great! Sucessfuly updated product.');
});

app.delete('/product/:id', function(req, res)
{
    var id = req.params.id;
    var found = false;

    listProduct.forEach(function(products, index){
        if(!found && products.id === Number(id)){
            listProduct.splice(index, 1);
        }
    });
    
    res.send('Great! Sucessfuly deleted product.');

});


var PORT = process.env.PORT || 3000;

app.listen(PORT, function (){
    console.log('Server listeing');
    
});