/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "yours", "theirs", "our", "his", "her", "its", "their"];
  let adj = [
    "great",
    "big",
    "grumpy",
    "lovely",
    "shiny",
    "fast",
    "old",
    "smart",
    "strong"
  ];
  let noun = [
    "cat",
    "dog",
    "singer",
    "tree",
    "car",
    "house",
    "computer",
    "robot",
    "book"
  ];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        console.log(pronoun[p] + adj[a] + noun[n] + ".com");
      }
    }
  }
};
