SELECT * FROM CONSULTA

bulk insert USUARIOS
from 'C:\db\USUARIOS.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
);

bulk insert CLINICAS
from 'C:\db\CLINICAS.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
);

bulk insert MEDICOS
from 'C:\db\MEDICOS.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
);


bulk insert PRONTUARIOS
from 'C:\db\PRONTUARIOS.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
);


bulk insert CONSULTA
from 'C:\db\CONSULTAS.csv'
	with(
		format = 'csv',
		firstrow = 2, -- primeira linha de dados = 2
		fieldterminator = ';', -- separador de campos = ';'
		rowterminator = '\n', -- separador de linhas = '\n'
		CODEPAGE = 'ACP', -- codificação dos dados = 'ACP'
		DATAFILETYPE = 'Char' -- tipo do arquivo = 'Char'
);

SELECT * FROM PRONTUARIOS

SELECT * FROM CONSULTA

SELECT * FROM CLINICAS

-------------------------------------

DELETE FROM USUARIOS
DBCC CHECKIDENT ('USUARIOS', RESEED, 0)

DELETE FROM MEDICOS
DBCC CHECKIDENT ('MEDICOS', RESEED, 0)
DELETE FROM PRONTUARIOS
DBCC CHECKIDENT ('PRONTUARIOS', RESEED, 0)
DELETE FROM CONSULTA
DBCC CHECKIDENT ('CONSULTA', RESEED, 0)

---------------------------------------

SELECT * FROM MEDICOS
SELECT * FROM PRONTUARIOS
SELECT * FROM CONSULTA

----------------------------------------