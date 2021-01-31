# Mr. Roboger's Neighborhood

##### Date: **1/22/2021**

#### By **_Salim Mayan_**

## Description

Web application that takes a number from user and returns a range of numbers from **0** to the **user inputted number** with the following exceptions:

- Numbers that contain a 1: all digits are replaced with _"Beep!"_

- Numbers that contain a 2: all digits are replaced with _"Boop!"_

- Numbers that contain a 3: all digits are replaced with _"Won't you be my neighbor?"_

These exceptions are handled from least to most important. The first exception will apply unless the second exception does, and the same with the second and third. See below examples ...

- The number 13 will be replaced with _"Won't you be my neighbor?"_

- The number 21 will be replaced with _"Boop"_.

- The number 32 will be replaced with _"Won't you be my neighbor?"_

Application allows user to enter a new number and see new results over and over again.

| **Spec** |
```
Describe: beepBop()
Test: "It should return an array of numbers from 0 to user inputted number while substituting 1 for "Beep!""
Expect(beepBoop(1)).toEqual(["0","Beep!"]);

Describe: beepBop()
Test:"It should return an array of numbers from 0 to user inputted number while substituting 1 for "Beep!", and 2 for "Boop!"" 
Expect(beepBoop(2)).toEqual(["0","Beep!","Boop!"])

Describe: beepBop()
Test:"It should return an array of numbers from 0 to user inputted number while substituting 1 for "Beep!", 2 for "Boop!", and 3 for "Won't you be my neighbor?""
Expect(beepBop(3)).toEqual(["0","Beep!","Boop!","Won't you be my neighbor?"])

Describe: beepBop()
Test:"It should return an array of numbers from 0 to user inputted number while substituting "Beep!" for any number that has 1 as a digit"
Expect(beepBop(10)).toEqual(["0","Beep!","Boop!","Won't you be my neighbor?", "4","5","6","7","8","9","Beep!"])

Describe: beepBop()
Test:"It should return an array of numbers from 0 to user inputted number while substituting "Boop!" for any number that has 2 as a digit, overriding 1s"
Expect(beepBop(12)).toEqual(["0","Beep!","Boop!","Won't you be my neighbor?", "4","5","6","7","8","9","Beep!","Beep!","Boop!"])

Describe: beepBop()
Test:"It should return an array of numbers from 0 to user inputted number while substituting "Won't you be my neighbor?" for any number that has 3 as a digit, overriding 1s and 2s"
Expect(beepBop(32)).toEqual(["0","Beep!","Boop!","Won't you be my neighbor?","4","5","6","7","8","9","Beep!","Beep!","Boop!","Won't you be my neighbor?","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!","Boop!","Won't you be my neighbor?","Boop!","Boop!","Boop!","Boop!","Boop!","Boop!","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?"])

Describe: beepBop()
Test:"It should return an array of numbers in "reverse" order if checkbox "Return output in Reverse order" is clicked"
Expect(beepBop(32)).toEqual(["Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Boop!","Boop!","Boop!","Boop!","Boop!","Boop!","Won't you be my neighbor?","Boop!","Boop!","Boop!","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Won't you be my neighbor?","Boop!","Beep!","Beep!","9","8","7","6","5","4","Won't you be my neighbor?","Boop!","Beep!","0"])

Describe: beepBop()
Test:"It should update string for 3s from "Won't you be my neighbor?" to "Won't you be my neighbor, Travis?" if string "Travis" is entered into Optional "Name" field"
Expect(beepBop(32)).toEqual(["Won't you be my neighbor, Travis?","Won't you be my neighbor, Travis?","Won't you be my neighbor, Travis?","Boop!","Boop!","Boop!","Boop!","Boop!","Boop!","Won't you be my neighbor, Travis?","Boop!","Boop!","Boop!","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Won't you be my neighbor, Travis?","Boop!","Beep!","Beep!","9","8","7","6","5","4","Won't you be my neighbor, Travis?","Boop!","Beep!","0"])

Describe: beepBop()
Test:"It should update string for 3s from "Won't you be my neighbor?" to "Won't you be my neighbor, Travis?" if string "Travis" is entered into Optional "Name" field. Also it should return an array of numbers in "reverse" order if checkbox "Return output in Reverse order" is clicked"
Expect(beepBop(32)).toEqual(["Won't you be my neighbor, Travis?", "Won't you be my neighbor, Travis?", "Won't you be my neighbor, Travis?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor, Travis?", "Boop!", "Boop!", "Boop!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Won't you be my neighbor, Travis?", "Boop!", "Beep!", "Beep!", "9", "8", "7", "6", "5", "4", "Won't you be my neighbor, Travis?", "Boop!", "Beep!", "0"])
```
## Link to this site on GitHub Pages

## Setup/Installation Requirements

1. Clone this repository.

2. To run program open **_index.html_** from browser (enter a **number** and watch the beeps and boops abound!)

3. Page is also hosted on [Github](https://rekjal.github.io/Robogers_Neighborhood_E2_WW3)

## Known Bugs

* No known bugs at this time.

## Technologies Used

* HTML

* CSS

* Bootstrap (v4.5.3)

* JS (v3.5.1)

* JQuery

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2021 **_{Salim Mayan}_**