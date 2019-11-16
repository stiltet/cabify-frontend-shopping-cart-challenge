import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  public removeObjectFromArray(array: any[], object: any, identifier: string): any {
    if (this.areObjectNullOrUndefined(array)) {
      throw new Error('Array is null!');
    }
    if (this.areObjectNullOrUndefined(object)) {
      throw new Error('Object is null!');
    }
    if (this.areStringNullUndefinedOrEmpty(identifier)) {
      throw new Error('Identifier is null or empty string!');
    }

    for (let index = 0; index < array.length; index++) {
      const arrayObject = array[index];

      if (arrayObject[identifier] === object[identifier]) {
        array.splice(index, 1);
      }
    }

    return array;
  }

  public doesObjectExistInArray(array: any[], object: any, identifier: string): boolean {
    let existInArray = false;

    if (this.areObjectNullOrUndefined(array) || this.areObjectNullOrUndefined(object)) {
      return existInArray;
    }

    array.forEach(arrayObject => {
      if (arrayObject[identifier] === object[identifier]) {
        existInArray = true;
      }
    });

    return existInArray;
  }

  public areObjectNullOrUndefined(object: any): boolean {
    return object == null;
  }

  public areStringNullUndefinedOrEmpty(str: string): boolean {
    return str == null || str === '';
  }

  public sortObjectArrayOn(array: any[], ascending: boolean, property: string, childProperty: string = null) {
    if (array == null || array.length <= 0) {
      throw new Error('Error in UtilityService.sortObjectArrayOn(): array are null or empty!');
    }

    return array.sort((a, b) => {
      const firstExpression = ascending
        ? (a[property] < b[property])
        : (a[property] > b[property]);
      const secondExpression = ascending
        ? (a[property] > b[property])
        : (a[property] < b[property]);
      const thirdExpression = ascending
        ? (a[childProperty][property] < b[childProperty][property])
        : (a[childProperty][property] > b[childProperty][property]);
      const fourthExpression = ascending
        ? (a[childProperty][property] > b[childProperty][property])
        : (a[childProperty][property] < b[childProperty][property]);

      return childProperty == null
        ? firstExpression
          ? -1
          : secondExpression
            ? 1
            : 0
        : thirdExpression
          ? -1
          : fourthExpression
            ? 1
            : 0;
    });
  }
}
