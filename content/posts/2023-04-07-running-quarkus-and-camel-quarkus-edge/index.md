---
title: "Running Quarkus and Camel Quarkus on Microshift"
description: "A quick POC to run Quarkus and Camel Quarkus applications on Microshift for edge computing"
image: zineb_bendhiba_2022-cropped.jpg
tags: ApacheCamel, Java, Quarkus, Integration, Edge, Microshift
link: /camel-quarkus/quarkus/running-quarkus-and-camel-quarkus-edge/
author: zineb
---

This week, I did a quick POC to experiment running a [Quarkus](https://quarkus.io/) and [Camel Quarkus](https://camel.apache.org/camel-quarkus/) application on [Microshift](https://next.redhat.com/project/microshift/). Microshift is a Kubernetes-based solution that provides a lightweight, low-footprint way to develop and run edge applications.

TThis blog post assumes that readers are already familiar with Quarkus, Apache Camel, and Microshift.


#### Context
I created very quickly a [Quarkus application](https://github.com/zbendhiba/camel-quarkus-iot). It has these 2 fonctionnalities:
- A simple [RESTEasy Reactive endpoint](https://github.com/zbendhiba/camel-quarkus-iot/blob/main/src/main/java/org/acme/GreetingResource.java#L13), that returns a "Hello from RESTEasy Reactive on Microshift"

```java
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from RESTEasy Reactive on Microshift";
    }
```

- A simple Camel Route, with a basic [Camel Timer](https://github.com/zbendhiba/camel-quarkus-iot/blob/8be9831cc2e99ea4390f3cd62197c6c1635faf88/src/main/java/org/acme/MyRoutes.java#L8), logging "Hello from RESTEasy Reactive on Microshift"

```java
     from("timer:foo?period=\{{timer.period}}&delay=\{{timer.delay}}")
        .log("Hello! I'm running #ApacheCamel & #Quarkus on Microhsift");
```

I installed Microshift on my computer, as well as the Kubernetes CLI and OpenShift CLI.

#### Installing the application on Microshift
I have built my docker image and pushed it to my docker hub: [zbendhiba/camel-quarkus-iot-jvm:1.0](https://hub.docker.com/r/zbendhiba/camel-quarkus-iot-jvm).

To deploy the application in Microshift, I've created the [Kubernetes deployment file](https://github.com/zbendhiba/camel-quarkus-iot/blob/main/kubernetes/kubernetes.yml). You may consider updating the `kubernetes.yml` file and set the right namespace name. I'm using the namespace `default`.

Installing the application on Microshift.

```shell
$ kubectl apply -f kubernetes.yml
```

Make sure the pod is running.

```shell
$ kubectl get pods
NAME                                    READY   STATUS    RESTARTS   AGE
camel-quarkus-iot-jvm-d46b967c4-c6lq6   1/1     Running   1          2d22h
```

#### Accessing the RESTEasy Reactive endpoint
Open a shell in the running container by running the following command:

```shell
$ oc rsh <pod-name>
```
Replace <pod-name> with the name of the pod running your application.

Once you're in the container, you can use curl to test the RESTEasy Reactive endpoint,
 by running the following command :
```shell
$ curl localhost:8080/hello
Hello from RESTEasy Reactive on Microshift
```

Now you can exit :
```shell
$ exit
```

#### Accessing the Timer Camel Consumer log

Open a shell in the running container by running the following command:

```shell
$ oc logs <pod-name>
```
Replace <pod-name> with the name of the pod running your application.

This shows the log of stating application, but also many line of logs containing `INFO  [route1] (Camel (camel-1) thread #1 - timer://foo) Hello! I'm running #ApacheCamel & #Quarkus on Microhsift`.

#### End
Now that the experiment is finished, we can delete the app.

```shell
$ kubectl delete all -l app.kubernetes.io/name=camel-quarkus-iot-jvm
```
