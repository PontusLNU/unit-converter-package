# Unit converter
This is a library of unit converters. This is the first release and this release contains the converters below.
To install the package type this in your terminal:  
**npm i unit-converter-package**  
  
Import it in to your file like this, you can choose to import all or just the converter you want:  
  
**import { TemperatureConverter } from "unit-converter-package"**  
**import { TimeConverter } from "unit-converter-package"**  
**import { LengthConverter } from "unit-converter-package"**  
**import { WeightConverter } from "unit-converter-package"**  
**import { VolumeConverter } from "unit-converter-package"**  

## Time converter
This converter converts time either from 24-hour time to 12-hour time, or from 12-hour time to 24-hour time.  
Example: 
convert24HourTo12Hour("13:37") will result in 1:37PM  
  
Available methods:  
convert12HourTo24Hour(time)  
convert24HourTo12Hour(time)  

## Length converter
The Length converter can convert between any of these units: **US:** **Inch**, **Foot**, **Yard**, **Mile**, **Metric:** **mm**, **cm**, **m**, **km** rounded to two decimals.
You choose which unit to convert from and to and write it in camelCase.  
Example:  
convertInchToCm(1) will result in 2.54  
## Temperature converter
Converts temperature between celsius and fahrenheit rounded to two decimals.  
  
Available methods:  
convertFahrenheitToCelsius(fahrenheit)  
convertCelsiusToFahrenheit(celsius)  
  
Example:  
convertCelsiusToFahrenheit(20) will result in 68  
convertFahrenheitToCelsius(32) will result in 0  
  
## Weight converter
Converts weight between kg and lbs rounded to two decimals.  
  
Available methods:  
convertKgToLbs(kg)  
convertLbsToKg(lbs)  
  
Example:  
convertKgToLbs(1) will result in 2.20  
  
## Volume converter
Converts from litres to gallons and the other way around rounded to two decimals.  
  
Available methods:    
convertGallonToLitre(gallon)  
convertLitreToGallon(litre)  
  
Example:  
convertGallonToLitre(1) will result in 3.79
