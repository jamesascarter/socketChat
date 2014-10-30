var server = require("../index.js")
var Browser = require("zombie");
var expect = require("expect.js");

browser = new Browser()


describe('home page', function() {
	var browser;

	before(function() {
		this.server = server.listen(3000);
		browser = new Browser({ site: 'http://localhost:3000' });
	});

	before(function(done){
		browser.visit('/', done);

	});

	it('should show a welcome message', function(){
		expect(browser.text('h1')).to.eql('Chat room');
	});

});