import { action, makeObservable, observable } from 'mobx';

class State {
  name = 1;
  minPrice = 500;
  maxPrice = 10000;
  counter = 0;

  constructor() {
    makeObservable(this, {
      name: observable,
      minPrice: observable,
      maxPrice: observable,
      counter: observable,
      setNew: action,
      setMinPrice: action,
      setMaxPrice: action,
      setCounter: action,
    });
  }

  setNew = (name: number): void => {
    this.name = name;
  };
  setMinPrice = (minPrice: number): void => {
    this.minPrice = minPrice;
  };
  setMaxPrice = (maxPrice: number): void => {
    this.maxPrice = maxPrice;
  };
  setCounter = (counter: number): void => {
    this.counter = counter;
  };
}

export const state = new State();
