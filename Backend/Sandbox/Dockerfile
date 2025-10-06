FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install -y \
    build-essential \
    python3 \
    python3-pip \
    openjdk-11-jdk \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /code
