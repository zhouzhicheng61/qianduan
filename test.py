#——————————————————99乘法表
# i = 1
# while i <= 9:
#     j = 1
#     while j <= i:
#         print(str(j) + "*" + str(i) + "=" + str(i * j), end='\t')
#         j += 1
#     print("")
#     i += 1

#——————————————————10以内的素数
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

# # for 方法
# num = int(input("想查询多少以内的素数呢？"))
# for i in range(2, num):
#     for j in range(2, i):
#         if (i % j == 0):
#             print(i, "是合数")
#             break
#     else:
#         print(i, "是质数")
