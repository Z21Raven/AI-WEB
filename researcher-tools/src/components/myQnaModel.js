async function modelQuery(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/distilbert-base-cased-distilled-squad",
        {
            headers: {
                Authorization: "Bearer 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",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

export { modelQuery }