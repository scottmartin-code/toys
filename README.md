# Vintage Band Name Bot

A Twitter bot that generates names of the kind of dance bands seen on 78RPM records. Tweets hourly at [@78_bands](https://twitter.com/78_bands). In the `web` directory there's a browser version (made with [Svelte](https://svelte.dev/)) that you can click on to your heart's content. 

The file `bnf.txt` contains a BNF grammar for the band name structure that I wrote before starting the code. The output has evolved a lot since then, so it's obsolete, but provides an idea of what's going on - see `src/RecipeData.js` for the whole thing.