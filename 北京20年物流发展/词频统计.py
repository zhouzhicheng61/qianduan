# import jieba

# txt = open("F:\课题\北京20年物流发展\政策\年份整合\北京\汇总.txt", "r", encoding="ANSI").read()

import jieba.posseg as psg
from wordcloud import WordCloud
import imageio


def sortInList(lst):
    word_frequency = {}
    for word in lst:
        if word in word_frequency:
            word_frequency[word] += 1
        else:
            word_frequency[word] = 1

    word_sort = sorted(word_frequency.items(),
                       key=lambda x: x[1],
                       reverse=True)
    return word_sort


if __name__ == "__main__":
    #1.打开存放的txt文件
    with open("F:\课题\北京20年物流发展\政策\年份整合\北京\汇总.txt", encoding='ANSI') as f:
        content = (f.read())
        f.close()

    #2.分离感兴趣的词汇，放在lst_words里
    lst_words = []
    flag_list = ['n', 'nz', 'vn']
    list_words = []
    list_counts = []
    excludes = {
        "北京", "备案", "单位", "工作", "城市", "加快", "推进", "提升", "完善", "推动", "完善", "鼓励",
        "创新", "实现", "项目", "本市", "首都", "部门", "水平", "社会", "建立", "能力", "规划", "方式",
        "政策", "优化", "改革", "行业", "经营", "国家", "产品", "机制", "文化", "重点", "全市",
        "北京市", "区域", "地区", "工程", "利用", "升级", "材料", "培育", "设备", "商品", "特色",
        "体系", "管理", "政府", "制度", "协同", "基本", "研究", "行政", "信用", "系统", "力度", "生活",
        "条件", "投资", "优势", "机构", "枢纽", "试点", "监管", "基础", "申报", "战略", "全面", "办理",
        "资金", "意见", "有关", "人才", "全国", "目标", "活动", "统一", "品牌", "布局", "质量", "内容",
        "专项", "教育", "政务", "旅游", "结构", "方面", "主体", "监测", "事项", "时期", "措施", "检测",
        "区级", "时间", "任务", "责任", "指南", "范围", "设计", "业务", "培训", "问题", "情况", "调整",
        "环节", "贷款"
    }
    for word in psg.cut(content):
        #保留名词、专有名词、动名词，长度至少两个字
        if word.flag in flag_list and len(
                word.word) > 1 and word.word not in excludes:
            lst_words.append(word.word)

    #3.按照词频量排序
    lst_sorted = sortInList(lst_words)

    #4.打印词频
    # print('\n序号\t名词\t词频\n')
    for i in range(100):
        list_words.append(lst_sorted[i][0])
        list_counts.append(lst_sorted[i][1])
        # print('{}\t{}\t{}\n'.format(i + 1, lst_sorted[i][0], lst_sorted[i][1]))

    #5.生成云图
    dic = dict(zip(list_words, list_counts))
    print(dic)
    mk = imageio.imread("F:\课题\北京20年物流发展\政策\年份整合\北京\北京市域图-白底.png")
    wc = WordCloud(
        font_path="F:\课题\北京20年物流发展\政策\年份整合\北京\微软雅黑.ttf",
        mask=mk,
        background_color='white',
        max_words=100,
        width=1000,
        height=1000,
    )
    word_cloud = wc.generate_from_frequencies(dic)
    word_cloud.to_file("F:\课题\北京20年物流发展\政策\年份整合\北京\wordcloud.png")
