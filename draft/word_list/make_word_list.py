# 中学生の英単語は以下から取得 https://www.eigo-duke.com/tango/chu.html#
# 共通テストレベルの単語は以下から取得 https://www.eigo-duke.com/tango/common.html
# 京大の英単語は以下から取得 https://www.eigo-duke.com/tango/kyoto.html#
# 東大レベルの英単語は以下から取得 https://www.eigo-duke.com/tango/tokyo.html#
# 英検2級レベルの英単語は以下から取得 https://www.eigo-duke.com/tango/eiken2.html#
# 英検準1級レベルの英単語リストは以下から取得 https://www.eigo-duke.com/tango/eikenjun1.html

# 高校受験レベル、共通テストレベル、2次試験レベルの単語リストを作成する

from bs4 import BeautifulSoup
from lxml import html
import re
import csv


def make_word_list(html_name: str) -> [str]:
    # HTMLファイルを開く
    with open(html_name, "r", encoding="utf-8") as file:
        # ファイルの内容を読み込む
        html_content = file.read()

    # BeautifulSoupを使用してHTMLを解析する
    soup = BeautifulSoup(html_content, "html.parser")

    # lxmlのhtmlパーサーを使用してHTMLを解析
    tree = html.fromstring(html_content)

    # 指定されたXPathにマッチする要素を取得
    # element = tree.xpath('/html/body/div[3]/div[2]/font/div[2]/table/tbody/tr[2]/td[3]/div')
    element = tree.xpath("/html/body")

    # '|'で分割して各セグメントを処理
    words = re.findall(r"\|([a-zA-Z]+)", element[0].text_content())
    return words


# for文で、それぞれのhtmlからword_listを作成し、連結させる
def words_list_to_csv(files_list: [str], csv_name: str):
    words_list = []
    # 各htmlから単語リストを作成
    for i in range(len(files_list)):
        words_list.extend(make_word_list(files_list[i]))
    # 単語のダブりをなくす
    words_list = list({word.lower() for word in set(words_list)})
    print("{}単語のリストをcsvファイルで保存します".format(len(words_list)))

    # csvファイルで保存
    with open(csv_name, "w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        for word in words_list:
            writer.writerow([word])


# 高校受験レベル、共通テストレベル、2次試験レベルの単語リストに使用するhtmlのリストを作る
word_list_j_high_school = [
    "./html_folder/j_high_school_1.html",
    "./html_folder/j_high_school_2.html",
    "./html_folder/j_high_school_3.html",
    "./html_folder/j_high_school_1_horizon.html",
    "./html_folder/j_high_school_2_horizon.html",
    "./html_folder/j_high_school_3_horizon.html",
    "./html_folder/j_high_school_1_newcrown.html",
    "./html_folder/j_high_school_2_newcrown.html",
    "./html_folder/j_high_school_3_newcrown.html",
    "./html_folder/j_high_school_all.html",
    "./html_folder/eiken_5.html",
    "./html_folder/eiken_4.html",
    "./html_folder/eiken_3.html",
]
word_list_center_test = [
    "./html_folder/center_test.html",
    "./html_folder/eiken_sub1.html",
]
word_list_center_test.extend(word_list_j_high_school)
word_list_2zi_test = [
    "./html_folder/kyodai.html",
    "./html_folder/todai.html",
    "./html_folder/eiken_2.html",
    "./html_folder/eiken_sub1.html",
]
word_list_2zi_test.extend(word_list_center_test)

# csvファイルの名前
csv_names = [
    "./csv_folder/word_list_j_high_school.csv",
    "./csv_folder/word_list_center_test.csv",
    "./csv_folder/word_list_2zi_test.csv",
]

# レベルごとの単語帳のcsvを生成
# 高校受験の単語リスト
words_list_to_csv(word_list_j_high_school, csv_names[0])
# 共通テストの単語リスト
words_list_to_csv(word_list_center_test, csv_names[1])
# 2次試験の単語リスト
words_list_to_csv(word_list_2zi_test, csv_names[2])
