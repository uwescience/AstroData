AstroData Website
=================
This is built with [hyde](http://hyde.github.io).

All the template information is in the ``layout`` directory, while all the
content specific to this site is in the ``content`` directory.

I've set up the repo so as to have all relevant information in the
``content/index.html`` file.

The following actions require hyde to be installed on your system:

- To make the site, type 
  ```
  [~]$ make gen
  ```
- To start up a local version of the website, type
  ```
  [~]$ make serve
  ```
  and then point your browser to http://localhost:8080
- To build and deploy the website to github pages, type
  ```
  [~]$ make publish
  ```
  This will build the website in production mode, clone the gh-pages branch
  of the AstroData repository, commit the changes to the repo, and push them
  to the github server.