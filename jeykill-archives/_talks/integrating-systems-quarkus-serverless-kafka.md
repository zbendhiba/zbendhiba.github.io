---
title: 🇬🇧  Integrating systems in the age of Quarkus, serverless and Kafka
permalink: /talk/integrating-systems-quarkus-serverless-kafka/
---

#### Abstract and talk prepared with  [Peter Palaga](https://twitter.com/ppalaga){:target="_blank"}

Have you ever got the task to implement an exchange of data between two systems that were not designed to communicate with each other? We bet you have, and we dare to introduce a couple of tools and approaches making the task easier to accomplish.

First, we’ll speak about Apache Camel, the Swiss knife of integrating heterogeneous systems. It offers 300+ connectors out of the box, to transfer data to and from a wide variety of systems. The toolbox also brings options to route, filter and transform data based on the wildest requirements of a modern or legacy enterprise.

Second, we will show what fun it is to write Camel integrations on top of Quarkus. You’ll learn about the famous Quarkus dev mode - the background compilation & live reload of the application while coding for faster dev cycles. Further, we’ll talk about dev services - an automatic provisioning of a required external service, such as Kafka broker or a database when testing or developing. Bonus: Quarkus applications start in milliseconds and consume just a few tens of megabytes of RAM.

Third, we will explain how the outstanding integration capabilities of Apache Camel enrich serverless architectures based on Knative. We will touch topics like auto-scaling and scaling to zero, content based routing of cloud events, as well as streaming data between Apache Kafka and the 300+ kinds of systems supported by Apache Camel.

<iframe src="https://www.youtube.com/embed/wa5wRfHiCCg" width="560" height="315" frameborder="0"> </iframe>

#### All available recordings
- [Devoxx UK 2022 with Peter Palaga](https://youtu.be/wa5wRfHiCCg){:target="_blank"}
- [Apache Con Asia 2022](https://youtu.be/Owl9bOhPx8o){:target="_blank"}
- [Bucharest Tech Week 2022](https://youtu.be/9bgFJwC-cSE){:target="_blank"}

#### slides
- [Devoxx UK 2022 with Peter Palaga](https://peter.palaga.org/presentations/220511-devoxx-uk-camel/index.html){:target="_blank"}
- [Red Hat Ireland Day 2022](https://github.com/zbendhiba/zbendhiba.github.io/tree/main/assets/confs/2022/221122-RH-ireland-day.pdf){:target="_blank"}
- [Apache Con Asia 2022](https://github.com/zbendhiba/zbendhiba.github.io/tree/main/assets/confs/2022/20220729-apacheCon.pdf){:target="_blank"}
- [Bucharest Tech Week 2022](https://github.com/zbendhiba/zbendhiba.github.io/tree/main/assets/confs/2022/220617-bucharest-java-ceq.pdf){:target="_blank"}

#### demos
- [Devoxx UK 2022 with Peter Palaga](https://github.com/zbendhiba/telegram-kafka/tree/devoxx-uk-2022){:target="_blank"}
- [Red Hat Ireland Day 2022](https://github.com/zbendhiba/telegram-kafka/tree/221122-rh-ireland-day){:target="_blank"}
- [Apache Con Asia 2022](https://github.com/zbendhiba/telegram-kafka/tree/220729-apache-con){:target="_blank"}
- [Bucharest Tech Week 2022](https://github.com/zbendhiba/telegram-kafka/tree/220617-bucarest-java-summit){:target="_blank"}
