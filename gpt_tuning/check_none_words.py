import csv
import re
import nltk
from nltk.stem import WordNetLemmatizer
import spacy

# python3 -m spacy download en_core_web_sm を実行する必要あるかも
nlp = spacy.load("en_core_web_sm")  # or other models


# 固有名詞を文中から抽出,大文字を小文字に変換、単語を基本形に変換
def pre_process(text: str) -> set[str]:
    # Process the text
    doc = nlp(text)

    # Extract proper nouns
    proper_nouns = [token.text for token in doc if token.pos_ == "PROPN"]

    # 基本形に変換、すでに小文字化して返す、固有名詞は大文字のまま
    lemmatized_sentence = [token.lemma_ for token in doc if token.is_alpha]
    lemma_extract_propn = (
        set(lemmatized_sentence)
        - set(proper_nouns)
        - {word.lower() for word in proper_nouns}
    )
    return lemma_extract_propn


# 前処理した単語の集合と、受験で覚えるべき単語の集合を比べる
def check_none_testwords_in_text(file_path: str, text: set[str]) -> set[str]:
    # 単語を格納するリストを初期化
    words_for_test = set()

    # CSVファイルを開く
    with open(file_path, newline="") as file:
        reader = csv.reader(file)

        # 各行を読み込み、単語をリストに追加
        for row in reader:
            # rowはリスト形式なので、最初の要素を取得
            word = row[0]
            words_for_test.add(word)

    # words_for_testに含まれていない単語を、textから抜き出す
    not_included = text - words_for_test
    return not_included


# 上の二つの関数を合わせる
def set_none_words(file_path: str, text: set[str]):
    text_pre_process = pre_process(text)
    answer = check_none_testwords_in_text(file_path, text_pre_process)
    return answer


# CSVファイルのパス
file_path_high = "../word_list/csv_folder/word_list_j_high_school.csv"
file_path_uni = "../word_list/csv_folder/word_list_2zi_test.csv"


# ファイルを開いて内容を読み込む
with open("input_text.txt", "r") as file:
    text = file.read()

print(
    "高校受験用の単語集合と比較",
    len(set_none_words(file_path_high, text)),
    set_none_words(file_path_high, text),
)
print(
    "大学受験用の単語集合と比較",
    len(set_none_words(file_path_uni, text)),
    set_none_words(file_path_uni, text),
)
