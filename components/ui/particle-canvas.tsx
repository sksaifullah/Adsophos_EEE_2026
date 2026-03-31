"use client";

import React, { useRef, useEffect } from "react";

/**
 * Standalone interactive particle canvas background.
 * Purple particles float and connect with lines on mouse proximity.
 */
export const ParticleCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const mouse = { x: null as number | null, y: null as number | null, radius: 180 };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(
                x: number, y: number,
                directionX: number, directionY: number,
                size: number, color: string
            ) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (!canvas) return;
                if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 5;
                        this.y -= forceDirectionY * force * 5;
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        let particles: Particle[] = [];

        function init() {
            if (!canvas) return;
            particles = [];
            const numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * (canvas.width - size * 4) + size * 2;
                const y = Math.random() * (canvas.height - size * 4) + size * 2;
                const directionX = Math.random() * 0.4 - 0.2;
                const directionY = Math.random() * 0.4 - 0.2;
                const color = "rgba(139,92,246,0.85)"; // violet-500
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function connect() {
            if (!canvas || !ctx) return;
            const thresholdSq = (canvas.width / 7) * (canvas.height / 7);
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < thresholdSq) {
                        const opacityValue = 1 - distSq / 20000;
                        const nearMouse =
                            mouse.x !== null &&
                            Math.sqrt((particles[a].x - mouse.x) ** 2 + (particles[a].y - mouse.y!) ** 2) < mouse.radius;
                        ctx.strokeStyle = nearMouse
                            ? `rgba(255,255,255,${opacityValue * 0.8})`
                            : `rgba(167,139,250,${opacityValue * 0.5})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            if (!canvas || !ctx) return;
            animationFrameId = requestAnimationFrame(animate);
            ctx.fillStyle = "#030303";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => p.update());
            connect();
        }

        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
        />
    );
};
