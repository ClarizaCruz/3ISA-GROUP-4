CREATE TABLE `heroku_321128323da050f`.`transaction` (
  `transaction_id` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NOT NULL,
  `week` VARCHAR(45) NOT NULL,
  `Invoice_No` VARCHAR(45) NOT NULL,
  `Tin` VARCHAR(50) NOT NULL,
  `Quantity` VARCHAR(100) NOT NULL,
  `Unit_Price` VARCHAR(100) NOT NULL,
  `Calculation` VARCHAR(200) NOT NULL,
  `Total_Sale` INT NOT NULL,
  PRIMARY KEY (`transaction_id`));

  
