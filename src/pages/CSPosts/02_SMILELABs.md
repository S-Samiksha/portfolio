---
title: "Computer Vision: Recognizing Images in the Wild"
date: "Sep 2023 –  Nov 2023"
description: "Group Project: A Computer Vision Project to determine kinship given two images using data provided by Kaggle"
githubLink: "https://github.com/S-Samiksha/CZ4041_SMILE_LABS"
tags:
  [
    "Computer Vision",
    "Image Augmentation",
    "Siamese Network",
    "FaceNet",
    "ResNet",
    "Machine Learning",
    "Python",
    "Predictions",
  ]
---

## Project Overview

As part of NTU's CZ/CE4041 Machine Learning Module, the team was tasked to compete in a Kaggle Competition (closed). The team chose to do the Northeastern SMILE Lab - Recognizing Faces in the Wild. The aim of the competition is to determine the probability of kinship given two images. In summary, our group used the siamese network to help achieve a score of 0.907 on the Kaggle Public Leaderboard.

## Proposed Solutions

1. Randomized data set

Randomizing the images obtained allows us to have a different variety of images to train on.

2. Fully Connected Layers

Changing the fully connected layers allows us to have more flexibility and control over the model whilst still using a pre trained model. The fully connected layers that are important are the DropOut Layer and the BatchNormId.

3. Pre-trained Model, Learning Rate, Adam Optimizer and Loss Criterion

A pre-trained model was used. Facenet has been trained on the vggface2 image dataset.

4. Constantly changing data augmentation

A constantly changing data augmentation was implemented by the team. It is unique and has not been used by those in the competition.
