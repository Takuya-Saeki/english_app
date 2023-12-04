from fastapi import APIRouter
from fastapi.responses import JSONResponse
from server.model import demo

router = APIRouter()


@router.get("/demo_english_text")
async def demo_english_text():
    data = {"message": demo.demo_english_text(), "status": 200}
    # data = {"message": "Hello, FastAPI", "status": 200}
    return JSONResponse(content=data)


@router.get("/api/demo_japanese_text")
async def demo_japanese_text(company: str):
    result = await demo.demo_japanese_text()
    data = {"message": result, "status": 200}
    return JSONResponse(content=data)


@router.get("/api/demo_word_list")
async def demo_word_list(company: str):
    result = await demo.demo_word_list()
    data = {"message": result, "status": 200}
    return JSONResponse(content=data)
