# Correlation of Twitter sentiments with the evolution of cryptocurrencies

## Context and goal of the project

This project is part of the Web Mining course at the HEIG-VD for the MSE HES-SO. The students realising the projet are Antoine Drabble & Sébastien Richoz. 

A cryptocurrency is a controversial digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets. Cryptocurrencies are extremely volatile. Four years of volatility in the stock market can be covered in a month of pricing movements in the cryptocurrency markets. 

Twitter is an online news and social networking service on which users post and interact with messages known as "tweets". It is also the primary channel of communication for cryptocurrencies. Many important news are relayed (retweeted) by thousands of user and can reach a very large audience. For example, John McAfee, who has 828'338 followers at the moment, is a famous cryptocurrency user. His tweets can affect the course of a cryptocurrency up to more than 100% due to his huge audience. There are many other influential Twitter users.

The goal of this project is to propose a tool to visualize the correlation between cryptocurrencies' price in USD and a score based on the sentiment analysis of tweets, the number of followers of the user, the number of retweets and the number of likes.

In the first part we will make an historical analysis of the correlation.

In the second part we will propose a tool for the realtime visualisation of the evolution of tweets scores with cryptocurrency's price in USD.

## Data sources, quantity, peprocessing, description

The Twitter API is the source for all the tweets. It is limited to 450 requests of maximum 100 tweets per 15 minutes with the App login. It can only retrieve tweets 7 days old at most. We have retrieved around 20 days of tweets which represent ~1'120'000 tweets for the Bitcoin (BTC). We also retrieved around 10 days for two other cryptocurrencies. ~2500 tweets for Nexo (NEXO) and 15'000 for Zilliqa (ZIL).

Binance API
Autres API : Kraken, CoinBase, CoinMarketCap, Blockchain.info, etc.

To make searches in the Twitter API you must use the query operators to match on multiple keywords. Here is an example of a query for the Bitcoin related tweets.
- bitcoin OR #BTC OR #bitcoin OR $BTC OR $bitcoin

For each tweets we extracted the following informations:
- ID
- Text
- Username
- Number of followers of the user
- Number of retweets
- Number of likes
- Creation date

At this step we also filtered the non english tweets by specifying it to the Twitter API.

Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator. The system was designed to work as a peer-to-peer network, a network in which transactions take place between users directly, without an intermediary. The Bitcoin currently has a market cap of 28'256'866'432 and a price of ~7500$ for 1 Bitcoin making it the largest cryptocurrency in the world.

Zilliqa is the next generation, high throughput blockchain platform, designed to scale, using sharding technology which allows transaction rates to increase as the network expands which will scale with an increase of miners. It was introduced the 27th of december 2017.

Nexo a lending Platform platform for the world’s first instant crypto-backed loans, which gives investors and businesses access to instant cash, while retaining ownership of their digital assets and thus keeping all upside potential – a much needed service by the crypto community. It was introduced the 27th of february 2018.

