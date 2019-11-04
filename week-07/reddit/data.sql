-- USE reddit;
-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

-- CREATE TABLE IF NOT EXISTS `posts` (
-- `id` int(8) NOT NULL DEFAULT '0',
-- `title` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
-- `url` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
-- timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- score int(8) NOT NULL DEFAULT '0',
-- PRIMARY KEY (id)
-- ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
-- INSERT INTO posts (id, title, url,  score) VALUES
-- (25, "Dear JavaScript", "http://9gag.com", 791),
-- (74, "Crockford", "http://9gag.com", 567);

use reddit;
CREATE TABLE 'artical_info'
     (
     id INT(11),
     name VARCHAR(25),
     deptId INT(11),
     salary FLOAT
     );