# Atlas Guide
## Goals
Atlas Guide seeks to provide travelers a unique way of experiencing the cities and towns they choose to visit by suggesting locations based on itineraries of other Atlas Guide users. Atlas Guide can also suggest locations near the user's itinerary to help guide travellers to fun events and locations during their trips. 

## Installation Notes
This application requires the following environment variables to be set on the server. Add a file titled .env to the root of your server with the following variables set to the values you would like.
- SECRETKEY: This is a string of any length and is used for secure authentication of users' sessions.
- DBUSER: This is the username that the db runs under
- PORT (optional):  Defaults to Port 3000 

Update /server/cofig/config.json with the proper username for the database.

## Todo
Setup twilio to text users upcoming events
Add events from http://www.sftravel.com and www.sftourismtips.com