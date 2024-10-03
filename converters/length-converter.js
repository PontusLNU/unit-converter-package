/**
 * A class to convert length from different units.
 */
export default class LengthConverter {
  /**
   * Validate the input to ensure it is a number.
   *
   * @param {number} input - The input to validate.
   * @throws {Error} - Throws an error if the input is not a number.
   */
  validateInput(input) {
    if (typeof input !== 'number' || isNaN(input)) {
      throw new Error('Input must be a number')
    }
  }

  /**
   * Converts a length in inches to feet.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToFoot(inch) {
    this.validateInput(inch)
    const foot = inch / 12
    return parseFloat(foot.toFixed(2))
  }

  /**
   * Converts a length in inches to yards.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToYard(inch) {
    this.validateInput(inch)
    const yard = inch / 36
    return parseFloat(yard.toFixed(2))
  }

  /**
   * Converts a length in inches to miles.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToMile(inch) {
    this.validateInput(inch)
    const mile = inch / 63360
    return parseFloat(mile.toFixed(2))
  }

  /**
   * Converts a length in feet to inches.
   *
   * @param {number} foot - The length in foot to convert.
   * @returns {number} - The converted length in inch.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToInch(foot) {
    this.validateInput(foot)
    const inch = foot * 12
    return parseFloat(inch.toFixed(2))
  }

  /**
   * Converts a length in feet to yards.
   *
   * @param {number} foot - The length in foot to convert.
   * @returns {number} - The converted length in yard.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToYard(foot) {
    this.validateInput(foot)
    const yard = foot / 3
    return parseFloat(yard.toFixed(2))
  }

  /**
   * Converts a length in feet to miles.
   *
   * @param {number} foot - The length in foot to convert.
   * @returns {number} - The converted length in mile.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToMile(foot){
    this.validateInput(foot)
    const mile = foot / 5280
    return parseFloat(mile.toFixed(2))
  }

  /**
   * Converts a length in yards to inches.
   *
   * @param {number} yard - The length in yard to convert.
   * @returns {number} - The converted length in inch.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToInch(yard) {
    this.validateInput(yard)
    const inch = yard * 36
    return parseFloat(inch.toFixed(2))
  }

  /**
   * Converts a length in yards to feet.
   *
   * @param {number} yard - The length in yard to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToFoot(yard) {
    this.validateInput(yard)
    const foot = yard * 3
    return parseFloat(foot.toFixed(2))
  }

  /**
   * Converts a length in yards to miles.
   *
   * @param {number} yard - The length in yard to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToMile(yard) {
    this.validateInput(yard)
    const mile = yard / 1760
    return parseFloat(mile.toFixed(2))
  }

  /**
   * Converts a length in miles to inches.
   *
   * @param {number} mile - The length in mile to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToInch(mile) {
    this.validateInput(mile)
    const inch = mile * 63360
    return parseFloat(inch.toFixed(2))
  }

  /**
    * Converts a length in miles to feet.
    *
    * @param {number} mile - The length in mile to convert.
    * @returns {number} - The converted length in feet.
    * @throws {Error} - Throws an error if the input is not a number
    */
  convertMileToFoot(mile) {
    this.validateInput(mile)
    const foot = mile * 5280
    return parseFloat(foot.toFixed(2))
  }

