Use MasterChef;
GO

IF OBJECT_ID('dbo.RecipeItems', 'U') IS NOT NULL 
  DROP TABLE dbo.RecipeItems; 
GO

IF OBJECT_ID('dbo.RecipeSteps', 'U') IS NOT NULL 
  DROP TABLE dbo.RecipeSteps;
GO

IF OBJECT_ID('dbo.Recipes', 'U') IS NOT NULL 
  DROP TABLE dbo.Recipes;
GO



CREATE TABLE dbo.Recipes (
  RecipeId     uniqueidentifier NOT NULL,
  Name        VARCHAR(255) NOT NULL,
  ModifyDate   DATE NOT NULL,
  Comments     TEXT NULL,
  CONSTRAINT PK_Recipes PRIMARY KEY (RecipeId),
);
GO

CREATE TABLE dbo.RecipeSteps (
  RecipeStepId uniqueidentifier NOT NULL,
  RecipeId     uniqueidentifier NOT NULL,
  StepNo       int NOT NULL,
  Instructions Text NULL,
  CONSTRAINT PK_RecipeSteps PRIMARY KEY (RecipeStepId),
  CONSTRAINT FK_RecipeSteps_Recipes FOREIGN KEY (RecipeId) REFERENCES Recipes     (RecipeId),
 );
GO

CREATE TABLE dbo.RecipeItems (
  ItemId       uniqueidentifier NOT NULL,
  RecipeStepId uniqueidentifier NOT NULL,
  Name         VARCHAR(255) NOT NULL,
  Quantity     decimal NOT NULL,
  MeasurementUnit  VARCHAR (20) NOT NULL,
  CONSTRAINT PK_RecipeItems PRIMARY KEY (ItemId),
  CONSTRAINT FK_RecipeItems_RecipeSteps FOREIGN KEY (RecipeStepId)   REFERENCES RecipeSteps (RecipeStepId),
);
GO

