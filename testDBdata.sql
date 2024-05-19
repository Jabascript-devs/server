INSERT INTO `author` (id, full_name) VALUES
(default, 'Sarah Johnson'),
(default, 'David Smith'),
(default, 'Emily Brown'),
(default, 'Michael Davis'),
(default, 'Jennifer Wilson'),
(default, 'James Martinez'),
(default, 'Emma Anderson'),
(default, 'Christopher Taylor'),
(default, 'Olivia Thomas'),
(default, 'Matthew Garcia'),
(default, 'Sophia Moore'),
(default, 'Daniel Thompson'),
(default, 'Ava Harris'),
(default, 'Alexander Robinson'),
(default, 'Isabella Lewis'),
(default, 'Ethan Walker'),
(default, 'Mia Hall'),
(default, 'William White'),
(default, 'Amelia Scott'),
(default, 'Benjamin Green');

INSERT INTO `book` (id, authorId, name, image, deposit, day_price, discount, available, state, genre) VALUES
(default, 1, 'The Lost City', 'book1', 300, 22, 0, true, 1, 'Adventure'),
(default, 1, 'Echoes of the Past', 'book1', 320, 21, 0, true, 1, 'Historical Fiction'),
(default, 2, 'Into the Wild', 'book2', 520, 46, 5, true, 1, 'Travel'),
(default, 2, 'The Last Stand', 'book3', 300, 21, 0, true, 1, 'Thriller'),
(default, 3, 'Secrets of the Forest', 'book1', 120, 2, 0, true, 1, 'Fantasy'),
(default, 3, 'Whispers in the Wind', 'book2', 200, 20, 1, true, 1, 'Romance'),
(default, 4, 'The Dark Knight', 'book3', 500, 25, 0, true, 1, 'Mystery'),
(default, 4, 'Shadows of Betrayal', 'book1', 500, 20, 0, true, 1, 'Thriller'),
(default, 5, 'Forgotten Memories', 'book1', 200, 30, 0, true, 1, 'Drama'),
(default, 5, 'Broken Promises', 'book2', 320, 20, 4, true, 1, 'Romance'),
(default, 6, 'City of Dreams', 'book2', 300, 30, 0, true, 1, 'Science Fiction'),
(default, 6, 'The Silent Observer', 'book2', 200, 20, 0, true, 1, 'Mystery'),
(default, 7, 'Island of Secrets', 'book3', 320, 50, 0, true, 1, 'Adventure'),
(default, 7, 'The Haunting Past', 'book3', 200, 20, 0, true, 1, 'Horror'),
(default, 8, 'The Final Hour', 'book3', 500, 60, 4, true, 1, 'Thriller'),
(default, 8, 'Echoes of Destiny', 'book1', 600, 20, 0, true, 1, 'Fantasy'),
(default, 9, 'The Enchanted Garden', 'book1', 200, 10, 0, true, 1, 'Children’s'),
(default, 9, 'The Forbidden Curse', 'book1', 320, 20, 0, true, 1, 'Fantasy'),
(default, 10, 'The Lost Kingdom', 'book2', 500, 70, 0, true, 1, 'Historical Fiction'),
(default, 10, 'Guardians of Time', 'book3', 1000, 20, 4, true, 1, 'Science Fiction'),
(default, 11, 'Whispers of Love', 'book1', 320, 30, 0, true, 1, 'Romance'),
(default, 11, 'In the Arms of Fate', 'book1', 300, 26, 0, true, 1, 'Drama'),
(default, 12, 'The Art of Deception', 'book1', 200, 20, 0, true, 1, 'Mystery'),
(default, 12, 'Shadows of Power', 'book2', 500, 27, 0, true, 1, 'Thriller'),
(default, 13, 'The Secret Chamber', 'book3', 320, 25, 0, true, 1, 'Mystery'),
(default, 13, 'The Hidden Truth', 'book2', 500, 20, 0, true, 1, 'Science Fiction'),
(default, 14, 'The Forgotten Realm', 'book1', 300, 20, 3, true, 1, 'Fantasy'),
(default, 14, 'Legacy of the Ancients', 'book1', 200, 45, 0, true, 1, 'Historical Fiction'),
(default, 15, 'The Lost Heirloom', 'book1', 600, 14, 0, true, 1, 'Adventure'),
(default, 15, 'Whispers in the Dark', 'book2', 1000, 11, 1, true, 1, 'Horror'),
(default, 16, 'City of Stars', 'book2', 1000, 25, 0, true, 1, 'Science Fiction'),
(default, 16, 'The Broken Mirror', 'book1', 200, 30, 0, true, 1, 'Fantasy'),
(default, 17, 'The Secret Garden', 'book1', 300, 50, 0, true, 1, 'Children’s'),
(default, 17, 'Whispers of the Heart', 'book1', 320, 70, 0, true, 1, 'Romance'),
(default, 18, 'The Final Frontier', 'book1', 200, 10, 0, true, 1, 'Science Fiction'),
(default, 18, 'Echoes of Tomorrow', 'book3', 500, 10, 0, true, 1, 'Fantasy'),
(default, 19, 'The Enchanted Forest', 'book3', 600, 50, 2, true, 1, 'Fantasy'),
(default, 19, 'The Hidden Path', 'book2', 320, 30, 0, true, 1, 'Adventure'),
(default, 20, 'The Lost Treasure', 'book2', 200, 23, 0, true, 1, 'Adventure'),
(default, 20, 'Echoes of the Past', 'book1', 500, 24, 5, true, 1, 'Historical Fiction');

INSERT INTO `user` (id, full_name, balance, address, phone_number, category) VALUES
(default, 'Sophia Adams', 1000, 'Maple Avenue', '555-123-4567', null),
(default, 'Elijah Carter', 1100, 'Spring Avenue', '555-115-8967', 1),
(default, 'Ava Patel', 3400, 'Elm Street', '555-213-8385', 2),
(default, 'Isabella Garcia', 4500, 'Pine Street', '555-454-2388', 2),
(default, 'Mason Baker', 3400, 'Willow Lane', '555-788-6569', null);

insert into `user_order` (id, bookId, userId, date_taken, expected_date_return, date_returned)
values
    (default, 1, 1, DATE_FORMAT(DATE_SUB(NOW(), INTERVAL 2 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 3 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 2 DAY), '%d-%m-%Y')),
    (default, 2, 1, DATE_FORMAT(DATE_SUB(NOW(), INTERVAL 2 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 3 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 2 DAY), '%d-%m-%Y')),
    (default, 3, 1, DATE_FORMAT(DATE_SUB(NOW(), INTERVAL 2 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 3 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 2 DAY), '%d-%m-%Y')),
    (default, 4, 3, DATE_FORMAT(DATE_SUB(NOW(), INTERVAL 2 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 3 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 2 DAY), '%d-%m-%Y')),
    (default, 5, 4, DATE_FORMAT(DATE_SUB(NOW(), INTERVAL 2 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 3 DAY), '%d-%m-%Y'), DATE_FORMAT(DATE_ADD(NOW(), INTERVAL 2 DAY), '%d-%m-%Y'));
