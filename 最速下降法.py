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


# 直接新增一个点位到point里面
def createNewPoint(TheFastestDownDirectionVector, k):
    xindian = []
    for i in range(0, len(point[k])):
        xindian.append(point[k][i] + TheFastestDownDirectionVector[i] * y)
    point.append((xindian[0], xindian[1]))


from sympy import *
import numpy as np
import sympy
# # 定义变量
x1, x2 = symbols('x1,x2')
y = symbols('y')
# # 定义函数
# f = x1**2 - 2 * x1 * x2 + 4 * x2**2 + x1 - 3 * x2
f = x1**2 + 4 * x2**2
# 定义初始点位
point = [(1, 1)]
# 设置精度
ξ = 0.2
# 初始化k值
k = 0
# 求最速方向向量
TheFastestDirectionVector = getTheFastestDirectionVector(f, x1, x2)
# moer
moer = np.Infinity

# 按精度要求循环
# while moer > ξ:

# 按迭代次数循环
while k < 3:
    # 把点带入最速方向向量，求值
    cal = calculateVector(TheFastestDirectionVector, point[k], x1, x2)
    # 求模长
    moer = round(calculateMoer(cal), 5)
    # 计算最速下降方向
    TheFastestDownDirectionVector = retreatVector(cal)
    # 输出当前点的所有结果
    print(k, point, moer, TheFastestDownDirectionVector)
    # 新的点
    createNewPoint(TheFastestDownDirectionVector, k)
    # 形成关于新的点的函数
    f_y = f.subs({x1: point[k + 1][0], x2: point[k + 1][1]})
    # 对新的函数求导
    f_y_diff_1 = diff(f_y, y)
    # 对倒数求解
    alpha = sympy.solve(f_y_diff_1, y)
    # 新的点对应的函数值
    f_y_result = round(f_y.subs({y: alpha[0]}), 5)
    # 把得到的解带回新的函数，把值赋给新的点
    point[k + 1] = (round(point[k + 1][0].subs({y: alpha[0]}),
                          5), round(point[k + 1][1].subs({y: alpha[0]}), 5))
    k += 1
