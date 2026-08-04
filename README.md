# zbendhiba.github.io

My personal portfolio and blog at [zinebbendhiba.com](https://zinebbendhiba.com/). I'm Zineb Bendhiba, Principal Software Engineer at IBM. Apache Camel PMC member, Camel Quarkus maintainer, and Quarkus Qdrant maintainer.

Built with [Quarkus](https://quarkus.io/) and [Roq](https://iamroq.com/).

## Running locally

```bash
roq start
```

Site runs at [localhost:8080](http://localhost:8080) with hot reload.

## Content

| Section | Path |
|---|---|
| Blog posts | `content/posts/` |
| Conference talks | `content/talk/` |
| Publications | `content/publications/` |
| Podcasts | `content/podcast/` |
| Labs / demos | `content/lab/` |
| Bio | `content/bio/` |

Blog posts follow the `YYYY-MM-DD-slug/index.md` naming convention with YAML frontmatter.

## Tech stack

- [Quarkus](https://quarkus.io/) + [Roq](https://iamroq.com/) for static site generation
- [Qute](https://quarkus.io/guides/qute) for templating
- SCSS for styling
- Deployed via GitHub Pages
