const inputText = document.getElementById('inputText');
const voiceSelection = document.getElementById('voices');
const saveButton = document.getElementById('save');

saveButton.addEventListener('click', async () => {
    const voice = voiceSelection.value;
    const text = inputText.value;
    const token = await fetch('https://<your-region>.api.cognitive.microsoft.com/sts/v1.0/issuetoken', {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': '<enter-your-subscription-key>',
        },
    }).then((response) => response.text());

    const url = `https://<your-region>.tts.speech.microsoft.com/cognitiveservices/v1?language=${voice}&voice=${voice}`;
    const audio = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/ssml+xml',
            'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
        },
        body: `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='${voice}'><voice name='${voice}'>${text}</voice></speak>`,
    }).then((response) => response.arrayBuffer());

    const blob = new Blob([audio], { type: 'audio/mp3' });
    const urlBlob = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = urlBlob;
    a.download = 'audio.mp3';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});