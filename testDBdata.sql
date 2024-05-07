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

INSERT INTO `book` (id, authorId, name, deposit, day_price, discount, available, state, image) VALUES
(default, 1, 'The Lost City', 'book1', 300, 22, 0, true, 1, ''),
(default, 1, 'Echoes of the Past', 'book1', 320, 21, 0, true, 1, ''),
(default, 2, 'Into the Wild', 'book2', 520, 46, 15, true, 1, ''),
(default, 2, 'The Last Stand', 'book3', 300, 21, 0, true, 1, ''),
(default, 3, 'Secrets of the Forest', 'book1', 120, 26, 0, true, 1, ''),
(default, 3, 'Whispers in the Wind', 'book2', 200, 20, 16, true, 1, ''),
(default, 4, 'The Dark Knight', 'book3', 500, 25, 0, true, 1, ''),
(default, 4, 'Shadows of Betrayal', 'book1', 500, 20, 0, true, 1, ''),
(default, 5, 'Forgotten Memories', 'book1', 200, 30, 0, true, 1, ''),
(default, 5, 'Broken Promises', 'book2', 320, 20, 15, true, 1, ''),
(default, 6, 'City of Dreams', 'book2', 300, 30, 0, true, 1, ''),
(default, 6, 'The Silent Observer', 'book2', 200, 20, 0, true, 1, ''),
(default, 7, 'Island of Secrets', 'book3', 320, 50, 0, true, 1, ''),
(default, 7, 'The Haunting Past', 'book3', 200, 20, 0, true, 1, ''),
(default, 8, 'The Final Hour', 'book3', 500, 60, 10, true, 1, ''),
(default, 8, 'Echoes of Destiny', 'book1', 600, 20, 0, true, 1, ''),
(default, 9, 'The Enchanted Garden', 'book1', 200, 10, 0, true, 1, ''),
(default, 9, 'The Forbidden Curse', 'book1', 320, 20, 0, true, 1, ''),
(default, 10, 'The Lost Kingdom', 'book2', 500, 70, 0, true, 1, ''),
(default, 10, 'Guardians of Time', 'book3', 1000, 20, 40, true, 1, ''),
(default, 11, 'Whispers of Love', 'book1', 320, 30, 0, true, 1, ''),
(default, 11, 'In the Arms of Fate', 'book1', 300, 26, 0, true, 1, ''),
(default, 12, 'The Art of Deception', 'book1', 200, 20, 0, true, 1, ''),
(default, 12, 'Shadows of Power', 'book2', 500, 27, 0, true, 1, ''),
(default, 13, 'The Secret Chamber', 'book3', 320, 25, 0, true, 1, ''),
(default, 13, 'The Hidden Truth', 'book2', 500, 20, 0, true, 1, ''),
(default, 14, 'The Forgotten Realm', 'book1', 300, 20, 30, true, 1, ''),
(default, 14, 'Legacy of the Ancients', 'book1', 200, 45, 0, true, 1, ''),
(default, 15, 'The Lost Heirloom', 'book1', 600, 14, 0, true, 1, ''),
(default, 15, 'Whispers in the Dark', 'book2', 1000, 11, 14, true, 1, ''),
(default, 16, 'City of Stars', 'book2', 1000, 25, 0, true, 1, ''),
(default, 16, 'The Broken Mirror', 'book1', 200, 30, 0, true, 1, ''),
(default, 17, 'The Secret Garden', 'book1', 300, 50, 0, true, 1, ''),
(default, 17, 'Whispers of the Heart', 'book1', 320, 70, 0, true, 1, ''),
(default, 18, 'The Final Frontier', 'book1', 200, 10, 0, true, 1, ''),
(default, 18, 'Echoes of Tomorrow', 'book3', 500, 10, 0, true, 1, ''),
(default, 19, 'The Enchanted Forest', 'book3', 600, 50, 12, true, 1, ''),
(default, 19, 'The Hidden Path', 'book2', 320, 30, 0, true, 1, ''),
(default, 20, 'The Lost Treasure', 'book2', 200, 23, 0, true, 1, ''),
(default, 20, 'Echoes of the Past', 'book1', 500, 24, 10, true, 1, '');

INSERT INTO `user` (id, full_name, balance, address, phone_number, category) VALUES
(default, 'Sophia Adams', 13.5, 'Maple Avenue', '555-123-4567', null),
(default, 'Elijah Carter', 11, 'Spring Avenue', '555-115-8967', 1),
(default, 'Ava Patel', 34, 'Elm Street', '555-213-8385', 2),
(default, 'Isabella Garcia', 45.4, 'Pine Street', '555-454-2388', 2),
(default, 'Mason Baker', 34.5, 'Willow Lane', '555-788-6569', null);

INSERT INTO `order` (id, date, bookId, userId) VALUES
(default, '22-04-2024', 1, 3),
(default, '25-10-2023', 2, 3),
(default, '12-07-2023', 5, 5),
(default, '05-11-2022', 7, 1),
(default, '11-11-2021', 1, 2);