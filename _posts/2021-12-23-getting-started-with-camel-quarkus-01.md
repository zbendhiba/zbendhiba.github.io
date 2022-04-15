---
title: "Getting started with Camel Quarkus - Part 1 - Create your first application"
categories:
  - camel-quarkus
tags:
  - ApacheCamel
  - Java
  - Quarkus
  - Integration
---

## Introducing the Getting Started with Camel Quarkus series
I've decided to create a series of blog posts to help in getting started with [Camel Quarkus](https://camel.apache.org/camel-quarkus/){:target="_blank"}. This is the first one of the series.

In this blog post, I show you how to quickly create and run your first camel-quarkus application. We will create a simple Quarkus application, that shows a log every 1s. To achieve this, we will use the [Camel Quarkus Timer Extension](https://camel.apache.org/camel-quarkus/latest/reference/extensions/timer.html){:target="_blank"} to set up our timer.

Note that this post was created using the Quarkus version 2.6.0.Final. The source code of the example is available at [the examples repository](https://github.com/zbendhiba/zinebbendhiba.com-examples/tree/main/cq-test-1){:target="_blank"} 

## Prerequisites
Before jumping into the code, let's make sure you have everything installed to run the first example. You'll need :
- An IDE 
- JDK 11+ with JAVA_HOME configured appropriately

## Create the app
Start your application from [code.quarkus.app](https://code.quarkus.io/?extension-search=camel-quarkus-timer){:target="_blank"}. 
- Select the Camel Timer extension
- Configure Group and Artifact
- Generate your application
- Open the generated application in an IDE
- Delete the GreetingResource class and the test classes, as we won't need those in our project

## Create the RouteBuilder
Create a class, named TimerRouteBuilder. The class will contain the Camel Route Configuration. For this purpose, TimerRouteBuilder should extend [RouteBuilder](https://camel.apache.org/manual/route-builder.html){:target="_blank"}. The RouteBuilder is a base class which is derived from to create routing rules using the DSL. Instances of RouteBuilder are then added to the CamelContext.

Override the configure method. 

This is how the TimerRouteBuilder class should look like at this step.

```java
import yourpackagename;

public class TimerRouteBuilder extends RouteBuilder {

	/**

	* Let's configure the Camel routing rules using Java code...

	*/

	@Override

	public void configure() throws Exception {

	}
}
```

## Create the Timer
Let's create a new Route with the [Camel Timer extension](https://camel.apache.org/camel-quarkus/latest/reference/extensions/timer.html){:target="_blank"}, with this configuration:
- name : timerTest
- period : 1000 ms

The Route using the timer will start looking like this :

```java
  from("timer:timerTest?period=1000")
    ...
```

Now let's add a log message.
```java
  from("timer:timerTest?period=1000")
     .log("Hello World!");
```

This is how the TimerRouteBuilder class should look like at this step.
```java
package yourpackagename;

import org.apache.camel.builder.RouteBuilder;

public class TimerRouteBuilder extends RouteBuilder {
    /**
     * Let's configure the Camel routing rules using Java code...
     */
    @Override
    public void configure() throws Exception {
        from("timer:timerTest?period=1000")
                .log("Hello World!");
    }
}
```

## Start the application in dev mode
Let's start the application in dev mode. The [Quarkus dev mode](https://quarkus.io/guides/getting-started#development-mode){:target="_blank"} enables hot deployment with background compilation.

To start the application in dev mode, run this command in a terminal :
```shell
./mvnw compile quarkus:dev
```

You should be able to see that the application has started, and that the timer is is logging our message every 1s. Exemple of logs:
```
2021-12-22 19:04:54,872 INFO  [io.quarkus] (Quarkus Main Thread) code-with-quarkus 1.0.0-SNAPSHOT on JVM (powered by Quarkus 2.6.0.Final) started in 1.309s. Listening on: http://localhost:8080
2021-12-22 19:04:54,873 INFO  [io.quarkus] (Quarkus Main Thread) Profile dev activated. Live Coding activated.
2021-12-22 19:04:54,873 INFO  [io.quarkus] (Quarkus Main Thread) Installed features: [camel-core, camel-timer, cdi, smallrye-context-propagation, vertx]
2021-12-22 19:04:55,823 INFO  [route1] (Camel (camel-1) thread #1 - timer://timerTest) Hello World!
2021-12-22 19:04:56,823 INFO  [route1] (Camel (camel-1) thread #1 - timer://timerTest) Hello World!
2021-12-22 19:04:57,823 INFO  [route1] (Camel (camel-1) thread #1 - timer://timerTest) Hello World!
```

## Try hot deployment
Leave the application running and update the log message, set the message "Hello World Camel Timer!". Save the TimeRouteBuilder class, and see the logs. You'll notice that the application was re-deployed and you'll have the new log message. Also, notice that deployment was so quick. The application and the Camel Route was started within a few milliseconds.

```
2021-12-22 19:11:01,206 INFO  [org.apa.cam.imp.eng.AbstractCamelContext] (Quarkus Main Thread) Apache Camel 3.14.0 (camel-2) started in 2ms (build:0ms init:1ms start:1ms)
2021-12-22 19:11:01,208 INFO  [io.quarkus] (Quarkus Main Thread) code-with-quarkus 1.0.0-SNAPSHOT on JVM (powered by Quarkus 2.6.0.Final) started in 0.225s. Listening on: http://localhost:8080
2021-12-22 19:11:01,209 INFO  [io.quarkus] (Quarkus Main Thread) Profile dev activated. Live Coding activated.
2021-12-22 19:11:01,209 INFO  [io.quarkus] (Quarkus Main Thread) Installed features: [camel-core, camel-timer, cdi, smallrye-context-propagation, vertx]
2021-12-22 19:11:01,209 INFO  [io.qua.dep.dev.RuntimeUpdatesProcessor] (Timer-0) Live reload total time: 0.558s 
2021-12-22 19:11:02,206 INFO  [route2] (Camel (camel-2) thread #2 - timer://timerTest) Hello World Camel Timer!
2021-12-22 19:11:03,206 INFO  [route2] (Camel (camel-2) thread #2 - timer://timerTest) Hello World Camel Timer!
2021-12-22 19:11:04,206 INFO  [route2] (Camel (camel-2) thread #2 - timer://timerTest) Hello World Camel Timer!
2021-12-22 19:11:05,206 INFO  [route2] (Camel (camel-2) thread #2 - timer://timerTest) Hello World Camel Timer!
```

## Package
Now stop the dev mode using Ctrl+C. Then package the application :

```shell
$ ./mvnw package
```

## Run the application in JVM mode
```shell
$ java -jar target/quarkus-app/quarkus-run.jar
```

## 👏
Now, you have created your first Quarkus application with Camel.

