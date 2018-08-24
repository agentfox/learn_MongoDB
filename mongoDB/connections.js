const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let url = 'mongodb://localhost:27018/xxx'
mongoose.connect(url,{ useNewUrlParser: true });
mongoose.connection.once('open',()=> {
    console.log("Connection has been made successfully");
    
}).on('error',(error)=> {
    console.log("Failed to connect to MongoDB.Error :",error);
});
mongoose.set('useFindAndModify', false);
// const { MongoClient } = require("mongodb");
// (async ()=> {
//     try {
//       const client = await MongoClient.connect('mongodb://localhost/kunai',{ useNewUrlParser: true });
//       console.log("Connection has been made successfully");
//       client.close();
//     } catch(e) {
//         console.log("Failed to connect to MongoDB.Error :",e);
//     }
  
//   })()
(async ()=> {
    try {
        let Item = mongoose.model('Item', {name: String, power: Number, owner: String});

        let Item1 = new Item({name: 'Sharigan', power: 1, owner: "Shisui"});
        Item1.name = Item1.name.toUpperCase();
        console.log(Item1);

        await Item1.save(function (err, itemObj) {
                if (err) {
                console.log(err);
                } else {
                console.log('saved successfully:', itemObj);
                }
            });


        await Item.findOne({name: 'SHARIGAN'},(err, itemObj) => {
            if (err) {
                console.log(err);
            } else if (itemObj) {
                console.log('Found:', itemObj);

                //For demo purposes lets update the item on condition.
                
                //Some demo manipulation
                itemObj.power += 2;

                //Lets save it
                itemObj.save(function (err) {
                    if (err) {
                    console.log(err);
                    } else {
                    console.log('Updated', itemObj);
                    }
                });
                
            } else {
                console.log('item not found!');
            }
            });
    }
    catch(e) {
        console.log(e);
        
    }
})()





// let blogSchema = new Schema({
//     title:  String,
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }
//   });

// let Blog = mongoose.model('Blog', blogSchema);


// define a schema
// var animalSchema = new Schema({ name: String, type: String });

// assign a function to the "methods" object of our animalSchema
// animalSchema.methods.findSimilarTypes = function(cb) {
// return this.model('Animal').find({ type: this.type }, cb); // arrow function prevent binding 'this' so you have to declare this method the classic way
// };

// var Animal = mongoose.model('Animal', animalSchema);
// var dog = new Animal({ type: 'dog' });

// dog.findSimilarTypes(function(err, dogs) {   
//   console.log(dogs); // woof
// });


