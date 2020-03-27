# Studio Ghibli's Delivery Service
Studio Ghibli's Delivery Service is a website allowing users to login and view all the Studio Ghibli movies. Users can watch movie trailers and add movies to their personal 'Movies Watched' and 'Watch List'.

This project was created by students from The Flatiron School - Denver for Module 2 of the Immersive Software Engineering Program.

## Installation
This website can currently only be accessed from a local environment. Please fork and clone this repository for the front-end, as well as the back-end repository:<br>https://github.com/kadrianne/studio-ghibli-delivery-service-backend

Run back-end server first on port 3000: http://localhost:3000/. 

Run front-end server on port 3001: http://localhost:3001/.

## Built With
Frontend: HTML, CSS, JavaScript<br>
Backend: Ruby v2.6.1, Rails API v.6.0.2.2, SQLite3 v1.4

## Features
![](Studio_Ghibli_GIF.gif)

### Create Account/Login
The homepage contains a 'Create Account' form for new users and 'Login' form for existing users. Once a new account is created or an existing user is logged in, the user will be directed to the 'Movies' page. If a user tries to login with an incorrect username or password, the user will be redirected to the homepage.

**Future implementation:**
- Validation for creation of account for existing username
- Validation for login with incorrect username and/or password

### View All Movies
The 'Movies' page displays all Studio Ghibli movies and information from the /movies API endpoint. Each movie has 3 clickable buttons: 'Watch Trailer', 'Add to Watch List', 'I've watched this!' There is also a link to view the logged in user's profile.

### Watch Trailer
Each 'Watch Trailer' button links to a 'Trailer' page for each movie that includes an embedded Youtube video to watch on the page. This trailer page also includes the 'Add to Watch List' and 'I've watched this!' buttons as well as a link back to the movies page.

### Add Movie to Watch List
Each 'Add to Watch List' button, when clicked, adds the corresponding movie to the user's 'Watch List' and directs the user to the profile page. The button is also disabled for that movie when the user returns to the 'Movies' page. On the backend, a relationship is created between the user and movie and posted to the /unwatched_movies API endpoint.

### Add Movie to Movies Watched
Each 'I've watched this!' button, when clicked, adds the corresponding movie to the user's 'Watched Movies' and directs the user to the profile page. The button is also disabled for that movie when the user returns to the 'Movies' page. On the backend, a relationship is created between the user and movie and posted to the /watched_movies API endpoint.

### View Profile
The logged in user's Profile displays 2 lists: 'Movies I've Watched' and 'My Watch List' based on the movies that were added either from the 'Movies' page or from the 'Trailer' page. Each movie on each list has a button to remove the corresponding movie from that list.

### Remove Movie from Watch List
Each 'Remove from Watch List' button, when clicked, deletes the corresponding movie from the user's 'Watch List' and refreshes the page. On the backend, the relationship is deleted between the user and movie from the unwatched_movies table in the database.

### Remove Movie from Watched Movies
Each 'Remove from Watched Movies' button, when clicked, deletes the corresponding movie from the user's 'Watched Movies' and refreshes the page. On the backend, the relationship is deleted between the user and movie from the watched_movies table in the database.

# Acknowledgements
## Authors
Denise Magner: https://github.com/deerenae<br>
Todd Carlson: https://github.com/toddster79<br>
Kristine Du: https://github.com/kadrianne

## Credits
Movie Images: https://www.studioghibli.com.au/<br>
Movie Trailers: https://www.youtube.com/user/MadmanOnline/