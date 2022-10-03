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
# list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# n = len(list)
# a = []
# for i in list:
#     a.append(i[n - 1])
#     n -= 1
# print(a)

# b = [list[i][-i - 1] for i in range(len(list))]
# print(b)

# for i in range(len(list) - 1, -1, -1):
#     print(i)

# 求最速方向向量
# def getTheFastestDirectionVector(f, *X):
#     f_diff = []
#     for i in X:
#         f_diff.append(diff(f, i))
#     return f_diff

# 黄金分割法
# def gold(f, a, b, ξ):
#     # 记录默认值
#     a_default = a
#     b_default = b
#     # 插入两个点位
#     x1 = round(a + 0.382 * (b - a), 3)
#     x2 = round(a + 0.618 * (b - a), 3)
#     # 计算两个点位值
#     f1 = round(f.subs({x: x1}), 3)
#     f2 = round(f.subs({x: x2}), 3)
#     print('第', 1, '次迭代结果', 'a的值是', a, 'x1的值是', x1, 'x2的值是', x2, 'b的值是', b,
#           'f1的值是', f1, 'f2的值是', f2)
#     # i += 1
#     # 定义循环次数
#     i = 2
#     # 判断区间是否符合精度要求
#     while (b - a) > ξ:
#         # 比较点位值大小，去区间
#         if f1 < f2:
#             b = x2
#             x2 = x1
#             f2 = f1
#             x1 = round(a + 0.382 * (b - a), 3)
#             f1 = round(f.subs({x: x1}), 3)
#         else:
#             a = x1
#             x1 = x2
#             f1 = f2
#             x2 = round(a + 0.618 * (b - a), 3)
#             f2 = round(f.subs({x: x2}), 3)
#         print('第', i, '次迭代结果', 'a的值是', a, 'x1的值是', x1, 'x2的值是', x2, 'b的值是', b,
#               'f1的值是', f1, 'f2的值是', f2)
#         i += 1
#     x_star = round(0.5 * (a + b), 3)
#     f_star = round(f.subs({x: x_star}), 3)
#     print('x_star:', x_star, 'f_star:', f_star, '初始区间为:',
#           [a_default, b_default], '区间长度为:', b_default - a_default, '迭代次数:',
#           i - 1)

# from sympy import *
# # 定义变量
# x = symbols('x')
# # 定义函数
# f = x**2 - x + 3
# # 定义初始区间
# a = 0
# b = 2
# # 设置精度
# ξ = 0.2
# gold(f, a, b, ξ)

# 牛顿法
# def newton(f, a, ξ):
#     # 初始化k值
#     k = 0
#     # 求一阶导
#     f_diff_1 = diff(f, x)
#     # 求二阶导
#     f_diff_2 = diff(f_diff_1, x)
#     # 计算a[k+1]
#     ak1 = round(a[k] - (f_diff_1.subs({x: a[k]}) / f_diff_2.subs({x: a[k]})),
#                 3)
#     a.append(ak1)
#     # a[k+1]和a[k]比大小
#     while abs(a[k + 1] - a[k]) > ξ:
#         k += 1
#         ak1 = round(
#             a[k] - (f_diff_1.subs({x: a[k]}) / f_diff_2.subs({x: a[k]})), 3)
#         a.append(ak1)
#     print(a)
#     a_star = round(a[k + 1], 3)
#     f_star = round(f.subs({x: a_star}), 3)
#     print('a_star:', a_star, 'f_star:', f_star)

# from sympy import *
# # 定义变量
# x = symbols('x')
# # 定义函数
# f = x**4 - 4 * x**3 - 6 * x**2 - 16 * x + 4
# # 定义点位
# a = [2]
# # 设置精度
# ξ = 0.001
# newton(f, a, ξ)


# 最速下降法
# 获取最速方向向量
def getTheFastestDirectionVector(f, *X):
    f_diff = []
    for i in X:
        f_diff.append(diff(f, i))
    return f_diff


# 把点带入向量，计算值
def calculateVector(TheFastestDirectionVector, point, *X):
    calculate = []
    haha = {}
    k = 0
    for t in X:
        haha[t] = point[k]
        k += 1
    for i in TheFastestDirectionVector:
        calculate.append(i.subs(haha))
    return calculate


# 计算模长
def calculateMoer(e):
    s = 0
    for i in e:
        s += i**2
    return s**0.5


# 向量取反
def retreatVector(TheFastestDirectionVector):
    a = []
    for i in TheFastestDirectionVector:
        i = -i
        a.append(i)
    return a


from sympy import *
import numpy as np
import sympy
# # 定义变量
x1, x2 = symbols('x1,x2')
# # 定义函数
# f = x1**2 - 2 * x1 * x2 + 4 * x2**2 + x1 - 3 * x2
f = x1**2 + 4 * x2**2
# 定义初始点位
point = [(1, 1)]
# 求最速方向向量
TheFastestDirectionVector = getTheFastestDirectionVector(f, x1, x2)
# 把点带入最速方向向量，求值
cal = calculateVector(TheFastestDirectionVector, point[0], x1, x2)
# 求模长
moer = calculateMoer(cal)
# 最速下降方向
a = retreatVector(cal)
# 新的点
y = symbols('y')
xindian = []
for i in range(0, len(point[0])):
    xindian.append(point[0][i] + a[i] * y)
point.append((xindian[0], xindian[1]))
f_y = f.subs({x1: point[1][0], x2: point[1][1]})
f_y_diff_1 = diff(f_y, y)
print(f_y_diff_1)
alpha = sympy.solve(f_y_diff_1, y)
print(alpha)
print(point)
point[1] = (point[1][0].subs({y: alpha[0]}), point[1][1].subs({y: alpha[0]}))
print(point)
