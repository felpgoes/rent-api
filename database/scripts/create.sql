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
    id varchar(50) NOT NcULL,
    email varchar(255) NOT NULL,
    token varchar(50),
    expires timestamp NOT NULL
)

CREATE TABLE place (
    id varchar(25) NOT NULL,
    street varchar(50) NOT NULL,
    number integer NOT NULL,
    complement varchar(50) NULL,
    neighborhood varchar(25) NOT NULL,
    zipcode varchar(10) NOT NULL,
    country varchar(25) NOT NULL,
    name varchar(50) NOT NULL,
    owner_id varchar(25) NOT NULL,
    contact varchar(25) NOT NULL,
    description varchar(255) NOT NULL
)

CREATE TABLE images (
    id varchar(25) NOT NULL,
    place_id varchar(25) NOT NULL,
    url varchar(50) NOT NULL
)