import pdfplumber
import pandas as pd
import jieba
import os
import openpyxl


def getWordsInCount(year, level, field, path, fileName):
    pdf = pdfplumber.open(path + "\\" + fileName)
    pages = pdf.pages
    txt = ""
    for each in pages:
        txt += each.extract_text()
    words = jieba.lcut(txt)
    counts = {}
    for word in words:
        if len(word) == 1:
            continue
        else:
            rword = word
        counts[rword] = counts.get(rword, 0) + 1
    items = list(counts.items())
    items.sort(key=lambda x: x[1], reverse=True)
    for i in range(10):
        data = [year, level, field]
        word, count = items[i]
        data.append(fileName[:-4])
        data.append(word)
        data.append(count)
        sheet.append(data)
    wb.save("F:\课题\北京20年物流发展\数据\政策分析内容.xlsx")


year = "2022"
level = "北京"
field = "物流"
path = f"F:\课题\北京20年物流发展\政策\{year}\{level}\{field}"

wb = openpyxl.load_workbook("F:\课题\北京20年物流发展\数据\政策分析内容.xlsx")
sheet = wb['Sheet1']
fileNames = []

for i in os.walk(path):
    fileNames = i[2]

for j in range(len(fileNames)):
    getWordsInCount(year, level, field, path, fileNames[j])

print("任务执行完成")