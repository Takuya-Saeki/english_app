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

# jobIDから、そのjobで生成されたfine tuning model のIDを取得する
job = client.fine_tuning.jobs.retrieve('ftjob-gy6uft4fLkpp0rH8j7rgw0AA')
if job.status == 'succeeded':
    model_id = job.fine_tuned_model
print(model_id)

# fine tuning modelを使って、文章を生成する
response = client.chat.completions.create(
    model=model_id,
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"},
    ],
)

print(response)
print(response.choices[0].message)
print(response.choices[0].message.content)
