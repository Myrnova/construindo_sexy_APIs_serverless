
const createMongoClient = require('../shared/mongolClient')


module.exports = async function (context, req) {
    const product = req.body;

    const { client: MongoClient, closeConnectionFN } = await createMongoClient();
    const Products = MongoClient.collection('products');

    const res = await Products.insert(product);


    closeConnectionFN();

    context.res = {
        status: 201,
        body: res
    } 
};