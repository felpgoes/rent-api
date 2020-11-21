CREATE TABLE users (
    id varchar(50) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    email_confirmation boolean default false,
    two_factor_confirmation boolean default false,
    username varchar(25) NULL,
    document varchar(50) NOT NULL,
    document_type varchar(25) NOT NULL
)

CREATE TABLE login_token (
    id varchar(50) NOT NULL,
    email varchar(255) NOT NULL,
    token_type varchar(50),
    expires date NOT NULL
)