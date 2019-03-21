/*
Exporting to default allows to import without {}
A module can only ever have one default export
Default exports are not named, so you can import them as anything you like so

import christmas from 'Person'

would be valid
*/
export default class Person {
  constructor(name) {
    this.name = name
  }
  get() {
    return `My name is ${this.name}`
  }
}
