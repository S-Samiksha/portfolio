---
title: "Blockchain: Dutch Auction"
date: "Sep 2023 - Nov 2023"
description: "Pair Work: Building a Dutch Auction on Blockchain and Securing it against Re-Entrancy Attacks"
githubLink: "https://github.com/S-Samiksha/CZ4153_DutchAuction"
tags: ["Dutch Auction", "Solidity", "React", "NextJS", "Blockchain", "HardHat", "Smart Contracts"]
---

## Introduction

- Project was submitted to NTU obtain an A Grade and above for the overall course

## Project Overview

- To build a Dutch Auction using Solidity

- Carry out Re-Entrancy attacks and make the application robust against such attacks

- Successfully fulfilled the project requirements and overcame the challenges

- Write a paper on the potential security issues in LaTeX format. (Full Report not Shown)

## Dutch Auction 

Dutch Auctions are used in real platforms like Algorand. 

https://www.algorand.foundation/algo-auction-overview 


## Project Video

[Youtube](https://youtu.be/X0FkcZmnmsc)

## Project Requirements

1. Firstly, define and implement your new token using the ERC20 standard
2. Implement Dutch auction logic in another contract(s)
3. Only elapse for 20 minutes, either all tokens get sold out at clearing price no lower than the reserved price, or only part of total token supply get sold with the remaining tokens burned by the auction contract
4. Be able to distribute the token minted to legitimate bidders at the end of the auction
5. (bonus) Add tests to demonstrate the auction contract is resistant to reentry attack.

## Project Challenges

1. How to enforce auction duration/countdown clock in blockchain?
2. How to link/wrap your token contract with your auction contract?
3. How to "burn" the unsold tokens?
4. How to enforce successful bidder to pay Ether for the new token, (I.e., they can’t cancel the bid) and how to
   refund bids that are invalid?

## Other Challenges encountered

Solidity has no multi-programming. Dutch Auctions requires the auction to close if the time is up or if the clearing price is reached. This cannot be automatically detected by Solidity and the Smart Contract. There are two solutions - use of ChainLink or a repeated polling of the smart contract. The second method was selected. 

## Re-Entrancy Attack

A vulnerable version of the code is also available on the Github Link Provided to show the difference in codes.

## Security Issues

1. Re-Entrancy Attacks
2. Front-Running
3. Eclipse Attack

## Dutch Auction and prevention against common attacks

This section only highlights some that I wrote into my report.

1. Prevention of Displacement

In a Dutch auction system, attackers can manipulate transaction fees in a displacement front-running attack. This manipulation aims to prioritize transactions by adjusting the fees associated with the transactions. Bidders can set their transaction fees to ensure that their transactions get prioritized and mined by miners. Miners in this case are incentivized to include transactions with high fees into the blocks because they
earn these fees as rewards.

To carry out the attack, the attacker first monitors pending transactions within the network and identify specific transactions they would like to exploit.

Subsequently, the attacker quickly submits their own transaction with a higher fee attached to it, with aims to outbid the fees of the targeted transaction, to ensure that their transaction will be the one picked up by miners, causing honest bidders to be unable to buy any tokens at all.

However, as Dutch auctions keeps a list of bidders based in FIFO format, there is no incentive for attackers to attack. Even if attackers the attacker’s transaction gets approved first, the attackers will bid for the ERC20 Token successfully. In this case, they will have to pay ETH and be treated like an honest bidder. Even if they gain competitive advantage, this advantage provides no monetary incentives for the attacker.

2. Prevention of Insertion

Utilizing mathematical principles and the Dutch auction principles, prices reduce over time and sellers only receive their tokens after the auction ends, it inherently prevents insertion front-running attacks as the price is set either when the time runs out or when the clearing price is reached. Hence, there would not be a variation in prices for the attacker to profit from.
