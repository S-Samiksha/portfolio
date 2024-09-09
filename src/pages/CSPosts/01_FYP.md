---
title: "Final Year Project"
date: "Aug 2023 - May 2024"
description: "Individual Project: Building a Reputation Mechanism for E-Commerce Platforms on Blockchain"
githubLink: "https://github.com/S-Samiksha/Reputation_Mechanism"
tags:
  [
    "Reputation Mechanism",
    "Solidity",
    "React",
    "NextJS",
    "Python",
    "HardHat",
    "Applied Mathematics",
    "Smart Contracts"
  ]
---

## Project Overview

In recent years, e-commerce platforms have risen. An important feature in these platforms is the ratings or reviews given to the products sold by the sellers on these platforms. Many buyers rely on these ratings or reviews to make informed decisions on whether to purchase the product. This underscores the importance of online reviews in e-commerce platforms. However, these rating scores are susceptible to adversarial threats.

Since majority of these platforms having centralized systems, a compromise in the centralized system could easily allow attackers to manipulate reviews and ratings. Blockchain offers a platform where the contracts are enforced by code. Once these contracts have been deployed into the blockchain, it is immutable by any party. Hence, preventing any manipulation or tampering of the code or the state of the contract. This is a solution to a centralized system
which could be compromised easily.

This project focuses on building a decentralized reputation system to compute reputation scores and the product’s review scores. It aims to build a mechanism to prevent spam attacks, manipulation by adversaries, and any collusion attacks. It aims to build a system that incentivizes honest behaviour from the buyers such that they leave credible reviews. Furthermore, this project aims to create a mechanism that will allow maximum flexibility for e-commerce sites. This would allow e-commerce sites to choose how tolerant they want to be against adversarial attacks.

## Methodology

1. Create a reputation mechanism for buyers
2. Create a reputation mechanism for sellers
3. Simulate it in python to find the best hyperparameters 
4. Code it in Solidity using FixedPointMathLib for decimal places
5. Create the front-end for users to interact with the smart contract

## Simulations


##### Simulation 1
To test if a user can artificially inflate his reputation score within a short period of time. Time gap between each transaction for the same product from the same seller is at 1 hour. 


##### Simulation 2 
To test if a user can artificially inflate his reputation score within a short period of time. Time gap between each transaction for the same product from the same seller is at 24 hour.

##### Simulation 3
To test if a user can artificially inflate his reputation score within a short period of time. Time gap between each transaction for the same product from the same seller is arbitrarily set between a range of 0 to 168 hours or 0 to 7 days.

##### Simulation 4
Part a: To test if a user can create multiple new accounts (all untrusted) to increase reviews 

Part b: To test if a user can create multiple new accounts (all untrusted) to reduce reviews 

##### Simulation 5
Part a: To test if a user can create multiple new accounts (all trusted) to increase reviews 

Part b: To test if a user can create multiple new accounts (all trusted) to reduce reviews

##### Simulation 6
Part a: Test if the same account, starting with no reputation, can increase the review over time. The rating is incremented by one according to the present average value 

Part b: Test if the same account, starting with no reputation, can decrease the review over time. The rating is decremented by one according to the present average value

## Results

For Results, contact me :)


## Acknowledgements

I would like to extend my deepest gratitude to Dr Liu Siyuan for her continuous support and guidance during this FYP project. Her invaluable advice has not only helped me become more knowledgeable in designing the reputation mechanism and blockchain but also become a better developer.

## For Full Report

Please contact me :)
