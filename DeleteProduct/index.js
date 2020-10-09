const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongolClient')


module.exports = async function (context, req) {
    const product = req.body;
    const { id } = req.params;
    const { client: MongoClient, closeConnectionFN } = await createMongoClient();
    const Products = MongoClient.collection('products');

    const res = await Products.finOneAndDelete({ _id: ObjectID(id) });


    closeConnectionFN();

    context.res = {
        status: 200,
        body: res
    } 
};