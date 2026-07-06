'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
  life: number
  maxLife: number
  shape: 'circle' | 'star' | 'rect'
  rotation: number
  rotationSpeed: number
}

export default function Hero() {
  const [showContent, setShowContent] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [dustParticles, setDustParticles] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([])

  const animFrameRef = useRef<number | null>(null)
  const sparklesRef = useRef<Sparkle[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const colors = ['#D4AF37', '#F4D03F', '#FFD700', '#FF6B6B', '#8B1538', '#FFFFFF', '#FFA500', '#FF69B4', '#00CED1', '#7FFF00']

  function createSparkle(id: number): Sparkle {
    const angle = Math.random() * Math.PI * 2
    const speed = 3 + Math.random() * 8
    return {
      id,
      x: window.innerWidth / 2 + (Math.random() - 0.5) * window.innerWidth * 0.8,
      y: window.innerHeight / 2 + (Math.random() - 0.5) * 100,
      size: 4 + Math.random() * 14,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      life: 0,
      maxLife: 80 + Math.random() * 80,
      shape: (['circle', 'star', 'rect'] as const)[Math.floor(Math.random() * 3)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 15,
    }
  }

  useEffect(() => {
    const particles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 70,
      delay: Math.random() * 1.5,
    }))
    setDustParticles(particles)

    // Curtains: 2s wait → 2s slide → content shows at 4s
    // Title animates in at 4s + 0.2s delay + 0.8s duration = ~5s total
    // Celebration fires at 4s + 1500ms = 5.5s — clearly AFTER title is fully visible
    const timer = setTimeout(() => {
      setShowContent(true)
      setTimeout(() => {
        setShowCelebration(true)
        const initial: Sparkle[] = Array.from({ length: 120 }, (_, i) => createSparkle(i))
        sparklesRef.current = initial
      }, 1500)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // Canvas confetti animation loop
  useEffect(() => {
    if (!showCelebration) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let idCounter = 200
    let burstCount = 0
    const maxBursts = 6

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (burstCount < maxBursts && sparklesRef.current.length < 300) {
        burstCount++
        const burst = Array.from({ length: 60 }, () => {
          idCounter++
          return createSparkle(idCounter)
        })
        sparklesRef.current = [...sparklesRef.current, ...burst]
      }

      sparklesRef.current = sparklesRef.current
        .map(s => ({
          ...s,
          x: s.x + s.vx,
          y: s.y + s.vy,
          vy: s.vy + 0.18,
          vx: s.vx * 0.99,
          life: s.life + 1,
          rotation: s.rotation + s.rotationSpeed,
        }))
        .filter(s => s.life < s.maxLife)

      sparklesRef.current.forEach(s => {
        const alpha = Math.max(0, 1 - s.life / s.maxLife)
        ctx.globalAlpha = alpha
        ctx.fillStyle = s.color
        ctx.save()
        ctx.translate(s.x, s.y)
        ctx.rotate((s.rotation * Math.PI) / 180)

        if (s.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else if (s.shape === 'rect') {
          ctx.fillRect(-s.size / 2, -s.size / 4, s.size, s.size / 2)
        } else {
          // star
          const spikes = 5
          const outerR = s.size / 2
          const innerR = s.size / 5
          ctx.beginPath()
          for (let i = 0; i < spikes * 2; i++) {
            const r = i % 2 === 0 ? outerR : innerR
            const a = (i * Math.PI) / spikes - Math.PI / 2
            if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r)
            else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r)
          }
          ctx.closePath()
          ctx.fill()
        }
        ctx.restore()
      })
      ctx.globalAlpha = 1

      if (sparklesRef.current.length > 0) {
        animFrameRef.current = requestAnimationFrame(animate)
      } else {
        setShowCelebration(false)
      }
    }

    animFrameRef.current = requestAnimationFrame(animate)
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [showCelebration])

  // ── CURTAIN ANIMATIONS ──────────────────────────────────────────────────────
  // Left curtain: slides LEFT off screen
  const leftCurtainVariants = {
    closed: { x: '0%' },
    open: {
      x: '-100%',
      transition: { delay: 2, duration: 2, ease: 'easeInOut' as const },
    },
  }

  // Right curtain: slides RIGHT off screen (NO scaleX flip — mirror via CSS)
  const rightCurtainVariants = {
    closed: { x: '0%' },
    open: {
      x: '100%',
      transition: { delay: 2, duration: 2, ease: 'easeInOut' as const },
    },
  }

  // Delays are relative to when showContent becomes true (at 4000ms from mount)
  // Title: starts at 4000ms + 200ms = 4200ms, ends at ~5000ms
  // Celebration fires at 4000ms + 1500ms = 5500ms — safely after title is visible
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 10 },
    visible: {
      opacity: 1, scale: 1, y: 0,
      transition: { duration: 0.9, delay: 0.2, ease: 'easeOut' as const },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' as const },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: 1.0, ease: 'easeOut' as const },
    },
  }

  return (
    <>
      {/* ── CONFETTI CANVAS (fixed, above everything) ── */}
      {showCelebration && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
        />
      )}

      {/*
        Use a fixed-position full-viewport wrapper so the curtains always
        cover the entire screen (including the 80px navbar area).
        The section itself is the scrollable page hero.
      */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: 'calc(100vh - 80px)' }}
      >
        {/* ── BACKGROUND IMAGE ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/landing-page.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
        {/* ── DARK OVERLAY so text/spotlights/sparkles stay readable over the image ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(10,10,10,0.55) 0%, rgba(26,15,46,0.4) 50%, rgba(10,10,10,0.65) 100%)',
            zIndex: 1,
          }}
        />
        {/* ── STAGE DUST PARTICLES ── */}
        {dustParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="stage-dust absolute pointer-events-none"
            style={{ left: `${particle.left}%`, top: `${particle.top}%`, zIndex: 2 }}
            animate={{ y: [0, 150, 300], opacity: [0, 0.5, 0] }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        {/* ── SPOTLIGHTS ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
          {/* Left spotlight beam */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '18%',
              width: '260px',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.04) 60%, transparent 100%)',
              clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
              filter: 'blur(12px)',
            }}
          />
          {/* Center spotlight beam */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '360px',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.06) 60%, transparent 100%)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
              filter: 'blur(14px)',
            }}
          />
          {/* Right spotlight beam */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '18%',
              width: '260px',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.04) 60%, transparent 100%)',
              clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
              filter: 'blur(12px)',
            }}
          />
          {/* Ambient center glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '700px',
              height: '450px',
              background: 'radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
        </div>

        {/* ── STAGE FLOOR LINE ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
            boxShadow: '0 0 8px rgba(212,175,55,0.6)',
            zIndex: 35,
          }}
        />

        {/* ══════════════════════════════════════════════════════════════
            LEFT VELVET CURTAIN
            Starts fully covering the left half, then slides off to the left.
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          className="absolute top-0 left-0 h-full velvet-curtain"
          style={{ width: '50%', zIndex: 40 }}
          variants={leftCurtainVariants}
          initial="closed"
          animate="open"
        >
          {/* Vertical fold shadows */}
          <div className="curtain-fold" style={{ left: '15%', width: '12%' }} />
          <div className="curtain-fold" style={{ left: '40%', width: '18%' }} />
          <div className="curtain-fold" style={{ left: '65%', width: '10%' }} />
          {/* Shadow overlay */}
          <div className="curtain-shadow" />
          {/* Right-edge shadow (inner edge of left curtain) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '40px',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.5))',
              zIndex: 6,
            }}
          />
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            RIGHT VELVET CURTAIN
            Starts fully covering the right half, then slides off to the right.
            Uses the same velvet-curtain class but mirrored via scaleX on the
            inner background container — NOT on the motion.div so framer-motion
            x translation works correctly.
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          className="absolute top-0 right-0 h-full overflow-hidden"
          style={{ width: '50%', zIndex: 40 }}
          variants={rightCurtainVariants}
          initial="closed"
          animate="open"
        >
          {/* Inner div is flipped to mirror the left curtain's fold pattern */}
          <div
            className="velvet-curtain w-full h-full"
            style={{ transform: 'scaleX(-1)', position: 'relative' }}
          >
            <div className="curtain-fold" style={{ left: '15%', width: '12%' }} />
            <div className="curtain-fold" style={{ left: '40%', width: '18%' }} />
            <div className="curtain-fold" style={{ left: '65%', width: '10%' }} />
            <div className="curtain-shadow" />
            {/* Left-edge shadow (inner edge of right curtain) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '40px',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.5))',
                zIndex: 6,
              }}
            />
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            STAGE CONTENT (behind curtains, revealed when they open)
            Vertically and horizontally centered in the full viewport,
            accounting for the 80px fixed navbar at the top.
        ══════════════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{ paddingTop: '80px', zIndex: 10 }}
        >
          <motion.div
            className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            style={{ gap: '0px' }}
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Bengali Title with glow */}
            <motion.div
              className="relative inline-block"
              style={{ marginBottom: '10px' }}
              variants={titleVariants}
              initial="hidden"
              animate={showContent ? 'visible' : 'hidden'}
            >
              <h1
                className="text-5xl sm:text-7xl lg:text-8xl font-bold golden-text-glow dramatic-heading"
                style={{ letterSpacing: '3px' }}
              >
                Jadavpur Baytikram
              </h1>
              {/* Animated golden underline */}
              <motion.div
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #D4AF37, #F4D03F, #D4AF37, transparent)',
                  borderRadius: '2px',
                  marginTop: '10px',
                }}
                initial={{ scaleX: 0 }}
                animate={showContent ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
              />
            </motion.div>

            {/* Bengali Subtitle */}
            <motion.p
              className="text-base sm:text-xl text-[#D4AF37] font-light italic leading-loose max-w-2xl"
              style={{ marginBottom: '42px' }}
              variants={subtitleVariants}
              initial="hidden"
              animate={showContent ? 'visible' : 'hidden'}
            >
              Our commitment is to achieve the better and newer heights in the field of cultural movement
            </motion.p>

            {/* CTA Cards */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-stretch w-full max-w-3xl"
              variants={ctaVariants}
              initial="hidden"
              animate={showContent ? 'visible' : 'hidden'}
            >
              {/* Productions Card */}
              <Link href="/activities/productions" className="w-full sm:w-auto sm:flex-1">
                <motion.div
                  className="dark-card px-6 py-8 sm:px-8 sm:py-10 rounded-lg w-full h-full cursor-pointer flex flex-col"
                  whileHover={{ boxShadow: '0 16px 50px rgba(212,175,55,0.45)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-5xl sm:text-6xl" style={{ marginBottom: '16px' }}>🎭</div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-[#D4AF37] dramatic-heading"
                    style={{ marginBottom: '12px', minHeight: '4rem' }}
                  >
                    PRODUCTIONS
                  </h3>
                  <p className="text-[#D4AF37] text-sm leading-relaxed font-light" style={{ marginTop: '11px', marginBottom: '12px' }}>
                    Explore our theatrical masterpieces and experimental productions that challenge conventions
                  </p>
                </motion.div>
              </Link>

              {/* TFD Card */}
              <Link href="/tfd" className="w-full sm:w-auto sm:flex-1">
                <motion.div
                  className="dark-card px-6 py-8 sm:px-8 sm:py-10 rounded-lg w-full h-full cursor-pointer flex flex-col"
                  whileHover={{ boxShadow: '0 16px 50px rgba(212,175,55,0.45)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-5xl sm:text-6xl" style={{ marginBottom: '16px' }}>❤️</div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-[#D4AF37] dramatic-heading"
                    style={{ marginBottom: '12px', minHeight: '4rem' }}
                  >
                    Theatre for Development (TFD)
                  </h3>
                  <p className="text-[#D4AF37] text-sm leading-relaxed font-light" style={{ marginTop: '4px', marginBottom: '12px' }}>
                    Discover our social impact programs and community engagement in theatre education
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
