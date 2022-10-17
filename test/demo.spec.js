
var chai = require('chai');
var expect = chai.expect;
var Demo = require('../src/demo.js').Demo;


describe('demo.js', function () {
    describe('getMessage()', ()=>{
        it('returns demo Message.', ()=>{
            const demo = new Demo();

            expect(demo.getMessage())
            .to.be.equal('Hello GitHub Actions!');
            expect(demo.getMessage())
            .to.be.equal('This repository is sandbox for GitHub Actions.');
        })
    });
});