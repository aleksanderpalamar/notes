# Fullstack application Notes: Next.js 13, Convex, TailwindCSS.

![Copyright 2023 Notes](https://cdn.discordapp.com/attachments/811800332006457356/1164221799828041838/image.png?ex=65426d0b&is=652ff80b&hm=1bb89d3794867d553fc46a8b7f839acc318919a9c5f55a7d1982af99ada9c4b6&)

## Features

- [x] Real-time database
- [x] Style Editor
- [x] Light / Dark mode
- [x] Infinite children documents
- [x] Trash can & soft delete
- [x] Authentication
- [x] File upload
- [x] File replacement
- [x] Icons for each document (changes in real time)
- [x] Expandable sidebar
- [x] Full responsivity and mobile UI
- [x] Publish your notes to the web
- [x] Fullt collapsable sidebar
- [x] Landing page
- [x] Cover image of each document
- [x] recover deleted documents

## Contributing

You can contribute to this project by creating a PR on the [GitHub repository](https://github.com/aleksanderpalamar/notes).

### Prerequisites

**Node version v18.x.x**

### Cloning the repository

```shell
git clone git@github.com:aleksanderpalamar/notes.git
```

### Install packages

```shell
cd notes
npm i
```

### Setup .env file

```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup Convex

```shell
npx convex dev
```

Start the application:

```shell
npn run dev
```
