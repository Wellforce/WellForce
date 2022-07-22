# Project Plan

Pod Members: **Add Pod Members Names**

## Problem Statement and Description

Insert the latest summary of your problem statement and app description.

## User Roles and Personas

Johnny has been working in salesforce for a decade but he recently moved to a new team in a different state and as he moved he also moved away from all of his friends at his old location, these friends would be people he would run with. People he would go to the gym with and a multitude of other wellness activities. When he came to his new location he wanted to make new friends so he went on our wellness app so he could make new friends while being on track for his wellness goals.

## User Stories

List the current user stories you will implement.

## Pages/Screens

List all the pages and screens in the app. Include wireframes for at least 3 of them.

## Data Model


User Table

id
Serial Primary Key
password
TEXT NOT NULL


first_name
TEXT NOT NULL


last_name
TEXT NOT NULL


email
TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN EMAIL) > 1)


Location 
TEXT NOT NULL





Activity Table 

id
Serial Primary Key
Meditation
Integer NOT NULL DEFAULT 0


Journalism


Integer NOT NULL DEFAULT 0


Yoga
Integer NOT NULL DEFAULT 0


Resistance Training
Integer NOT NULL DEFAULT 0


Running
Integer NOT NULL DEFAULT 0








Preferences Table

Id 
Serial Primary Key
User_id
INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
Activity_id
INTEGER NOT NULL REFERENCES Activity(id) ON DELETE CASCADE






## Endpoints

List the API endpoints you will need to implement.

Working and Finishing the endpoints 
CRUD ,HTTP VERB, DESCRIPTION, USER STORIES
CREATE, POST , To create a new user account, 3
UPDATE, PUT, To update the user preferences, 1
CREATE, POST, User chooses preferences and submits them, 1
READ, GET, Takes preferences submitted and posts them to the activity matching pages, 1











***Don't forget to set up your Issues, Milestones, and Project Board!***