For the preprocessing, we remove all of the useless data from the tweets, such as HTTP links, @pseudo tags, images, videos and hashtags (#happy->happy).
We changed all of the tweets to lower case and finally stored them in a CSV file. These files are located in `/data/twitter/<CurrencySymbol>/<CurrencyName>_tweets_clean.csv`.

**TODO**
We have used the cryptocompare API (https://min-api.cryptocompare.com/) to retrieve the different currencies that we analyzed.
BInance/Coinbase/Bitstamp/Kraken/ITBIT pour le cours du bitcoin considéré mais pas toutes les minutes
Description - quantité - preprocessing - limitations de l'API, etc. - 1 minutes aparts - 1 heures etc
**TODO**

## Planification and work distribution

Here are the steps/milestones of the project:

1. Retrieval of the tweets from the Twitter API.
2. Retrieval of the cryptocurrencies change to USD historical data by interval of 1 minute from the cryptocompare API.
3. Sentiment analysis of the tweets using the VADER algorithm.
4. Computation of a score based on the sentiment, the number of likes, the number of tweets in a time range and the number of followers of the person who tweeted.
5. Computation and visualisation of a cross-correlation score with different lag values between the tweets scores and the cryptocurrency's change in USD.
6. Creation of a real-time visualisation tool of the correlation between the tweets and cryptocurrency's change.
7. This step is optional and not implemented yet. This step's goal is to train a recurrent nural network (LSTM or GRU) to predict the currency of the bitcoin based on the tweets scores and the cryptocurrenciy's change. And automate the purchase and the sale of the cryptocurrency with the trained network.

Below is the list of the task that each member of the team worked the most on. Note that we worked together on many tasks and on the analysis of the problems.

Antoine:
- Extraction/Preprocessing of tweets
- Cross-correlation analysis

Sébastien.
- Extraction of the currencies
- Real-time correlation viewer

## Techniques and algorithms 

### Cross-correlation analysis

pearson algorithm with lagged correlation

### Sentiment analysis - vaderSentiment

For the analysis of the sentiment we will use the VADER algorithm. There is a great implementation in Python called vaderSentiment. https://github.com/cjhutto/vaderSentiment.

Here is a description of the 3 sentiment analysis algorithms that we considered.

#### Polarity classification 
Since the rise of social media, a large part of the current research has been focused on classifying natural language as either positive or negative sentiment. Polarity classification have been found to achieve high accuracy in predicting change or trends in public sentiment, for a myriad of domains (e.g. stock price prediction).

#### Lexicon-based approach 
A lexicon is a collection of features (e.g. words and their sentiment classification). The lexicon-based approach is a common method used in sentiment analysis where a piece of text is compared to a lexicon and attributed sentiment classifications. Lexicons can be complex to create, but once created require little resources to use. Well designed lexicons can achieve a high accuracy and are held in high regard in the scientific community. 

#### VADER 
Valence Aware Dictionary and sEntiment Reasoner (VADER) is a combined lexicon and rule-based sentiment analytic software, developed by Hutto and Gilbert. VADER is capable of both detecting the polarity (positive, neutral, negative) and the sentiment intensity in text. The authors have published the lexicon and python specific module under an MIT License, thus it is considered open source and free to use. 

The VADER algorithm uses negations et contractions (not good, wasn’t good), ponctuation (good!!!), capital letters, emotes :), emojis,
intensificators (very, kind of), acronyms (lol) and other factors to calculate the scores. It outputs a compound score between -1 (negative) and 1 (positive).

## Tools and libraries

### Python

We have used the Python programming language for this project in version 3.6.

### Jupyter notebooks

Jupyter Notebook (formerly IPython Notebooks) is a web-based interactive computational environment for creating, executing, and visualizing Jupyter notebooks. We have used it to structure, document and execute/visualise our code.

### Pandas

Pandas is the library we have used the most. It proposes useful functions to read data from our csv files, to write to them, to create and make mathematical operations on dataframes and time series. We have used it for the cross-correlation analysis.

### Twython

Twython is a library used to interact with the Twitter API. It proposes useful functions login and make queries on the API.

### Matplotlib

We have used this library for most of our plots.

### Plotly

Plotly is another library used for plots.

### tqdm

We have used tqdm to show progress bars for long running operations, such a retrieval of the tweets from the Python API and the preprocessing of the tweets. It took around 14 hours to preprocess the tweets but then we switched to a multi-threaded method which didn't support tqdm.

### Numpy

NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays. We used numpy for some of the operations on the dataframes.

### Other libraries

We have used many other small Python libraries which can be found in the Jupyter notebooks at the root of this project.

## Functionnalities / Use cases

Here is a description of the functionalities...

** TODO ** Add print screens of realtime viewer and previous analysis ?? preprocessing etc.? ** TODO **

## Analysis of the results

Here is the correlation we have calculated between tweets and cryptocurrencies...

** TODO PrntScreens et explications **

## Conclusion

The project was very intesting but we had a limited amount of time to achieve it. We couldn't implement the machine learning step with TensorFlow as we would have liked to do.
There is not a clear correlation between the two. We have observered that ... **TODO**. some of the elements that correlate could be used by a machine learning algorithm as an additional input to calculate )
The Jupyter notebooks with Python and all of the libraries available for Python were very useful and adapted for this project.

## Annex

### Bibliography

Cryptocurrencies on Wikipedia
https://en.wikipedia.org/wiki/Cryptocurrency

Travail de bachelor sur le sujet
http://www.diva-portal.org/smash/get/diva2:1110776/FULLTEXT01.pdf 

Site qui affiche des scores basés sur les réseaux sociaux
https://solume.io/?sorting=socialVolumeChange&direction=asc 

Correlation analysis on cryptocurrencies
https://blog.patricktriest.com/analyzing-cryptocurrencies-python/ 

One more paper
https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4988639/ 

List of crypto experts on twitter
https://www.fnlondon.com/articles/the-bitcoin-and-cryptocurrency-experts-to-follow-on-twitter-20171211?mod=topStories 

McAfee influencing cryptocurrencies with single tweets
https://motherboard.vice.com/en_us/article/9knnpz/john-mcafee-twitter-coin-of-the-day-cryptocurrency-markets 

Bitcoin Spread Prediction Using Social And Web Search Media
https://pdfs.semanticscholar.org/1345/a50edee28418900e2c1a4292ccc51138e1eb.pdf

VADER Sentiment analysis of social media text
http://comp.social.gatech.edu/papers/icwsm14.vader.hutto.pdf 
https://github.com/cjhutto/vaderSentiment

Google news which caused the Bitcoin's price to drop, the information was most likely retweeted.
https://www.cnbc.com/2018/03/14/bitcoin-falls-below-9000-after-google-bans-cryptocurrency-ads.html

API for Bitcoin currency
https://www.cryptodatasets.com/platforms/Bitfinex/BTC/ 

Cross correlation analysis of tweets
https://stackoverflow.com/questions/33171413/cross-correlation-time-lag-correlation-with-pandas 
https://pandas.pydata.org/pandas-docs/version/0.21/generated/pandas.Series.autocorr.html 

Basic actions on time series
https://chrisalbon.com/python/data_wrangling/pandas_time_series_basics/ 

Twitter seach operators https://lifehacker.com/search-twitter-more-efficiently-with-these-search-opera-1598165519

### Setup
- Install anaconda with Jupyter version TODO, create a python 3.6 environment. Run `pip install .` in the root of the folder to install all the requirements from the `requirement.txt` file. Finally open the notebooks in Jupyter to run them.
- To execute the js script, please rename `streamer/.env-sample` into `streamer/.env` and edit the file with your plotly configuration.

### Indications
- `var.csv` contains variables to retrieve historical data. Please do not touch this file.

### Authors
- Antoine Drabble
- Sébastien Richoz
