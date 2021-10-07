-- Create the Leads Database.

CREATE DATABASE Leads
GO

use Leads
GO


CREATE TABLE Leads (
	LeadID int NOT NULL ,
	Name nvarchar (255) NOT NULL,
	Email nvarchar (255) NULL,
	Phone nvarchar (20) NULL,
	Status int NOT NULL,
	Notes nvarchar (1000) NULL,
) 
GO


ALTER TABLE Leads ADD 
	CONSTRAINT Lead_ID_Default DEFAULT (0) FOR LeadID,
	CONSTRAINT Leads_PK PRIMARY KEY (LeadID)   
GO
