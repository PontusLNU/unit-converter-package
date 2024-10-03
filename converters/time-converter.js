/**
 * A class that converts the time between 12-hour and 24-hour formats.
 */
export default class TimeConverter {
  /**
   * Validate the input to ensure it is in the correct format.
   *
   * @param {string|number} time - The time to validate.
   * @returns {object} - The time in the correct format.
   * @throws {Error} - Throws an error if the input is not in the correct format.
   */
  handle24HourInput(time) {
    let formattedTime = time.toString().replace(/[^0-9]/g, '')

    if (formattedTime.length === 3) {
      formattedTime = '0' + formattedTime
    }

    if (formattedTime.length !== 4) {
      throw new Error('Invalid time format, please provide a time in 24-hour format')
    }

    const hours24 = formattedTime.slice(0, 2)
    const minutes = formattedTime.slice(2, 4)

    if (hours24 < 0 || hours24 > 23 || minutes < 0 || minutes > 59) {
      throw new Error('Invalid time format, please provide a time in 24-hour format')
    }

    return { hours24, minutes }
  }

  /**
   * Validate the input to ensure it is in the correct format.
   *
   * @param {string} time - The time to validate.
   * @returns {object} - The time in the correct format.
   * @throws {Error} - Throws an error if the input is not in the correct format.
   */
  handle12HourInput(time) {
    let formattedTime = time.toString().replace(/[^0-9aAmpPmM]/g, '')

    if (formattedTime.length === 5) {
      formattedTime = '0' + formattedTime
    }

    if (formattedTime.length !== 6) {
      throw new Error('Invalid time format, please provide a time in 12-hour format')
    }

    const hours12 = parseInt(formattedTime.slice(0, 2))
    const minutes = formattedTime.slice(2, 4)
    const period = formattedTime.slice(4, 6).toUpperCase()

    if (!/^(AM|PM)$/i.test(period)) {
      throw new Error('Invalid time format, please provide a time in 12-hour format')
    }

    if (hours12 < 0 || hours12 > 12 || minutes < 0 || minutes > 59) {
      throw new Error('Invalid time format, please provide a time in 12-hour format')
    }

    return { hours12, minutes, period }
  }

  /**
   * Converts the time from 24-hour format to 12-hour format.
   *
   * @param {string|number} time - The time in 24-hour format to convert.
   * @returns {string} - The time in 12-hour format.
   * @throws {Error} - Throws an error if the input is not in the correct format.
   */
  convert24HourTo12Hour(time) {
    const { hours24, minutes } = this.handle24HourInput(time)

    const period = hours24 >= 12 ? 'PM' : 'AM'
    const hours12 = hours24 % 12 || 12

    return `${hours12}:${minutes}${period}`
  }

  /**
   * Converts the time from 12-hour format to 24-hour format.
   *
   * @param {string} time - The time in 12-hour format to convert. 
   * @returns {string} - The time in 24-hour format.
   * @throws {Error} - Throws an error if the input is not in the correct format.
   */
  convert12HourTo24Hour(time) {
    const { hours12, minutes, period } = this.handle12HourInput(time)

    let hours24 = hours12

    if ( period === 'PM' && hours12 < 12) {
      hours24 = hours24 + 12
    }

    if ( period === 'AM' && hours12 === 12) {
      hours24 = 0
    }

    if ( period === 'AM' && hours24 < 10) {
      hours24 = '0' + hours24
    }

    return `${hours24}:${minutes}`
  }
}