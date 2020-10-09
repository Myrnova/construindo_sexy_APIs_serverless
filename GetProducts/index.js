const createMongoClient = require('../shared/mongolClient')

module.exports = async function (context, req) {
    const { client: MongoClient, closeConnectionFN } = await createMongoClient();
    const Products = MongoClient.collection('products');

    const res = await Products.find({});
    const body = await res.toArray();
  

    closeConnectionFN();
    context.res = {
        status: 200,
        body: body
    }
}