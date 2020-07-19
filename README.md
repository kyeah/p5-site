p5-site
=======

Reference for how to deploy P5 sketches on your own website in various formats 👋

|Name|Description|Notes|
|---|---|---|
|[sketch-global](https://kyeah.github.io/p5-site/sketch.html)|Embed a single sketch into a webpage.||
|[sketch-instance-mode](https://kyeah.github.io/p5-site/sketch-instance-mode.html)|Embed multiple sketches into a webpage.||
|[sketch-iframes](https://kyeah.github.io/p5-site/sketch-iframes.html)|Embed local sketch pages as iframes|Easier way to add multiple sketches to a webpage using Global mode. Works on all browsers unlike the next two options.|
|[p5-embed](https://kyeah.github.io/p5-site/p5-embed.html)|Easily embed one or more sketches.|Uses iframes (loads as a separate webpage; may not work in all browsers/scenarios due to security issues.)|
|[glitch-embed](https://kyeah.github.io/p5-site/glitch-embed.html)|Embed one or more sketches, supports running a full web server. Live code editor on your website. Can deploy website directly on Glitch without running your own webserver or using Github.|Uses iframes (loads as a separate webpage; may not work in all browsers/scenarios due to security issues.)|

Things to note:

- Try to use relative paths for files and assets. When deploying to Github Pages, the URLs change slightly.
- Upload and reference fonts from the local server. Otherwise you'll run into cross-origin/CORS issues (long story.)
- To run your website locally, you'll have to run it behind a web server. See the [p5 documentation](https://github.com/processing/p5.js/wiki/Local-server) for details. I run with a python server, you can choose your own adventure :)
- You can import your Github repository into a new [glitch.com](https://glitch.com) project. However, this is limited as your font/image files do not show up in their editor, and their paths cannot be changed from the editor (as of July 2020.)
