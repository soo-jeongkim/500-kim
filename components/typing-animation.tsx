"use client"
import { useState, useEffect } from "react"

// Define the animation states
type AnimationState =
  | "typing-english"
  | "deleting-english"
  | "typing-korean"
  | "deleting-korean"
  | "typing-english-again"
  | "complete"

export function TypingAnimation() {
  const [text, setText] = useState("")
  const [animationState, setAnimationState] = useState<AnimationState>("typing-english")
  const [charIndex, setCharIndex] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  // The constant prefix
  const prefix = "hi, it's "

  // English parts
  const englishSuffix = "soo"
  const englishSuffixWithEmoji = "soo :)"

  // Korean character building sequence with markers for which character is being built
  const koreanBuildingSequence = [
    { text: "ㄱ", activeIndex: 0 }, // Building first character (김)
    { text: "기", activeIndex: 0 },
    { text: "김", activeIndex: 0 },
    { text: "김ㅅ", activeIndex: 1 }, // Building second character (수)
    { text: "김수", activeIndex: 1 },
    { text: "김수ㅈ", activeIndex: 2 }, // Building third character (정)
    { text: "김수저", activeIndex: 2 },
    { text: "김수정", activeIndex: 2 },
  ]

  // Korean deletion sequence - deleting whole characters
  const koreanDeletionSequence = [
    "김수", // Delete 정
    "김", // Delete 수
    "", // Delete 김
  ]

  useEffect(() => {
    const handleTypingAnimation = () => {
      // Handle different states of the animation
      switch (animationState) {
        case "typing-english":
          const englishFullText = prefix + englishSuffix

          if (text.length < englishFullText.length) {
            setText(englishFullText.substring(0, text.length + 1))
            setTypingSpeed(150)
          } else {
            // Finished typing English, pause before deleting
            setAnimationState("deleting-english")
            setCharIndex(0)
            setTypingSpeed(400) // Pause before deleting
          }
          break

        case "deleting-english":
          if (text.length > prefix.length) {
            setText(text.substring(0, text.length - 1))
            setTypingSpeed(400)
          } else {
            // Finished deleting, start typing Korean
            setAnimationState("typing-korean")
            setCharIndex(0)
            setTypingSpeed(150)
          }
          break

        case "typing-korean":
          if (charIndex < koreanBuildingSequence.length) {
            setText(prefix + koreanBuildingSequence[charIndex].text)
            setCharIndex(charIndex + 1)
            setTypingSpeed(150)
          } else {
            // Finished typing Korean, start deleting Korean
            setAnimationState("deleting-korean")
            setCharIndex(0)
            setTypingSpeed(400) // Pause before deleting Korean
          }
          break

        case "deleting-korean":
          if (charIndex < koreanDeletionSequence.length) {
            setText(prefix + koreanDeletionSequence[charIndex])
            setCharIndex(charIndex + 1)
            setTypingSpeed(400)
          } else {
            // Finished deleting Korean, start typing English again with emoji
            setAnimationState("typing-english-again")
            setCharIndex(0)
            setTypingSpeed(150)
          }
          break

        case "typing-english-again":
          const englishWithEmojiFullText = prefix + englishSuffixWithEmoji

          if (text.length < englishWithEmojiFullText.length) {
            setText(englishWithEmojiFullText.substring(0, text.length + 1))
            setCharIndex(charIndex + 1)
            setTypingSpeed(150)
          } else {
            // Finished typing, transition to complete state to hide cursor
            setAnimationState("complete")
            setTypingSpeed(100)
          }
          break

        case "complete":
          // Do nothing, just stay in this state with no cursor
          break
      }
    }

    // Only set a timer if we're not in the complete state
    if (animationState !== "complete") {
      const timer = setTimeout(handleTypingAnimation, typingSpeed)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [
    text,
    animationState,
    charIndex,
    typingSpeed,
    prefix,
    englishSuffix,
    englishSuffixWithEmoji,
    koreanBuildingSequence,
    koreanDeletionSequence,
  ])

  // Determine if we're in the Korean typing phase
  const isTypingKorean =
    animationState === "typing-korean" && charIndex > 0 && charIndex <= koreanBuildingSequence.length

  // Get the active character index if we're typing Korean
  const activeCharIndex = isTypingKorean ? koreanBuildingSequence[charIndex - 1].activeIndex : -1

  // Split the text into parts for rendering
  const prefixPart = text.substring(0, prefix.length)
  const koreanPart = text.substring(prefix.length)

  // Split the Korean part into individual characters for rendering
  const koreanChars = koreanPart.split("")

  // Only show cursor if not in complete state
  const showCursor = animationState !== "complete"

  return (
    <div className="text-2xl font-medium mb-8">
      <span>{prefixPart}</span>
      <span className="relative">
        {koreanChars.map((char, index) => (
          <span key={index} className="relative">
            {char}
            {isTypingKorean && index === activeCharIndex && (
              <span className="absolute bottom-0 left-0 right-0 border-b-2 border-foreground"></span>
            )}
          </span>
        ))}
      </span>
      {showCursor && <span className="inline-block w-[2px] h-6 bg-foreground ml-1 translate-y-[0.5mm]"></span>}
    </div>
  )
}

