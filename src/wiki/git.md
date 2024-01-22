# GIT & GITLAB DOCUMENTATION FOR MYBLUEATTITUDE

## Introduction

Git is a distributed version control system that enables managing version history in software projects. GitLab is the platform we will use in this project, offering additional features such as issue tracking, facilitating collaboration

## Installation

On Windows, you need to download Git from its official website: https://git-scm.com/download/win
You can also check if you have it already installed by typing the following command in a terminal:

>git --version

## BASIC USAGE

## Clone project

Since the project was already created on GitLab, the first step is to clone it. To do this, open a terminal, navigate to C:\, and create a folder with the desired name for our project:

>mkdir myblueattitude

Inside this folder, clone the project using the HTTPS link found on GitLab:

>C:\myblueattitude>clone [link HTTPS]

## Develop branch

The 'develop' branch will be the branch where we merge all our changes; it will serve as our main branch. Do NOT merge into the 'main' branch under any circumstances. To switch to this branch, go to the project folder:

>cd myblueattitude-fe

And then, type:

>git checkout develop

## Create new branches

To create a new branch, it's important to give it a clear name and follow the project's standard. If the branch is meant to add a new feature, the command structure would be:

>git checkout -b feature/[nickname]/1-menu

And if the branch is for bug fixes, the structure would be:

>git checkout -b fix/[nickname]/1-menu

The nickname represents our short name in Capgemini, and the number and following name should match those in the corresponding User Story from jira.

It's important that you write EVERYTHING in lowercase.

## Gitlab Merge Request

After committing the code, the merge request must be reviewed by at least 2 individuals and then by one of the tech leads before the merge can be accepted. Any identified issues should be resolved as part of the review procedure.