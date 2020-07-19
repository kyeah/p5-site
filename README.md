p5-site
=======

Reference for how to deploy P5 sketches on your own website in various formats 👋

|Name|Description
|===|===|===|
|sketch-global|Embed a single sketch into a webpage.|
|sketch-instance-mode|Embed multiple sketches into a webpage.|
|p5-embed|Easily embed one or more sketches. Uses iframes (loads as a separate webpage; may not work in all browsers/scenarios due to security issues.)|
|glitch-embed|Embed one or more sketches, supports running a full web server. Live code editor on your website. Uses iframes (loads as a separate webpage; may not work in all browsers/scenarios due to security issues.)|

Things to note:

- Try to use relative paths for files and assets. When deploying to Github Pages, the URLs change slightly.
- Upload and reference fonts from the local server. Otherwise you'll run into cross-origin/CORS issues (long story.)
- To run your website locally, you'll have to run it behind a web server. See the [p5 documentation](https://github.com/processing/p5.js/wiki/Local-server) for details. I run with a python server, you can choose your own adventure :)
- You can import your Github repository into a new [glitch.com](https://glitch.com) project. However, this is limited as your font/image files do not show up in their editor, and their paths cannot be changed from the editor (as of July 2020.)
