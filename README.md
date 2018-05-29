# Analysis of Twitter sentiments with the evolution of crypto currencies

## Context and goal of the project

This project is part of the Web Mining course at the HEIG-VD for the MSE HES-SO. The students realising the projet are Antoine Drabble & Sébastien Richoz. 

A cryptocurrency is a controversial digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets. Cryptocurrencies are extremely volatile. Four years of volatility in the stock market can be covered in a month of pricing movements in the cryptocurrency markets. 

Twitter is an online news and social networking service on which users post and interact with messages known as "tweets". It is also the primary channel of communication for cryptocurrencies. Many important news are relayed (retweeted) by thousands of user and can reach a very large audience. For example, John McAfee, who has 828'338 followers at the moment, is a famous cryptocurrency user. His tweets can affect the course of a cryptocurrency up to more than 100% due to his huge audience. There are many other influential Twitter users.

The goal of this project is to propose a tool to visualize the correlation between cryptocurrencies' price in USD and a score based on the sentiment analysis of tweets, the number of followers of the user, the number of retweets and the number of likes.

In the first part we will make an historical analysis of the correlation.

In the second part we will propose a tool for the realtime visualisation of the evolution of tweets scores with cryptocurrency's price in USD.

## Data sources, quantity, peprocessing, description

The Twitter API is the source for all the tweets. It is limited to 450 requests of maximum 100 tweets per 15 minutes with the App login. It can only retrieve tweets 7 days old at most. We have retrieved around 20 days of tweets which represent ~1'000'000 tweets for the Bitcoin (BTC). We also retrieved around 10 days for two other cryptocurrencies. ~2500 tweets for Nexo (NEXO) and c15'000 for Zilliqa (ZIL).

Binance API
Autres API : Kraken, CoinBase, CoinMarketCap, Blockchain.info, etc.

To make searches in the Twitter API you must use the query operators to match on multiple keywords. Here is an example of a query for the Bitcoin related tweets.
- bitcoin OR #BTC OR #bitcoin OR $BTC OR $bitcoin

For each tweets we extracted the following informations:
- dffssdf
- blabal
- blflflf

At this step we also filtered the non english tweets by specifying it to the Twitter API.

Bitcoin is the first cryptocurrency...

Zilliqa is a famous recent cryptocurrency...

Nexo is a very recent cryptocurrency...

For the preprocessing removed all of the useless data we could from the tweets, such as http links, @pseudo tags, images, videos and hashtags (#happy->happy).
We changed all of the tweets to lower case and finally stored them in a CSV file. These files are located in `/data/twitter/<CurrencySymbol>/<CurrencyName>_tweets_clean.csv`.

We have used the cryptocompare API (https://min-api.cryptocompare.com/) to retrieve the different currencies that we analyzed.
BInance/Coinbase/Bitstamp/Kraken/ITBIT pour le cours du bitcoin considéré mais pas toutes les minutes
Description - quantité - preprocessing - limitations de l'API, etc. - 1 minutes aparts - 1 heures etc

## Planification and work distribution

Here are the steps/milestones of the project:

1. Retrieval of the tweets from the Twitter API.
2. Sentiment analysis of the tweets, creation of a score based on the sentiment, the number of likes, the number of tweets in a time range and the number of followers of the person who tweeted.
3. Correlation analysis entre cours du bitcoin et score calculé


TODO FINISH

4. machine learning pour faire des prédictions
5. Test avec d’autres cryptocurrencies et peut-être ajout du cours du bitcoin dans les prédictions car il influence souvent le cours des autres monnaies (correlation analysis à faire si nécessaire).

Below is the list of tasks each member of the team did. Note that we worked together on many tasks and on the analysis of the problems.

Antoine:
- Extraction/Preprocessing of tweets
- Cross-correlation analysis

Sébastien.
- Extraction of the currencies
- Real-time correlation viewer

## Functionnalities / Use cases

## Techniques, algorithms and tools

### Python
Python 3.6

### Jupyter notebooks

### Cross-correlation analysis

### Pandas

### Plotly

### Twython

### Matplotlib

### tqdm

### numpy

### Sentiment analysis - vaderSentiment

For the analysis of the sentiment we will use the VADER algorithm. There is a great implementation in Python called vaderSentiment. https://github.com/cjhutto/vaderSentiment.

Here is a description of the 3 sentiment analysis algorithms that we considered.

#### Polarity classification 
Since the rise of social media, a large part of the current research has been focused on classifying natural language as either positive or negative sentiment. Polarity classification have been found to achieve high accuracy in predicting change or trends in public sentiment, for a myriad of domains (e.g. stock price prediction).

#### Lexicon-based approach 
A lexicon is a collection of features (e.g. words and their sentiment classification). The lexicon-based approach is a common method used in sentiment analysis where a piece of text is compared to a lexicon and attributed sentiment classifications. Lexicons can be complex to create, but once created require little resources to use. Well designed lexicons can achieve a high accuracy and are held in high regard in the scientific community. 

#### VADER 
Valence Aware Dictionary and sEntiment Reasoner (VADER) is a combined lexicon and rule-based sentiment analytic software, developed by Hutto and Gilbert. VADER is capable of both detecting the polarity (positive, neutral, negative) and the sentiment intensity in text. The authors have published the lexicon and python specific module under an MIT License, thus it is considered open source and free to use. 

### Other libraries

We have used many other small libraries which can be found in the Jupyter notebooks at the root of this project.

## Conclusion

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
- Install anaconda with Jupyter version TODO, create a python 3.6 environment. Run `pip install .` in the root of the folder to install all the requirements from the requirement.txt file. Finally open the notebooks in Jupyter to run them.
- To execute the js script, please rename `streamer/.env-sample` into `streamer/.env` and edit the file with your plotly configuration.

### Indications
- var.csv contains variables to retrieve historical data. Please do not touch this file.

### Authors
- Antoine Drabble
- Sébastien Richoz
