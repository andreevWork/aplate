# aplate - APi temPLATE

## Usage

### Dependency
For install you need:

* Git - [install](https://git-scm.com/download/linux)
* Docker - [install](https://docs.docker.com/engine/installation/linux/ubuntu/)
* Docker-compose - [install](https://docs.docker.com/compose/install/)

### To Install
* Clone this repo:
``` 
git clone https://github.com/andreevWork/aplate.git 
```
* Build container (maybe last a few minutes):
```
docker-compose build
```
* Start container (maybe last a few minutes):
```
docker-compose up -d
```
* Done! Now you have:
 * self-document api on **graphql** on ```127.0.0.1:3000```
 * **mongo-express** for admin db on ```127.0.0.1:3001```
 
### To Configure
* Change docker-compose.yaml for change host ports or/and volumes for containers
