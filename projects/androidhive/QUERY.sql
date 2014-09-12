-- http://www.androidhive.info/2012/05/how-to-connect-android-with-php-mysql/
-- http://devcode.la/

CREATE TABLE IF NOT EXISTS `products`(
	id int(11) PRIMARY KEY AUTO_INCREMENT,
	name varchar(255) COLLATE utf8_unicode_ci NOT NULL,
	price float NOT NULL,
	description varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
	created_at timestamp DEFAULT NOW(),
	updated_at timestamp
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;