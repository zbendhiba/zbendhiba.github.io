---
title: "Hello Quarkus Roq!"
description: "How I migrated my blog from Jekyll to Quarkus Roq, and my first full vibe coding experience with Claude Code"
tags: Quarkus, Roq, Claude Code, Vibe Coding
image: hello-quarkus-roq-avatar.png
author: zineb
---

![Vibe coding with Quarkus Roq](/images/hello-quarkus-roq-avatar.png)

For years, my personal website ran on Jekyll. It worked, but as a Quarkus developer, I always felt a bit out of place running `jekyll serve` and dealing with cryptic Ruby errors that had nothing to do with my daily work. I wanted my blog to feel like home.

That's why I migrated to [Quarkus Roq](https://iamroq.com/), a static site generator built on top of [Quarkus](https://quarkus.io/). Now I can start my site with `./mvnw quarkus:dev` and enjoy the same dev mode experience I use every day at work. Hot reload, familiar tooling, and no more mysterious build failures. It just feels right.

## Customizing the Roq default theme

I want to give a shout-out to the [Roq default theme](https://github.com/quarkiverse/quarkus-roq). It comes with everything you need out of the box: layouts, pagination, SEO, RSS feed support, and a clean design. The team even provides a ready-to-use [GitHub Action on the Marketplace](https://github.com/marketplace/actions/build-and-deploy-roq-site) to build and deploy your site to GitHub Pages. Setting up CI was literally a few lines of YAML. I didn't have to start from scratch. I simply customized the base theme to make it more "me": a top navbar layout instead of a sidebar, a hero section on the homepage, and a violet accent that I like. Small changes, but they make the site feel personal.

## My first full vibe coding experience

Here's the fun part: this migration was my first full vibe coding experience with [Claude Code](https://claude.ai/code). As a pure backend developer, I usually stay far away from CSS and frontend work. But with Claude Code by my side, I found myself actually enjoying it. We iterated on the styling together, and I got to shape the look of my site without the usual frontend frustration.

Along the way, I learned a few things about vibe coding that I want to share:

**The CLAUDE.md file matters.** Having a `CLAUDE.md` file at the root of your project gives Claude Code the context it needs to be truly helpful. It's like onboarding a new teammate: the better the briefing, the better the collaboration.

**Precision in prompts pays off.** The more specific I was in describing what I wanted, the better the results. Vague instructions led to generic output. Clear, detailed prompts led to exactly what I had in mind.

**Small iterations are key.** Instead of asking for everything at once, I worked in small steps: fix the navbar, then the homepage, then the pagination. Each iteration was easy to review and adjust. This is probably the most important lesson.

## What's next

The site is already about 85% where I want it to be. There are still a few adjustments to make, but the foundation is solid and I'm happy with the result.

If you're a Java developer running a Jekyll or Hugo blog, I encourage you to give [Quarkus Roq](https://iamroq.com/) a try. And if you haven't tried vibe coding yet, grab [Claude Code](https://claude.ai/code) and start with a small project. You might be surprised how much fun it is.

Feel free to reach out if you have any questions about the migration or the vibe coding experience!
