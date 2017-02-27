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
 * self-document api (graphiql) on **graphql** on ```127.0.0.1:3000/api```
 * **mongo-express** for admin db on ```127.0.0.1:3001```
 
### Settings

#### Volumes
* dist - volume for static files. Files will be available on root path
* models - volume for create data. More in [Models](#models)

### <a name="models"></a>Models
 
### To Configure
* Change docker-compose.yaml for change host ports or/and volumes for containers
