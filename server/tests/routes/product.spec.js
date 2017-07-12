const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models')

const app = require('../../app');

describe('Product route',  () => {

    it('should download all products', (done) => {
        request(app)
            .get('/api/product')
            .expect(200, done);
    });

    it('should fetch a single product', (done) => {
        request(app)
            .get('/api/product/2')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent product', (done) => {
        request(app)
            .get('/api/product/9999999999')
            .expect(404, done)
    });

    it('should add a product', (done) => {
        request(app)
            .post('/api/product')
            .send({
                name: "Caramel Latte",
                description: "Espresso drink with caramel syrup"
            })
            .expect(201, done)
    });

    it('should update a product', (done) => {
        const newProduct = new db.Product({
            name: 'Chai',
            description: 'Latte with chai'
        });

        newProduct
            .save()
            .then(product => {
                request(app)
                    .put('/api/product/' + product.id)
                    .send({ name: 'Chai Latte'})
                    .expect(204)
                    .then(() => {
                        db
                            .Product
                            .findById(product.id)
                            .then( product => {
                                expect(product.name).to.equal('Chai Latte');

                                done();
                            });
                    });
            });
    });

    it('should delete a product', () => {
        const newProduct = new db.Product({
            name: "Sea Salt Caramel Latte",
            description: "Latte with sea salt caramel"
        });

        newProduct.save().then(product => {
            request(app)
                .delete('/api/product/' + product.id)
                .expect(200);
        });
    });

});
