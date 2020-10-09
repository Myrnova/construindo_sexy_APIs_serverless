const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongolClient')


module.exports = async function (context, req) {
    const product = req.body;
    const { id } = req.params;
    const { client: MongoClient, closeConnectionFN } = await createMongoClient();
    const Products = MongoClient.collection('products');

    const res = await Products.finOneAndUpdate(
        { _id: ObjectID(id) },
        { $set:  product }
        );


    closeConnectionFN();

    context.res = {
        status: 200,
        body: res
    } 
};