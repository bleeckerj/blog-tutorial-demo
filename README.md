### 01-15-24
This is an Astro-based SSG with a few content streams

```pages/blog``` 
Is basically a Blog. ```BlogPost.astro``` and ```PostPreview.astro```

```pages/digest```
Is an auto-populated content stream of posts from the NFL Discord that have been 'reacted' to with the Digest react. ```DigestPost.astro``` ```DigestPostPreview.astro```

```pages/projects```
Is maybe not ideal and the wrong name to have a place to put the ```autotrader``` and the ```electronic-sheep``` project content. Maybe ```projects``` is the wrong name because this stream could be a bit complicated to make a generic container for projects.




### Notes
```RR_PNPM_OUTDATED_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with package.jso```
Got this error deploying to Netlify. Ended up deleteing package-lock.json and some npmp lock file. 🤷🏽‍♂️