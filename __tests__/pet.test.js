const Pet = require('../src/pet.js')

const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0, hunger of 0 and fitness of 10', () => {
      const pet = new Pet('Fido');

     expect(pet.age).toEqual(0);
     expect(pet.hunger).toEqual(0);
     expect(pet.fitness).toEqual(10);
    });
  });


describe('growUp', () => {
  it('increments the age by 1, hunger by 5 and fitness by -3', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});

describe ('walk', () => {
  it('increases fitness by 4 to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
  });
});

describe ('feed', () => {
  it('decreases hunger level by 3 to a minimum of 0', () => {
    const pet = new Pet('Fido');

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(MINIMUM_HUNGER);
  });
});