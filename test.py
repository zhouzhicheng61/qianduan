import pdfplumber
import pandas as pd
import jieba
import os


def getWordsInCount(path, fileName):
    pdf = pdfplumber.open(path + "\\" + fileName)
    pages = pdf.pages
    txt = ""
    for each in pages:
        txt += each.extract_text()
    words = jieba.lcut(txt)
    # 要排除的词汇
    excludes = {}
    counts = {}
    for word in words:
        if len(word) == 1:
            continue
        # 把什么内容替换成什么内容
        elif word == "物流中心":
            rword = "物流"
        else:
            rword = word
            counts[rword] = counts.get(rword, 0) + 1
    for rword in excludes:
        del counts[rword]
    items = list(counts.items())
    items.sort(key=lambda x: x[1], reverse=True)
    for i in range(15):
        rword, count = items[i]
        print("{0:<10}{1:>5}".format(rword, count))


path = "F:\课题\北京20年物流发展\政策\国家（北京）物流产业政策\北京—2017"

fileNames = []
for i in os.walk(path):
    fileNames = i[2]

for j in range(len(fileNames)):
    getWordsInCount(path, fileNames[j])