  /**
   * Converts a length in miles to yards.
   *
   * @param {number} mile - The length in mile to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToYard(mile) {
    this.validateInput(mile)
    const yard = mile * 1760
    return parseFloat(yard.toFixed(2))
  }

  /**
   * 
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToCm(mm) {
    this.validateInput(mm)
    const cm = mm / 10
    return parseFloat(cm.toFixed(2))
  }

  /**
   * Converts a length in mm to m.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToM(mm) {
    this.validateInput(mm)
    const m = mm / 1000
    return parseFloat(m.toFixed(2))
  }

  /**
   * Converts a length in mm to km.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToKm(mm) {
    this.validateInput(mm)
    const km = mm / 1000000
    return parseFloat(km.toFixed(2))
  }

  /**
   * Converts a length in cm to mm.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToMm(cm) {
    this.validateInput(cm)
    const mm = cm * 10
    return parseFloat(mm.toFixed(2))
  }

  /**
   * Converts a length in cm to m.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToM(cm) {
    this.validateInput(cm)
    const m = cm / 100
    return parseFloat(m.toFixed(2))
  }

  /**
   * Converts a length in cm to km.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToKm(cm) {
    this.validateInput(cm)
    const km = cm / 100000
    return parseFloat(km.toFixed(2))
  }

  /**
   * Converts a length in m to mm.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToMm(m) {
    this.validateInput(m)
    const mm = m * 1000
    return parseFloat(mm.toFixed(2))
  }

  /**
   * Converts a length in m to cm.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToCm(m) {
    this.validateInput(m)
    const cm = m * 100
    return parseFloat(cm.toFixed(2))
  }

  /**
   * Converts a length in m to km.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToKm(m) {
    this.validateInput(m)
    const km = m / 1000
    return parseFloat(km.toFixed(2))
  }

  /**
   * Converts a length in km to mm.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToMm(km) {
    this.validateInput(km)
    const mm = km * 1000000
    return parseFloat(mm.toFixed(2))
  }

  /**
   * Converts a length in km to cm.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToCm(km) {
    this.validateInput(km)
    const cm = km * 100000
    return parseFloat(cm.toFixed(2))
  }

  /**
   * Converts a length in km to m.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToM(km) {
    this.validateInput(km)
    const m = km * 1000
    return parseFloat(m.toFixed(2))
  }

  /**
   * Converts a length in inches to mm.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToMm(inch) {
    this.validateInput(inch)
    const mm = inch * 25.4
    return parseFloat(mm.toFixed(2))
  }

  /**
   * Converts a length in feet to mm.
   *
   * @param {number} foot - The length in feet to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToMm(foot) {
    this.validateInput(foot)
    const mm = foot * 304.8
    return parseFloat(mm.toFixed(2))
  }

  /**
   * Converts a length in yards to mm.
   *
   * @param {number} yard - The length in yards to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToMm(yard) {
    this.validateInput(yard)
    const mm = yard * 914.4
    return parseFloat(mm.toFixed(2))
  }

  /**
   * Converts a length in miles to mm.
   *
   * @param {number} mile - The length in miles to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToMm(mile) {
    this.validateInput(mile)
    const mm = mile * 1609344
    return parseFloat(mm.toFixed(2))
  }

  /**
   * Converts a length in mm to inches.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToInch(mm) {
    this.validateInput(mm)
    const inch = mm / 25.4
    return parseFloat(inch.toFixed(2))
  }

  /**
   * Converts a length in mm to feet.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToFoot(mm) {
    this.validateInput(mm)
    const foot = mm / 304.8
    return parseFloat(foot.toFixed(2))
  }

  /**
   * Converts a length in mm to yards.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToYard(mm) {
    this.validateInput(mm)
    const yard = mm / 914.4
    return parseFloat(yard.toFixed(2))
  }

  /**
   * Converts a length in mm to miles.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToMile(mm) {
    this.validateInput(mm)
    const mile = mm / 1609344
    return parseFloat(mile.toFixed(2))
  }

  /**
   * Converts a length in inches to cm.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToCm(inch) {
    this.validateInput(inch)
    const cm = inch * 2.54
    return parseFloat(cm.toFixed(2))
  }

  /**
   * Converts a length in feet to cm.
   *
   * @param {number} foot - The length in feet to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToCm(foot) {
    this.validateInput(foot)
    const cm = foot * 30.48
    return parseFloat(cm.toFixed(2))
  }

  /**
   * Converts a length in yards to cm.
   *
   * @param {number} yard - The length in yards to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToCm(yard) {
    this.validateInput(yard)
    const cm = yard * 91.44
    return parseFloat(cm.toFixed(2))
  }

  /**
   * Converts a length in miles to cm.
   *
   * @param {number} mile - The length in miles to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToCm(mile) {
    this.validateInput(mile)
    const cm = mile * 160934.4
    return parseFloat(cm.toFixed(2))
  }

  /**
   * Converts a length in cm to inches.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToInch(cm) {
    this.validateInput(cm)
    const inch = cm / 2.54
    return parseFloat(inch.toFixed(2))
  }

  /**
   * Converts a length in cm to feet.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToFoot(cm) {
    this.validateInput(cm)
    const foot = cm / 30.48
    return parseFloat(foot.toFixed(2))
  }

  /**
   * Converts a length in cm to yards.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToYard(cm) {
    this.validateInput(cm)
    const yard = cm / 91.44
    return parseFloat(yard.toFixed(2))
  }

  /**
   * Converts a length in cm to miles.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToMile(cm) {
    this.validateInput(cm)
    const mile = cm / 160934.4
    return parseFloat(mile.toFixed(2))
  }

  /**
   * Converts a length in inches to m.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToM(inch) {
    this.validateInput(inch)
    const m = inch / 39.3701
    return parseFloat(m.toFixed(2))
  }

  /**
   * Converts a length in feet to m.
   *
   * @param {number} foot - The length in feet to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToM(foot) {
    this.validateInput(foot)
    const m = foot / 3.28084
    return parseFloat(m.toFixed(2))
  }

  /**
   * Converts a length in yards to m.
   *
   * @param {number} yard - The length in yards to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToM(yard) {
    this.validateInput(yard)
    const m = yard / 1.09361
    return parseFloat(m.toFixed(2))
  }

  /**
   * Converts a length in miles to m.
   *
   * @param {number} mile - The length in miles to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToM(mile) {
    this.validateInput(mile)
    const m = mile / 0.000621371
    return parseFloat(m.toFixed(2))
  }

  /**
   * Converts a length in m to inches.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToInch(m) {
    this.validateInput(m)
    const inch = m * 39.37
    return parseFloat(inch.toFixed(2))
  }

  /**
   * Converts a length in m to feet.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToFoot(m) {
    this.validateInput(m)
    const foot = m * 3.28084
    return parseFloat(foot.toFixed(2))
  }

  /**
   * Converts a length in m to yards.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToYard(m) {
    this.validateInput(m)
    const yard = m * 1.09361
    return parseFloat(yard.toFixed(2))
  }

  /**
   * Converts a length in m to miles.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToMile(m) {
    this.validateInput(m)
    const mile = m * 0.000621371
    return parseFloat(mile.toFixed(2))
  }

  /**
   * Converts a length in inches to km.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToKm(inch) {
    this.validateInput(inch)
    const km = inch * 0.0000254
    return parseFloat(km.toFixed(2))
  }

  /**
   * Converts a length in feet to km.
   *
   * @param {number} foot - The length in feet to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToKm(foot) {
    this.validateInput(foot)
    const km = foot * 0.0003048
    return parseFloat(km.toFixed(2))
  }

  /**
   * Converts a length in yards to km.
   *
   * @param {number} yard - The length in yards to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToKm(yard) {
    this.validateInput(yard)
    const km = yard * 0.0009144
    return parseFloat(km.toFixed(2))
  }

  /**
   * Converts a length in miles to km.
   *
   * @param {number} mile - The length in miles to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToKm(mile) {
    this.validateInput(mile)
    const km = mile * 1.609344
    return parseFloat(km.toFixed(2))
  }

  /**
   * Converts a length in km to inches.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToInch(km) {
    this.validateInput(km)
    const inch = km / 0.0000254
    return parseFloat(inch.toFixed(2))
  }

  /**
   * Converts a length in km to feet.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToFoot(km) {
    this.validateInput(km)
    const foot = km / 0.0003048
    return parseFloat(foot.toFixed(2))
  }

  /**
   * Converts a length in km to yards.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToYard(km) {
    this.validateInput(km)
    const yard = km / 0.0009144
    return parseFloat(yard.toFixed(2))
  }

  /**
   * Converts a length in km to miles.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToMile(km) {
    this.validateInput(km)
    const mile = km / 1.609344
    return parseFloat(mile.toFixed(2))
  }
}