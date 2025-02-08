Docker build -t node-docker-image .

-t é o nome da tag pro container

Docker image ls
Docker run -d -p [porta ex: 3000:3000] 'Container ID'

-d é pra rodar em segundo plano
-p é a porta onde vai rodar

Docker ps
Docker stop 'Container ID'

Docker rm 'Container ID'
Docker rmi 'Container ID'
Docker system prune