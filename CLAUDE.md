# Remotion Video Project

## TTS (Text-to-Speech) Workflow

Generate voiceover audio using OpenAI's TTS API.

### Script Location
`.claude/skills/tts/generate.js`

### Usage
```bash
node .claude/skills/tts/generate.js "Your script text" --output ./path/to/output.mp3
```

### Options
- `--voice` - Voice: `alloy`, `echo`, `fable`, `onyx`, `nova`, `shimmer` (default: `alloy`)
- `--model` - Model: `tts-1` (faster) or `tts-1-hd` (higher quality, default)
- `--output` - Output file path
- `--speed` - Speed 0.25-4.0 (default: 1.0)

### Voice Guide
- **alloy** - Neutral, balanced (good default)
- **echo** - Warm, conversational
- **fable** - British, narrative style
- **onyx** - Deep, authoritative
- **nova** - Friendly, upbeat (female)
- **shimmer** - Soft, gentle (female)

### Example: Generate section audio
```bash
node .claude/skills/tts/generate.js "Say you need a spreadsheet to track your project timeline." --voice alloy --output ./my-remotion-demo/public/sections/07-spreadsheet/audio.mp3
```

## ElevenLabs TTS Workflow

Generate voiceover audio using ElevenLabs API.

### Script Location
`.claude/skills/elevenlabs/generate.js`

### Usage
```bash
node .claude/skills/elevenlabs/generate.js "Your script text" --output ./path/to/output.mp3
```

### Options
- `--voice` - Voice ID (default: `21m00Tcm4TlvDq8ikWAM` / Rachel)
- `--model` - Model: `eleven_multilingual_v2` (default), `eleven_monolingual_v1`
- `--output` - Output file path
- `--stability` - Voice stability 0.0-1.0 (default: 0.5)
- `--similarity` - Similarity boost 0.0-1.0 (default: 0.75)

### Common Voices
- **Rachel** (`21m00Tcm4TlvDq8ikWAM`) - Calm, narration (good default)
- **Drew** (`29vD33N1CtxCmqQRPOHJ`) - Well-rounded, news
- **Paul** (`5Q0t7uMcjvnagumLfvZi`) - Ground news, narration
- **Josh** (`TxGEqnHWrfWFTfGW9XjX`) - Deep, narration
- **Adam** (`pNInz6obpgDQGcFmaJgB`) - Deep, narration
- **Sam** (`yoZ06aMxZJJ28mfd3POQ`) - Raspy, narration

### Example
```bash
node .claude/skills/elevenlabs/generate.js "Rebyte moves your agents to the cloud." --voice 21m00Tcm4TlvDq8ikWAM --output ./my-remotion-demo/public/audio/part-02.mp3
```

## Postmark API Key

```
ceca9197-3d7e-4c94-a50b-3156faa6ab8c
```
