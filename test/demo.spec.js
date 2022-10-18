
var chai = require('chai');
var expect = chai.expect;
var Demo = require('../src/demo.js').Demo;


describe('demo.js', function () {
    describe('getMessage()', ()=>{
        it('returns demo Message.', ()=>{
            const demo = new Demo();

            // CASE　期待バリュー：Hello GitHub Actions!
            expect(demo.getMessage(0)).to.be.equal('Hello GitHub Actions!');
            // CASE　期待バリュー：This repository is sandbox for GitHub Actions.
            expect(demo.getMessage(1)).to.be.equal('This repository is sandbox for GitHub Actions.');
            // CASE　期待バリュー：Not Define.
            expect(demo.getMessage(2)).to.be.equal('Not Define.');
        })
    });
});
