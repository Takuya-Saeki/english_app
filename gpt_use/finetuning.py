# 大学受験向けの英文は、使う単語を指定するだけでいけそう

from openai import OpenAI
import os
from dotenv import load_dotenv

# .env ファイルを読み込む
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
print(api_key)

# clientを定義する
client = OpenAI()


# training fileをuploadする
response_file = client.files.create(
    file=open("training.jsonl", "rb"), purpose="fine-tune"
)

# 10個以上、データがないとfinetuning を受け付けてくれない
# 使うtraining fileのidを指定
# fine tuningが完了したら、メールが届く
response_model = client.fine_tuning.jobs.create(
    training_file=response_file.id, model="gpt-3.5-turbo"
)
