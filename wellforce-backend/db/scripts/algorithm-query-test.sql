-- What query can solve your problem and get a result like this??

--     email     | first_name | last_name  | matches 
-- --------------+------------+------------+---------
--  ipo@slf.com  | Ikennah    | Onuorah    |       5
--  abdi@slf.com | Ali        | Abdirahman |       5
--  ali@slf.com  | Ali        | Abdirahman |       3
\c wellforce
-- SELECT username,activity_name from users as u JOIN preferences as p ON u.id = p.user_id;
--SELECT user_id
 --FROM preferences
  --WHERE activity_name in (meditation,cardio);

--SELECT username,activity_name from users where user
--as u JOIN preferences as p ON u.id = p.user_id;

SELECT COUNT(user_id) FROM preferences WHERE user_id = $1 ;

-- 
 
 -- SELECT COUNT(user by GROUP by) FROM 
-- the above query is an example (does not solve your problem)




--you can make different tables and query them together you can make two subtables on querys