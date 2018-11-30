/* DB Creation */
Drop database if exists burger_db;
create database burger_db;

use burger_db;

create table burgers (
    id int auto_increment primary key,
    burger_name varchar(100) not null,
    devoured boolean default 0 not null
);