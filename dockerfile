FROM java:8
COPY . /home/user/tcp
WORKDIR /home/user/tcp
RUN javac TransportServer.java
CMD ["java","TransportServer"]