const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models')

const app = require('../../app');

describe('Sale route',  () => {

    it('should download all sales', (done) => {
        request(app)
            .get('/api/sale')
            .expect(200, done);
    });

    it('should fetch a single sale', (done) => {
        request(app)
            .get('/api/sale/3')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent sale', (done) => {
        request(app)
            .get('/api/sale/9999999999')
            .expect(404, done)
    });

    it('should add a sale', (done) => {
        request(app)
            .post('/api/sale')
            .send({
                date: "2017-07-11",
                totalPrice: 10.99,
                customerId: 2
            })
            .expect(201, done)
    });

    it('should update a sale', (done) => {
        const newSale = new db.Sale({
            date: '2017-07-11',
            totalPrice: 10.99,
            customerId: 3
        });

        newSale
            .save()
            .then(sale => {
                request(app)
                    .put('/api/sale/' + sale.id)
                    .send({ totalPrice: 15.99})
                    .expect(204)
                    .then(() => {
                        db
                            .Sale
                            .findById(sale.id)
                            .then( sale => {
                                expect(sale.totalPrice).to.equal('15.99');

                                done();
                            });
                    });
            });
    });

    it('should delete a sale', () => {
        const newSale = new db.Sale({
            name: "Sea Salt Caramel Latte",
            description: "Latte with sea salt caramel"
        });

        newSale.save().then(sale => {
            request(app)
                .delete('/api/sale/' + sale.id)
                .expect(200);
        });
    });

});
