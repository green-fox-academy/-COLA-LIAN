CREATE TABLE TodoList (
  `item` INT NOT NULL,
  `done` BOOLEAN ,
  `urgent` BOOLEAN ,
  PRIMARY KEY (`item`));

INSERT INTO TodoList VALUES("buy milks", false, false),("go to school", false, true), ("do workshop", false, true);
DELETE FROM TodoList WHERE done=true;
UPDATE TodoList SET done=true WHERE Item = 'buy milks';

SELECT * FROM TodoList WHERE Item = 'do workshop'