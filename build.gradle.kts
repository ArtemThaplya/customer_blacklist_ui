import com.moowork.gradle.node.npm.NpxTask

repositories {
    jcenter()
    mavenCentral()
}

plugins {
    id("java")
    id("org.springframework.boot") version "2.2.5.RELEASE"
    id("io.spring.dependency-management") version "1.0.9.RELEASE"
    id("com.github.node-gradle.node") version "2.2.1"
}

node {
    version = "12.15.0"
    npmVersion = "6.13.6"
    nodeModulesDir = file("${project.projectDir}/src/angular/app")
}

val buildAngular by tasks.register<NpxTask>("ngBuild") {
    dependsOn("npmInstall")
    println("installing angular project")
    command = "ng"
    setArgs(listOf("build"))
}

dependencies {
    implementation("com.h2database:h2:1.4.199")
    implementation("org.hibernate:hibernate-core:5.4.3.Final")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-rest")
    implementation("com.okta.spring:okta-spring-boot-starter:1.4.0")


//    implementation("org.springframework.security:spring-security-jwt:1.1.0.RELEASE")
//    implementation("org.springframework.security.oauth:spring-security-oauth2:2.4.0.RELEASE")


//    implementation("org.springframework.boot:spring-boot-starter-data-rest")
//    implementation("org.projectlombok:lombok:1.18.12")


    implementation("com.sun.xml.bind:jaxb-core:2.3.0.1")
    implementation("javax.xml.bind:jaxb-api:2.3.1")
    implementation("com.sun.xml.bind:jaxb-impl:2.3.1")

    testImplementation(group = "org.junit.jupiter", name = "junit-jupiter-api", version = "5.2.0")
    testImplementation(group = "org.junit.jupiter", name = "junit-jupiter-params", version = "5.2.0")
    testRuntime(group = "org.junit.jupiter", name = "junit-jupiter-engine", version = "5.2.0")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation(group = "io.rest-assured", name = "rest-assured", version = "3.3.0")
}


tasks["bootRun"].dependsOn(buildAngular)

tasks.test {
    useJUnitPlatform()
}


