from fastapi import FastAPI

app = FastAPI(root_path="/api/python")

@app.get("/healthcheck")
async def root():
    return {"message": "Hello World"}