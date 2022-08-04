-- What query can solve your problem and get a result like this??

--     email     | first_name | last_name  | matches 
-- --------------+------------+------------+---------
--  ipo@slf.com  | Ikennah    | Onuorah    |       5
--  abdi@slf.com | Ali        | Abdirahman |       5
--  ali@slf.com  | Ali        | Abdirahman |       3

SELECT * from users as u JOIN preferences as p ON u.id = p.user_id;
-- the above query is an example (does not solve your problem)