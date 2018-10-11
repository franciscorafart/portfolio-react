#Portfolio - Static website with Next JS, React, Sanity.io and Netlify
Check it out at: https://www.franciscorafat.com

#Description
Static website for my personal portfolio created with React, NextJS for static
site building and server side rendering, Sanity.io headless CMS for content
resources, and Netlify for automatic deployment.

This project is two apps in one. The repository's root has the Sanity schemas and
resources to build the headless CMS. The React/NextJS front end portion is in the
front-end folder. Both apps have to be deployed separately.

Netlify is hooked to track changes on any of the two apps code, rebuilding the
static resources for the site whenever code is pushed to the repository.
Also, Netlify is hooked to rebuild when any content is changed or updated in the
Sanity deployed CMS.

#How to build?

Step 1 - Create Sanity application (headless CMS)
- Run $npm install on root folder.
- Create a Sanity application in Sanity.io
  Follow documentation install for detailed explanation
  https://www.sanity.io/docs/introduction/getting-started
- Write in your sanity app credentials in sanity.json
- Modify the schemas in this project to suit your website's needs
- Execute with $npm run start
- Deploy CMS with $sanity deploy
- Upload content to your deployed content management system

Step 2. Build site with Next JS and React
a. Run $npm install on front-end folder.
    Follow Next JS documentation for detailed explanation
    https://nextjs.org/learn/
b. Modify client.js file for sanity configs in next.js

        export default sanityClient({
            projectId: 'your-project-id',
            dataset: 'your-dataset',
            useCdn: true
        })

c. Style with Next js incorporated <style jsx> tag
d. Create /out folder in your root and add command to build and export in
    your package.json file. We need 'next build' and 'next export' in one command
    because Netlify will use this to build and deploy our website.

    "scripts": {
        "build": "next build && next export"
    }

- Step 3: Deploy with Netlify

Setup:
a. Login to Netlify with Github.
b. Create a new deploy in Netlify and connect it to your github repository
c. Make sure your netlify.toml file on your root folder is set up correctly.

[build]
  base    = "front-end" //root directory of your application
  publish = "front-end/out" // your build directory. Where your static assets will go.
  command = "npm run build" // the command to build and export the static site

d. Setup a webhook for receiving build request, Netlify should build every time you push to github
e. Setup outgoing webhook in Sanity.io, so that Netlify builds every time content changes in Sanity.io
