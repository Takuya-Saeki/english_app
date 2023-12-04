from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from server.api import sample, fallback, quaterReport, demo_return
from server.model import initializeOpenAI as init_ai
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI, APIRouter

from server.model import demo


app = FastAPI()

router = APIRouter()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 本番環境では "*" ではなく具体的なオリジンを指定してください
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(sample.router)
app.include_router(demo_return.router)


@app.get("/api")
def root():
    data = {"message": demo.demo_english_text(), "status": 200}
    # data = {"message": "Hello, FastAPI", "status": 200}
    return JSONResponse(content=data)


# staticディレクトリにあるindex.htmlを使う (Svelte用)
app.mount("/", StaticFiles(directory="server/static", html=True), name="static")
