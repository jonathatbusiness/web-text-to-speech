# Text-to-speech web

**About**

This web text-to-speech project turns text into speech, saving the result into an mp3 file. This project uses Microsoft Azure Speech Services and javascript code to generate the voices.

As a javascript study project, I used the OpenAI ChatGPT to help me generate de javascript codes.



**Important:**

The actual project needs to be configurated for correct working and you need a Microsoft Azure account to get the data needed, like a subscription key.

You can find more details here: [Cognitive Speech Services – Text/Speech Analysis | Microsoft Azure](https://azure.microsoft.com/en-us/products/cognitive-services/speech-services/).



**What information need to be filled in this project to work properly?**

**HTML:** You'll need to fill in your Subscription Key and Region in the following code:

```javascript
const speechConfig = SpeechSDK.SpeechConfig.fromSubscription("<enter-your-subscription-key>", "enter-your-region");
```

**Javascript code:** You'll need to fill correctly the following code lines:

```javascript
const token = await fetch('https://<your-region>.api.cognitive.microsoft.com/sts/v1.0/issuetoken', {}
```

```javascript
'Ocp-Apim-Subscription-Key': '<enter-your-subscription-key>',
```

```javascript
const url = `https://<your-region>.tts.speech.microsoft.com/cognitiveservices/v1?language=${voice}&voice=${voice}`;
```

**Also, to configure the voices, do this by editing the <option> lines at index HTML:**

```html
<select id="voices" name="voices">
                <option value="en-US-AmberNeural">Amber (English)</option>
                <option value="en-US-BrandonNeural">Brendon (English)</option>
            </select>
```

**To find the available voices and their code, visit:** https://docs.microsoft.com/pt-br/azure/cognitive-services/speech-service/language-support#neural-voices
