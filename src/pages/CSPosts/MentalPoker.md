---
title: "Applied Cryptography: Mental Poker"
description: "Developed a game where two dishonest players can play a game of poker fairly using encryption and decryption techniques similar to the RSA algorithm, Adapted from the paper ‘Mental Poker’ published by Adi Shamir, Ronald L. Rivest, and Leonard M. Adleman"
githubLink: "https://github.com/S-Samiksha/DSAI-Project"
tags:
  [
    "Mental Poker",
    "RSA",
    "Cryptography",
    "Weiner Attack",
    "Brute Force Attack",
    "Continued Fractions",
    "TCP Network",
  ]
---

## Overview

1. Developed a game where two dishonest players can play a game of poker fairly using encryption and decryption techniques, over a TCP Network, similar to the RSA algorithm
2. Adapted from the paper ‘Mental Poker’ published by Adi Shamir, Ronald L. Rivest, and Leonard M. Adleman
3. Tried some simple attacks to test the algorithm

## Procedure on how to play Mental Poker

1. Alice shuffles and encrypts a deck of cards, then sends it to Bob E<sub>Alice</sub>(M).
2. Bob picks five of the ciphertexts (Bob picks a number from 1-52). and identifies these as Amy’s hand and sends them back to Amy. Amy then decrypts them, and she has her hand.
3. Bob now picks five cards and encrypts them with his own key E<sub>Bob</sub>(E<sub>Alice</sub>(M))= E<sub>Alice</sub>(E<sub>Bob</sub>(M))
4. He sends them back to Amy. Amy then decrypts the ciphertexts and sends to Bob. E<sub>Bob</sub>(M). Amy cannot find out what bob has as it is encrypted with Bob key.
5. Bob then decrypts with his decryption key and he now has his hand.
6. Both Amy and Bob cross out the number picked by Bob from the list of possible numbers to be picked
