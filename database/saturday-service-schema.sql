-- Saturday Service Manager Schema
-- Tables for managing volunteers, chores, and service assignments
-- PostgreSQL Version

-- Volunteers Table
CREATE TABLE volunteers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    avatar VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chores Table
CREATE TABLE chores (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    area VARCHAR(150),
    icon VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Attendance History Table (tracks weekly attendance)
CREATE TABLE attendance_history (
    id SERIAL PRIMARY KEY,
    volunteer_id INT NOT NULL,
    week_number INT NOT NULL,
    week_date DATE,
    present BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers(id) ON DELETE CASCADE,
    UNIQUE(volunteer_id, week_number)
);

-- Service Schedules Table (stores scheduled service dates and volunteers)
CREATE TABLE service_schedules (
    id SERIAL PRIMARY KEY,
    service_date DATE NOT NULL UNIQUE,
    volunteer_count INT DEFAULT 0,
    status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chore Assignments Table (junction table for assigning chores to volunteers for a specific service)
CREATE TABLE chore_assignments (
    id SERIAL PRIMARY KEY,
    service_id INT NOT NULL,
    chore_id VARCHAR(10) NOT NULL,
    volunteer_id INT,
    completed BOOLEAN DEFAULT FALSE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (service_id) REFERENCES service_schedules(id) ON DELETE CASCADE,
    FOREIGN KEY (chore_id) REFERENCES chores(id) ON DELETE CASCADE,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers(id) ON DELETE SET NULL
);

-- Insert default volunteers
INSERT INTO volunteers (name, avatar, description) VALUES
('John', '../resources/profiles/john.png', 'Always ready to take responsibility and help wherever needed.'),
('Balaji', '../resources/profiles/balaji.png', 'Supports the team with dedication and consistent effort.'),
('Prabhu', '../resources/profiles/prabhu.png', 'Calm and dependable in handling church preparation tasks.'),
('James', '../resources/profiles/james.jpg', 'Brings positive energy and teamwork to every service day.'),
('Abishek', '../resources/profiles/abishek.jpg', 'Quick to assist and actively involved in all arrangements.'),
('Bobby', '../resources/profiles/bobby.jpg', 'Willing to serve faithfully in both small and big responsibilities.'),
('Sabari', '../resources/profiles/stephen.png', 'Coordinates tasks smoothly and helps keep the team organized.'),
('Judson', '../resources/profiles/judson.jpg', 'Committed to serving with sincerity and a helpful attitude.'),
('Joseph', '../resources/profiles/joseph.jpg', 'Reliable in completing assigned duties with care and focus.'),
('Living', '../resources/profiles/living.png', 'Actively participates in making church preparations successful.');

-- Insert default chores
INSERT INTO chores (id, name, area, icon) VALUES
('ch1', 'Church Outside Sweeping', 'Exterior Grounds', 'brush'),
('ch2', 'Entrance Steps Cleaning', 'Main Entrance Entryway', 'sparkles'),
('ch3', 'Bathroom Cleaning', 'Restrooms Sanitation', 'droplet'),
('ch4', 'Kitchen Area Cleaning', 'Fellowship Kitchen Counter', 'chef-hat'),
('ch5', 'Water Vessel Cleaning', 'Storage Tanks & Dispensers', 'cup-water'),
('ch6', 'Carrying Water for Sunday Service', 'Main Hall Logistical Supply', 'container'),
('ch7', 'Carrying Metro Water for Aunt', 'Parsonage Core Logistics', 'truck'),
('ch8', 'Back Side Chair Cleaning', 'Rear Seating Rows', 'armchair'),
('ch9', 'Red Carpet Cleaning', 'Altar Center Aisle Pathway', 'layers'),
('ch10', 'Altar Item Cleaning', 'Sacred Utensils & Lectern', 'gantt-chart-square'),
('ch11', 'Main Hall Sweeping', 'Main Congregation Seating', 'wind'),
('ch12', 'Floor Mopping', 'Interior Hall Polishing', 'paint-bucket'),
('ch13', 'Fan Dust Cleaning', 'Ceiling & Wall Mounted Fixtures', 'fan'),
('ch14', 'Electrical Maintenance', 'Lights & Sound Boards Routing', 'wrench'),
('ch15', 'Altar Arrangement Setup', 'Main Chancel Platform Stage', 'layout-grid');

-- Insert sample attendance history for the past 10 weeks
-- John: 1,1,0,1,1,1,0,1,1,1
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(1, 1, '2026-04-25', true), (1, 2, '2026-05-02', true), (1, 3, '2026-05-09', false), (1, 4, '2026-05-16', true), (1, 5, '2026-05-23', true),
(1, 6, '2026-05-30', true), (1, 7, '2026-06-06', false), (1, 8, '2026-06-13', true), (1, 9, '2026-06-20', true), (1, 10, '2026-06-27', true);

-- Balaji: 1,0,1,1,0,1,0,1,1,0
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(2, 1, '2026-04-25', true), (2, 2, '2026-05-02', false), (2, 3, '2026-05-09', true), (2, 4, '2026-05-16', true), (2, 5, '2026-05-23', false),
(2, 6, '2026-05-30', true), (2, 7, '2026-06-06', false), (2, 8, '2026-06-13', true), (2, 9, '2026-06-20', true), (2, 10, '2026-06-27', false);

-- Prabhu: 1,1,1,1,1,0,1,1,0,1
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(3, 1, '2026-04-25', true), (3, 2, '2026-05-02', true), (3, 3, '2026-05-09', true), (3, 4, '2026-05-16', true), (3, 5, '2026-05-23', true),
(3, 6, '2026-05-30', false), (3, 7, '2026-06-06', true), (3, 8, '2026-06-13', true), (3, 9, '2026-06-20', false), (3, 10, '2026-06-27', true);

-- James: 0,0,1,1,1,0,1,0,1,1
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(4, 1, '2026-04-25', false), (4, 2, '2026-05-02', false), (4, 3, '2026-05-09', true), (4, 4, '2026-05-16', true), (4, 5, '2026-05-23', true),
(4, 6, '2026-05-30', false), (4, 7, '2026-06-06', true), (4, 8, '2026-06-13', false), (4, 9, '2026-06-20', true), (4, 10, '2026-06-27', true);

-- Abishek: 1,1,1,0,1,1,1,1,0,1
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(5, 1, '2026-04-25', true), (5, 2, '2026-05-02', true), (5, 3, '2026-05-09', true), (5, 4, '2026-05-16', false), (5, 5, '2026-05-23', true),
(5, 6, '2026-05-30', true), (5, 7, '2026-06-06', true), (5, 8, '2026-06-13', true), (5, 9, '2026-06-20', false), (5, 10, '2026-06-27', true);

-- Bobby: 0,1,0,1,0,1,1,0,1,0
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(6, 1, '2026-04-25', false), (6, 2, '2026-05-02', true), (6, 3, '2026-05-09', false), (6, 4, '2026-05-16', true), (6, 5, '2026-05-23', false),
(6, 6, '2026-05-30', true), (6, 7, '2026-06-06', true), (6, 8, '2026-06-13', false), (6, 9, '2026-06-20', true), (6, 10, '2026-06-27', false);

-- Sabari: 1,1,1,1,0,0,1,1,1,1
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(7, 1, '2026-04-25', true), (7, 2, '2026-05-02', true), (7, 3, '2026-05-09', true), (7, 4, '2026-05-16', true), (7, 5, '2026-05-23', false),
(7, 6, '2026-05-30', false), (7, 7, '2026-06-06', true), (7, 8, '2026-06-13', true), (7, 9, '2026-06-20', true), (7, 10, '2026-06-27', true);

-- Judson: 1,0,1,0,1,0,1,1,0,1
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(8, 1, '2026-04-25', true), (8, 2, '2026-05-02', false), (8, 3, '2026-05-09', true), (8, 4, '2026-05-16', false), (8, 5, '2026-05-23', true),
(8, 6, '2026-05-30', false), (8, 7, '2026-06-06', true), (8, 8, '2026-06-13', true), (8, 9, '2026-06-20', false), (8, 10, '2026-06-27', true);

-- Joseph: 1,1,0,1,1,1,1,0,1,1
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(9, 1, '2026-04-25', true), (9, 2, '2026-05-02', true), (9, 3, '2026-05-09', false), (9, 4, '2026-05-16', true), (9, 5, '2026-05-23', true),
(9, 6, '2026-05-30', true), (9, 7, '2026-06-06', true), (9, 8, '2026-06-13', false), (9, 9, '2026-06-20', true), (9, 10, '2026-06-27', true);

-- Living: 0,1,1,1,1,1,0,1,1,1
INSERT INTO attendance_history (volunteer_id, week_number, week_date, present) VALUES
(10, 1, '2026-04-25', false), (10, 2, '2026-05-02', true), (10, 3, '2026-05-09', true), (10, 4, '2026-05-16', true), (10, 5, '2026-05-23', true),
(10, 6, '2026-05-30', true), (10, 7, '2026-06-06', false), (10, 8, '2026-06-13', true), (10, 9, '2026-06-20', true), (10, 10, '2026-06-27', true);
