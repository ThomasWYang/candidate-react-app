# Readme

This is a simple reactjs app consuming Rest Api from https://github.com/ThomasWYang/tpg_demo deployed on AWS EC2 http://13.236.184.156

## Install via Git

1. Make sure Node.js 18+ (https://nodejs.org/en/) is installed in the local environment.
Use following command in command line to check.
```sh
node -v
npm -v
```
2. Use git clone to copy repo to local
```sh
git clone https://github.com/ThomasWYang/tpg_demo.git
```
3. Change directory into that folder and run following command, the app will run on default port 3000.
```sh
npm install
npm start
```
If you see this info is displayed, the app is running correctly
![图片](https://user-images.githubusercontent.com/84115795/219850722-47eb64a7-a407-456f-b6ff-f6bdfd386862.png)

## Install via Docker

1. Make sure Docker desktop (https://www.docker.com/) is running.
2. Pull the docker image from docker hub.
```sh
docker pull thomasy2022/candidate_react_app
```
3. Run the following command to run the app in a container. The app will run on port 9090 with below command.
```sh
docker run -d -p 9090:80 thomasy2022/candidate_react_app 
```
4. You can also use docker compose file to run the app
```sh
docker compose up
```
It will run on configured port 9090 and you will see similar info below. 
![图片](https://user-images.githubusercontent.com/84115795/219850969-61855b87-d113-4e59-aef3-8f4d5d9aaa89.png)

## Usage

1. Search all candidates (without any specification): click "Search" button directly

![图片](https://user-images.githubusercontent.com/84115795/219851116-9f594199-2146-4677-adc5-4d550c9fdc45.png)

2. Search candidates by fname, lname or email (you can give any combination of these 3 fields): give value in relevant field and click "Search" button

![图片](https://user-images.githubusercontent.com/84115795/219851190-a793a17b-c188-4f85-9c7d-8689f9ad5998.png)

3. Order search result by score : click "OrderByScore" button

![图片](https://user-images.githubusercontent.com/84115795/219851278-600ddc6f-3088-4457-afb4-4f08fe2b1b87.png)

4. Add candidate: ensure the rightmost button on second row is "Add" and give at least fname and lname to add candidate
If missing fields:

![图片](https://user-images.githubusercontent.com/84115795/219851406-e9c631f3-fb9f-452a-a236-b323633a370e.png)
If add successfully:

![图片](https://user-images.githubusercontent.com/84115795/219851434-6a339880-39a8-45f1-a36a-880014c8d050.png)

5. Update candidate: click "Switch to Update" button to change "Add" to "Update", 

![图片](https://user-images.githubusercontent.com/84115795/219851564-2aa9de61-3fe6-4c5c-9783-3d9b92f22bf7.png)

Then click "Select" button on any displayed row to make the id become a valid value, give at least fname and lname to update candidate.
The candidate will be updated.

![图片](https://user-images.githubusercontent.com/84115795/219851632-4619799f-834d-4433-9afd-cc624df8e00b.png)

6. Delete candidate: click "Delete" button on any displayed row, that candidate will be deleted and removed from current list.

![图片](https://user-images.githubusercontent.com/84115795/219851750-0fe1fb2f-f90f-40d1-9b43-ac7dab03f21f.png)





