![](https://img.shields.io/badge/Microverse-blueviolet)

### Hello Rails React

This is a rails web api that works with react and redux at the same time. The database store greetings and the api retunr a random api for each request. Then the react uses a api fetch reque to display the greeting.


### Prerequisites

- Windows, Mac, or Linux machine 

- Web browser other than Internet Explorer

- Postgres installed and set it up [see how](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)


## Getting Started

To get a local copy up and running follow these simple example steps.

- First, you need to fork the repository [Twitter](git@github.com:JAAR91/hello-rails-react.git)

- Copy the ssh using the green code button

- Then you clone the repository to your pc using, the command on your terminal:

```
git clone 'ssh code  you copy early'
```

### Setup

Install gems with:

```
bundle install
```

Then use the following code on your terminal:

```
run yarn install
```

then

```
rails webpack:install
```

To install all required libraries for react and redux use:
```
npm install
```

Setup database with:

```
rails db:migrate
```

If you get and error while creating the database then you have to install Postgres, follow the steps [here](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart), once installed you only need to create a user and the database.

To create the database type on your terminal:
```
sudo -u postgres psql
```
Then type:
```
createdb db/helloreactrails
```
Now you cant try to create the database again.

To make easier the creation of the database, type the following the database and create the tables at the same time:
```
bash createdb.sh
```

### Usage

Start server with:

```
rails server
```

Then enter:
```
./bin/webpack-dev-server
```
This will run the react and redux server.

Now you can open `http://localhost:3000/` in your browser.

To acces to the api greeting display acces to :
[http://localhost:3000/greeting](http://localhost:3000/greeting)

### Build With

- Ruby 
- Rails
- Postgres

### API Features

Get access to a random greeting by accesing to:
```
http://localhost:3000/api/v1/greetings
```


**Authors**

👤 **Jose Alberto Arriaga Ramos**

- GitHub: [@jaar](https://github.com/jaar91 )

- Twitter: [@91_jaar](https://twitter.com/91_jaar )

- LinkedIn: [Jose Arriaga](https://www.linkedin.com/in/jaar/)
​

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support


Give a ⭐️ if you like this project!


## Acknowledgments

- Microverse ( https://www.microverse.org/ )

## 📝 License

​
 
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
