# Biking
### Setting Up Microservices - Node, Express, React, and Docker
---

## Architecture

| Name | Service | Container | Tech | Status |
| --- | --- | --- | --- | --- |
| Web  | Web | web | React, Redux | In progress |
| Trips API | Trips | trips | Node, Express | Published |
| Trips DB | Trips | trips-db | Postgres | Published |
| Users API | Users | users | Node, Express | Published |
| Users DB | Users | users-db | Postgres | Published |
| Functional Tests | Test | n/a | TestCafe |

## Setup

1. Fork/Clone this repo
2. Download Docker and/or confirm version >= 18:
```
$ docker -v
Docker version 18.09.4, build d14af54
```

## Build and Run the App
### Set the Environment Variables
```
$ export NODE_ENV=development
```
### Build and Run the Containers
```
$ docker-compose build
$ docker-compose up -d
```
### Migrate and Seed
When the apps are up, run:
```
$ sh init_db.sh
```
### Look Around
#### Users - <http://localhost:3000>
| Endpoint | HTTP Method | CRUD Method | Result |
| --- | --- | --- | --- |
| \/users\/register | POST | CREATE | Add a user |
| \/users\/login | POST | CREATE | Log in a user |
| \/users\/user | GET | READ | Get user data |

#### Trips - <http://localhost:3001>
| Endpoint | HTTP Method | CRUD Method | Result |
| --- | --- | --- | --- |
| \/trips\/user | GET | READ | Get all trips by user |
| \/trips | POST | CREATE | Add a trip |

#### Functional Tests
With the containers running and TestCafe installed, run:
```
$ sh test.sh
```

---
## Commands
Stop the containers:
```
$ docker-compose stop
```
Bring down the containers:
```
$ docker-compose down
```
Remove images:
```
$ docker rmi $(docker images -q)
```

