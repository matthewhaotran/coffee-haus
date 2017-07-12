const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models')

const app = require('../../app');

describe('Sale item route',  () => {

    it('should download all sale items', (done) => {
        request(app)
            .get('/api/saleItem')
            .expect(200, done);
    });

    it('should fetch a single sale item', (done) => {
        request(app)
            .get('/api/saleItem/2')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent sale item', (done) => {
        request(app)
            .get('/api/saleItem/9999999999')
            .expect(404, done)
    });

    it('should add a sale itenm', (done) => {
        request(app)
            .post('/api/saleItem')
            .send({
                saleId: 3,
                productId: 3,
                quantity: 10
            })
            .expect(201, done)
    });

    it('should update a sale item', (done) => {
        const newSaleItem = new db.SaleItem({
            saleId: 3,
            productId: 3,
            quantity: 10
        });

        newSaleItem
            .save()
            .then(saleItem => {
                request(app)
                    .put('/api/saleItem/' + saleItem.id)
                    .send({ productId: 4})
                    .expect(204)
                    .then(() => {
                        db
                            .SaleItem
                            .findById(saleItem.id)
                            .then( saleItem => {
                                expect(saleItem.productId).to.equal(4);

                                done();
                            });
                    });
            });
    });

    it('should delete a sale item', () => {
        const newSaleItem = new db.SaleItem({
            saleId: 3,
            productId: 3,
            quantity: 10
        });

        newSaleItem.save().then(saleItem => {
            request(app)
                .delete('/api/saleItem/' + saleItem.id)
                .expect(200);
        });
    });

});
