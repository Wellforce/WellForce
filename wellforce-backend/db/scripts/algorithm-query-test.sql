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

SELECT username,first_name,last_name,email, matches from (SELECT user_id,COUNT(user_id) as matches  FROM 
(SELECT p.user_id,p.activity_name FROM 
(SELECT user_id,activity_name FROM preferences where user_id = 2) as userpref 
JOIN preferences as p on userpref.activity_name = p.activity_name where p.user_id != 2)
 as matchedUsers GROUP BY matchedusers.user_id) as Usermatchesinfo
 JOIN users on Usermatchesinfo.user_id = users.id
 ORDER BY matches DESC ;

-- 
 
 -- SELECT COUNT(user by GROUP by) FROM 
-- the above query is an example (does not solve your problem)




--you can make different tables and query them together you can make two subtables on querys