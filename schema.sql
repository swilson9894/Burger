  CREATE DATABASE goodburgers_db;
  use goodburgers_db;

  create table goodburgers_tbl(
    id int primary key auto_increment
    burger_name varCHAR '30' not null,
    devoured boolean,
    burger_time timestamp
  );