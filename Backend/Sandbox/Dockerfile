FROM ubuntu:20.04
RUN apt-get update && \
    apt-get install -y python3 nodejs gcc g++ openjdk-11-jdk
WORKDIR /app
COPY run_sandbox.sh /app/run_sandbox.sh
RUN chmod +x /app/run_sandbox.sh
CMD ["/app/run_sandbox.sh"]
