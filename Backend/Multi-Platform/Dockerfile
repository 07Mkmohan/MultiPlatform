FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the jar file
COPY target/*.jar app.jar

# Run the jar
ENTRYPOINT ["java","-jar","/app.jar"]
