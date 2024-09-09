---
title: "Panel Data Analysis"
date: "Mar 2024 –  Apr 2024"
description: "Group Project: Does happiness increase a country’s GDP? "
tags:
  [
    "Time Series Analysis",
    "Panel Data Analysis",
    "Instrumental Variable",
    "Fixed Effects",
  ]
---

## Project High-Level Overview

- Utilized Python and STATA to analyse data from Kaggle using econometrics models to determine how the life ladder score (perceived social support as the instrument variable) affected GDP per capita

- Used pooled OLS, pooled OLS with IV, Fixed Effect, Fixed Effect with IV and Two Way Fixed Effect models to draw deeper insights into country level fixed effects, time fixed effects on the data set

## How is Perceived Social Support a Good Instrumental Variable?

Given the standard econometrics assumptions, we cannot have reverse causality. Life ladder is a measure of happiness which is the independent variable. GDP per capita is the dependent variable. Money can make you happy. Being happier can also increase your ability to make money. Therefore, there is reverse causality.

The variable Perceived Social Support is used as an Instrumental Variable because it is a a perceived concept. This variable measures how much a person can rely on somebody else for help and support. This value is obtained through surveys conducted in the country. This variable is not a measure of the monetary support given by governments or any organization. Hence, this is a good IV to substitute Life Ladder and run the econometrics models.

## Data Analysis Process

1. OLS
2. OLS with IV
3. Fixed Effects
4. Fixed Effects with IV
5. Two Way Fixed Effects
