from fastapi import APIRouter,HTTPException
from starlette.responses import FileResponse
import os

router = APIRouter()

# Fallbackルート
@router.get("/{full_path:path}")
async def fallback_route(full_path: str):
    return 
    # SvelteKitのビルドディレクトリのパスに応じて調整する
    path_to_svelte_html = os.path.join("static", "index.html")
    
    if os.path.exists(path_to_svelte_html):
        return FileResponse(path_to_svelte_html)
    raise HTTPException(status_code=404, detail="miss files")
