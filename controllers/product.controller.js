

const Product=require('../models/product.model');

exports.test=(req,res)=>{
    res.send('Greetings from the Controller')
}

exports.product_create=(req,res)=>
{
//---------------declaring variables
    let product=new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    
    //--------------updation to the database

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    });
    
}



//-----------for Get method of CRUD
exports.product_details=(req,res)=>{

    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })

}

exports.product_update=(req,res)=>{
    
    Product.findByIdAndUpdate(req.params.id, {$set: req.body},(err,product)=>{

        if(err)returnnext(err);
        res.send('Product updated')
    })
}

exports.product_delete=(req,res)=>{
    
    Product.findByIdAndRemove(req.params.id, (err)=> {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })

}
