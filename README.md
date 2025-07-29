✍️ __Concurrent Text Editor__

A real-time collaborative text editor built for high-concurrency scenarios using Kafka and designed to be easily deployable via Minikube.

🚀 __Overview__

This project enables multiple users to edit the same document concurrently with strong consistency guarantees. It supports a host-guest model, where users can either:

Host a collaborative session (running their own backend Kafka consumer/producer)

Or simply join as guests through the frontend interface.

All communication is event-driven and powered by Apache Kafka, ensuring low-latency updates and high fault tolerance.

🧩 __Features__

Real-time concurrent editing

Operational transform or CRDT-inspired conflict resolution (depending on implementation)

Kafka-backed messaging system for scalable event distribution

Support for hosting your own Kafka backend or connecting to an existing one

Deployable via Minikube for local testing and development

<img width="1880" height="892" alt="image" src="https://github.com/user-attachments/assets/906f5e40-c16d-4e8d-8dec-8492bffbadc6" />

