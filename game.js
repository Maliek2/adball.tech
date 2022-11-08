// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*

This external JavaScript file is intentionally empty.

Its purpose is merely to demonstrate the AMP validation error related to the use of external JavaScript files.

*/
class Game {
  constructor() {
    // Define variables
    this.score = 0;
    this.choice = '';
    this.muted = false;

    this.canvas = document.getElementById('gameContainer').getContext('2d');
    this.canvas.font = '24px Arial';

    this.playButton = document.getElementById('playButton');
    this.headsButton = document.getElementById('headsButton');
    this.tailsButton = document.getElementById('tailsButton');
    this.muteButton = document.getElementById('muteButton');

    adConfig({
      sound: 'on',
    });

    // On click listeners for the game's buttons.
    this.playButton.addEventListener('click', () => {
      this.erase();
      this.play();
    });

    this.headsButton.addEventListener('click', () => {
      this.choice = 'Heads';
      this.flipCoin();
    });

    this.tailsButton.addEventListener('click', () => {
      this.choice = 'Tails';
      this.flipCoin();
    });

    this.muteButton.addEventListener('click', () => {
      var soundString = this.muted ? 'on' : 'off';
      this.muteButton.innerHTML = this.muted ? 'Mute sound' : 'Un-mute sound';
      this.muted = !this.muted;
      adConfig({
        sound: soundString,
      });
    });

    this.erase();









// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

function enablerInitHandler() {
  // Start polite loading, or start animation,
  // load in your image assets, call Enabler methods,
  // and/or include other Studio modules.
}
