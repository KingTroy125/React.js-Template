import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'mono': ['Roboto Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				hero: {
					bg: 'hsl(var(--hero-bg))',
					text: 'hsl(var(--hero-text))',
					subtitle: 'hsl(var(--hero-subtitle))',
					button: 'hsl(var(--hero-button))',
					'button-text': 'hsl(var(--hero-button-text))',
					meta: 'hsl(var(--hero-meta))',
					'badge-bg': 'hsl(var(--hero-badge-bg))',
					'badge-inner': 'hsl(var(--hero-badge-inner))',
				},
				navbar: {
					text: 'hsl(var(--navbar-text))',
					'text-hover': 'hsl(var(--navbar-text-hover))',
					'logo-bg': 'hsl(var(--navbar-logo-bg))',
					'logo-text': 'hsl(var(--navbar-logo-text))',
				},
				features: {
					text: 'hsl(var(--features-text))',
					'text-muted': 'hsl(var(--features-text-muted))',
					highlight: 'hsl(var(--features-highlight))',
					'badge-bg': 'hsl(var(--features-badge-bg))',
					'card-bg': 'hsl(var(--features-card-bg))',
					'card-border': 'hsl(var(--features-card-border))',
				},
				cta: {
					text: 'hsl(var(--cta-text))',
					'text-muted': 'hsl(var(--cta-text-muted))',
				},
				ai: {
					'badge-text': 'hsl(var(--ai-badge-text))',
					text: 'hsl(var(--ai-text))',
					'text-muted': 'hsl(var(--ai-text-muted))',
					'interface-overlay': 'hsl(var(--ai-interface-overlay))',
					'interface-border': 'hsl(var(--ai-interface-border))',
					'interface-backdrop': 'hsl(var(--ai-interface-backdrop))',
					'feature-active': 'hsl(var(--ai-feature-active))',
					'feature-inactive': 'hsl(var(--ai-feature-inactive))',
					'progress-bg': 'hsl(var(--ai-progress-bg))',
					'arrow-color': 'hsl(var(--ai-arrow-color))',
				},
				footer: {
					text: 'hsl(var(--footer-text))',
					'text-muted': 'hsl(var(--footer-text-muted))',
					'text-light': 'hsl(var(--footer-text-light))',
					border: 'hsl(var(--footer-border))',
					'input-bg': 'hsl(var(--footer-input-bg))',
					'input-border': 'hsl(var(--footer-input-border))',
					'button-bg': 'hsl(var(--footer-button-bg))',
					'button-text': 'hsl(var(--footer-button-text))',
				}
			},
			backgroundImage: {
				'hero-gradient': 'var(--gradient-hero)',
				'button-gradient': 'var(--gradient-button)',
				'features-gradient': 'var(--features-gradient)',
				'cta-gradient': 'var(--cta-bg-gradient)',
				'footer-gradient': 'var(--footer-bg)',
				'ai-badge': 'var(--ai-badge-bg)',
				'ai-interface': 'var(--ai-interface-bg)',
				'ai-progress': 'var(--ai-progress-gradient)',
			},
			boxShadow: {
				'text': 'var(--shadow-text)',
				'button-inset': 'var(--shadow-button)',
				'hero-glow': 'var(--shadow-glow)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'marquee': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - 2rem))' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'marquee': 'marquee 25s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
