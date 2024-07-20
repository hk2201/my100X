1. Basically This actionable docker can be used to run things locally. for example like you want to run postgres locally and for that you would have to install postgres and bunch of other steps which is little bit complex. So instead of that we can use Docker and run it locally in no time.

2. Currently out of service for Docker practicals dues to laptop restrictions

3. Just like we push code in github we can push images in docker registery

4. Docker run mongo --> will run mongo

5. Docker images --> will show all the images

6. Docker ps --> container

7. docker run -d mongo --> will run in detach mode

8. docker run -p 27017:27017 mongo --> port mapping and running (if in your browser you go to that port it will be redirected accordingly)

9. docker rmi --> to remove and image

10. We create DockerFile and in that mention out steps to run the application

11. We can also add .dockerignore so that our node modules and all that dont go in the image

12.docker build -t my_app . --> Command to run the build the image with giving it your personalized name (that dot is from where to build the image)

13.docker run -p 3000: 3000 -e DATABASE_URL="" my_app --> a way to add you env variables

14. Layers in Docker --> While building the docker file we want that most of out layers are cached or else evertime we make changes then it would take a lot of time.

