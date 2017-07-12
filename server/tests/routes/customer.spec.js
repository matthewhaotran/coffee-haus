const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models')

const app = require('../../app');

describe('Customer route',  () => {

    it('should download all customers', (done) => {
        request(app)
            .get('/api/customer')
            .expect(200, done);
    });

    it('should fetch a single customer', (done) => {
        request(app)
            .get('/api/customer/2')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent customer', (done) => {
        request(app)
            .get('/api/customer/9999999999')
            .expect(404, done)
    });

    it('should add a customer', (done) => {
        request(app)
            .post('/api/customer')
            .send({
                firstName: "Mike",
                lastName: "Jones"
            })
            .expect(201, done)
    });

    it('should update a customer', (done) => {
        const newCustomer = new db.Customer({
            firstName: 'Matthew',
            lastName: 'Tran'
        });

        newCustomer
            .save()
            .then(customer => {
                request(app)
                    .put('/api/customer/' + customer.id)
                    .send({ firstName: 'Joyce'})
                    .expect(204)
                    .then(() => {
                        db
                            .Customer
                            .findById(customer.id)
                            .then( customer => {
                                expect(customer.firstName).to.equal('Joyce');

                                done();
                            });
                    });
            });
    });

    it('should delete a customer', () => {
        const newCustomer = new db.Customer({
            firstName: "Matthew",
            lastName: "Tran"
        });

        newCustomer.save().then(customer => {
            request(app)
                .delete('/api/customer/' + customer.id)
                .expect(200);
        });
    });

});
