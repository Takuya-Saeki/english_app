import requests
from bs4 import BeautifulSoup


# urlのpタグからテキストを抽出
def scrape_text_from_url(url: str) -> [str]:
    response = requests.get(url)
    html = response.content

    # BeautifulSoupオブジェクトを作成
    soup = BeautifulSoup(html, "html.parser")

    # noscriptタグをすべて削除、noscriptタグ内にもpタグが存在するため
    for noscript in soup.find_all("noscript"):
        noscript.decompose()

    # 本文が含まれると思われるタグを抽出（例：'p' タグ）
    article_text = ""
    for paragraph in soup.find_all("p"):
        article_text += paragraph.get_text()
    # テキスト整形用の文字列を除去する
    clean_text = article_text.replace("\u3000", "")
    clean_text = clean_text.replace("\t", "")

    # 改行文字ごとにテキストを分割する
    splited_text = [line for line in clean_text.split("\n") if line.strip() != ""]
    return splited_text


# サンプルのURLリスト
url_list = [
    "https://media.alpen-group.jp/media/detail/baseball_230316_01.html",
    "https://news.yahoo.co.jp/articles/5eefc9b1ad0f838b45c527587819a13262d10085",
    "https://www.oricon.co.jp/news/2304930/",
    "https://www.jiji.com/jc/article?k=2023112400917&g=soc",
    "https://www.oricon.co.jp/news/2305041/"
]
# 例として、１つ選んで、テキストを抽出してみる
url = url_list[4]
print(scrape_text_from_url(url))
