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

describe ('adoptChild', () => {
  it('adopts baby', () => {
    const parent = new Pet('Daisy');
    const child = new Pet('Lily')

    expect(child.name).toBe('Lily');
  });
});

describe('isAlive', () => {
  it('returns true is age is less than 30, hunger less than 10, and fitness greater than 0', () => {
    const pet = new Pet('Fido');

    pet.age = 31
    pet.hunger = 8
    pet.fitness = 3
    pet.isAlive;

    expect(pet.isAlive).toBe(false)
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

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
});

describe ('walk', () => {
  it('increases fitness by 4 to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});

describe ('feed', () => {
  it('decreases hunger level by 3 to a minimum of 0', () => {
    const pet = new Pet('Fido');

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(MINIMUM_HUNGER);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe ('checkUp', () => {
  it('tells you how your dog is feeling', () => {
    const pet = new Pet('Fido');

    pet.fitness = 3;
    pet.hunger = 5;
    pet.checkUp();

    expect(pet.checkUp()).toBe('I am hungry AND I need a walk')
  });
  
  it('returns string if pet is no longer alive', () => {
    const pet = new Pet('Fido');

    pet.age = 31;
    pet.checkUp();

    expect(pet.checkUp()).toBe('Your pet is no longer alive :(')
  });
});