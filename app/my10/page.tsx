"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function My10Page() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Back button in top left corner */}
      <div className="absolute md:fixed top-8 left-8 z-20">
        <Link
          href="/"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 shadow-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
          aria-label="Back to home"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Theme toggle in top right corner */}
      <div className="absolute md:fixed top-8 right-8 z-20">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 px-16 pb-32 md:pb-16 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-9xl font-bold mb-8 text-center" style={{ color: 'rgb(215, 92, 20)' }}>my 10</h1>

        {/* Description */}
        <p className="text-lg leading-relaxed text-left mb-12 max-w-2xl">
          Back in undergrad, a lecturer once said that one of the simplest yet the most earnest form of self-introduction is by sharing your top 10 favorite things in a subject you deeply care about. I have a deep interest in 20th century modernist korean painting, and here are my top 10.
        </p>
      </div>

      {/* Page 1 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 1 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">1</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/이유태 탐구.jpeg" 
              alt="이유태 탐구" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              이유태 | 인물일대(人物一對) - 탐구(探究) | 1944
            </p>
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 2 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">2</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/김환기 여인들과 항아리.jpg" 
              alt="김환기 여인들과 항아리" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              김환기 | 여인들과 항아리 | 1960
            </p>
          </div>
        </div>
      </div>

      {/* Page 3 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 3 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">3</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/황소 1953 이중섭.webp" 
              alt="이중섭 황소" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              이중섭 | 황소 | 1953
            </p>
          </div>
        </div>
      </div>

      {/* Page 4 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 4 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">4</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/백래현 여인.jpg" 
              alt="백래현 여인" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              백래현 | 여인 | 1942
            </p>
          </div>
        </div>
      </div>

      {/* Page 5 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 5 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">5</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/이인성 가을 어느 날.jpg" 
              alt="이인성 가을 어느 날" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              이인성 | 가을 어느 날 | 1934
            </p>
          </div>
        </div>
      </div>

      {/* Page 6 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 6 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">6</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/김기창 군마 1955.jpg" 
              alt="김기창 군마" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              김기창 | 군마 | 1955
            </p>
          </div>
        </div>
      </div>

      {/* Page 7 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 7 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">7</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/탱고가 흐르는 황혼 1978.jpeg" 
              alt="천경자 탱고가 흐르는 황혼" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              천경자 | 탱고가 흐르는 황혼 | 1978
            </p>
          </div>
        </div>
      </div>

      {/* Page 8 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 8 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">8</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/이응노 향원정.jpg" 
              alt="이응노 향원정" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              이응노 | 향원정 | 1950
            </p>
          </div>
        </div>
      </div>

      {/* Page 9 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 9 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">9</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/구본웅 친구의 초상.jpg" 
              alt="구본웅 친구의 초상" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              구본웅 | 친구의 초상 | 1935
            </p>
          </div>
        </div>
      </div>

      {/* Page 10 */}
      <div className="min-h-screen flex items-center relative">
        {/* Number 10 */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="text-9xl font-bold text-black">10</div>
        </div>
        
        {/* Image and caption */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 max-w-2xl">
            <img 
              src="/my10/장우성 귀목 1935.png" 
              alt="장우성 귀목" 
              className="max-w-full h-auto max-h-[48rem] object-contain"
            />
            <p className="text-lg text-center text-black">
              장우성 | 귀목 | 1935
            </p>
          </div>
        </div>
      </div>

      {/* Bottom arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-6xl font-black text-black">⌄</div>
      </div>
    </div>
  )
} 