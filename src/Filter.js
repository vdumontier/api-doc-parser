// @flow

/**
 * @property {string} variable - The variable of this field
 */
export default class Filter {
  property: string;
  variable: string;

  /**
   * @param {string} property
   * @param {string} variable
   */
  constructor(property: string, variable: string) {
    this.property = property;
    this.variable = variable;
  }
}
