## 外键
如果一个字段X在一张表（表一）中是主关键字，而在另外一张表（表二）中不是主关键字，则字段X称为表二的外键；换句话说如果关系模式R1中的某属性集不是自己的主键，而是关系模式R2的主键，则该属性集称为是关系模式R1的外键。


## 创建一张表
```
create table person(
   id int primary key,
   name varchar(16) not null,
   age int,
   phone varchar(11),
   address varchar(256)
);
```

## 插入数据 (增)
向表中插入一条数据的 SQL 语法如下：
```
INSERT INTO [TABLE_NAME] (column1, column2, column3,...columnN) 
VALUES (value1, value2, value3,...valueN);
```
如：
insert into person(id,name,age,phone,address)
values (1,'yang',22,'123232323','中国上海');

## 删除数据 (删)
```
DELETE FROM [table_name]
WHERE [condition];
```
如：
delete from person where id = 1;

## 修改数据 (改)
```
UPDATE [table_name]
SET column1 = value1, column2 = value2...., columnN = valueN
```
如：
update person set address='浙江杭州';
我们的 update 语句都会结合 where 子句做一个数据筛选，只修改符合条件的记录的 address 字段值。
update person set address='浙江杭州' where id = 1;

## (查)
 ### where 
 select * from person
 where name='yang'&& age=22;

 ### in
 select * from person
 where age in (22,30,23);
 
 ### order by 根据一列或者多列的值，按照升序或者降序排列数据。某些数据库就默认以升序排列查询结果
 select * from person
 order by id desc;

 ### group by 用于将查询返回的结果集进行一个分组，并展示各个分组中排在第一个的记录，将分组中其余成员隐藏
 select * from person
 group by name;

 ### having HAVING 子句在我看来就是一个高配版的 where 子句，无论是我们的分组或是排序，都是基于以返回的结果集，也就是说 where 子句的筛选已经结束
 select avg(age) as vage from person
 group by name
 having vage>23; 

## 优先级
SELECT column1, column2
FROM table
WHERE [ conditions ]
GROUP BY column1, column2
HAVING [ conditions ]
ORDER BY column1, column2

# join
## inner join
内连接是最常见的一种连接，只连接匹配的行。
```js
select * from Table A inner join Table B
on Table A.id=Table B.id
```

## LEFT JOIN
返回左表的全部行和右表满足ON条件的行，如果左表的行在右表中没有匹配，那么这一行右表中对应数据用NULL代替。
```js
select * from Table A left join Table B
on Table A.id=Table B.id
```

## RIGHT JOIN
返回右表的全部行和左表满足ON条件的行，如果右表的行在左表中没有匹配，那么这一行左表中对应数据用NULL代替。
```js
select * from Table A right join Table B
on Table A.id=Table B.id
```

## FULL JOIN 
会从左表 和右表 那里返回所有的行。如果其中一个表的数据行在另一个表中没有匹配的行，那么对面的数据用NULL代替
```js
select * from Table A full outer join Table B
on Table A.id=Table B.id
```