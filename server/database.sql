CREATE TABLE persons(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE travels(
    id SERIAL PRIMARY KEY,
    id_for_slug VARCHAR(255),
    title VARCHAR(255),
    countries VARCHAR(1000),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES persons (id)
);

CREATE TABLE chapters(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR,
    travel_id INTEGER,
    FOREIGN KEY (travel_id) REFERENCES travels (id)
);
