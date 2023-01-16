import pdfplumber
import pandas as pd
import jieba

pdf = pdfplumber.open('/Users/zhouzhicheng61/Desktop/北京城市物流功能定位和发展目标.pdf')
pages = pdf.pages
txt = ""
for each in pages:
    txt += each.extract_text()
words = jieba.lcut(txt)
# 要排除的词汇
excludes = {"北京"}
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
for word in excludes:
    del counts[word]
items = list(counts.items())
items.sort(key=lambda x: x[1], reverse=True)
for i in range(15):
    word, count = items[i]
    print("{0:<10}{1:>5}".format(word, count))
