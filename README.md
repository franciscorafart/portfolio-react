#Portfolio - Static website with Next JS, React, Sanity.io and Netlify
Static website created with React, NextJS for static site building, Sanity.io
headless CMS for content provider, and Netlify for automatic deployment.

Step 1 - Create Sanity application (headless cms)
- Follow Sanity.io install instructions
- Create schemas for your sites content
- Execute with 'npm run start'
- Upload content
- Deploy csm $sanity deploy

Step 2. Build site with Next JS and React
a. Follow instructions to create react app with next js
b. Create client.js file for sanity configs in next.js
    CODE:
        import sanityClient from '@sanity/client'

        export default sanityClient({
            projectId: 'your-project-id',
            dataset: 'your-dataset',
            useCdn: true
        })

c. Style with Next js incorporated <style jsx> tag
d. Create /out folder in your root and add command to build and export in
    your package.json file.

    "scripts": {
        "build": "next build && next export"
    }

- Deploy with Netlify

Setup:
a. Login with Github.
b. Setup repository to hook app to.
c. Create netlify.toml file on your root folder.

[build]
  base    = "front-end" //rour root directory
  publish = "front-end/out" //your build directory
  command = "npm run build" // the command to build and export the static site

d. Setup a webhook for receiving build request, Netlify should build every time you push to github
e. Setup outgoing webhook in Sanity.io, so that Netlify builds every time content changes in Sanity.io
