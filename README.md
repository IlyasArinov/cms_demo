Для работы нужно скачать этот репозиторий и cms_demo_server.

Здесь лежит реакт-приложение, в cms_demo_server: node.js + express.

**Демо**: https://nameless-escarpment-85089.herokuapp.com/

## Установка

#### Запустить в корне cms_demo
1. npm install
2. npm start

#### Запустить в корне cms_demo_server

1. npm install
2. npm run dev 

## Как добавлять компоненты cms?
1. Создать компонент в CMS/Blocks. Пример для создания Text.js
2. Передать компоненту BlockWrapper атрибут blockType, равный названию созданного компонента.
