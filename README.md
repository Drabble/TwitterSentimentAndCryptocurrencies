# Analysis of Twitter sentiments with the evolution of crypto currencies
This project aims to correlate sentiments from tweets with the evolution of cryptocurrencies.

## Context and goal of the project

This project is part of the Web Mining course at the HEIG-VD for the MSE HES-SO. The students realising the projet are Antoine Drabble & Sébastien Richoz. 

The goal of this project is to propose a tool to visualize the correlation between cryptocurrencies and a score based on the sentiment analysis of tweets, the number of followers of the user, the number of retweets and the number of likes.

In the first part we will make an historical analysis of the correlation.

In the second part we will propose a tool for the realtime visualisation of the evolution of tweets scores with cryptocurrency's price in USD.

## Data sources, quantity, peprocessing, description

The Twitter API is the source for all the tweets.

We have used the cryptocompare API (https://min-api.cryptocompare.com/) to retrieve the different currencies that we analyzed.

## Planification and work distribution

## Functionnalities / Use cases

## Techniques, algorithms and tools

### Pandas

### Plotly

### Twython

### Matplotlib

### tqdm

### numpy

#### Sentiment analysis

For the analysis of the sentiment we will use the VADER algorithm. There is a great implementation in Python called vaderSentiment. https://github.com/cjhutto/vaderSentiment.

Here is a description of the 3 sentiment analysis algorithm that we considered.

##### Polarity classification 
Since the rise of social media, a large part of the current research has been focused on classifying natural language as either positive or negative sentiment. Polarity classification have been found to achieve high accuracy in predicting change or trends in public sentiment, for a myriad of domains (e.g. stock price prediction).

##### Lexicon-based approach 
A lexicon is a collection of features (e.g. words and their sentiment classification). The lexicon-based approach is a common method used in sentiment analysis where a piece of text is compared to a lexicon and attributed sentiment classifications. Lexicons can be complex to create, but once created require little resources to use. Well designed lexicons can achieve a high accuracy and are held in high regard in the scientific community. 

##### VADER 
Valence Aware Dictionary and sEntiment Reasoner (VADER) is a combined lexicon and rule-based sentiment analytic software, developed by Hutto and Gilbert. VADER is capable of both detecting the polarity (positive, neutral, negative) and the sentiment intensity in text. The authors have published the lexicon and python specific module under an MIT License, thus it is considered open source and free to use. 

### Other libraries

We have used many other small libraries which can be found in the Jupyter notebooks at the root of this project.

## Conclusion

## Annex

### Bibliography

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

### Setup
- To execute the js script, please rename `streamer/.env-sample` into `streamer/.env` and edit the file with your plotly configuration.

### Indications
- var.csv contains variables to retrieve historical data. Please do not touch this file.

### Authors
- Antoine Drabble
- Sébastien Richoz
