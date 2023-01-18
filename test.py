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


path = "F:\课题\北京20年物流发展\政策\国家（北京）物流产业政策\北京—2017"
wb = openpyxl.load_workbook("F:\课题\北京20年物流发展\数据\政策分析内容.xlsx")
sheet = wb['Sheet1']
fileNames = []

for i in os.walk(path):
    fileNames = i[2]

for j in range(len(fileNames)):
    getWordsInCount("2017", "国家", "物流", path, fileNames[j])
