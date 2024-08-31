---
title: "DSAI Project: Brazillian Olist E-commerce Database"
description: "Predicting Consumer Satisfaction using Machine Learning."
githubLink: "https://github.com/S-Samiksha/DSAI-Project"
tags:
  [
    "Data Science",
    "Machine Learning",
    "Random Forests",
    "E-Commerce",
    "Predictions",
    "Cross-Validated Grid Search",
    "Hyper Parameter Tuning",
  ]
---

## Predicting Consumer Satisfaction

For Full Details, Please Visit the Github Page!

#### The Research Question:

How different variables such as **actual delivery time**, **the difference between actual and estimated wait time**, **freight value**, **payment value**, **payment installment** affect the **review score** in each of the different **product type categories**, `Houseware`, `auto`, `furniture decor`, `computer accessories`, `health beauty`, `sports leisure`?

#### About the Database

Kaggle provided many datasets among which only a selected few were merged and cleaned.

Taken from: https://www.kaggle.com/olistbr/brazilian-ecommerce?select=olist_products_dataset.csv
The above data sets provided the necessary data on the actual delivery time, the difference between actual and estimated wait time, freight value, payment value and payment instalment. Freight value, payment value and payment instalment were primary data provided by Kaggle.

Actual wait time and the difference between actual and estimated wait time had to be procured from the timestamp Olist provided in its datasets.

#### The steps taken before machine learning was carried out

1.  Merging Datasets
2.  Filtering reviews based on order status, order status has to be set to delivered
3.  Reclassifying review score into class 0 and class 1
4.  Splitting the dataset into 6 product categories
5.  Removing duplicates and null values
6.  Balancing review score

## Machine Learning

#### Machine Learning: Decision Tree

A decision tree is a basic machine learning tool. It uses the different numerical predictors to predict whether the review score is of class 0 or class 1. The machine learning outcome changes every time the ipynb is run.

#### Machine Learning: Random Forest

Another option was to run the random forest algorithm. A random forest uses a 'forest', a multitude of decisions trees that help to classify the data points into the different review scores. The reason why random forest works so well is that "A large number of relatively uncorrelated models (trees) operating as a committee will outperform any of the individual constituent models." (sklearn).

#### Machine Learning: Cross-Validated Grid Search

However, an additional step must be done to reduce the false positive. Tuning of hyperparameters must be done to achieve the highest possible classification accuracy, true positive and true negative and lowest possible false positive and false negative. Hyperparameters are used to make the random forest. There are many hyperparameters but for the scope of this project adept and n_estimators were chosen. max_depth is the maximum depth each decision tree goes in the 'forest' of trees. n_estimators is the number of trees in the forest.

To find the best hyperparameters a Grid Search is done.

## Summary

In Summary, an improvement in overall statistics from the decision tree to the random forest (after Grid Search) is seen. Further improvements can be made by increasing the max_depth.

Our team has learnt much through this project. We have learnt how to use a random forest, tune hyperparameters and clean data such that it results in a better machine learning outcome.

We also learnt that sellers should liaise with a delivery team that can deliver faster to obtain lower actual times and actual minus estimated time to increase their review score. Similarly, to attain lower freight value, sellers can order in bulk or find companies that allow lower freight value.

To achieve lower payment value, sellers should Create deals with credit card companies or banks to enable the lowest payment value. To achieve lower payment instalments sellers can create better and a more variety of payment instalment plans.

Using our Machine Learning Outcome, sellers will be able to predict their review scores depending on how their variables are changed. This will provide useful insights specific to their business and allow them to modify the variables such that they get higher review scores, and thus garner more business.
