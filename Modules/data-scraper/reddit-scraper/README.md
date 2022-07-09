# Scrape data from reddit to understand human behaviour

git clone --depth=1 https://github.com/JosephLai241/URS.git
cd URS
pip3 install . -r requirements.txt

scrapes/
└── 06-02-2021
    ├── analytics
    │   ├── frequencies
    │   │   ├── comments
    │   │   │   └── What’s something from the 90s you miss_-all.json
    │   │   ├── livestream
    │   │   │   └── subreddits
    │   │   │       └── askreddit-comments-20_44_11-00_01_10.json
    │   │   └── subreddits
    │   │       └── cscareerquestions-search-'job'-past-year-rules.json
    │   └── wordcloud
    │       ├── comments
    │       │   └── What’s something from the 90s you miss_-all.png
    │       ├── livestream
    │       │   └── subreddits
    │       │       └── askreddit-comments-20_44_11-00_01_10.png
    │       └── subreddits
    │           └── cscareerquestions-search-'job'-past-year-rules.png
    ├── comments
    │   └── What’s something from the 90s you miss_-all.json
    ├── livestream
    │   └── subreddits
    │       ├── askreddit-comments-20_44_11-00_01_10.json
    │       └── askreddit-submissions-20_46_12-00_01_52.json
    ├── redditors
    │   └── spez-5-results.json
    ├── subreddits
    │   ├── askreddit-hot-10-results.json
    │   └── cscareerquestions-search-'job'-past-year-rules.json
    └── urs.log


    ./Urs.py -r SUBREDDIT (H|N|C|T|R|S) N_RESULTS_OR_KEYWORDS
    