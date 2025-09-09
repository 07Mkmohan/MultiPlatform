# ---- Build Stage ----
FROM maven:3.9.4-eclipse-temurin-17 AS build
WORKDIR /app

# Copy Maven wrapper & make it executable
COPY mvnw .
COPY .mvn .mvn
RUN chmod +x mvnw

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN ./mvnw dependency:go-offline

# Copy source code and build the jar
COPY src src
RUN ./mvnw clean package -DskipTests

# ---- Run Stage ----
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy jar from build stage
COPY --from=build /app/target/*.jar /app/app.jar

# Expose port (Spring Boot default)
EXPOSE 8080

# Run app
ENTRYPOINT ["java","-jar","/app/app.jar"]
