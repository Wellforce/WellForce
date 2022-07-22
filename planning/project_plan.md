# Project Plan

Pod Members: **Abdirahman Ali^2 and Ikenna Onuora**

## Problem Statement and Description
Salesforce employees would have a website to find other salesforce employees with similar wellness preferences as them

## User Roles and Personas

Johnny has been working in salesforce for a decade but he recently moved to a new team in a different state and as he moved he also moved away from all of his friends at his old location, these friends would be people he would run with. People he would go to the gym with and a multitude of other wellness activities. When he came to his new location he wanted to make new friends so he went on our wellness app so he could make new friends while being on track for his wellness goals.

## User Stories

1. As a salesforce employee I want to find other salesforce employees with the same wellness goals as me to improve my physical wellbeing.
2. As a salesforce employee I want to find a wellness partner to take place in activities with me so that I could build more self confidence and a community within the company.
3. As a salesforce employee I want to see a list of other employees that best match my wellness/fitness interests.
4. As a salesforce employee I want to be able to add wellness activies that aren't shown on the list.
5. As a salesforce employee I want to be able to journal my progress and wellness tasks on my journey to my best self.
6. As an employee who is looking for a wellness partner I want to be able to contact other potential wellness partners through Slack/Contacts to connect    with that partner for future wellness actiity sessions.

## Pages/Screens

List all the pages and screens in the app. Include wireframes for at least 3 of them.
https://www.figma.com/file/60HXbrvEZPITZG4yywvPZG/WellForce-Application?node-id=0%3A1
Home page
register 
log in
preferences page
activity

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
