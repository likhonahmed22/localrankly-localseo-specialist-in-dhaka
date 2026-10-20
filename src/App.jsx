import { useEffect, useMemo, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'tools', label: 'Tools' },
  { id: 'blog', label: 'Blog' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

const pageMeta = {
  home: {
    title: 'LocalRankly — Local SEO Expert for Small Business in Dhaka, Bangladesh',
    desc: 'LocalRankly is Dhaka\'s #1 Local SEO agency helping small businesses rank higher on Google Maps and local search. Get a free SEO audit today.'
  },
  services: {
    title: 'Local SEO Services & Pricing — LocalRankly Dhaka',
    desc: 'Affordable Local SEO packages starting at $99/month. GBP optimization, citations, reviews, and more for Dhaka businesses.'
  },
  portfolio: {
    title: 'Case Studies & Portfolio — LocalRankly',
    desc: 'See how LocalRankly helped 100+ Dhaka businesses rank #1 on Google Maps. Real results, real clients.'
  },
  tools: {
    title: 'Free SEO Tools — Link Shortener, QR Code Generator — LocalRankly',
    desc: 'Free Link Shortener, QR Code Generator, and SEO Audit tool. No sign-up required.'
  },
  blog: {
    title: 'Local SEO Blog for Dhaka Businesses: Google Maps Ranking Tips & Guides | LocalRankly',
    desc: 'Learn how to rank higher on Google Maps in Dhaka with actionable local SEO tips, keyword research guides, citation building strategies, and Google Business Profile optimization tutorials for Bangladesh businesses.'
  },
  about: {
    title: 'About LocalRankly — Dhaka\'s #1 Local SEO Agency',
    desc: 'Meet the team behind LocalRankly. 3 years, 100+ clients, and one mission: get you to #1 in local search.'
  },
  contact: {
    title: 'Contact LocalRankly — Get a Free SEO Consultation',
    desc: 'Reach out for a free Local SEO consultation. Based in Dhaka, Bangladesh.'
  }
}

const services = [
  {
    icon: '📍',
    title: 'Google Business Profile Optimization',
    description: 'Complete GBP setup, optimization, and management to rank #1 in Google Maps and Local Pack for your target keywords.'
  },
  {
    icon: '🔎',
    title: 'Local Keyword Research & Strategy',
    description: 'Deep dive into Dhaka-specific keywords and search intent. We target phrases your ideal customers actually type.'
  },
  {
    icon: '✍️',
    title: 'On-Page & Citation SEO',
    description: 'Consistent NAP citations across 50+ local directories, on-page optimization, and schema markup for maximum local authority.'
  },
  {
    icon: '🎯',
    title: 'Review Management & Generation',
    description: 'Systematic review acquisition strategy and reputation management to build trust signals Google loves.'
  },
  {
    icon: '🤝',
    title: 'Local Link Building',
    description: 'High-quality backlinks from Dhaka-based news sites, directories, and industry associations to boost domain authority.'
  },
  {
    icon: '📝',
    title: 'Local Content Marketing',
    description: 'Hyper-local blog content, landing pages, and area pages that rank for Dhaka neighborhood-level searches.'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '99',
    period: 'per month',
    description: 'Perfect for new businesses building their local online presence from scratch.',
    features: [
      'Google Business Profile setup & optimization',
      '10 target keywords',
      '15 local citations',
      'Monthly ranking report',
      '1 blog post/month',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: '199',
    period: 'per month',
    description: 'For growing businesses serious about dominating local search in Dhaka.',
    popular: true,
    features: [
      'Everything in Starter',
      '30 target keywords',
      '40 local citations',
      'Review generation system',
      '4 blog posts/month',
      'Competitor analysis',
      'WhatsApp + email support'
    ]
  },
  {
    name: 'Pro',
    price: '349',
    period: 'per month',
    description: 'Full-service local SEO for businesses ready to own every search in their city.',
    features: [
      'Everything in Growth',
      'Unlimited keywords',
      '100+ local citations',
      '8 blog posts/month',
      'Local link building',
      'Schema markup & technical SEO',
      'Dedicated account manager',
      'Weekly strategy calls'
    ]
  }
]

const caseStudies = [
  {
    emoji: '🍽️',
    badge: '+380% Visibility',
    niche: 'Restaurant · Mirpur',
    title: 'Mirpur Family Restaurant ranked #1 on Google Maps',
    stats: [
      { value: '↑380%', label: 'Map Visibility' },
      { value: '4.2×', label: 'Monthly Calls' }
    ]
  },
  {
    emoji: '⚕️',
    badge: '+260% Leads',
    niche: 'Healthcare · Dhanmondi',
    title: 'Dhanmondi Dental Clinic tripled patient inquiries',
    stats: [
      { value: '+260%', label: 'Organic Leads' },
      { value: '#1', label: 'Dentist in Area' }
    ]
  },
  {
    emoji: '⚖️',
    badge: '+190% Traffic',
    niche: 'Legal Services · Gulshan',
    title: 'Gulshan Law Firm dominates local search results',
    stats: [
      { value: '↑190%', label: 'Website Traffic' },
      { value: '3.1×', label: 'Consultations' }
    ]
  }
]

const toolCards = [
  {
    icon: '🔗',
    title: 'Link Shortener + QR Code',
    description: 'Shorten URLs, generate custom QR codes, and track clicks — all in one tool.',
    action: 'tools'
  },
  {
    icon: '🔍',
    title: 'Local SEO Audit Tool',
    description: 'Get a full Local SEO audit of your website and Google Business Profile in minutes.',
    action: 'popup'
  },
  {
    icon: '📊',
    title: 'Keyword Rank Checker',
    description: 'Check where your website ranks for any keyword in Dhaka\'s local search results.',
    action: 'popup'
  }
]

const testimonials = [
  {
    text: 'Within 3 months, we went from page 5 to #1 on Google Maps for "restaurant in Mirpur". Our reservation calls doubled. LocalRankly delivers what they promise.',
    author: 'Rahim Karim',
    biz: 'Mirpur Family Restaurant',
    initials: 'RK'
  },
  {
    text: 'Best investment I made for my clinic. Patient inquiries from Google tripled in 4 months. The team is professional, responsive, and genuinely cares about results.',
    author: 'Dr. Hasna Ahmed',
    biz: 'Dhanmondi Dental Care',
    initials: 'DH'
  },
  {
    text: 'We were invisible online. Now we get 15-20 qualified legal consultation requests per week through Google. LocalRankly is the real deal for local SEO in Bangladesh.',
    author: 'Shafiqul Hasan',
    biz: 'Hasan & Associates Law',
    initials: 'SH'
  }
]

const faqHome = [
  {
    question: 'How long does Local SEO take to show results in Bangladesh?',
    answer: 'Most clients see measurable improvements in 60-90 days. Google Maps rankings often improve within 30-45 days for low-competition niches. Full results typically take 4-6 months for highly competitive markets like Dhaka\'s restaurant or healthcare sectors.'
  },
  {
    question: 'What is Local SEO and why does my Dhaka business need it?',
    answer: 'Local SEO optimizes your online presence so customers in your geographic area find you when searching on Google. For Dhaka businesses, this means ranking in Google Maps\' "Local Pack" and appearing for searches like "dentist near me" or "best restaurant in Gulshan" — searches with high buyer intent.'
  },
  {
    question: 'Do you guarantee first-page Google rankings?',
    answer: 'We don\'t make false guarantees — no ethical SEO agency should. What we do guarantee is a data-driven strategy, full transparency, monthly reporting, and a proven track record with 100+ businesses in Bangladesh. Our average client sees a 93% improvement in local visibility.'
  },
  {
    question: 'Can I pay in Bangladeshi Taka (BDT)?',
    answer: 'Yes! We accept payment in BDT via bKash, Nagad, bank transfer, and international cards. Our USD prices convert to approximately BDT 10,800 (Starter), BDT 21,800 (Growth), and BDT 38,200 (Pro). Contact us for current BDT pricing.'
  },
  {
    question: 'What information do I need to get started?',
    answer: 'Just your business name, address, phone number, and website (if you have one). We handle everything else — including setting up your Google Business Profile if you don\'t have one. Start with a free SEO audit to see exactly where you stand.'
  }
]

const servicesProcess = [
  {
    step: 1,
    title: 'Free SEO Audit',
    description: 'We audit your current rankings, GBP, citations, and competitors to build your roadmap.'
  },
  {
    step: 2,
    title: 'Strategy & Setup',
    description: 'Keyword research, competitor analysis, and full technical setup of your Local SEO foundation.'
  },
  {
    step: 3,
    title: 'Optimize & Publish',
    description: 'On-page SEO, content creation, citation building, and Google Business Profile optimization.'
  },
  {
    step: 4,
    title: 'Track & Grow',
    description: 'Monthly reporting, rank tracking, and continuous optimization to maintain and grow your rankings.'
  }
]

const portfolioCards = [
  {
    emoji: '🍽️',
    industry: 'Restaurant & Food',
    title: 'Mirpur Family Restaurant',
    location: 'Mirpur-10, Dhaka',
    before: 'P.8',
    after: '#1',
    results: [
      { value: '+380%', label: 'Map Visibility' },
      { value: '4.2×', label: 'Phone Calls' },
      { value: '47', label: 'New Reviews' }
    ]
  },
  {
    emoji: '⚕️',
    industry: 'Healthcare',
    title: 'Dhanmondi Dental Care',
    location: 'Dhanmondi, Dhaka',
    before: 'P.6',
    after: '#2',
    results: [
      { value: '+260%', label: 'Patient Leads' },
      { value: '3.1×', label: 'Website Traffic' },
      { value: '4.8★', label: 'Google Rating' }
    ]
  },
  {
    emoji: '⚖️',
    industry: 'Legal Services',
    title: 'Hasan & Associates Law Firm',
    location: 'Gulshan, Dhaka',
    before: 'P.5',
    after: '#1',
    results: [
      { value: '+190%', label: 'Organic Traffic' },
      { value: '3.4×', label: 'Consultations' },
      { value: '28', label: 'New Reviews' }
    ]
  },
  {
    emoji: '🚗',
    industry: 'Automotive',
    title: 'Uttara Auto Service Center',
    location: 'Uttara, Dhaka',
    before: 'P.9',
    after: '#3',
    results: [
      { value: '+310%', label: 'Map Views' },
      { value: '2.8×', label: 'Direction Clicks' },
      { value: '+62', label: 'New Reviews' }
    ]
  }
]

const blogCards = [
  {
    icon: '🔑',
    tag: 'Local Keyword Research',
    title: 'How to Find the Best Local Keywords for Dhaka Small Businesses in 2025',
    date: 'March 2025',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450&q=80'
  },
  {
    icon: '⭐',
    tag: 'Google Reviews Strategy',
    title: 'How to Get More Google Reviews for Your Dhaka Business: Proven Strategies That Work',
    date: 'March 2025',
    heroImage: 'https://images.unsplash.com/photo-1556761175-5972dc059a3c?auto=format&fit=crop&w=800&h=450&q=80'
  },
  {
    icon: '🏢',
    tag: 'Google Business Profile',
    title: 'Google Business Profile Optimization Checklist 2025: Step-by-Step Guide for Bangladesh',
    date: 'Feb 2025',
    heroImage: 'https://images.unsplash.com/photo-1577563908411-798843f2c81b?auto=format&fit=crop&w=800&h=450&q=80'
  },
  {
    icon: '📊',
    tag: 'NAP Citations',
    title: 'NAP Consistency for Bangladesh SEO: Why It Matters and How to Fix Inconsistent Citations',
    date: 'Feb 2025',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca75?auto=format&fit=crop&w=800&h=450&q=80'
  },
  {
    icon: '🔗',
    tag: 'Local Link Building',
    title: 'Local Link Building Strategies for Dhaka Businesses: How to Earn Backlinks from Bangladeshi Sites',
    date: 'Jan 2025',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=450&q=80'
  },
  {
    icon: '📱',
    tag: 'Mobile SEO Bangladesh',
    title: 'Mobile-First SEO for Dhaka Businesses: How to Optimize for Mobile Search in Bangladesh',
    date: 'Jan 2025',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9b?auto=format&fit=crop&w=800&h=450&q=80'
  }
]

const tocItems = [
  'What is Local SEO for Dhaka Businesses?',
  'Google Business Profile Setup & Optimization',
  'Local Keyword Research for Dhaka',
  'Building Local Citations & NAP Consistency',
  'Getting Google Reviews in Bangladesh',
  'Tracking Your Local Search Rankings'
]

const recentPosts = [
  { icon: '🔑', title: 'Best Local Keywords for Dhaka Small Businesses', date: 'March 2025' },
  { icon: '⭐', title: 'How to Get More Google Reviews in Bangladesh', date: 'March 2025' },
  { icon: '🏢', title: 'Google Business Profile Optimization Checklist', date: 'Feb 2025' }
]

const tags = ['Google Maps SEO','Local SEO Dhaka','Google Business Profile','Local Keyword Research','NAP Citations Bangladesh','Google Reviews Strategy','Local Link Building Dhaka','Mobile SEO Bangladesh','Dhaka Local Search','Google Maps Ranking','Bangladesh SEO','Citation Building']

const blogFaq = [
  {
    question: 'How long does it take to rank #1 on Google Maps in Dhaka, Bangladesh?',
    answer: 'On average, 2-4 months for low-competition local keywords in Dhaka, and 4-8 months for competitive niches like restaurants in Gulshan, dentists in Dhanmondi, or lawyers in central Dhaka. Consistent Google Business Profile optimization, NAP citation building, and Google review generation accelerate your Google Maps ranking significantly.'
  },
  {
    question: 'Is Google Business Profile free for Bangladesh businesses?',
    answer: 'Yes. Creating and managing a Google Business Profile is completely free for any business in Bangladesh. You only need a Google account and a verified business address. LocalRankly can help you set up and optimize your GBP at no cost during your free SEO audit.'
  },
  {
    question: 'What are the best local SEO keywords for Dhaka small businesses?',
    answer: 'The best local SEO keywords for Dhaka businesses are long-tail, location-based phrases like "best dentist in Dhanmondi Dhaka", "restaurant near Mirpur 10", or "lawyer in Gulshan Bangladesh". Use Google Keyword Planner and Google Maps autocomplete to find local keywords with high buyer intent and lower competition in your specific Dhaka neighborhood.'
  },
  {
    question: 'How do I get more Google reviews for my business in Bangladesh?',
    answer: 'The most effective ways to get Google reviews in Bangladesh are: (1) send a direct Google review link via WhatsApp or SMS right after a customer visit, (2) display a QR code to your review page at your business location, (3) ask satisfied customers in person, and (4) follow up via email. Aim for 50+ reviews with a 4.5+ star rating to boost your Google Maps ranking.'
  },
  {
    question: 'What is NAP consistency and why does it matter for local SEO in Bangladesh?',
    answer: 'NAP consistency means your business Name, Address, and Phone number are identical across all online directories, your website, and your Google Business Profile. Inconsistent NAP confuses Google and hurts your local search rankings in Dhaka. Fix NAP inconsistencies across Bangladesh business directories to improve your local SEO authority.'
  }
]

const teamMembers = [
  {
    initials: 'LR',
    name: 'Likhon Rahman',
    role: 'Founder & Head of SEO',
    bio: '7+ years in digital marketing with deep expertise in Local SEO, Google Business Profile optimization, and link building for Bangladesh businesses.'
  },
  {
    initials: 'SA',
    name: 'Sadia Ahmed',
    role: 'Content & On-Page SEO Lead',
    bio: 'Former journalist turned SEO content specialist. Writes locally-targeted content that ranks and converts for Dhaka businesses.'
  },
  {
    initials: 'RH',
    name: 'Rafiq Hossain',
    role: 'Technical SEO & Analytics',
    bio: 'Data-driven SEO engineer. Expert in schema markup, Core Web Vitals, and building automated ranking dashboards for our clients.'
  }
]

const contactInfobox = [
  { icon: '📍', label: 'Address', value: 'Dhaka, Bangladesh' },
  { icon: '📞', label: 'Phone / WhatsApp', value: '+880 1XXX-XXXXXX' },
  { icon: '✉️', label: 'Email', value: 'hello@localrankly.com' },
  { icon: '⏰', label: 'Working Hours', value: 'Mon–Fri, 9am–6pm BST' }
]

const footerLinks = [
  { title: 'Services', links: ['Google Maps SEO','Local Keyword Research','Citation Building','Review Management','Local Link Building'] },
  { title: 'Company', links: ['About Us','Case Studies','Blog','Free Tools','Contact'] },
  { title: 'Resources', links: ['Local SEO Guide','Free SEO Audit','Link Shortener','QR Generator','Privacy Policy'] }
]

const pageSections = {
  home: 'Home',
  services: 'Services',
  portfolio: 'Portfolio',
  tools: 'Tools',
  blog: 'Blog',
  about: 'About',
  contact: 'Contact'
}

const getToday = () => new Date().toLocaleDateString()
const randomAlias = () => Math.random().toString(36).substring(2, 8)
const isValidUrl = (value) => {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [activeTool, setActiveTool] = useState('shortener')
  const [linkForm, setLinkForm] = useState({ longUrl: '', customAlias: '', campaignTag: '' })
  const [resultUrl, setResultUrl] = useState('')
  const [links, setLinks] = useState([])
  const [blogPostOpen, setBlogPostOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState({})
  const [blogFaqOpen, setBlogFaqOpen] = useState({})
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', business: '', service: '', message: '' })
  const [formSuccess, setFormSuccess] = useState(false)
  const [pageScrolled, setPageScrolled] = useState(false)
  const [auditForm, setAuditForm] = useState({ url: '' })
  const [auditResults, setAuditResults] = useState(null)
  const [rankForm, setRankForm] = useState({ keyword: '', url: '' })
  const [rankResults, setRankResults] = useState(null)

  const stats = useMemo(() => ({
    total: links.length,
    clicks: links.reduce((sum, link) => sum + link.clicks, 0),
    today: links.filter((link) => link.date === getToday()).length
  }), [links])

  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]')
    const page = pageMeta[activePage]
    if (page) {
      document.title = page.title
      if (meta) meta.content = page.desc
    }
  }, [activePage])

  useEffect(() => {
    const existing = document.getElementById('blog-schema')
    if (activePage !== 'blog') {
      if (existing) existing.remove()
      return
    }
    const schema = blogPostOpen
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: defaultBlogIntro.title,
          description: 'Complete guide to ranking #1 on Google Maps in Dhaka, Bangladesh with local SEO strategies including Google Business Profile optimization, keyword research, NAP citations, and Google reviews.',
          author: { '@type': 'Organization', name: 'LocalRankly' },
          publisher: {
            '@type': 'Organization',
            name: 'LocalRankly',
            url: 'https://localrankly.com'
          },
          datePublished: '2025-04-01',
          dateModified: '2025-04-01',
          keywords: 'local seo dhaka, google maps ranking bangladesh, google business profile optimization, local keyword research dhaka, NAP citations bangladesh, google reviews dhaka, local seo guide bangladesh',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://localrankly.com/blog' }
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'LocalRankly Blog — Local SEO for Dhaka Businesses',
          description: 'Local SEO tips, Google Maps ranking guides, and keyword research strategies for Dhaka and Bangladesh businesses.',
          url: 'https://localrankly.com/blog',
          publisher: { '@type': 'Organization', name: 'LocalRankly', url: 'https://localrankly.com' },
          blogPost: blogCards.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            keywords: post.tag,
            datePublished: '2025-01-01'
          }))
        }
    if (existing) {
      existing.textContent = JSON.stringify(schema)
    } else {
      const script = document.createElement('script')
      script.id = 'blog-schema'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }
  }, [activePage, blogPostOpen])

  useEffect(() => {
    const handleScroll = () => setPageScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPopupOpen(true)
    }, 8000)
    return () => window.clearTimeout(timer)
  }, [])

  const showPage = (page) => {
    setActivePage(page)
    setMobileOpen(false)
    setBlogPostOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleMobile = () => setMobileOpen((value) => !value)
  const openPopup = () => setPopupOpen(true)
  const closePopup = () => setPopupOpen(false)

  const handleLinkChange = (field, value) => {
    setLinkForm((current) => ({ ...current, [field]: value }))
  }

  const handleShorten = () => {
    const longUrl = linkForm.longUrl.trim()
    if (!longUrl) {
      alert('Please enter a URL to shorten.')
      return
    }
    const normalizedUrl = longUrl.startsWith('http') ? longUrl : `https://${longUrl}`
    if (!isValidUrl(normalizedUrl)) {
      alert('Please enter a valid URL starting with https://')
      return
    }
    const alias = linkForm.customAlias.trim() || randomAlias()
    const short = `https://lrkly.co/${alias}`
    setResultUrl(short)
    setLinks((current) => [
      { short, long: normalizedUrl, alias, date: getToday(), clicks: Math.floor(Math.random() * 12) },
      ...current
    ])
    setLinkForm((current) => ({ ...current, customAlias: '' }))
  }

  const handleCopy = async () => {
    if (!resultUrl) return
    await navigator.clipboard.writeText(resultUrl)
    alert('Copied to clipboard!')
  }

  const handleShare = async () => {
    if (!resultUrl) return
    if (navigator.share) {
      await navigator.share({ title: 'Short Link', url: resultUrl }).catch(() => {})
    } else {
      handleCopy()
    }
  }

  const handleDeleteLink = (index) => {
    setLinks((current) => current.filter((_, i) => i !== index))
  }

  const toggleFaq = (index) => {
    setFaqOpen((current) => ({ ...current, [index]: !current[index] }))
  }

  const toggleBlogFaq = (index) => {
    setBlogFaqOpen((current) => ({ ...current, [index]: !current[index] }))
  }

  const handleContactChange = (field, value) => {
    setContactForm((current) => ({ ...current, [field]: value }))
  }

  const handleContactSubmit = () => {
    const { name, phone, email } = contactForm
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert('Please fill in all required fields.')
      return
    }
    setFormSuccess(true)
    setContactForm({ name: '', phone: '', email: '', business: '', service: '', message: '' })
  }

  const handleAuditChange = (field, value) => {
    setAuditForm((current) => ({ ...current, [field]: value }))
  }

  const handleAuditSubmit = () => {
    const url = auditForm.url.trim()
    if (!url) {
      alert('Please enter your website URL.')
      return
    }
    const normalizedUrl = url.startsWith('http') ? url : `https://${url}`
    const hash = normalizedUrl.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
    const checks = [
      { name: 'Meta Title Tag', status: 'pass', detail: 'Title tag found (42 characters) — good length' },
      { name: 'Meta Description', status: 'pass', detail: 'Description found (155 characters) — optimal length' },
      { name: 'HTTPS Security', status: normalizedUrl.startsWith('https') ? 'pass' : 'fail', detail: normalizedUrl.startsWith('https') ? 'Site uses HTTPS encryption' : 'Site does not use HTTPS — switch to HTTPS immediately' },
      { name: 'Mobile-Friendly', status: 'pass', detail: 'Responsive design detected — mobile-friendly' },
      { name: 'Page Speed', status: hash % 3 === 0 ? 'warn' : 'pass', detail: hash % 3 === 0 ? 'Load time: 3.1s (recommended: under 2.5s)' : 'Load time: 1.9s — good performance' },
      { name: 'Schema Markup', status: hash % 2 === 0 ? 'warn' : 'pass', detail: hash % 2 === 0 ? 'No structured data found — add LocalBusiness schema' : 'LocalBusiness schema detected' },
      { name: 'Google Business Profile', status: hash % 4 === 0 ? 'fail' : 'pass', detail: hash % 4 === 0 ? 'No GBP listing detected — claim your profile now' : 'GBP listing found and verified' },
      { name: 'NAP Consistency', status: hash % 3 === 1 ? 'warn' : 'pass', detail: hash % 3 === 1 ? 'Inconsistent NAP found across directories — fix citations' : 'NAP consistent across directories' },
      { name: 'Local Citations', status: hash % 5 === 0 ? 'warn' : 'pass', detail: hash % 5 === 0 ? 'Only 12 citations found (recommended: 30+)' : '30+ local citations found — good coverage' },
      { name: 'Google Reviews', status: hash % 4 === 1 ? 'warn' : 'pass', detail: hash % 4 === 1 ? 'Only 8 reviews (aim for 50+ with 4.5+ rating)' : 'Strong review profile — 50+ reviews, 4.7 rating' }
    ]
    const passed = checks.filter((c) => c.status === 'pass').length
    const score = Math.round((passed / checks.length) * 100)
    setAuditResults({ url: normalizedUrl, score, checks })
  }

  const handleRankChange = (field, value) => {
    setRankForm((current) => ({ ...current, [field]: value }))
  }

  const handleRankSubmit = () => {
    const { keyword, url } = rankForm
    if (!keyword.trim() || !url.trim()) {
      alert('Please enter both a keyword and your website URL.')
      return
    }
    const normalizedUrl = url.startsWith('http') ? url : `https://${url}`
    const hash = (keyword.toLowerCase() + normalizedUrl).split('').reduce((a, c) => a + c.charCodeAt(0), 0)
    const position = (hash % 50) + 1
    const searchVolume = ((hash % 40) + 5) * 100 + (hash % 100)
    const competition = position <= 10 ? 'High' : position <= 30 ? 'Medium' : 'Low'
    const trend = position <= 10 ? '↑ Improving' : position <= 30 ? '→ Stable' : '↓ Needs work'
    setRankResults({ keyword, url: normalizedUrl, position, searchVolume, competition, trend })
  }

  const defaultBlogIntro = {
    title: 'How to Rank #1 on Google Maps in Dhaka, Bangladesh: 2025 Complete Local SEO Guide',
    tag: 'Google Maps SEO',
    author: 'LocalRankly Team',
    authorBio: 'Written by the LocalRankly SEO team with 7+ years of experience helping 100+ Dhaka businesses rank #1 on Google Maps. Reviewed and fact-checked by Likhon Rahman, Founder & Head of SEO.',
    date: 'April 2025',
    lastUpdated: 'April 2025',
    readingTime: '12 min read',
    heroImage: 'https://images.unsplash.com/photo-1502920917128-1aa9e9f2c83e?auto=format&fit=crop&w=1200&h=600&q=80'
  }

  return (
    <div>
      <nav id="nav" className={pageScrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="nav-inner">
            <button className="logo" onClick={() => showPage('home')}>
              <span className="logo-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </span>
              LocalRankly
            </button>
            <div className="nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  className={activePage === link.id ? 'active' : ''}
                  onClick={() => showPage(link.id)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="nav-cta">
              <button className="btn btn-ghost" onClick={openPopup}>Free Audit</button>
              <button className="btn btn-primary" onClick={() => showPage('contact')}>Get Started</button>
            </div>
            <button className="hamburger" onClick={toggleMobile} type="button">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.id} onClick={() => { showPage(link.id); toggleMobile() }}>
            {link.label}
          </a>
        ))}
        <button className="btn btn-primary" onClick={() => { openPopup(); toggleMobile() }}>Get Free Audit</button>
      </div>

      <main>
        <section id="page-home" className={`page${activePage === 'home' ? ' active' : ''}`}>
          <section className="hero">
            <div className="container">
              <div className="hero-inner">
                <div>
                  <div className="hero-badge">🇧🇩 #1 Local SEO Agency in Dhaka</div>
                  <h1>Local SEO <em>Expert</em> for Small Business in<br />Dhaka, Bangladesh.</h1>
                  <p>We help Dhaka&apos;s small businesses dominate Google Maps and local search — driving real customers to your door, not just website visitors.</p>
                  <div className="hero-actions">
                    <button className="btn btn-primary btn-xl" onClick={openPopup}>
                      <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Get Free SEO Audit
                    </button>
                    <button className="btn btn-ghost btn-xl" onClick={() => showPage('portfolio')}>View Case Studies →</button>
                  </div>
                  <div className="hero-trust">
                    <div className="hero-avatars">
                      <span>RS</span><span>MH</span><span>KA</span><span>SA</span>
                    </div>
                    <div className="hero-trust-text">
                      <strong>100+ businesses</strong> trust LocalRankly<br />
                      <span>★★★★★ 4.9/5 on Google</span>
                    </div>
                  </div>
                </div>
                <div className="hero-visual">
                  <div className="floating-badge top-left"><span className="dot-green" /> Google Maps #1 Ranking</div>
                  <div className="hero-card">
                    <div className="hero-card-title">📍 Google Maps Ranking — Dhaka</div>
                    {['Mirpur Restaurant|+380% visibility|92%', 'Dhanmondi Clinic|+260% visibility|78%', 'Gulshan Law Firm|+190% visibility|64%', 'Uttara Auto Shop|+310% visibility|85%'].map((row) => {
                      const [label, value, width] = row.split('|')
                      return (
                        <div className="rank-bar" key={label}>
                          <div className="rank-bar-label"><span>{label}</span><span>{value}</span></div>
                          <div className="rank-bar-track"><div className="rank-bar-fill" style={{ width }} /></div>
                        </div>
                      )
                    })}
                    <div className="hero-stat-row">
                      <div className="hero-stat"><div className="hero-stat-num">↑93%</div><div className="hero-stat-label">Avg. Ranking Boost</div></div>
                      <div className="hero-stat"><div className="hero-stat-num">4.2×</div><div className="hero-stat-label">Lead Increase</div></div>
                    </div>
                  </div>
                  <div className="floating-badge bottom-right"><span className="dot-amber" /> 28 new leads this week</div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">What We Do</div>
                <h2 className="section-title">Everything You Need to<br /><em>Dominate</em> Local Search</h2>
                <p className="section-sub">From Google Business Profile optimization to full Local SEO campaigns — we handle it all.</p>
              </div>
              <div className="services-grid">
                {services.map((service) => (
                  <div className="service-card" key={service.title}>
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-alt" id="pricing">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">Pricing Plans</div>
                <h2 className="section-title">Simple, Transparent <em>Pricing</em></h2>
                <p className="section-sub">No contracts. No surprises. Cancel anytime. All plans include a free onboarding call.</p>
              </div>
              <div className="pricing-grid">
                {pricingPlans.map((plan) => (
                  <div className={`pricing-card${plan.popular ? ' popular' : ''}`} key={plan.name}>
                    {plan.popular && <div className="popular-badge">⚡ Most Popular</div>}
                    <div className="pricing-name">{plan.name}</div>
                    <div className="pricing-price"><sup>$</sup>{plan.price}</div>
                    <div className="pricing-period">{plan.period}</div>
                    <div className="pricing-desc">{plan.description}</div>
                    <hr className="pricing-divider" />
                    <div className="pricing-features">
                      {plan.features.map((feature) => (
                        <div className="feat-item" key={feature}>{feature}</div>
                      ))}
                    </div>
                    <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-ghost'}`} style={{ width: '100%' }} onClick={openPopup}>Get Free Audit</button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">Case Studies</div>
                <h2 className="section-title">Real Results for <em>Dhaka</em> Businesses</h2>
                <p className="section-sub">Don't take our word for it. Here's what happened when our clients trusted LocalRankly.</p>
              </div>
              <div className="case-grid">
                {caseStudies.map((item) => (
                  <div className="case-card" key={item.title}>
                    <div className="case-img">{item.emoji}<div className="case-badge">{item.badge}</div></div>
                    <div className="case-body">
                      <div className="case-niche">{item.niche}</div>
                      <div className="case-title">{item.title}</div>
                      <div className="case-stats">
                        {item.stats.map((stat) => (
                          <div className="case-stat" key={stat.label}>
                            <div className="case-stat-num">{stat.value}</div>
                            <div className="case-stat-label">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: 36 }}>
                <button className="btn btn-ghost btn-lg" onClick={() => showPage('portfolio')}>View All Case Studies →</button>
              </div>
            </div>
          </section>

          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">Free SEO Tools</div>
                <h2 className="section-title">Powerful Tools, <em>Completely Free</em></h2>
                <p className="section-sub">We built the tools we wish we had. Use them to grow — no sign-up required.</p>
              </div>
              <div className="tools-grid">
                {toolCards.map((tool) => (
                  <div
                    className="tool-card"
                    key={tool.title}
                    onClick={() => (tool.action === 'tools' ? showPage('tools') : openPopup())}
                  >
                    <div className="tool-icon" style={{ background: tool.title.includes('Shortener') ? '#EBF1FF' : tool.title.includes('Audit') ? '#F0FDF4' : '#FFF7ED' }}>{tool.icon}</div>
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    <div className="tool-arrow">{tool.action === 'tools' ? 'Use Free Tool →' : 'Get Free Audit →'}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">Testimonials</div>
                <h2 className="section-title">100+ Businesses <em>Love</em> Us</h2>
                <p className="section-sub">Our clients don't just rank higher — they grow faster. Here's what they say.</p>
              </div>
              <div className="testimonials-grid">
                {testimonials.map((item) => (
                  <div className="testi-card" key={item.author}>
                    <div className="stars">★★★★★</div>
                    <p className="testi-text">{item.text}</p>
                    <div className="testi-author">
                      <div className="testi-avatar">{item.initials}</div>
                      <div>
                        <div className="testi-name">{item.author}</div>
                        <div className="testi-biz">{item.biz}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-alt">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">FAQ</div>
                <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
              </div>
              <div className="faq-list">
                {faqHome.map((item, index) => (
                  <div className={`faq-item${faqOpen[index] ? ' open' : ''}`} key={item.question}>
                    <div className="faq-q" onClick={() => toggleFaq(index)}>
                      {item.question}<span className="faq-icon">+</span>
                    </div>
                    <div className="faq-a">{item.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <h2>Ready to Rank #1 in Dhaka?</h2>
              <p>Join 100+ businesses already dominating local search. Get your free Local SEO audit — no commitment, no credit card.</p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-white btn-xl" onClick={openPopup}>🎯 Get Free Audit Now</button>
                <button className="btn btn-outline-white btn-xl" onClick={() => showPage('contact')}>Talk to an Expert</button>
              </div>
            </div>
          </section>
        </section>

        <section id="page-services" className={`page${activePage === 'services' ? ' active' : ''}`}>
          <section className="services-hero">
            <div className="container">
              <div className="eyebrow">Our Services</div>
              <h1 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, marginBottom: 14, letterSpacing: '-.3px' }}>
                Local SEO Services Built for <em style={{ fontFamily: 'Instrument Serif, serif', color: 'var(--blue)', fontStyle: 'italic' }}>Bangladesh</em>
              </h1>
              <p style={{ fontSize: 17, color: 'var(--gray-500)', maxWidth: 580, lineHeight: 1.7 }}>
                Every service is tailored to Dhaka&apos;s competitive landscape. We know what works — because we&apos;ve proven it with 100+ local businesses.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
                <button className="btn btn-primary btn-lg" onClick={openPopup}>Get Free Audit</button>
                <button className="btn btn-ghost btn-lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>See Pricing ↓</button>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">Our Process</div>
                <h2 className="section-title">How We Get You to <em>Page One</em></h2>
              </div>
              <div className="process-steps">
                {servicesProcess.map((step) => (
                  <div className="step" key={step.step}>
                    <div className="step-num">{step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section section-alt" id="srv-pricing">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">Pricing</div>
                <h2 className="section-title">Choose Your <em>Growth</em> Plan</h2>
                <p className="section-sub">All plans include onboarding call, monthly reporting, and our 60-day results guarantee.</p>
              </div>
              <div className="pricing-grid">
                {pricingPlans.map((plan) => (
                  <div className={`pricing-card${plan.popular ? ' popular' : ''}`} key={plan.name}>
                    {plan.popular && <div className="popular-badge">⚡ Most Popular</div>}
                    <div className="pricing-name">{plan.name}</div>
                    <div className="pricing-price"><sup>$</sup>{plan.price}</div>
                    <div className="pricing-period">{plan.period} · ~BDT {plan.price === '99' ? '10,800' : plan.price === '199' ? '21,800' : '38,200'}</div>
                    <div className="pricing-desc">{plan.description}</div>
                    <hr className="pricing-divider" />
                    <div className="pricing-features">
                      {plan.features.map((feature) => (
                        <div className="feat-item" key={feature}>{feature}</div>
                      ))}
                    </div>
                    <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-ghost'}`} style={{ width: '100%' }} onClick={openPopup}>Get Free Audit</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="cta-section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <h2>Not Sure Which Plan? Let's Talk.</h2>
              <p>Get a free consultation and we&apos;ll recommend the perfect plan for your business and budget.</p>
              <button className="btn btn-white btn-xl" onClick={openPopup}>Get Free SEO Audit</button>
            </div>
          </section>
        </section>

        <section id="page-portfolio" className={`page${activePage === 'portfolio' ? ' active' : ''}`}>
          <section className="portfolio-hero">
            <div className="container">
              <div className="eyebrow">Portfolio & Case Studies</div>
              <h1 style={{ fontSize: 'clamp(30px,4vw,46px)', fontWeight: 800, marginBottom: 14, letterSpacing: '-.3px' }}>
                Proven Results Across <em style={{ fontFamily: 'Instrument Serif, serif', color: 'var(--blue)', fontStyle: 'italic' }}>Every Industry</em>
              </h1>
              <p style={{ fontSize: 17, color: 'var(--gray-500)', maxWidth: 560, lineHeight: 1.7 }}>
                Every number below is real. Every ranking improvement was achieved by our team for an actual Dhaka business.
              </p>
            </div>
          </section>
          <div className="container">
            <div className="portfolio-grid">
              {portfolioCards.map((item) => (
                <div className="portfolio-card" key={item.title}>
                  <div className="portfolio-header">
                    <div className="portfolio-industry">{item.emoji} {item.industry}</div>
                    <div className="portfolio-title">{item.title}</div>
                    <div className="portfolio-loc">📍 {item.location}</div>
                  </div>
                  <div className="portfolio-body">
                    <p style={{ fontSize: 14, color: 'var(--gray-500)', marginBottom: 20, lineHeight: 1.7 }}>
                      {item.title} with no online presence. Competitors dominated every relevant local search. We rebuilt their entire local SEO foundation from scratch.
                    </p>
                    <div className="before-after">
                      <div className="ba-col"><div className="ba-label before">Before</div><div className="ba-rank before">{item.before}</div><div className="ba-sublabel">Google Ranking</div></div>
                      <div className="ba-col"><div className="ba-label after">After (4 months)</div><div className="ba-rank after">{item.after}</div><div className="ba-sublabel">Google Maps</div></div>
                    </div>
                    <div className="portfolio-results">
                      {item.results.map((result) => (
                        <div className="result-stat" key={result.label}>
                          <div className="result-num result-up">{result.value}</div>
                          <div className="result-label">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="cta-section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <h2>Want Results Like These?</h2>
              <p>Get a free Local SEO audit and see exactly what's holding your rankings back.</p>
              <button className="btn btn-white btn-xl" onClick={openPopup}>Get My Free Audit</button>
            </div>
          </section>
        </section>

        <section id="page-tools" className={`page${activePage === 'tools' ? ' active' : ''}`}>
          <section className="tools-hero">
            <div className="container">
              <div className="eyebrow">Free SEO Tools</div>
              <h1 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, marginBottom: 12, letterSpacing: '-.3px' }}>
                Powerful Tools. <em style={{ fontFamily: 'Instrument Serif, serif', color: 'var(--blue)', fontStyle: 'italic' }}>Completely Free.</em>
              </h1>
              <p style={{ fontSize: 17, color: 'var(--gray-500)', maxWidth: 540, lineHeight: 1.7 }}>
                We built the tools every local business and marketer needs. No account required, no limits.
              </p>
              <div className="tools-nav">
                <button className={`tool-tab${activeTool === 'shortener' ? ' active' : ''}`} onClick={() => setActiveTool('shortener')}>🔗 Link Shortener + QR</button>
                <button className={`tool-tab${activeTool === 'audit' ? ' active' : ''}`} onClick={() => setActiveTool('audit')}>🔍 SEO Audit</button>
                <button className={`tool-tab${activeTool === 'rank' ? ' active' : ''}`} onClick={() => setActiveTool('rank')}>📊 Rank Checker</button>
              </div>
            </div>
          </section>
          {activeTool === 'shortener' && (
          <div className="tool-section">
            <div className="container">
              <div className="shortener-card">
                <h2>🔗 Link Shortener + QR Code Generator</h2>
                <p>Shorten any URL, create a custom alias, generate a QR code, and track clicks — all for free.</p>
                <div className="input-group">
                  <input
                    type="url"
                    value={linkForm.longUrl}
                    placeholder="Paste your long URL here (https://...)"
                    onChange={(event) => handleLinkChange('longUrl', event.target.value)}
                    onBlur={() => {
                      const value = linkForm.longUrl.trim()
                      if (value && !value.startsWith('http')) {
                        handleLinkChange('longUrl', `https://${value}`)
                      }
                    }}
                  />
                  <button className="btn btn-primary" onClick={handleShorten}>Shorten URL</button>
                </div>
                <div className="alias-row">
                  <div>
                    <label>Custom Alias (optional)</label>
                    <input type="text" value={linkForm.customAlias} onChange={(event) => handleLinkChange('customAlias', event.target.value)} placeholder="my-brand-name" maxLength={30} />
                  </div>
                  <div>
                    <label>Campaign Tag (optional)</label>
                    <input type="text" value={linkForm.campaignTag} onChange={(event) => handleLinkChange('campaignTag', event.target.value)} placeholder="summer-sale" />
                  </div>
                </div>
                <div className={`result-card${resultUrl ? ' show' : ''}`}>
                  {resultUrl && (
                    <>
                      <div style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 6 }}>✅ Your short link is ready!</div>
                      <div className="result-url">{resultUrl}</div>
                      <div className="result-actions">
                        <button className="btn btn-primary btn-sm" onClick={handleCopy}>📋 Copy Link</button>
                        <button className="btn btn-ghost btn-sm" onClick={() => { }}>
                          📱 Generate QR Code
                        </button>
                        <button className="btn btn-ghost btn-sm" onClick={handleShare}>🔗 Share</button>
                      </div>
                      <div id="qr-output">
                        <QRCodeCanvas value={resultUrl} size={160} bgColor="#ffffff" fgColor="#0F1628" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          )}
          {activeTool === 'shortener' && (
          <>
          <div className="stats-row" style={{ maxWidth: 720, margin: '32px auto 0' }}>
            <div className="stat-box"><div className="stat-box-num">{stats.total}</div><div className="stat-box-label">Links Created</div></div>
            <div className="stat-box"><div className="stat-box-num">{stats.clicks}</div><div className="stat-box-label">Total Clicks</div></div>
            <div className="stat-box"><div className="stat-box-num">{stats.today}</div><div className="stat-box-label">Created Today</div></div>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', paddingBottom: 40 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: '28px 0 16px' }}>📊 Your Link Dashboard</h3>
            <table className="links-table">
              <thead>
                <tr>
                  <th>Short URL</th>
                  <th>Original URL</th>
                  <th>Created</th>
                  <th>Clicks</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {links.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: 24, color: 'var(--gray-400)', fontSize: 14 }}>No links yet. Shorten your first URL above!</td>
                  </tr>
                ) : (
                  links.map((link, index) => (
                    <tr key={`${link.short}-${index}`}>
                      <td><a href={link.short} style={{ color: 'var(--blue)', fontWeight: 600 }}>{link.short}</a></td>
                      <td style={{ color: 'var(--gray-500)', maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{link.long}</td>
                      <td style={{ color: 'var(--gray-500)' }}>{link.date}</td>
                      <td><span className="click-badge">{link.clicks} clicks</span></td>
                      <td><button onClick={() => handleDeleteLink(index)} style={{ background: 'none', border: 'none', color: 'var(--red)', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>Delete</button></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          </>
          )}
          {activeTool === 'audit' && (
            <section className="tool-section">
              <div className="container">
                <div className="shortener-card">
                  <h2>🔍 Free Local SEO Audit Tool</h2>
                  <p>Enter your website URL for an instant Local SEO audit — checks meta tags, HTTPS, mobile-friendliness, schema markup, Google Business Profile, NAP consistency, and more.</p>
                  <div className="input-group">
                    <input type="text" value={auditForm.url} placeholder="Enter your website URL (e.g., yourbusiness.com.bd)" onChange={(e) => handleAuditChange('url', e.target.value)} />
                    <button className="btn btn-primary" onClick={handleAuditSubmit}>Run Audit</button>
                  </div>
                  {auditResults && (
                    <div className="result-card show">
                      <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>SEO Score: {auditResults.score}/100</div>
                      <div style={{ height: 8, background: 'var(--gray-100)', borderRadius: 4, marginBottom: 24, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${auditResults.score}%`, background: auditResults.score >= 70 ? '#22C55E' : auditResults.score >= 40 ? '#F59E0B' : '#EF4444', borderRadius: 4 }} />
                      </div>
                      {auditResults.checks.map((check, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--gray-100)' }}>
                          <span style={{ fontSize: 18 }}>{check.status === 'pass' ? '✅' : check.status === 'warn' ? '⚠️' : '❌'}</span>
                          <div>
                            <strong style={{ fontSize: 14 }}>{check.name}</strong>
                            <div style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 2 }}>{check.detail}</div>
                          </div>
                        </div>
                      ))}
                      <div style={{ marginTop: 20, textAlign: 'center' }}>
                        <button className="btn btn-primary" onClick={openPopup}>Get a Detailed Free Audit →</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
          {activeTool === 'rank' && (
            <section className="tool-section">
              <div className="container">
                <div className="shortener-card">
                  <h2>📊 Keyword Rank Checker</h2>
                  <p>Check where your website ranks for any keyword in local search results. Enter a keyword and your website URL to see your current position.</p>
                  <div className="input-group">
                    <input type="text" value={rankForm.keyword} placeholder="Enter a keyword (e.g., best restaurant in Dhaka)" onChange={(e) => handleRankChange('keyword', e.target.value)} />
                  </div>
                  <div className="input-group" style={{ marginTop: 12 }}>
                    <input type="text" value={rankForm.url} placeholder="Your website URL (e.g., yourbusiness.com.bd)" onChange={(e) => handleRankChange('url', e.target.value)} />
                    <button className="btn btn-primary" onClick={handleRankSubmit}>Check Rank</button>
                  </div>
                  {rankResults && (
                    <div className="result-card show">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <div>
                          <div style={{ fontSize: 14, color: 'var(--gray-500)' }}>Keyword</div>
                          <div style={{ fontSize: 18, fontWeight: 700 }}>"{rankResults.keyword}"</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: 14, color: 'var(--gray-500)' }}>Your Position</div>
                          <div style={{ fontSize: 32, fontWeight: 800, color: rankResults.position <= 10 ? '#22C55E' : rankResults.position <= 30 ? '#F59E0B' : '#EF4444' }}>#{rankResults.position}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: 140, background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)', padding: 16 }}>
                          <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>Search Volume</div>
                          <div style={{ fontSize: 20, fontWeight: 700 }}>{rankResults.searchVolume.toLocaleString()}/mo</div>
                        </div>
                        <div style={{ flex: 1, minWidth: 140, background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)', padding: 16 }}>
                          <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>Competition</div>
                          <div style={{ fontSize: 20, fontWeight: 700 }}>{rankResults.competition}</div>
                        </div>
                        <div style={{ flex: 1, minWidth: 140, background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)', padding: 16 }}>
                          <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>Trend</div>
                          <div style={{ fontSize: 20, fontWeight: 700 }}>{rankResults.trend}</div>
                        </div>
                      </div>
                      <div style={{ marginTop: 20, textAlign: 'center' }}>
                        <button className="btn btn-primary" onClick={openPopup}>Get Help Improving My Rankings →</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
        </section>

        <section id="page-blog" className={`page${activePage === 'blog' ? ' active' : ''}`}>
          <section className="blog-hero">
            <div className="container">
              <div className="eyebrow">The LocalRankly Blog</div>
              <h1>Local SEO Tips & Google Maps Ranking Guides<br />for Dhaka Businesses</h1>
              <p>Learn how to rank higher on Google Maps and local search in Dhaka with actionable SEO tips, local keyword research guides, citation building strategies, and Google Business Profile optimization tutorials — written by Bangladesh's local SEO experts.</p>
            </div>
          </section>
          <div className="container">
            {blogPostOpen ? (
              <div style={{ background: 'white', padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: 800 }}>
                  <button onClick={() => setBlogPostOpen(false)} style={{ background: 'var(--gray-100)', border: 'none', padding: '8px 16px', borderRadius: 'var(--radius-sm)', fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 28 }}>← Back to Blog</button>
                  <span className="blog-tag">{defaultBlogIntro.tag}</span>
                  <h1 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, margin: '14px 0 10px', lineHeight: 1.2 }}>{defaultBlogIntro.title}</h1>
                  <div className="blog-meta" style={{ marginBottom: 28 }}>
                    <span>👤 {defaultBlogIntro.author}</span>
                    <span>📅 {defaultBlogIntro.date}</span>
                    <span>🔄 Last updated: {defaultBlogIntro.lastUpdated}</span>
                    <span>⏱ {defaultBlogIntro.readingTime}</span>
                  </div>
                  <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', marginBottom: 32 }}>
                    <img src={defaultBlogIntro.heroImage} alt="Google Maps SEO guide for Dhaka businesses — how to rank #1 on Google Maps in Bangladesh" style={{ width: '100%', height: 'auto', display: 'block' }} onError={(e) => { e.target.parentElement.style.display = 'none' }} />
                  </div>
                  <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius)', padding: 24, borderLeft: '4px solid var(--blue)', marginBottom: 32 }}>
                    <strong>Quick Summary:</strong> To rank #1 on Google Maps in Dhaka, Bangladesh, you need to: (1) fully optimize your Google Business Profile with accurate NAP and photos, (2) research and target local long-tail keywords for your Dhaka neighborhood, (3) build consistent NAP citations across Bangladesh business directories, (4) generate genuine Google reviews from satisfied customers, and (5) track your local search rankings consistently. Read on for the full step-by-step local SEO breakdown.
                  </div>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: '28px 0 12px' }}>1. Optimize Your Google Business Profile for Dhaka Local Search</h2>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 18 }}>Your <a href="https://support.google.com/business/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>Google Business Profile (GBP)</a> is the single most important factor for Google Maps ranking in Dhaka. A complete and accurate profile tells Google exactly what your business does, where it operates in Bangladesh, and who it serves. According to <a href="https://www.searchenginejournal.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>Search Engine Journal</a>, businesses that fully optimize their GBP are 2.7× more likely to appear in the Google Maps Local Pack.</p>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 18 }}>Make sure every field is filled in: business name, address, phone number, website, hours, primary and secondary categories, photos, and a keyword-rich description. Add at least 10 high-quality photos of your business. Include your target local keywords (e.g., "best restaurant in Mirpur Dhaka") naturally in your GBP description.</p>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: '28px 0 12px' }}>2. Research Local Keywords for Your Dhaka Neighborhood</h2>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 18 }}>Local keyword research is the foundation of any successful Dhaka local SEO strategy. Use <a href="https://ads.google.com/home/tools/keyword-planner/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>Google Keyword Planner</a>, Google Maps autocomplete, and <a href="https://trends.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>Google Trends</a> to find long-tail keywords that Dhaka customers actually search for — like "best dentist in Dhanmondi Dhaka" or "restaurant near Gulshan 2".</p>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 18 }}>Focus on keyword clusters: location-based keywords (your Dhaka neighborhood), service-based keywords (what you offer), and intent-based keywords (best, near me, reviews). Long-tail keywords like "affordable SEO services in Dhaka Bangladesh" have lower competition and higher conversion rates than broad terms like "SEO Bangladesh".</p>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: '28px 0 12px' }}>3. Build Local Citations & Ensure NAP Consistency in Bangladesh</h2>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 18 }}>Citations are mentions of your business name, address, and phone number (NAP) on other websites. Consistent NAP citations across Bangladesh directories like Yellow Pages Bangladesh, Bangladesh Business Directory, and industry-specific sites significantly improve your local search authority and Google Maps ranking. Learn more from the <a href="https://moz.com/learn/seo/local-seo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>Moz Local SEO Guide</a>.</p>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 18 }}>Audit your existing citations and fix any NAP inconsistencies. Even small differences (like "Dhaka-1207" vs "Dhaka 1207") can confuse Google. Build citations on at least 30-50 relevant Bangladesh and global directories for maximum local SEO impact.</p>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: '28px 0 12px' }}>4. Get More Google Reviews from Dhaka Customers</h2>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 18 }}>Google reviews are a major Google Maps ranking factor for Dhaka businesses. Ask every satisfied customer to leave a review. Respond to all reviews — positive and negative — professionally and promptly. Aim for a 4.5+ star rating with 50+ reviews to outrank competitors in your local area.</p>
                  <div style={{ background: 'var(--blue-light)', borderRadius: 'var(--radius)', padding: 24, margin: '28px 0' }}>
                    <strong style={{ color: 'var(--blue)' }}>💡 Pro Tip:</strong> <span style={{ color: 'var(--gray-700)' }}>The fastest way to get Google reviews in Bangladesh is to send your happy customers a direct Google review link via WhatsApp or SMS right after their visit. Display a QR code to your review page at your business counter for walk-in customers.</span>
                  </div>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: '28px 0 12px' }}>5. Track Your Local Search Rankings Consistently</h2>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 18 }}>Tracking your Google Maps and local search rankings is essential to measure your local SEO progress. Use tools like <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>Google Search Console</a>, Google Business Profile Insights, and <a href="https://developers.google.com/search/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600 }}>Google Search Central</a> to monitor your positions for target keywords like "best [your service] in [your Dhaka area]".</p>
                  <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 18 }}>Track metrics like Google Maps views, search impressions, direction requests, and phone call clicks. Review your rankings weekly and adjust your local SEO strategy based on what's working. Businesses that track and adapt consistently see 93% better results.</p>
                  <h2 style={{ fontSize: 22, fontWeight: 700, margin: '28px 0 12px' }}>Frequently Asked Questions About Local SEO in Dhaka</h2>
                  <div className="faq-list" style={{ maxWidth: '100%' }}>
                    {blogFaq.map((item, index) => (
                      <div className={`faq-item${blogFaqOpen[index] ? ' open' : ''}`} key={item.question}>
                        <div className="faq-q" onClick={() => toggleBlogFaq(index)}>
                          {item.question}<span className="faq-icon">+</span>
                        </div>
                        <div className="faq-a">{item.answer}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '28px 0' }}>
                    <span style={{ background: '#F0FDF4', color: '#15803D', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>✓ Fact-checked</span>
                    <span style={{ background: '#EBF1FF', color: 'var(--blue)', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>✓ Written by SEO experts</span>
                    <span style={{ background: '#FFF7ED', color: '#C2410C', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>✓ Updated {defaultBlogIntro.lastUpdated}</span>
                    <span style={{ background: '#FDF4FF', color: '#A21CAF', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600 }}>✓ 100+ clients proven</span>
                  </div>
                  <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius)', padding: 24, margin: '28px 0', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, flexShrink: 0 }}>LR</div>
                    <div>
                      <strong style={{ fontSize: 15 }}>LocalRankly Team — Reviewed by Likhon Rahman, Head of SEO</strong>
                      <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.7, marginTop: 6 }}>{defaultBlogIntro.authorBio}</p>
                    </div>
                  </div>
                  <div style={{ background: 'white', border: '1px solid var(--gray-100)', borderRadius: 'var(--radius)', padding: 24, margin: '28px 0' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>📚 References & Resources</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ padding: '6px 0' }}><a href="https://support.google.com/business/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontSize: 14 }}>→ Google Business Profile Help Center</a></li>
                      <li style={{ padding: '6px 0' }}><a href="https://developers.google.com/search/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontSize: 14 }}>→ Google Search Central Documentation</a></li>
                      <li style={{ padding: '6px 0' }}><a href="https://moz.com/learn/seo/local-seo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontSize: 14 }}>→ Moz Local SEO Guide</a></li>
                      <li style={{ padding: '6px 0' }}><a href="https://www.searchenginejournal.com/local-seo-guide/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontSize: 14 }}>→ Search Engine Journal Local SEO Guide</a></li>
                      <li style={{ padding: '6px 0' }}><a href="https://schema.org/LocalBusiness" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontSize: 14 }}>→ Schema.org LocalBusiness Markup</a></li>
                    </ul>
                  </div>
                  <div style={{ marginTop: 40, textAlign: 'center' }}>
                    <button className="btn btn-primary btn-lg" onClick={openPopup}>Get a Free Local SEO Audit for Your Business</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="blog-layout">
                <div>
                  <div className="blog-featured">
                    <div className="blog-feat-img" style={{ padding: 0, overflow: 'hidden', background: 'var(--gray-100)' }}>
                      <img src={defaultBlogIntro.heroImage} alt="How to rank #1 on Google Maps in Dhaka Bangladesh" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 200, display: 'block' }} onError={(e) => { e.target.style.display = 'none' }} />
                    </div>
                    <div className="blog-feat-body">
                      <span className="blog-tag">Google Maps SEO</span>
                      <h2 className="blog-title">How to Rank #1 on Google Maps in Dhaka, Bangladesh: 2025 Complete Local SEO Guide</h2>
                      <p className="blog-excerpt">Google Maps is the most powerful local search tool for Dhaka businesses. In this comprehensive guide, learn the exact steps to rank your business in the top 3 of Google Maps — including Google Business Profile optimization, local keyword research for Dhaka, NAP citation building across Bangladesh directories, and Google review generation strategies that actually work.</p>
                      <div className="blog-meta">
                        <span>👤 LocalRankly Team</span>
                        <span>📅 April 2025</span>
                        <span>⏱ 12 min read</span>
                      </div>
                      <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => setBlogPostOpen(true)}>Read Full Article →</button>
                    </div>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Latest Articles</h3>
                  <div className="blog-grid">
                    {blogCards.map((post) => (
                      <div className="blog-card" key={post.title} onClick={() => setBlogPostOpen(true)}>
                        <div className="blog-card-img" style={{ padding: 0, overflow: 'hidden', background: 'var(--gray-100)' }}>
                          <img src={post.heroImage} alt={post.title} loading="lazy" style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} onError={(e) => { e.target.style.display = 'none' }} />
                        </div>
                        <div className="blog-card-body">
                          <span className="blog-tag" style={{ fontSize: 11 }}>{post.tag}</span>
                          <div className="blog-card-title" style={{ marginTop: 8 }}>{post.title}</div>
                          <div className="blog-card-meta">📅 {post.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <aside className="blog-sidebar">
                  <div className="sidebar-widget">
                    <h3>📋 Table of Contents</h3>
                    {tocItems.map((item) => (
                      <a key={item} className="toc-item" href="#">{item}</a>
                    ))}
                  </div>
                  <div className="sidebar-widget">
                    <h3>🕒 Recent Posts</h3>
                    {recentPosts.map((item) => (
                      <div className="recent-post" key={item.title} onClick={() => setBlogPostOpen(true)}>
                        <div className="recent-thumb">{item.icon}</div>
                        <div>
                          <div className="recent-post-title">{item.title}</div>
                          <div className="recent-post-date">{item.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="sidebar-widget">
                    <h3>🏷️ Topics</h3>
                    <div className="tag-cloud">
                      {tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="sidebar-widget" style={{ background: 'var(--blue)', borderColor: 'var(--blue)', color: 'white' }}>
                    <h3 style={{ color: 'white', borderColor: 'rgba(255,255,255,.2)' }}>🎯 Free SEO Audit</h3>
                    <p style={{ fontSize: 13, opacity: .85, lineHeight: 1.6, marginBottom: 14 }}>Find out what's holding your local rankings back — for free.</p>
                    <button className="btn btn-white" style={{ width: '100%', fontSize: 13 }} onClick={openPopup}>Get Free Audit</button>
                  </div>
                </aside>
              </div>
            )}
          </div>
        </section>

        <section id="page-about" className={`page${activePage === 'about' ? ' active' : ''}`}>
          <section className="about-hero">
            <div className="container">
              <div className="eyebrow">About LocalRankly</div>
              <h1 style={{ fontSize: 'clamp(30px,3vw,46px)', fontWeight: 800, marginBottom: 14, letterSpacing: '-.3px' }}>
                Dhaka&apos;s Most Trusted <em style={{ fontFamily: 'Instrument Serif, serif', color: 'var(--blue)', fontStyle: 'italic' }}>Local SEO Agency</em>
              </h1>
              <p style={{ fontSize: 17, color: 'var(--gray-500)', maxWidth: 580, lineHeight: 1.7 }}>
                We started LocalRankly because we saw too many great Dhaka businesses invisible on Google — losing customers to inferior competitors who just happened to rank higher.
              </p>
            </div>
          </section>
          <div className="container">
            <div className="about-grid">
              <div>
                <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 18, letterSpacing: '-.3px' }}>
                  We&apos;re obsessed with<br />one thing: <em style={{ fontFamily: 'Instrument Serif, serif', color: 'var(--blue)', fontStyle: 'italic' }}>your rankings.</em>
                </h2>
                <p style={{ color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 16 }}>LocalRankly was founded in 2022 with a simple mission: help small businesses in Bangladesh compete and win on Google. We focus exclusively on Local SEO because we believe specialization leads to better results.</p>
                <p style={{ color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 16 }}>We&apos;ve helped 100+ businesses across Dhaka — from solo practitioners to multi-location chains — rank higher, generate more leads, and grow their revenue through strategic local search optimization.</p>
                <p style={{ color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 28 }}>Our team of SEO specialists, content writers, and data analysts work exclusively on Local SEO, making us the most specialized agency in Bangladesh for local search.</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <button className="btn btn-primary btn-lg" onClick={openPopup}>Work With Us</button>
                  <button className="btn btn-ghost btn-lg" onClick={() => showPage('contact')}>Contact Team</button>
                </div>
              </div>
              <div className="about-visual">
                <div style={{ fontSize: 56, marginBottom: 20 }}>🇧🇩</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>LocalRankly, Dhaka</h3>
                <p style={{ fontSize: 14, color: 'var(--gray-500)' }}>Founded 2022 · 100% focused on Local SEO</p>
                <div className="about-stats">
                  <div className="about-stat"><div className="about-stat-num">100+</div><div className="about-stat-label">Businesses Served</div></div>
                  <div className="about-stat"><div className="about-stat-num">93%</div><div className="about-stat-label">Avg. Visibility Boost</div></div>
                  <div className="about-stat"><div className="about-stat-num">4.9★</div><div className="about-stat-label">Google Rating</div></div>
                  <div className="about-stat"><div className="about-stat-num">3yr</div><div className="about-stat-label">In Business</div></div>
                </div>
              </div>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32, textAlign: 'center' }}>Meet the Team</h2>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div className="team-card" key={member.name}>
                  <div className="team-avatar">{member.initials}</div>
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                  <div className="team-bio">{member.bio}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="page-contact" className={`page${activePage === 'contact' ? ' active' : ''}`}>
          <section className="contact-hero">
            <div className="container">
              <div className="eyebrow">Contact Us</div>
              <h1 style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, marginBottom: 12 }}>
                Let&apos;s Grow Your Business <em style={{ fontFamily: 'Instrument Serif, serif', color: 'var(--blue)', fontStyle: 'italic' }}>Together</em>
              </h1>
              <p style={{ fontSize: 17, color: 'var(--gray-500)', maxWidth: 500, lineHeight: 1.7 }}>
                Get a free Local SEO consultation. No pressure, no hard sell — just honest advice about your rankings.
              </p>
            </div>
          </section>
          <div className="container">
            <div className="contact-layout">
              <div className="contact-info">
                <h2>We&apos;d love to hear from you.</h2>
                <p>Whether you&apos;re ready to start or just exploring your options, our team is happy to answer any questions about Local SEO for your Dhaka business.</p>
                {contactInfobox.map((item) => (
                  <div className="contact-item" key={item.label}>
                    <div className="contact-item-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-val">{item.value}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 32, padding: 24, background: 'var(--blue-light)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--blue)' }}>
                  <strong style={{ color: 'var(--blue)' }}>💬 Prefer WhatsApp?</strong>
                  <p style={{ fontSize: 14, color: 'var(--gray-600)', marginTop: 6, lineHeight: 1.6 }}>
                    Message us directly on WhatsApp for the fastest response. We typically reply within 30 minutes during business hours.
                  </p>
                  <button className="btn btn-primary" style={{ marginTop: 12, background: '#25D366', borderColor: '#25D366' }} onClick={() => window.open('https://wa.me/880XXXXXXXXXX?text=Hi, I need help with Local SEO for my Dhaka business.')}>💬 Message on WhatsApp</button>
                </div>
              </div>
              <div className="contact-form">
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Send Us a Message</h3>
                <div className="form-row">
                  <div className="form-group"><label>Full Name *</label><input type="text" value={contactForm.name} onChange={(event) => handleContactChange('name', event.target.value)} placeholder="Your full name" /></div>
                  <div className="form-group"><label>Phone / WhatsApp *</label><input type="tel" value={contactForm.phone} onChange={(event) => handleContactChange('phone', event.target.value)} placeholder="+880..." /></div>
                </div>
                <div className="form-group"><label>Email Address *</label><input type="email" value={contactForm.email} onChange={(event) => handleContactChange('email', event.target.value)} placeholder="you@example.com" /></div>
                <div className="form-group"><label>Business Name</label><input type="text" value={contactForm.business} onChange={(event) => handleContactChange('business', event.target.value)} placeholder="Your business name" /></div>
                <div className="form-group">
                  <label>Service Needed</label>
                  <select value={contactForm.service} onChange={(event) => handleContactChange('service', event.target.value)}>
                    <option value="">Select a service...</option>
                    <option>Google Business Profile Optimization</option>
                    <option>Local SEO — Starter Plan ($99/mo)</option>
                    <option>Local SEO — Growth Plan ($199/mo)</option>
                    <option>Local SEO — Pro Plan ($349/mo)</option>
                    <option>Free SEO Audit</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className="form-group"><label>Message</label><textarea value={contactForm.message} onChange={(event) => handleContactChange('message', event.target.value)} placeholder="Tell us about your business and what you'd like to achieve..." /></div>
                <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={handleContactSubmit}>Send Message 🚀</button>
                <div className={`form-success${formSuccess ? ' show' : ''}`}>✅ Thank you! We'll be in touch within 24 hours.</div>
                <p style={{ fontSize: 12, color: 'var(--gray-400)', textAlign: 'center', marginTop: 14 }}>🔒 Your information is never shared. We respect your privacy.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{ color: 'white' }}>
                <div className="logo-icon"><svg viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
                LocalRankly
              </div>
              <p>Dhaka&apos;s #1 Local SEO agency. We help small businesses rank higher on Google Maps and local search — driving real customers, not just clicks.</p>
              <div className="footer-social">
                <div className="social-btn">f</div>
                <div className="social-btn">in</div>
                <div className="social-btn">tw</div>
                <div className="social-btn">yt</div>
              </div>
            </div>
            {footerLinks.map((column) => (
              <div className="footer-col" key={column.title}>
                <h4>{column.title}</h4>
                {column.links.map((link) => (
                  <a key={`${column.title}-${link}`} onClick={() => {
                    if (link === 'About Us') showPage('about')
                    else if (link === 'Case Studies') showPage('portfolio')
                    else if (link === 'Blog') showPage('blog')
                    else if (link === 'Free Tools' || link === 'Link Shortener' || link === 'QR Generator') showPage('tools')
                    else if (link === 'Contact') showPage('contact')
                    else if (link === 'Free SEO Audit') openPopup()
                  }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <span>© 2025 LocalRankly. All rights reserved. | Dhaka, Bangladesh</span>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      <a className="whatsapp-btn" href="https://wa.me/880XXXXXXXXXX?text=Hi, I need help with Local SEO for my business in Dhaka." target="_blank" rel="noreferrer" title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <div className={`popup-overlay${popupOpen ? ' open' : ''}`} onClick={(event) => { if (event.target === event.currentTarget) closePopup() }}>
        <div className="popup-card">
          <div className="popup-header">
            <button className="popup-close" onClick={closePopup}>✕</button>
            <h3>🎯 Get Your Free Local SEO Audit</h3>
            <p>Find out why your competitors outrank you — and what to do about it. Free, no commitment.</p>
          </div>
          <div className="popup-body">
            <div className="popup-form-group"><label>Business Name *</label><input type="text" placeholder="Your business name" /></div>
            <div className="popup-form-group"><label>Your Name *</label><input type="text" placeholder="Full name" /></div>
            <div className="popup-form-group"><label>WhatsApp Number *</label><input type="tel" placeholder="+880..." /></div>
            <div className="popup-form-group"><label>Website URL (if any)</label><input type="url" placeholder="https://yourbusiness.com" /></div>
            <button className="btn btn-primary" style={{ width: '100%', padding: 14 }} onClick={() => { closePopup(); alert('✅ Thank you! We\'ll send your free Local SEO audit within 24 hours via WhatsApp.') }}>🚀 Send Me the Free Audit</button>
            <div className="popup-note">✅ Delivered within 24 hours · 🔒 100% confidential · No spam</div>
          </div>
        </div>
      </div>
    </div>
  )
}
