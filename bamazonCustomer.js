const mysql = require('mysql');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "bamazon_db"
});



connection.query('select * from products', (err,data)=>{
    if(err){
        console.log("Error getting the information");
    } 
    showProducts(data);
    
    rl.question('Which product would you like to buy? ', (produdct_id) => {
        let query = "select stock_quantity, price from products where item_id = " + produdct_id;

        rl.question('How many item would like to buy? ', (quantity) => {

            connection.query(query, (err, data1) => {
                if (err){
                    console.log("Product Id invalid please try again");
                } else {
                    if (parseInt(quantity) > parseInt(data1[0].stock_quantity)){
                        console.log("Insufficient quantity!");
                    } else {
                        let updated_stock = parseInt(data1[0].stock_quantity) - parseInt(quantity);
                        let update_query = "UPDATE products SET stock_quantity = " + updated_stock + " WHERE item_id = " + produdct_id + ";";

                        connection.query(update_query, (err, data) => {
                            if (err) {
                                console.log("error something went wrong" + err);
                            }
                            else {
                                let total = parseFloat(data1[0].price) * parseInt(quantity);
                                console.log("Your total is: $"+ total);
                                console.log("Thanks for shopping with us!");
                            }
                        });
                    }
                }
            });
        });
    });
});


function showProducts(products){

    for (let i =0; i < products.length; i++){
        console.log("Product ID: " + products[i].item_id);
        console.log("Name: " + products[i].product_name);
        console.log("Department: " + products[i].department_name);
        console.log("Price: $" + products[i].price);
        console.log("Quantity: " + products[i].stock_quantity);
        console.log();
    }
}




