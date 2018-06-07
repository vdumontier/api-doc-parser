// @flow

/**
 * @property {string} name - The name of this field
 */
export default class Filter {
  property: string;
  filter: string;

  /**
   * @param {string}        property
   * @param {string}        filter
   */
  constructor(property: string, filter: string) {
    this.property = property;
    this.filter = filter;
  }
}
