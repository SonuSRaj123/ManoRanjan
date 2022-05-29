# ManoRanjan
## Submission for Microsoft Engage 2022🌟

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/bhavyastar/ManoRanjan?logo=github&style=for-the-badge)](https://github.com/bhavyastar/) 
[![GitHub last commit](https://img.shields.io/github/last-commit/bhavyastar/ManoRanjan?style=for-the-badge&logo=git)](https://github.com/bhavyastar/) 
[![GitHub stars](https://img.shields.io/github/stars/bhavyastar/ManoRanjan?style=for-the-badge)](https://github.com/bhavyastar/awaaz/stargazers) 
[![My stars](https://img.shields.io/github/stars/bhavyastar?affiliations=OWNER%2CCOLLABORATOR&style=for-the-badge&label=My%20stars)](https://github.com/bhavyastar/awaaz/stargazers) 
[![GitHub forks](https://img.shields.io/github/forks/bhavyastar/ManoRanjan?style=for-the-badge&logo=git)](https://github.com/bhavyastar/awaaz/network)
[![Code size](https://img.shields.io/github/languages/code-size/bhavyastar/ManoRanjan?style=for-the-badge)](https://github.com/bhavyastar/awaaz)
[![Languages](https://img.shields.io/github/languages/count/bhavyastar/ManoRanjan?style=for-the-badge)](https://github.com/bhavyastar/awaaz)
[![Top](https://img.shields.io/github/languages/top/bhavyastar/ManoRanjan?style=for-the-badge&label=Top%20Languages)](https://github.com/bhavyastar/awaaz)
[![Issues](https://img.shields.io/github/issues/bhavyastar/ManoRanjan?style=for-the-badge&label=Issues)](https://github.com/bhavyastar/awaaz)
[![Watchers](	https://img.shields.io/github/watchers/bhavyastar/ManoRanjan?label=Watch&style=for-the-badge)](https://github.com/bhavyastar/awaaz/) 
![Python](https://img.shields.io/badge/Python-3.8-blueviolet)
![Framework](https://img.shields.io/badge/Framework-Flask-red)
![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-green)
![API](https://img.shields.io/badge/API-TMDB-fcba03)

## INTRODUCTION:
  In the era of the 21st century, when the world is running at a speed that seems like the speed of air, All developers, workers, or any other working profession is so much busy in their world! But, What about Entertainment (Manoranjan!), Entertainment is not just for health but it is also good for our soul! For this, my Manoranjan website will help you, as it contains at least more than 5000 movie datasets according to your choice! You always search on google for movie ratings, and know about top casts! This recommendation engine will help you to solve this! You don’t need to google each and everything about movie. You have our “Manoranjan App” for this, not only this, you can add your favorite movie like a to-do list for later!
  This application provides all the details of the requested movie such as overview, genre, release date, rating, runtime, top cast, reviews, recommended movies, etc.

The details of the movies(title, genre, runtime, rating, poster, etc) are fetched using an API by TMDB, https://www.themoviedb.org/documentation/api, and using the IMDB id of the movie in the API, I did web scraping to get the reviews given by the user in the IMDB site using `beautifulsoup4` and performed sentiment analysis on those reviews.

## Demo Video Link:
  https://drive.google.com/drive/folders/1CYe60EISbo3BZdVtXii8bPcQyT7yz9C4

## Website Link:
  https://manoranjan-engage.herokuapp.com/

  Don't worry if the movie that you are looking for is not auto-suggested. Just type the movie name and click on "enter". You will be good to go even though if you made some typo errors.

## Table of Contents:
* [ How to run the project? ](#how_to)
* [ Features ](#features)
* [ Tech Stack ](#technologystack)
* [ Workflow  ](#models) 
* [ Future Plans ](#futureplans)
* [ Features ](#images)

## <a name="how_to"></a>How to run the project?
1) Clone this repository on your system.
2) Install all the requirements mentioned in [requirements.txt](https://github.com/bhavyastar/ManoRanjan/blob/main/requirements.txt) by typing `pip install -r requirements.txt` on your terminal.
3) Also, don't forget to get your API key from https://www.themoviedb.org/. .
4) Replace my api key with yours in **both** the places (line no. 16 and 30) of `static/recommend.js` file .
5) Save all the changes.
6) Run the file `main.py` by executing the command `python main.py`.
7) Hurray! Have ManoRanjan.

## How to get the API key?

Create an account in https://www.themoviedb.org/, click on the `API` link from the left hand sidebar in your account settings and fill all the details to apply for API key. If you are asked for the website URL, just give "NA" if you don't have one. You will see the API key in your `API` sidebar once your request is approved.

## <a name="features"></a>Features :
1) Autocomplete- While searching for the movie, you are automatically suggested to fill it.
2) Unveil movie details-The name of the movie, genre, release date, overview, poster card are fetched from the api and displayed elegantly.
3) Movie cast- Top 10 cast of the movie is showcased with their original name and the name of the character in the movie.
4) Poster Card- You can click on 'Know More' to get to know more about your favourite cast,
5) Suggest similar movies- Display top 10 Recommended movies based on sentiments analysis
6) Reviews fetched from IMDB api are displayed on which sentiment analysis is done. 

## <a name="technologystack"></a>Tech Stack:
* _Python(Flask)_
* _HTML_
* _CSS_
* _JavaScript(JQuery)_
* _Bootstrap_
* _Jupyter Notebook_
* _Machine Learning_

## <a name="futureplans"></a>Future Plans:
 * Implement collaborative filtering based recommender.

 ### Sources of the datasets 

1. [IMDB 5000 Movie Dataset](https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset)
2. [The Movies Dataset](https://www.kaggle.com/rounakbanik/the-movies-dataset)
3. [List of movies in 2018](https://en.wikipedia.org/wiki/List_of_American_films_of_2018)
4. [List of movies in 2019](https://en.wikipedia.org/wiki/List_of_American_films_of_2019)
5. [List of movies in 2020](https://en.wikipedia.org/wiki/List_of_American_films_of_2020)

Please do ⭐ the repository, if it helped you in anyway.














