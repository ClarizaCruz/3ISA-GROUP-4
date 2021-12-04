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

  ALTER TABLE `transaction` 
  CHANGE `Transaction_ID` 
  `Transaction_ID` INT(11) NOT NULL AUTO_INCREMENT, 
  CHANGE `Tin` `Tin` VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '000-333-730-000', 
  CHANGE `Address` `Address` VARCHAR(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '622 Moriones St. Tondo Manila ', 
  CHANGE `Vat` `Vat` DOUBLE NULL DEFAULT NULL, CHANGE `Total_Vat` `Total_Vat` DOUBLE NULL DEFAULT NULL, 
  CHANGE `Total_Amount_Receivable` `Total_Amount_Receivable` DOUBLE NULL DEFAULT NULL;

  CREATE TABLE `transactions` (
  `Transaction_ID` INT(11) NULL AUTO_INCREMENT, 
  `date` DATETIME NULL, 
  `week` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL, 
  `Invoice_No` VARCHAR(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL, 
  `Tin` VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '000-333-730-000', 
  `Address` VARCHAR(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '622 Moriones St. Tondo Manila', 
  `Quantity` VARCHAR(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL, 
  `Unit_Price` VARCHAR(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL, 
  `Calculation` VARCHAR(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL, 
  `Total_Sale` INT(11) NULL, 
  `Total_Vat` DOUBLE NULL DEFAULT NULL, 
  `Total_Amount_Receivable` DOUBLE NULL DEFAULT NULL, 
  `status` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'Active',
  `month` VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`Transaction_id`));

  