Insert Recipes (RecipeId, Name, ModifyDate, Comments) values ('509B1009-E6A0-4559-A228-5B7AEE889A30', 'Honey Chicken', GetDate(), 'Battered honey chicken. This is absolutely the best honey chicken out there guaranteed.');
Go
Insert Recipes (RecipeId, Name, ModifyDate, Comments) values ('AB185F36-C337-4575-8872-FC1B3EAC38B9', 'Mongolian lamb', GetDate(), 'This is usually cooked on a grill plate and is often referred to as sizzling Mongolian lamb.');
Go
Insert RecipeSteps (RecipeStepId, RecipeId, StepNo, Instructions) values ('50D50678-9709-4D61-8720-9F8D9F2DB58F','509B1009-E6A0-4559-A228-5B7AEE889A30', 1, 'Add batter dry ingrediendts to wet ingrediants. Thick and glossy. Allow batter to rest for 30 minutes.');
Go
Insert RecipeSteps (RecipeStepId, RecipeId, StepNo, Instructions) values ('C5EB4545-8DAC-468E-8B4E-9DDDD72A9769','509B1009-E6A0-4559-A228-5B7AEE889A30', 2, 'Heat oil');
Go
Insert RecipeSteps (RecipeStepId, RecipeId, StepNo, Instructions) values ('8EEFC45F-EDF1-4376-B2C7-BEFB32CFEA7C','509B1009-E6A0-4559-A228-5B7AEE889A30', 3, 'Fry chicken in batches ');
Go
Insert RecipeSteps (RecipeStepId, RecipeId, StepNo, Instructions) values ('73100767-B808-4A27-A951-76329B58FACA','509B1009-E6A0-4559-A228-5B7AEE889A30', 4, 'Toss chicken in honey and serve garnished with sesame seeds.');
Go

Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity,MeasurementUnit) values ('2A47E479-9AB2-4E17-88A7-0EDB49D3844F','8EEFC45F-EDF1-4376-B2C7-BEFB32CFEA7C','chicken breast fillet, cut into strips', 750, 'g');
Go

Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('862B91D5-FB60-4004-8179-0415AB900795','73100767-B808-4A27-A951-76329B58FACA', 'sesame seeds', 3, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('C5977A6F-3E7D-4B61-BF05-263349BBEAF7','73100767-B808-4A27-A951-76329B58FACA', 'honey', 4, 'tbs');
Go

Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('B0D744F9-F5DB-4E29-B3EB-B53AC1CC935A','50D50678-9709-4D61-8720-9F8D9F2DB58F', 'corn flour', 4, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('EF506EBD-E080-4509-AD37-D824A6669A65','50D50678-9709-4D61-8720-9F8D9F2DB58F', 'plain flour', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('57E93DE7-0FF3-445E-9085-3910D7BC12E8','50D50678-9709-4D61-8720-9F8D9F2DB58F', 'baking powder', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('3AAE5CA1-6F8A-4770-A475-EB46A02513D9','50D50678-9709-4D61-8720-9F8D9F2DB58F', 'soda water', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('8F68F5A8-49BE-4D8C-A397-E48166DA4A43','50D50678-9709-4D61-8720-9F8D9F2DB58F', 'salt', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('799A1936-0A7C-431D-841C-047EECD59654','C5EB4545-8DAC-468E-8B4E-9DDDD72A9769', 'oil', 1, 'tbs');
Go


Insert RecipeSteps (RecipeStepId, RecipeId, StepNo, Instructions) values ('AEE9602B-03EF-4A5F-A380-2962134ADB7E','AB185F36-C337-4575-8872-FC1B3EAC38B9', 1, 'Combine marinade ingredients, add lamb and allow to stand in fridge for two hours.');
Go
Insert RecipeSteps (RecipeStepId, RecipeId, StepNo, Instructions) values ('3CF6C77C-A7D2-439C-8318-97584F7603BD','AB185F36-C337-4575-8872-FC1B3EAC38B9', 2, 'In a wok or fry pan, heat oil and fry onions.');
Go
Insert RecipeSteps (RecipeStepId, RecipeId, StepNo, Instructions) values ('1C2250B4-AF07-4881-BF51-663392740562','AB185F36-C337-4575-8872-FC1B3EAC38B9', 3, 'Add meat and stir fry.');
Go
Insert RecipeSteps (RecipeStepId, RecipeId, StepNo, Instructions) values ('E09FA73D-D076-45C7-A13C-9B3ACF56431A','AB185F36-C337-4575-8872-FC1B3EAC38B9', 4, 'Add sauce and warm thoroughly.');
Go


Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('1439D378-C9A6-47F5-B326-E519488E42AB','AEE9602B-03EF-4A5F-A380-2962134ADB7E', 'lamb fillet thinly sliced', 500, 'g');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('163E8A76-C114-4687-A732-CE36D26EF123','AEE9602B-03EF-4A5F-A380-2962134ADB7E', 'egg', 1, '');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('B0C7B0DA-1549-4035-A2B2-91896A094C0C','AEE9602B-03EF-4A5F-A380-2962134ADB7E', 'soy sauce', 2, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('BB5E8930-63F3-4077-A20A-3BC81F0BFDEC','AEE9602B-03EF-4A5F-A380-2962134ADB7E', 'sugar', 2, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('55899B2A-6F08-4CFD-B661-C4A016AE2E31','AEE9602B-03EF-4A5F-A380-2962134ADB7E', 'corn flour', 2, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('764692A7-C755-4686-AC73-9A0A74541722','AEE9602B-03EF-4A5F-A380-2962134ADB7E', 'soda', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('E5408310-AE1B-4EDE-8548-8C3C28B71DE4','AEE9602B-03EF-4A5F-A380-2962134ADB7E', 'crushed garlic', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('02B7E154-1A8A-4083-B93B-33CBC718EF67','3CF6C77C-A7D2-439C-8318-97584F7603BD', 'oil', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('51390CBD-B24A-48D8-BD90-59506E24ABAC','3CF6C77C-A7D2-439C-8318-97584F7603BD', 'onion', 2, '');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('91822B5E-B9A3-477C-BB45-672ABC46FB70','E09FA73D-D076-45C7-A13C-9B3ACF56431A', 'water', 2, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('7E64E3D7-9C74-4093-9080-0EB4EC58E8B0','E09FA73D-D076-45C7-A13C-9B3ACF56431A', 'chilli sauce', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('CA4BCA2B-2CE9-497D-AF0A-38487D9870B6','E09FA73D-D076-45C7-A13C-9B3ACF56431A', 'hoisin sauce', 2, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('777E4E19-5698-4DA7-800B-AD0E9A43DA53','E09FA73D-D076-45C7-A13C-9B3ACF56431A', 'chinese five-spice powder', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('1D53772D-8DA6-4152-AADC-5AAC32F7680D','E09FA73D-D076-45C7-A13C-9B3ACF56431A', 'ginger chopped', 1, 'tbs');
Go
Insert RecipeItems (ItemId, RecipeStepId, Name, Quantity, MeasurementUnit) values ('6864DA15-03A9-49D1-A443-258DD7CF4646','1C2250B4-AF07-4881-BF51-663392740562', 'marinaded lamb', 1, '');
Go