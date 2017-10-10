const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('Cases from app.js', () => {
    
  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); 
    });

    it('should have length of 4', () => {
      const apples = cases.apples;
      expect(apples).to.have.lengthOf(4);
    });

    it('should contain the string Red Delicious', () => {
      const apples = cases.apples;
      expect(apples).to.include('Red Delicious');
    });

  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    it('should check if favBand is Beastie Boys', () => {
      const favBand = cases.Ben.favBand;
      expect(favBand).to.equal('Beastie Boys');
    });

  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    it('should check if favFood is Pizza', () => {
      const favFood = cases.Sean.favFood;
      expect(favFood).to.equal('Pizza')
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    it('should check that Ryans favBook is not Harry Potter', () => {
      const favBook = cases.Ryan.favBook;
      expect(favBook).to.not.equal('Harry Potter')
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    it('should check that Austens favColor is not Gold', () => {
      const favColor = cases.Austen.favColor;
      expect(favColor).to.not.equal('Gold')
    });
  });

  describe('Karthik', () => {

    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });

    it('should check that Karthiks favActivity is Rock Climbing', () => {
      const favActivity = cases.Karthik.favActivity;
      expect(favActivity).to.equal('Rock Climbing')
    });

  });


  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    it('should equal 3 with 2 and 1 added', () =>{
      const result = cases.addNums(1,2);
      expect(result).to.equal(3);
    });
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });
    it('should invoke a given callback passed to it', () => {
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      newCbInvoker(callBack);
      expect(callBack).to.have.been.calledOnce;
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy();
      const iterator = cases.iterator;
      iterator(5,callBack);
      expect(callBack).to.have.callCount(5);

    });
  });

  
});
