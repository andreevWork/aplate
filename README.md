# aplate - APi temPLATE
Проект для быстрого прототипирования проектов или для "поиграться" с очередным frontend фреймворком. 

### Dependency
* Git - [install](https://git-scm.com/download/linux)
* Docker - [install](https://docs.docker.com/engine/installation/linux/ubuntu/)
* Docker-compose - [install](https://docs.docker.com/compose/install/)

### Install
* ``` git clone https://github.com/andreevWork/aplate.git ```
* ``` docker-compose build ```
* ``` docker-compose up -d ```
 
### Настройки

#### Переменные окружения
Находятся в файле ``` .env ```. После изменений необходимо пересобрать контейнер ``` docker-compose build --no-cache ```

#### Docker Volumes
* **VOLUME_MODELS** - том из которого будут браться модели и генерироваться база. Описание моделей согласно - [Mongoose Sheme](http://mongoosejs.com/docs/guide.html). Плюс несколько своих параметров, для определения числа записей в базе и т. д. Пример - [```models/user.js ```](https://github.com/andreevWork/aplate/blob/master/models/user.js)
* **VOLUME_DIST** - том для статики, файлы будут доступны из корня.
* **VOLUME_MIDDLEWARE** - том-файл, который экспортирует функцию позволяющую добавить свои обработчики к koa приложению, они добавляются сразу после обработчика на graphQL API - ``` /api ```, его перебить не получится. Изначально добавлено два обработчика, для добавления заголовка о времени выполнения  ``` X-Response-Time ``` и роутер, который по любому url отдает файл ```dist/index.html ```(кроме ```/api```).

#### Папка Frontend
Папка для различных проектов, изначально в ней только конфиг webpack 2 и тестовый файл.

#### NPM scripts
* ``` npm run create-files -- app/components ButtonComponent ``` - скрипт создает набор файлов. Начало пути отсчитывается от папки ``` frontend ```. **Первый параметр путь**, **Второй название создаваемой папки и название всех вайлов в ней**. Количество файлов и их расширение и содержание, определяется файлами в папке ``` gen/files ``` 
