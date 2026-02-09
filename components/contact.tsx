"use client"

import React from "react"

import { useState } from "react"
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type FormStatus = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      let data
      try {
        data = await response.json()
      } catch {
        throw new Error("Erro de conexão. Tente novamente.")
      }

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem")
      }

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Erro ao enviar mensagem")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contato" className="py-24 bg-card/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vamos <span className="text-primary italic">Conversar</span>?
            </h2>
            <p className="text-foreground/60 text-lg max-w-xl mx-auto leading-relaxed">
              Estou sempre aberto a novas oportunidades e projetos interessantes.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground/80">
                Mensagem
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Sua mensagem..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                rows={5}
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
            </div>

            {/* Error Message */}
            {status === "error" && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-destructive text-sm">{errorMessage}</p>
              </div>
            )}

            {/* Success Message */}
            {status === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p className="text-green-500 text-sm">
                  Mensagem enviada com sucesso! Você receberá uma confirmação por email.
                </p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </>
              )}
            </Button>
          </form>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 pt-8 border-t border-border/30">
            <a
              href="mailto:seu@email.com"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
