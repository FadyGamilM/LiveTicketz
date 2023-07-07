FROM node:alpine

# Define the working directory inside the container
WORKDIR /app

# copy just the package.json into the /app folder 
COPY package.json .

# install essential dependencies to run the app
RUN npm install

# copy everytinh else except the folders and files mentioned in dockeringore file
COPY . .

# the first command to run when the container starts
CMD [ "npm", "start" ]