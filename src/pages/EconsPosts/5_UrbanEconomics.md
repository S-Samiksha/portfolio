---
title: "Urban Economics: A hedonic model to determine factors affecting HDB resale prices"
description: "Group Project: Automation of Potential Impact Factor "
tags: ["Hedonic Model", "Machine Learning", "Housing Prices", "Predictions"]
---

## Project Overview

- Built a hedonic model to determine factors affecting HDB resale prices using Econometric Analysis and OLS regressions

- Anomalies found were used to build a Random Forest Model in Python3, achieving over 90% accuracy

## Abstract

In this study, a hedonic pricing model is used to find out if better accessibility to the CBD meant higher prices as suggested by theory. It was found that resale prices increase as the distance between HDB and CBD is reduced. While the theory held true generally across Singapore, deviations were found when OLS regressions were done on different regions and flat types. Prices became positively correlated with factors such as distance to CBD and/or distance to nearest MRT Stations. This study explores the reasons behind this deviation which is useful for house investors and buyers when purchasing an HDB.

## Data Cleaning

1. Adjusting prices to 2017
2. Postal Code Collection
3. Variable Transformations (Lease remaining 86 years and 11 months has to be converted to decimal places)

## Results

By conducting Econometrics Analysis, certain regions and certain types of HDB housing types, show an opposite behaviour from theory. Theory states that the housing prices should increase as you move closer to the CBD. However, certain regions and certain types of HDB housing types increase in prices, when moving AWAY from the CBD.

## Economics to Machine Learning

Out of curiosity, as an extension, our team decided to explore machine learning to help predict housing prices. Using the previous analysis, we know that certain regions and types of HDB display different behaviours. Hence, it is not advisable to place all data points into one model. For the purposes of this project, random forest was using on Executive Housing Types and the Central District.

However, given more time, neural networks can be explored.
