# ManoRanjan
## Submission for Microsoft Engage 2022🌟

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/bhavyastar/ManoRanjan?logo=github&style=for-the-badge)](https://github.com/bhavyastar/ManoRanjan) 
[![GitHub last commit](https://img.shields.io/github/last-commit/bhavyastar/ManoRanjan?style=for-the-badge&logo=git)](https://github.com/bhavyastar/ManoRanjan) 
[![My stars](https://img.shields.io/github/stars/bhavyastar?affiliations=OWNER%2CCOLLABORATOR&style=for-the-badge&label=My%20stars)](https://github.com/bhavyastar/ManoRanjan/stargazers) 
[![GitHub forks](https://img.shields.io/github/forks/bhavyastar/ManoRanjan?style=for-the-badge&logo=git)](https://github.com/bhavyastar/ManoRanjan/network)
[![Code size](https://img.shields.io/github/languages/code-size/bhavyastar/ManoRanjan?style=for-the-badge)](https://github.com/bhavyastar/ManoRanjan)
[![Languages](https://img.shields.io/github/languages/count/bhavyastar/ManoRanjan?style=for-the-badge)](https://github.com/bhavyastar/ManoRanjan)
[![Top](https://img.shields.io/github/languages/top/bhavyastar/ManoRanjan?style=for-the-badge&label=Top%20Languages)](https://github.com/bhavyastar/ManoRanjan)
[![Issues](https://img.shields.io/github/issues/bhavyastar/ManoRanjan?style=for-the-badge&label=Issues)](https://github.com/bhavyastar/ManoRanjan)
[![Watchers](	https://img.shields.io/github/watchers/bhavyastar/ManoRanjan?label=Watch&style=for-the-badge)](https://github.com/bhavyastar/ManoRanjan/) 

![Python](https://img.shields.io/badge/Python-3.8-blueviolet)
![Framework](https://img.shields.io/badge/Framework-Flask-red)
![Frontend](https://img.shields.io/badge/Frontend-HTML/CSS/JS-green)
![API](https://img.shields.io/badge/API-TMDB-fcba03)


## INTRODUCTION:
  In the era of the 21st century, when the world is running at a speed that seems like the speed of air, All developers, workers, or any other working profession is so much busy in their world! But, What about Entertainment (Manoranjan!), Entertainment is not just for health but it is also good for our soul! For this, my Manoranjan website will help you, as it contains at least more than 5000 movie datasets according to your choice! You always search on google for movie ratings, and know about top casts! This recommendation engine will help you to solve this! You don’t need to google each and everything about movie. You have our “Manoranjan App” for this, not only this, you can add your favorite movie like a to-do list for later!
  This application provides all the details of the requested movie such as overview, genre, release date, rating, runtime, top cast, reviews, recommended movies, etc.

The details of the movies(title, genre, runtime, rating, poster, etc) are fetched using an API by TMDB, https://www.themoviedb.org/documentation/api, and using the IMDB id of the movie in the API, I did web scraping to get the reviews given by the user in the IMDB site using `beautifulsoup4` and performed sentiment analysis on those reviews.

Don't worry if the movie that you are looking for is not auto-suggested. Just type the movie name and click on "enter". You will be good to go even though if you made some typo errors.

## Table of Contents:
* [ How to run the project? ](#how_to)
* [ Features ](#features)
* [ Tech Stack ](#technologystack)
* [ Workflow  ](#models) 
* [ Future Plans ](#futureplans)


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
1. Landing Page 
   - Seamless landing page with `Wishlist` button for adding movies
   
    ![Screenshot (397)](https://user-images.githubusercontent.com/84725791/170882590-a2086c27-707f-41cb-aec0-2ee38e46249d.png)
    
   - About ManoRanjan
   
   ![Screenshot (386)](https://user-images.githubusercontent.com/84725791/170882631-0c435828-4e66-42a3-8315-d8d93560f3f0.png)
   
   - My Agile timeline Journey
   
   ![Screenshot (415)](https://user-images.githubusercontent.com/84725791/170882687-afc211ac-2082-40e3-b2c4-898fe2a72121.png)

2. Recommendation Page 

   ![Screenshot (406)](https://user-images.githubusercontent.com/84725791/170882736-c7d95747-0a3a-4c6e-bcf7-5c8e8f4964c3.png)

   
3) Autocomplete
   - While searching for the movie, you are automatically suggested to fill it.
   
   ![Screenshot (408)](https://user-images.githubusercontent.com/84725791/170882753-ab4552ef-5f5d-4ee9-92c5-4e168ca145d9.png)
  
4)Movie Details
   -The name of the movie, genre, release date, overview, poster card are fetched from the api and displayed elegantly.
   
   ![Screenshot (423)](https://user-images.githubusercontent.com/84725791/170883078-1ea3033f-f405-43c3-a979-0531e36be3ab.png)
   
5) Movie cast
   -Top cast of the movie is showcased with their original name and the name of the character in the movie.
   
   ![Screenshot (424)](https://user-images.githubusercontent.com/84725791/170883133-1c6def1b-d31a-44f5-be06-ae2a11b6d2f8.png)
   
6) Poster Card
   - You can click on 'Know More' to get to know more about your favourite cast.
   
   ![Screenshot (425)](https://user-images.githubusercontent.com/84725791/170883174-8dad9018-e6ef-4a9f-9dec-bf05fac65f6e.png)

7) Suggest similar movies
    - Display top Recommended movies based on sentiments analysis
    
    ![Screenshot (426)](https://user-images.githubusercontent.com/84725791/170883230-466fd8dd-6048-484a-9cd4-5537996eacc8.png)  

8) Reviews fetched from IMDB api are displayed on which sentiment analysis is done. 

    ![Screenshot (427)](https://user-images.githubusercontent.com/84725791/170883332-2e919b5f-60f8-4631-837c-a52510a010bc.png)

12) Supports every type of Movie.
13) Wish List.

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

 ## Useful Links

- [Deployed Website](https://manoranjan-engage.herokuapp.com/)
- [Demo Video](https://drive.google.com/drive/folders/1VNjMtKeosoaVH9eSgTQt5eE_XnD_qz5m?usp=sharing)
- [Presentation](https://docs.google.com/presentation/d/1QMCZ0GPt7kDpQuyu11ForlR4wIGARAjmxWOkNgfhyEA/edit?usp=sharing)

## Architecture

![Recommendation App](https://user-images.githubusercontent.com/36665975/168742738-5435cf76-1a42-4d87-94b4-999e5bfc48d3.png)

## Similarity Score : 

   How does it decide which item is most similar to the item user likes? Here come the similarity scores.
   
   It is a numerical value ranges between zero to one which helps to determine how much two items are similar to each other on a scale of zero to one. This similarity score is obtained measuring the similarity between the text details of both of the items. So, similarity score is the measure of similarity between given text details of two items. This can be done by cosine-similarity.
   
## How Cosine Similarity works?
  Cosine similarity is a metric used to measure how similar the documents are irrespective of their size. Mathematically, it measures the cosine of the angle between two vectors projected in a multi-dimensional space. The cosine similarity is advantageous because even if the two similar documents are far apart by the Euclidean distance (due to the size of the document), chances are they may still be oriented closer together. The smaller the angle, higher the cosine similarity.
  
  ![image](https://user-images.githubusercontent.com/36665975/70401457-a7530680-1a55-11ea-9158-97d4e8515ca4.png)

  
More about Cosine Similarity : [Understanding the Math behind Cosine Similarity](https://www.machinelearningplus.com/nlp/cosine-similarity/)



 ### Sources of the datasets 

1. [IMDB 5000 Movie Dataset](https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset)
2. [The Movies Dataset](https://www.kaggle.com/rounakbanik/the-movies-dataset)
3. [List of movies in 2018](https://en.wikipedia.org/wiki/List_of_American_films_of_2018)
4. [List of movies in 2019](https://en.wikipedia.org/wiki/List_of_American_films_of_2019)
5. [List of movies in 2020](https://en.wikipedia.org/wiki/List_of_American_films_of_2020)

## Need help?

Feel free to contact me on  
 [![Twitter](https://img.shields.io/badge/Twitter-follow-blue.svg?logo=twitter&logoColor=white)](https://twitter.com/bhavya_58)

---------

```javascript
if (youEnjoyed) {

  starThisRepository();
}
```

-----------














