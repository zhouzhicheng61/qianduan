# ——————————————————99乘法表
# i = 1
# while i <= 9:
#     j = 1
#     while j <= i:
#         print(str(j) + "*" + str(i) + "=" + str(i * j), end='\t')
#         j += 1
#     print("")
#     i += 1

# ——————————————————10以内的素数
# while 方法
# i = 2
# num = int(input("想查询多少以内的素数呢？"))
# print(num, "以内的质数有：", end='')
# while i <= num:
#     j = 2
#     while j <= i:
#         if (j == i):
#             print(i, end=" ")
#             break
#         elif (i % j == 0):
#             break
#         j += 1
#     i += 1

# for 方法
# num = int(input("想查询多少以内的素数呢？"))
# for i in range(2, num):
#     for j in range(2, i):
#         if (i % j == 0):
#             print(i, "是合数")
#             break
#     else:
#         print(i, "是质数")

# 获取从左下到右上对角线的值
list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

n = len(list)
a = []
for i in list:
    a.append(i[n - 1])
    n -= 1
print(a)

b = [list[i][-i - 1] for i in range(len(list))]
print(b)

for i in range(len(list) - 1, -1, -1):
    print(i)