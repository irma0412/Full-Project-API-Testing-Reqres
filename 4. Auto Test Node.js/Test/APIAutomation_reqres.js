// import modul assert dari node js untuk melakukan verifikasi/assertion
const assert = require ('assert');
// import custom request dari folder helper
const { request } = require('../helper/request');



// ======POSITIVE TEST CASE=====
describe("Positive Test API Reqres", function(){
    
    it("GET List User Page 2", async function () {
        // kirim request ke endpoint 
        const { status, body, duration} = await request('/users?page=2');   
        // Validasi status code
        assert.strictEqual(status, 200);       
        // Validasi First user has 'email' property
        assert.ok(body.data[0].hasOwnProperty('email'));
        // Validasi First user has id : 7
        assert.strictEqual(body.data[0].id, 7);  
        // Validasi response time
        assert.ok(duration < 1000);

    })

    it ("GET User id 2", async function () {
        const { status, body, duration} = await request('/users/2');
        // Validasi status code
        assert.strictEqual(status, 200);
        // Validasi user data has email field
        assert.ok(body.data.hasOwnProperty('email'));
        //  Validasi user data has id : 2
        assert.strictEqual(body.data.id, 2);
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });

    it ("Create User Data", async function () {
        // data yang perlu di kirim ke server
        const payload = {
           name: "Irma Suryani",
            job: "Junior QA"
        }
        const { status, body, duration} = await request('/users','POST', payload);

        // Validasi status code
        assert.strictEqual(status, 201);
        // Validasi user data has email field
        assert.ok(body.hasOwnProperty('job'));
        //  Validasi user data has id : 2
        assert.strictEqual(body.name, 'Irma Suryani');
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });

    it ("Update user data with PUT", async function () {
        // data yang perlu di kirim ke server
        const payload = {
           name: "Irma Suryani",
            job: "QA Enthusiast"
        }
        const { status, body, duration} = await request('/users/2', 'PUT', payload);
        // Validasi status code
        assert.strictEqual(status, 200);
        // Validasi user data has email field
        assert.ok(body.hasOwnProperty('name'));
        //  Validasi user data has id : 2
        assert.strictEqual(body.job, 'QA Enthusiast');
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });

    it ("Update user data with PATCH", async function () {
        // data yang perlu di kirim ke server
        const payload = {
           first_name: "Irma",
            last_name: "Suryani"
        }
        const { status, body, duration} = await request('/users/2', 'PATCH', payload);
        // Validasi status code
        assert.strictEqual(status, 200);
        // Validasi user data has email field
        assert.ok(body.hasOwnProperty('id'));
        //  Validasi user data has id : 2
        assert.strictEqual(body.first_name, 'Irma');
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });

    it ("DELETE user data", async function () {     
        const { status, duration} = await request('/users/2', 'DELETE');
        // Validasi status code
        assert.strictEqual(status, 204);
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });
    
    it ("Succes register", async function () {
        // data yang perlu di kirim ke server
        const payload = {
           email: "eve.holt@reqres.in",
            password: "pistol"
        }
        const { status, body, duration} = await request('/register', 'POST', payload);
        // Validasi status code
        assert.strictEqual(status, 200);
        // Validasi user data has email field
        assert.ok(body.hasOwnProperty('token'));
        //  Validasi user data has id : 2
        assert.strictEqual(body.id, 4);
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });

    it ("Succes Login", async function () {
        // data yang perlu di kirim ke server
        const payload = {
           email: "eve.holt@reqres.in",
            password: "cityslicka"
        }
        const { status, body, duration} = await request('/login', 'POST', payload);
        // Validasi status code
        assert.strictEqual(status, 200);
        // Validasi user data has email field
        assert.ok(body.hasOwnProperty('token'));
        //  Validasi user data has id : 2
        assert.strictEqual(body.token, 'QpwL5tke4Pnpja7X4');
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });

   
});

// =====NEGATIVE TEST CASE=====
describe('Negative Test API Reqres', function(){
 
    
    it ("User not found", async function () {
        const { status, body, duration} = await request('/users/23');
        // Validasi status code
        assert.strictEqual(status, 404);
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });

    it ("Failed register", async function () {
        // data yang perlu di kirim ke server
        const payload = {
           email: "irma.holt@reqres.in",
            password: "irmaacoba"
        }
        const { status, body, duration} = await request('/register', 'POST', payload);
        // Validasi status code
        assert.strictEqual(status, 400);
        // Validasi user data has email field
        assert.ok(body.hasOwnProperty('error'));
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });

    it ("Failed Login", async function () {
        // data yang perlu di kirim ke server
        const payload = {
           email: "irma.holt@reqres.in",
           password: "irmaacoba"
        }
        const { status, body, duration} = await request('/login', 'POST', payload);
        // Validasi status code
        assert.strictEqual(status, 400);
        // Validasi user data has email field
        assert.ok(body.hasOwnProperty('error'));
        //  Validasi response time < 1000ms
        assert.ok(duration < 1000);
        
    });
});