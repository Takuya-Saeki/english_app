from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter()

@router.get('/api/sample')
async def sample(input_text: str):
    upper_input_text = input_text.upper()
    data = {
        "message": upper_input_text,
        "status": 200
    }
    return JSONResponse(content=data)

