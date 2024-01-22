# SonarSetup

## SonarQube Credentials:

[Link to Sonar](http://localhost:9080)

- Default user: admin
- Default password: admin
- Recommended new dev password: admin1234

## Joined in SonarQube

1. Click on Create a local project

2. Add credentials:
   projectKey=blue-car-fe
   projectName='BlueCar FE'

3. Click on use global setting and create project

4. Click on Locally

5. Set expiration date to "No expiration" and click on generate

6. Click on "Other(TS)" and then in windows.

7. Copy the generated code

8. Download Scanner for Windows

[Link to download](https://docs.sonarsource.com/sonarqube/10.3/analyzing-source-code/scanners/sonarscanner/)

10. Extract all of the donwloaded zip. Add the route to environment variables -> path

11. Open cmd, go to the frontend route and execute the copied code

```
sonar-scanner.bat -D"sonar.projectKey=blue-car-fe" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9080" -D"sonar.token=<token>"
```
