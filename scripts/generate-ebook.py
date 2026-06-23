#!/usr/bin/env python3
"""Generate MediaHive AI Marketing Agency Playbook PDF."""

from fpdf import FPDF
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "downloads", "ai-marketing-agency-playbook.pdf")
os.makedirs(os.path.dirname(OUT), exist_ok=True)


class Playbook(FPDF):
    def header(self):
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(100, 100, 100)
        self.cell(0, 8, "MediaHive AI - The AI Marketing Agency Playbook", align="R", new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, f"Page {self.page_no()}", align="C")

    def chapter_title(self, title):
        self.set_font("Helvetica", "B", 18)
        self.set_text_color(0, 102, 255)
        self.multi_cell(0, 10, title)
        self.ln(4)

    def body_text(self, text):
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "", 11)
        self.set_text_color(60, 60, 60)
        self.multi_cell(0, 6, text)
        self.ln(4)

    def section_title(self, title):
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "B", 13)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 8, title)
        self.ln(2)

    def bullet(self, text):
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "", 11)
        self.set_text_color(60, 60, 60)
        self.multi_cell(0, 6, "- " + text)


pdf = Playbook()
pdf.set_auto_page_break(auto=True, margin=20)
pdf.add_page()

# Cover
pdf.set_font("Helvetica", "B", 28)
pdf.set_text_color(0, 0, 0)
pdf.ln(30)
pdf.multi_cell(0, 12, "The AI Marketing\nAgency Playbook")
pdf.ln(8)
pdf.set_font("Helvetica", "", 14)
pdf.set_text_color(100, 100, 100)
pdf.multi_cell(0, 8, "How to Start, Scale & Automate Your Own\nAI-Powered Marketing Business")
pdf.ln(20)
pdf.set_font("Helvetica", "B", 12)
pdf.set_text_color(0, 102, 255)
pdf.cell(0, 8, "By MediaHive AI", new_x="LMARGIN", new_y="NEXT")

# Chapter 1
pdf.add_page()
pdf.chapter_title("Chapter 1: Start Your AI Marketing Agency")
pdf.body_text(
    "The AI marketing agency model is the fastest-growing service business of 2026. "
    "Businesses need help growing on Instagram, TikTok, LinkedIn, and every major platform "
    "- but most agencies still operate manually. You can build a premium agency powered by AI "
    "that delivers 10x output with a fraction of the team."
)
pdf.section_title("The Opportunity")
pdf.bullet("73% of businesses plan to increase AI marketing spend this year")
pdf.bullet("Average agency retainer: GBP 3,000-15,000/month per client")
pdf.bullet("AI agencies operate at 70% higher margins than traditional agencies")
pdf.bullet("One operator can manage 5-10 clients with the right workflows")
pdf.ln(4)
pdf.section_title("Your Agency Stack (Minimum Viable)")
pdf.bullet("Content AI: ChatGPT, Claude, or MediaHive Genesis Studio")
pdf.bullet("Video AI: Runway, Pika, or MediaHive Social Pulse")
pdf.bullet("Scheduling: Buffer, Later, or custom n8n workflows")
pdf.bullet("CRM: HubSpot free tier or Notion + automated follow-ups")
pdf.bullet("Website: MediaHive automated sites or Webflow + AI copy")

# Chapter 2
pdf.add_page()
pdf.chapter_title("Chapter 2: Workflows That Run Your Agency")
pdf.body_text(
    "Workflows are the backbone of a scalable AI agency. Every repeatable task should be "
    "automated - from client onboarding to content delivery to reporting."
)
pdf.section_title("Workflow 1: Client Onboarding (Day 1)")
pdf.bullet("Step 1: Client fills intake form (Typeform/Tally)")
pdf.bullet("Step 2: AI generates brand voice profile from their website + social")
pdf.bullet("Step 3: Auto-create Notion client workspace from template")
pdf.bullet("Step 4: Send welcome email sequence via n8n + Gmail")
pdf.bullet("Step 5: Schedule kickoff call via Cal.com")
pdf.ln(2)
pdf.section_title("Workflow 2: Weekly Content Production")
pdf.bullet("Monday: AI generates 7 days of posts from content calendar")
pdf.bullet("Tuesday: Client approves via Slack/email link")
pdf.bullet("Wednesday: Auto-schedule to Instagram, TikTok, LinkedIn")
pdf.bullet("Thursday: AI generates Reels/TikTok scripts + video briefs")
pdf.bullet("Friday: Auto-send performance snapshot to client")
pdf.ln(2)
pdf.section_title("Workflow 3: Lead Capture to Close")
pdf.bullet("Social post CTA -> Landing page -> CRM entry")
pdf.bullet("AI chatbot qualifies lead within 60 seconds")
pdf.bullet("Automated email sequence based on lead score")
pdf.bullet("Booking link sent to hot leads automatically")

