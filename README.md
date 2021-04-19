Overall, this was designed to be a static and informational website, with the most dynamic features being the calendar and the event signup. Those have been designed to be maintainable on their own without consistent maintenance, so the main thing that will need to be updated regularly is content such as the executive board and gallery page in order to keep the website relevant to HEAL’s current status.

How to run locally from GitHub in terminal (first time)
1.	Type “mkdir HEAL-Central” to create a new folder
2.	Use “cd HEAL-Central” to navigate to that folder
3.	Type “git clone https://github.com/ofeller/HEAL-Central.git”
4.	Enter the following three commands in order: “cd client”, “npm install”, and “npm run start”. If you are on a Mac or Linux (Ubuntu), run “npm run start-mac” instead of “npm run start”. A server should launch, and you will be taken to the website’s frontend. If the server does not launch, go to http://localhost:8000/ in your browser.
5.	Open a new terminal window (while still leaving the first one open).
6.	In the new window, use cd to navigate to the directory you made.
7.	Enter the following three commands in order: “cd server”, “npm install”, “npx nodemon”. Another server should launch, responsible for the site’s backend
8.	You should now be able to run the site on your local server!

How to run locally from GitHub (after the first time)
1.	Use cd to navigate to the directory you created when first cloning the GitHub
2.	Enter the command “git pull” to update your local directory
3.	Follow steps 4-7 of the first section.
