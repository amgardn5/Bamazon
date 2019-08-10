create database bamazon_db;
use bamazon_db;
create table products (
	item_id integer(15) not null AUTO_INCREMENT primary key,
    product_name varchar(40) not null,
    department_name varchar(30) not null,
    price float(6,3) not null,
    stock_quantity int(10) not null
);

insert into products (product_name, department_name, price, stock_quantity)
	 values 
     ("Baseball", "Sports", 15, 100), 
     ("Basketball", "Sports", 25, 85),
     ("Fast Bike", "Sports", 400, 15),
     ("Star Wars Poster", "Art", 15, 150),
     ("PS4", "Electronics", 300, 500),
     ("Pillow", "Home", 30, 300),
     ("Table", "Home", 95, 250),
     ("Stereo", "Electronics", 150, 150),
     ("Temperpedic Bed", "Home", 500, 100),
     ("Fork", "Kitchen", 4, 1000);
	
	