ls	list	查看当前文件夹下的内容
02	pwd	print wrok directory	查看当前所在文件夹
03	cd [目录名]	change directory	切换文件夹
04	touch [文件名]	touch	如果文件不存在，新建文件
05	mkdir [目录名]	make directory	创建目录
06	rm [文件名]	remove	删除指定的文件名
07	clear	clear	清屏


文本搜索：grep
例如：
grep 'a' 1.txt

find ./ -name test.sh	查找当前目录下所有名为test.sh的文件
find ./ -name '*.sh'	查找当前目录下所有后缀为.sh的文件
find ./ -name "[A-Z]*"	查找当前目录下所有以大写字母开头的文件
find /tmp -size 2M	查找在/tmp 目录下等于2M的文件
find /tmp -size +2M	查找在/tmp 目录下大于2M的文件
find /tmp -size -2M	查找在/tmp 目录下小于2M的文件
find ./ -size +4k -size -5M	查找当前目录下大于4k，小于5M的文件
find ./ -perm 777	查找当前目录下权限为 777 的文件或目录

gzip  [选项]  被压缩文件
-d	解压
-r	压缩所有子目录