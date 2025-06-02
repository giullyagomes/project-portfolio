"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "@/components/motion";
import { RefreshCw, Trophy } from "lucide-react";

function generateSecretNumber(): string {
  const digits = Array.from({ length: 10 }, (_, i) => i.toString());
  let result = "";
  
  // O primeiro dígito não pode ser zero
  const firstDigit = Math.floor(Math.random() * 9) + 1;
  result += firstDigit;
  digits.splice(firstDigit, 1);
  
  // Gerar os três dígitos restantes
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * digits.length);
    result += digits[index];
    digits.splice(index, 1);
  }
  
  return result;
}

interface Guess {
  number: string;
  bulls: number;
  cows: number;
}

function calculateBullsAndCows(secret: string, guess: string): { bulls: number; cows: number } {
  let bulls = 0;
  let cows = 0;
  
  // Calculatar o bulls (na posição correta)
  for (let i = 0; i < 4; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    }
  }
  
  // Calcular o cows (Dígito correto, posição errada)
  for (let i = 0; i < 4; i++) {
    if (secret.includes(guess[i]) && secret[i] !== guess[i]) {
      cows++;
    }
  }
  
  return { bulls, cows };
}

export default function GamePage() {
  const [secretNumber, setSecretNumber] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [error, setError] = useState("");
  const [gameWon, setGameWon] = useState(false);
  
  // Inicializar o jogo
  useEffect(() => {
    setSecretNumber(generateSecretNumber());
  }, []);
  
  const resetGame = () => {
    setSecretNumber(generateSecretNumber());
    setCurrentGuess("");
    setGuesses([]);
    setError("");
    setGameWon(false);
  };
  
  const validateGuess = (guess: string): boolean => {
    if (guess.length !== 4) {
      setError("Por favor, insira um número de 4 dígitos");
      return false;
    }
    
    if (!/^\d+$/.test(guess)) {
      setError("Por favor, insira apenas dígitos");
      return false;
    }
    
    if (guess[0] === "0") {
      setError("O número não pode começar com 0");
      return false;
    }
    
    const uniqueDigits = new Set(guess.split(""));
    if (uniqueDigits.size !== 4) {
      setError("Todos os dígitos devem ser diferentes");
      return false;
    }
    
    return true;
  };
  
  const handleGuess = () => {
    if (!validateGuess(currentGuess)) {
      return;
    }
    
    setError("");
    const result = calculateBullsAndCows(secretNumber, currentGuess);
    const newGuess = {
      number: currentGuess,
      ...result
    };
    
    setGuesses([newGuess, ...guesses]);
    setCurrentGuess("");
    
    if (result.bulls === 4) {
      setGameWon(true);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentGuess.length === 4) {
      handleGuess();
    }
  };
  
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32">
      <div className="space-y-8">
        <div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Bulls and Cows
          </h1>
          <p className="text-muted-foreground">
            Adivinhe o número de 4 dígitos. Cada dígito deve ser diferente.
            Acerte um touro para cada dígito correto na posição correta,
            e uma vaca para cada dígito correto na posição errada.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Jogo de Adivinhação com Números</span>
              <Button variant="outline" size="sm" onClick={resetGame}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Nova Partida
              </Button>
            </CardTitle>
            <CardDescription>
              Digite seu palpite abaixo. O número tem 4 dígitos diferentes e não começa com 0.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {/* Input section */}
              <div className="flex gap-2">
                <Input
                  type="text"
                  maxLength={4}
                  value={currentGuess}
                  onChange={(e) => setCurrentGuess(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Insira um número de 4 dígitos"
                  disabled={gameWon}
                  className="text-lg"
                />
                <Button onClick={handleGuess} disabled={currentGuess.length !== 4 || gameWon}>
                  Adivinhar
                </Button>
              </div>
              
              {/* Mensagem de erro */}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              {/* Mensagem ao ganhar */}
              {gameWon && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="rounded-lg bg-primary/10 p-4 text-center"
                >
                  <Trophy className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <p className="text-lg font-bold">Parabéns!</p>
                  <p>Você encontrou o número secreto: {secretNumber}</p>
                  <p className="text-sm text-muted-foreground">
                    Você demorou {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}
                  </p>
                </motion.div>
              )}
              
              {/* Histórico */}
              <div className="mt-6">
                <h3 className="mb-4 text-lg font-semibold">Palpites Anteriores</h3>
                <div className="space-y-2">
                  {guesses.map((guess, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <span className="text-lg font-medium">{guess.number}</span>
                      <div className="space-x-4">
                        <span className="text-primary">{guess.bulls} Bulls</span>
                        <span className="text-muted-foreground">{guess.cows} Cows</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              {guesses.length === 0 
                ? "Nenhum palpite ainda. Comece a jogar!"
                : `Total de palpites: ${guesses.length}`}
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}