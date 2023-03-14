---
title: 'Data Logger - Temperature & Humidity'
date: '2022-01-19'
---

# Data Logger

### A. Specification :

1. Data Loggers can be accessed via the internet either via a mobile-phone or computer.
2. The data logger does not depend on the cloud server so it can be independent.
3. Can display temperature/temperature and humidity/humidity measurement values ​​in real time (actual) both locally and on-line (via the internet).
4. The local display is in the form of a 64x48 pixel OLED, and only displays values ​​in numbers and units.
5. The measurement value is displayed via a web browser in a numbered/gauge image.
6. Provides a visual warning when the measurement value exceeds the alarm value.
7. Provides trending charts for one hour in real time.
8. Trending charts can also be used to display daily averages for a year.
9. There is a facility to provide daily reports in the form of pdf files.
10. Report files (pdf) can be downloaded and can be shared by WA or a separate email.
11. Before downloading the data is displayed in tabular form based on the clock sequence for 24 hours.
12. Alarm setting data for temperature and humidity can be changed (reset) to adjust to actual conditions.
13. Changes to the settings also apply to sensor parameters such as low and high ranges, units, etc., and must be placed in one display.
14. Only certain officials can make the change.
15. Officers who make changes must enter/login first (username & password) so they can make parameter changes.

### B. Archive : [archive](https://github.com/slametsampon/dataLogger)

### C. Hardware : [hardware-dwg](https://github.com/slametsampon/dataLogger/blob/main/images/dataLogger.png)

####

1. Use Wemos D1 R1 as basic module - ESP's [shield](https://github.com/slametsampon/dataLogger/blob/main/images/esp8266-wemos-d1-mini-nodemcu-pinout.png)
2. DHT 11 - sensor Temperature dan Humidity[DHT11](https://github.com/slametsampon/dataLogger/blob/main/images/dht-temperature-humudity-sensor-pinout.jpg)
3. OLED 64 x 48 Pixel - Local Display [OLED](https://github.com/slametsampon/dataLogger/blob/main/images/oled-shield-v200-for-wemos-d1-mini-066-inch-64x48-iic-i2c-two-button-1-1-1024x1024.jpg)
4. 3-Module were stacked bottom - up

### D. Software : [software-Cfg](https://github.com/slametsampon/dataLogger/blob/main/config/dataLogger.md)
