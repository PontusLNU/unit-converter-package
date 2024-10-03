# Unit converter
This is a library of unit converters. This is the first release and this release contains the converters below.  
## Time converter
This converter converts time either from 24-hour time to 12-hour time, or from 12-hour time to 24-hour time.  
Example: 
convert24HourTo12Hour("13:37") will result in 1:37PM  
## Length converter
The Length converter can convert between any of these units: **US:** **Inch**, **Foot**, **Yard**, **Mile**, **Metric:** **mm**, **cm**, **m**, **km** rounded to two decimals.
You choose which unit to convert from and to and write it in camelCase.  
Example:  
convertInchToCm(1) will result in 2.54  
## Temperature converter
Converts temperature between celsius and fahrenheit rounded to two decimals.  
Example:  
convertCelsiusToFahrenheit(20) will result in 68  
convertFahrenheitToCelsius(32) will result in 0  
## Weight converter
Converts weight between kg and lbs rounded to two decimals.  
Example:  
convertKgToLbs(1) will result in 2.20  
## Volume converter
Converts from litres to gallons and the other way around rounded to two decimals.  
Example:  
convertGallonToLitre(1) will result in 3.79