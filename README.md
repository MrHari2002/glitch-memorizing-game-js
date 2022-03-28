 Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Hengrui Jia**

Time spent: **20** hours spent in total

Link to project: https://glitch.com/edit/#!/wise-messy-burrito

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/VOM7qG6XVV.gif)
![](gif2-link-here)
![](gif3-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://stackoverflow.com/

When I was having problem with closing audio context I researched online about the details of how the functions are used.

https://developer.mozilla.org/en-US/docs/Web/API/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The challenge I encountered was that when I was implementing the music module I had a lot of misunderstanding of how did that work. I was given a chunk of code that implemented a lot of functionality that I wasn't too sure about. I had a problem that when I was pressing the button I was able to make the sound but I was not able to stop it. So I first looked at the original code and tried to find whenever it was played and whenever it was not played and I looked into the functionality of the context. Still I was not able to solve the problem. So I halted for another day and looked it again the next day. I decided to go use the debug function of the browser(F12 -> Console) and I found out that I was not doing correctly with the name of one of the function.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I am wondering what ways were the Apple website implemented so that they could have a smooth transition from one page to another. How a page could direct to another page. What ways would I be able to code with html,JS, and CSS in VS code. Do web developers usually work together between the front and back end? How to enhance the security of a website so that users could log in to the website.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I wanted to add the audio like finding or recording some guitar chords and add it to the button instead of one single tone. I also wanted to make this game progressively harder by making one more turn for the user after each game and see when they would fail. I wanted to make this game a multiplayer game in which many players would be able to compare their score even compete against each other.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=GcEWFH9FmAI)


## License

    Copyright [Hengrui Jia]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
