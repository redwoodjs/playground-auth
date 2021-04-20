# Contributing

Want to contribute an example of an existing Redwood provider to the Auth Playground? Follow the guidelines below to get started.

Interested in adding a brand new provider to Redwood? Head to the [main Redwood repo](https://github.com/redwoodjs/redwood/tree/main/packages/auth).

## Adding a provider

Adding a provider example follows the process:

1. Create a provider component in `web/src/components`
  - Make sure to export the client as well
2. Add the provider logo to `web/src/lib/images`
  - The file should be a png and the name should match the provider slug
3. Add example code to `web/src/lib/code-samples`
  - The markdown file name should match the provider slug
4. Add the provider name, slug, client, and component to `web/src/lib/providers.js`