# Chapter 3
pdf.add_page()
pdf.chapter_title("Chapter 3: Create Amazing AI Videos")
pdf.body_text(
    "Video is the highest-converting content format on every platform. AI video tools "
    "let you produce cinematic content without a production team."
)
pdf.section_title("The AI Video Stack")
pdf.bullet("Short-form (Reels/TikTok): Runway Gen-3, Pika, Kling, MediaHive Social Pulse")
pdf.bullet("Long-form (YouTube): Descript + B-roll from Pexels/Mixkit")
pdf.bullet("Product videos: Sora-style tools + screen recordings")
pdf.bullet("UGC-style ads: HeyGen, Synthesia for spokesperson videos")
pdf.ln(2)
pdf.section_title("5-Step AI Video Workflow")
pdf.bullet("1. Write script with AI (hook in first 3 seconds)")
pdf.bullet("2. Generate visuals with AI video tool or stock footage")
pdf.bullet("3. Add captions (CapCut auto-captions or Descript)")
pdf.bullet("4. Brand overlay: logo, colours, end card")
pdf.bullet("5. Export platform-native ratios: 9:16, 1:1, 16:9")
pdf.ln(2)
pdf.section_title("Video Content Calendar Template")
pdf.bullet("Mon: Educational tip (authority building)")
pdf.bullet("Wed: Behind-the-scenes / process reveal")
pdf.bullet("Fri: Client result or case study")
pdf.bullet("Sat: Trending audio remix (TikTok/Reels)")

# Chapter 4
pdf.add_page()
pdf.chapter_title("Chapter 4: Transform Any Brand with AI")
pdf.body_text(
    "Use AI to completely transform a client's brand presence - from zero social following "
    "to a full digital ecosystem generating leads daily."
)
pdf.section_title("The Brand Transformation Framework")
pdf.bullet("Phase 1 - Audit (Week 1): Analyse current social, web, competitors")
pdf.bullet("Phase 2 - Strategy (Week 2): AI-generated positioning + content pillars")
pdf.bullet("Phase 3 - Build (Weeks 3-4): Website, social profiles, workflow setup")
pdf.bullet("Phase 4 - Launch (Week 5): First 30 days of content goes live")
pdf.bullet("Phase 5 - Scale (Month 2+): Paid ads, influencer outreach, automation")
pdf.ln(2)
pdf.section_title("Instagram & TikTok Growth Playbook")
pdf.bullet("Post 1-2 Reels/TikToks daily for first 90 days")
pdf.bullet("Use AI to remix top-performing content in your niche")
pdf.bullet("Engage 30 min/day on target audience posts (can partially automate)")
pdf.bullet("Run GBP 500/month in Spark Ads on best organic performers")
pdf.bullet("Track: followers, saves, shares, profile visits, link clicks")
pdf.ln(2)
pdf.section_title("Automated Website Setup")
pdf.bullet("AI generates copy from brand voice profile")
pdf.bullet("Template site deployed in 48 hours (MediaHive Genesis Studio)")
pdf.bullet("Connect: contact form -> CRM -> email automation")
pdf.bullet("Add: booking calendar, social proof, case studies")
pdf.bullet("SEO: AI-generated meta titles, descriptions, blog posts")

# Chapter 5
pdf.add_page()
pdf.chapter_title("Chapter 5: Pricing & Packaging")
pdf.section_title("Recommended Service Tiers")
pdf.bullet("Starter (GBP 1,500/mo): 12 posts + 4 Reels + basic scheduling")
pdf.bullet("Growth (GBP 3,500/mo): 20 posts + 8 Reels + website + workflows")
pdf.bullet("Scale (GBP 7,500/mo): Full stack + paid ads + AI agents + reporting")
pdf.bullet("Enterprise (GBP 15,000+/mo): Custom AI systems + dedicated support")
pdf.ln(4)
pdf.section_title("Your First 90 Days")
pdf.bullet("Days 1-30: Set up your agency stack, create portfolio content")
pdf.bullet("Days 31-60: Land first 2 clients via LinkedIn outreach + referrals")
pdf.bullet("Days 61-90: Systematise delivery, hire VA, raise prices")
pdf.ln(4)
pdf.body_text(
    "Ready to go deeper? MediaHive AI builds the full AI stack for agencies and "
    "enterprises - social automation, websites, workflows, and custom AI agents. "
    "Visit mediahive.ai or email hello@mediahive.ai"
)

pdf.output(OUT)
print(f"Generated: {OUT}")
