# ApiChallengeStartApi

Se encaro el proyecto de de dos maneras:
- La primera esta comentada bajo el //1 la cual realiza la request a la primera pagina de la api, y realiza los proceso deseados, pero con los recurso entregados por la primera pagina este puede llegar a mejorar un el performans notoriamente pero los datos devueltos no son fiables por la carencia de información.
- La segunda manera , la cual esta bajo /* 2 */(default), esta sacrifica rendimiento por tener que realizar recursivadad para buscar toda la información de las estructura de paginación de la api SWAPI y así hacer un copilado de toda los datos reales de la api y realizar los filtros como son debidos con la data completa, asi también se muestra la adaptabilidad del codigo para recibir muchos datos (obviando exceso de request realizados por la estructura de paginación)

##Para instalar el proyecto 

-npm i

##Iniciar el proyecto 

-npm start

##Puerto

-3001

##Tecnologias
-Express
-Jwt
