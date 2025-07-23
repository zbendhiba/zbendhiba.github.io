---
title: "Enterprise Integration Is Dead! Long Live AI-Driven Integration with Apache Camel at Devoxx UK"
categories:
      - Apache Camel
      - LangChain4j
      - AI
      - Integration
tags:
      - Apache Camel
      - LangChain4j
      - AI
      - Integration
      - Devoxx
---

A few weeks ago, [Markus Eisele](https://www.linkedin.com/in/markuseisele/){:target="_blank"} & [Bruno Meseguer](https://www.linkedin.com/in/bmeseguer/){:target="_blank"} gave a great talk with the catchy title "Enterprise Integration Is Dead! Long Live AI-Driven Integration with Apache Camel" at DevoxxUK.

In this talk, they explain that integration isn’t dead at all. It is hiding nowadays behind modern abstractions. They also explain why we still need, and will still need enterprise integration, the challenges we face now and in the future.

They also explain how enterprise integration evolves with AI:
- AI-driven applications now interpret intent, not just accept inputs
- Systems can reason about business logic and select integration paths dynamically
- Integration logic is no longer hardcoded, it’s shaped in real-time

They introduce [Apache Camel](https://camel.apache.org/){:target="_blank"} as an integration solution, with a nice AI-driven integration demo featuring [Apache Camel](https://camel.apache.org/), [LangChain4j](https://docs.langchain4j.dev/){:target="_blank"}, [Kaoto](https://kaoto.io/){:target="_blank"}, [Docling](https://docling-project.github.io/docling/){:target="_blank"}. 

The demo showcases powerful data ingestion powered by both [Apache Camel](https://camel.apache.org/){:target="_blank"} and [Docling](https://docling-project.github.io/docling/){:target="_blank"}. The demo also showcases autonomous agents and agentic integration AI, leveraging [Apache Camel Routes](https://camel.apache.org/manual/routes.html){:target="_blank"} as tools, powered by [LangChain4j](https://docs.langchain4j.dev/){:target="_blank"}. Additionally, the demo showcases how to create AI-driven workflows with planners and human-in-the-loop capabilities.

They conclude with their vision of the future and how this can shape AI business cases, providing recommendations on how to move from legacy to AI-driven integrations.

They also introduce [Wanaku](https://www.wanaku.ai/){:target="_blank"}, an open-source project we kicked off recently, powered by Apache Camel and Quarkus as an MCP Router for everything Camel.

I absolutely love how Markus introduced [Apache Camel](https://camel.apache.org/){:target="_blank"} so briefly, and I’m a huge fan of [Apache Camel](https://camel.apache.org/){:target="_blank"} demos from Bruno.

Check out their video now.

<iframe src="https://www.youtube.com/embed/WrBmfaY7IB8" width="560" height="315" frameborder="0"></iframe>

You can explore the complete demo implementation in the [GitHub repository](https://github.com/brunoNetId/ai-agentic-scenario/tree/main){:target="_blank"}.

Bruno also provided a [tutorial on using tools with Apache Camel on OpenShift](https://developers.redhat.com/articles/2024/10/04/tutorial-tool-your-llm-apache-camel-openshift){:target="_blank"}.

I’m so happy to see folks present some of the work I’ve been working on, and collaborating on in the [Apache Camel](https://camel.apache.org/){:target="_blank"} community. 

There are many exciting developments coming to [Apache Camel](https://camel.apache.org/){:target="_blank"} around [LangChain4j](https://docs.langchain4j.dev/){:target="_blank"}. We are working on improving the AiAgent story by introducing AIServices, and will definitely work on enabling agents to communicate with each other, so stay tuned.

Have other ideas? Feel free to reach out.
