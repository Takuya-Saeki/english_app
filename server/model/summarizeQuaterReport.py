import openai

async def summarize_quater_report(company: str,
                                  system_settings = "あなたは小学校の教師で、難しいことを要約して説明するのが上手です。"):
    max_tokens = 100
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages=[
                {"role": "system", "content": system_settings},
                {"role": "user", "content": company}
            ],
        temperature = 0.0
    )
    return response.choices[0].message.content.strip()
