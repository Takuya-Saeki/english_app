from fastapi import APIRouter
from fastapi.responses import JSONResponse
from server.model import demo

from pydantic import BaseModel
from typing import List
from fastapi.responses import FileResponse

router = APIRouter()


@router.get("/demo_english_text")
async def demo_english_text():
    data = {"message": demo.demo_english_text(), "status": 200}
    # data = {"message": "Hello, FastAPI", "status": 200}
    return JSONResponse(content=data)


class TEXT(BaseModel):
    input_url: str = ""
    text_japanese: str = ""
    text_english: str = ""
    word_list: List[str] = []


@router.post("/api/create_textbook")
async def create_textbook(data: TEXT):
    # ここで data.input_url を使用して処理を行う
    data.text_japanese = demo.demo_japanese_text()
    data.text_english = demo.demo_english_text()
    data.word_list = demo.demo_word_list()
    return JSONResponse(
        content={
            "input_url": data.input_url,
            "text_japanese": data.text_japanese,
            "text_english": data.text_english,
            "word_list": data.word_list,
        }
    )


@router.get("/api/audio")
def get_audio():
    audio_file_path = "server/audiofolder/output.mp3"  # 音声ファイルのパス
    return FileResponse(audio_file_path, media_type="audio/mpeg")
