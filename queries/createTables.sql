CREATE TABLE users (
  id                INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
  email             NVARCHAR(255) NOT NULL,
  password          NVARCHAR(MAX) NOT NULL,
  salt              NVARCHAR(MAX) NOT NULL,
  date_addded       DATETIME DEFAULT GETDATE(),
  date_modified     DATETIME DEFAULT GETDATE(),
  is_active			BIT DEFAULT 1
)
GO


CREATE TABLE task (
  id				INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
  title				NVARCHAR(500) NOT NULL,
  description		NVARCHAR(MAX) NOT NULL,
  parent_id			INT NOT NULL,
  is_active			BIT NOT NULL DEFAULT 1,
  date_added		DATETIME DEFAULT GETDATE(),
  priority			INT NULL,
  date_modified		DATETIME DEFAULT GETDATE(),
  expiration_date   DATETIME NULL,
  status			INT NOT NULL DEFAULT 1,
)
GO


CREATE TABLE categories (
  id			INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
  description	NVARCHAR(MAX),
  user_id		INT
)
GO


CREATE TABLE tags (
  id			INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
  description	NVARCHAR(MAX),
  user_id		INT
)
GO


CREATE TABLE user_task (
  id		INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
  user_id	INT,
  task_id	INT
)
GO

CREATE TABLE task_tags (
  id		INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
  task_id   INT,
  tags_id   INT
)
GO

CREATE TABLE task_categories (
  id				INT NOT NULL PRIMARY KEY IDENTITY(1, 1),
  categories_id		INT,
  task_id 			INT
)
GO

ALTER TABLE task ADD CONSTRAINT task_id_fk FOREIGN KEY (parent_id) REFERENCES task (id);
ALTER TABLE user_task ADD CONSTRAINT user_task_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE user_task ADD CONSTRAINT user_task_task_id_fk FOREIGN KEY (task_id) REFERENCES task (id);
ALTER TABLE categories ADD CONSTRAINT categories_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE tags ADD CONSTRAINT tags_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE task_tags ADD CONSTRAINT task_tags_task_id_fk FOREIGN KEY (task_id) REFERENCES task (id);
ALTER TABLE task_tags ADD CONSTRAINT task_tags_tags_id_fk FOREIGN KEY (tags_id) REFERENCES tags (id);
ALTER TABLE task_categories ADD CONSTRAINT task_categories_categories_id_fk FOREIGN KEY (categories_id) REFERENCES categories (id);
ALTER TABLE task_categories ADD CONSTRAINT task_categories_task_id_fk FOREIGN KEY (task_id) REFERENCES task (id);
