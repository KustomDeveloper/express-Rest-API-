var request = require('request');
request.post('http://localhost:9001/users', {form:[{name:"Michael Hicks"},{name: "Danny Jones"}]})