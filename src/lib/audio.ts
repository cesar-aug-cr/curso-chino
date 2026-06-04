// Text-to-Speech and Speech Recognition utilities for Chinese learning

export function speakChinese(text: string, rate: number = 0.8): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      reject(new Error("Speech synthesis not available"));
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to find a Chinese voice
    const voices = window.speechSynthesis.getVoices();
    const chineseVoice = voices.find(
      (v) => v.lang === "zh-CN" || v.lang.startsWith("zh")
    );
    if (chineseVoice) {
      utterance.voice = chineseVoice;
    }

    utterance.onend = () => resolve();
    utterance.onerror = (e) => reject(e);

    window.speechSynthesis.speak(utterance);
  });
}

export function speakSlow(text: string): Promise<void> {
  return speakChinese(text, 0.5);
}

export function speakNormal(text: string): Promise<void> {
  return speakChinese(text, 0.9);
}

// Ensure voices are loaded (they load async in some browsers)
export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve([]);
      return;
    }
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
  });
}

export function hasChineseVoice(): boolean {
  if (typeof window === "undefined") return false;
  const voices = window.speechSynthesis.getVoices();
  return voices.some((v) => v.lang === "zh-CN" || v.lang.startsWith("zh"));
}

// Speech Recognition for pronunciation practice
export interface RecognitionResult {
  transcript: string;
  confidence: number;
  isMatch: boolean;
}

export function startRecognition(
  expectedText: string,
  onResult: (result: RecognitionResult) => void,
  onError?: (error: string) => void
): (() => void) | null {
  if (typeof window === "undefined") return null;

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    onError?.("Reconocimiento de voz no disponible en este navegador");
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "zh-CN";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  recognition.onresult = (event: any) => {
    const results = event.results[0];
    let bestMatch: RecognitionResult = {
      transcript: "",
      confidence: 0,
      isMatch: false,
    };

    for (let i = 0; i < results.length; i++) {
      const alt = results[i];
      const transcript = alt.transcript.trim();
      const confidence = alt.confidence;

      // Check if any alternative matches
      const normalized = transcript.replace(/[，。！？、\s]/g, "");
      const expected = expectedText.replace(/[，。！？、\s]/g, "");
      const isMatch = normalized === expected;

      if (isMatch || confidence > bestMatch.confidence) {
        bestMatch = { transcript, confidence, isMatch };
      }
      if (isMatch) break;
    }

    onResult(bestMatch);
  };

  recognition.onerror = (event: any) => {
    const errorMessages: Record<string, string> = {
      "no-speech": "No se detectó voz. Intenta de nuevo.",
      "audio-capture": "No se pudo acceder al micrófono.",
      "not-allowed": "Permiso de micrófono denegado.",
      network: "Error de red.",
    };
    onError?.(errorMessages[event.error] || "Error de reconocimiento");
  };

  recognition.start();

  // Return stop function
  return () => {
    try {
      recognition.stop();
    } catch {}
  };
}

// Calculate similarity between two Chinese strings (0-100)
export function calculateSimilarity(a: string, b: string): number {
  const cleanA = a.replace(/[，。！？、\s]/g, "");
  const cleanB = b.replace(/[，。！？、\s]/g, "");

  if (cleanA === cleanB) return 100;
  if (cleanA.length === 0 || cleanB.length === 0) return 0;

  let matches = 0;
  const shorter = cleanA.length <= cleanB.length ? cleanA : cleanB;
  const longer = cleanA.length <= cleanB.length ? cleanB : cleanA;

  for (const char of shorter) {
    if (longer.includes(char)) matches++;
  }

  return Math.round((matches / longer.length) * 100);
}
