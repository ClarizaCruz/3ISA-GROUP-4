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

  
