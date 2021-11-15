sudo service postgresql start
sudo -u postgres createdb db/helloreactrails
rails db:migrate 