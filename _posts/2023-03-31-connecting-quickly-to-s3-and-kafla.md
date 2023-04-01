---
title: "Connecting quickly to S3 and Kafka"
categories:
  - camel-quarkus
tags:
  - ApacheCamel
  - Java
  - Quarkus
  - Integration
  - ApacheKafka
  - AmazonS3
---

Last year, I had the opportunity to speak at various events and conferences throughout Europe about integrating disparate systems with Apache Camel. 

For those who may not be familiar, Apache Camel is an Open Source Integration framework that simplifies the process of connecting different systems together. Building on my experience with this technology, I want to share my insights on how we can easily connect Amazon S3 to Kafka with Apache Camel and Quarkus.

In this blog post, I will explain the benefits of this integration and walk you through the steps required to implement it.

## Context
Amazon S3 is a widely used object storage service provided by Amazon Web Services, while Apache Kafka is an open-source event streaming platform commonly used in microservices architectures. Integrating these two technologies can be useful for scenarios such as streaming data from external sources to microservices.

In the microservices world, developers may use different approaches for building their applications. Some may prefer to code with Apache Camel only, while others may opt for modern reactive frameworks like Quarkus and using Apache Camel only for dedicated integration tasks. Regardless of the approach, using Apache Camel can help connect microservices to different systems with ease and save time.

Consider the following scenario: we are part of a team responsible for several microservices that connect only to Apache Kafka. An external team needs to exchange data via files, which must be stored in an Amazon S3 bucket. These files need to be transformed and streamed into a Kafka topic for processing by one of the microservices.

To solve this integration issue, we will write a Camel Route that transforms and streams the files from Amazon S3 to Kafka.

## Consume from Amazon S3
The consumers are what I find the most exciting about Apache Camel. Let's for real deep dive into this, and see how easy it is to create a consumer listening to every new file in an Amazon  bucket. 

This scenario I have seen it a lot before in different projetcs I have been involved in the past. The were so many ways to implement this. I won't argue about those solutions. Every solution is valid. But writing a simple Camel consumer is way more quicker, readable, and easier.

Let's take a look at how to use Apache Camel to create a consumer that listens for new files in an Amazon S3 bucket.

To build a quarkus app, I'm using the Quarkus cli. If you don't have yet installed, you can follow [the instructions here](https://quarkus.io/guides/cli-tooling){:target="_blank"}.

> You can either follow this tutorial or download the [source code of this demo directly]().
> 

Create an app, named `camel-s3-kafka`.

```shell
$ quarkus create app org.acme:camel-s3-kafka:1.0
```

Add [Camel Quarkus S3 extension](https://camel.apache.org/camel-quarkus/latest/reference/extensions/aws2-s3.html). The `Camel Quarkus S3 extension` is an Apache Camel extension for Quarkus that provides support for interacting with Amazon S3 using the AWS SDK version 2.

In other words, this extension adds the necessary dependencies and configuration to your Quarkus application to be able to use Camel components related to Amazon S3, such as the S3 consumer used in the demo project we're building.

Using this extension, you can easily create and configure S3 producers and consumers in your Camel routes without having to manually handle the low-level details of interacting with the S3 API.

Go to your Quarkus project directory, and add the extension easily with the Quarkus cli.

```shell
$ quarkus ext add org.apache.camel.quarkus:camel-quarkus-aws2-s3
```
>
There are different ways of finding the right groupId and artifactId of a Quarkus extension. For Camel Quarkus extension, you can go find those:
- By getting the maven coordinates on the Apache Camel documentation page for the Camel Quarkus extension: example for [Camel Quarkus S3 extension](https://camel.apache.org/camel-quarkus/latest/reference/extensions/aws2-s3.html#extensions-aws2-s3-maven-coordinates)
- By getting the Quarkus cli command line on the Quarkus documentation page for the Camel Quarkus extension: example for [Camel Quarkus S3 extension](https://quarkus.io/extensions/org.apache.camel.quarkus/camel-quarkus-aws2-s3)
- You can also find those from [code.quarkus.io](https://code.quarkus.io/) Quarkus code generator page, as decribed in this small video.
![Alt Text](/assets/videos/quarkus-maven-dep.gif)
>

Open the project in your preferred IDE. 

> I do highly recommand that you install the Apache Camel plugin, so that you could benefit from:
  - The auto completion mode on Camel properties
  - The possibility to debug inside Camel Routes
> 

Look inside you `pom.xml` file, notice that both the `quarkus-camel` bom and the `camel-quarkus-s3` dependency have been imported. Now, let's create the S3 consumer. In order to achieve that, we need to create a Java class that would contain the Camel Route. The Camel Route will create an S3 consumer, listening to new files.


# Transform data

# Produce to Kafka

- Dev console

## Conclusion









