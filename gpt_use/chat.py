# 大学受験向けの英文は、使う単語を指定するだけでいけそう

from openai import OpenAI
import os
from dotenv import load_dotenv

# .env ファイルを読み込む
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

# OpenAIクライアントの初期化
client = OpenAI()

# 翻訳したい日本語のリスト
japanese_texts = ["こんにちは、世界！", "これはテストの文章です。", "Pythonはプログラミング言語です。"]

# 翻訳結果を格納するためのリスト
translated_texts = []

for text in japanese_texts:
    # GPTに翻訳リクエストを送信
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"Please translate this to English: '{text}'"},
        ],
    )

    # 応答から翻訳されたテキストを取得
    translated_text = response.choices[0].message.content
    translated_texts.append(translated_text)

# 翻訳結果を出力
for translated in translated_texts:
    print(translated)
