from fastapi import APIRouter
from fastapi.responses import JSONResponse
from server.model import summarizeQuaterReport as sqr

router = APIRouter()

@router.get('/api/quater_report')
async def quater_report(company: str):
    result = await sqr.summarize_quater_report(company=company)
    data = {
        "message": result,
        "status": 200
    }
    return JSONResponse(content=data)

