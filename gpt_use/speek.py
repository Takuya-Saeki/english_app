# # .pyのファイルでのみ実行可能、フォルダを作って、mp3の音声データを貯める
# from pathlib import Path
# from openai import OpenAI
# client = OpenAI()

# speech_file_path = Path(__file__).parent / "speech.mp3"
# response = client.audio.speech.create(
#   model="tts-1",
#   voice="alloy",
#   input="Today is a wonderful day to build something people love!"
# )

# response.stream_to_file(speech_file_path)


from openai import OpenAI

client = OpenAI()

response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="Hello world! This is a streaming test.",
)

response.stream_to_file("output.mp3")
