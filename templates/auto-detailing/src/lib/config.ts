import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Bay Area Mobile Auto Detailing Services",
    tagline: "Your Car Deserves Best Care",
    phone: "(510) 689-6953",
    phoneHref: "tel:+15106896953",
    email: "info@bayareamobiledetailing.com",
    address: "123 Main St",
    city: "Oakland",
    serviceAreas: ["Bay Area", "San Francisco", "San Jose", "Fremont", "Berkeley"],
    license: "CA Detailing License #12345",
    since: "2018",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "slate",
    niche: "auto-detailing",
  },

  services: [
    { icon: "sparkles", title: "Starter Package", desc: "Get your vehicle looking fresh with our essential detailing service.", urgent: false },
    { icon: "home", title: "Interior Auto Detailing", desc: "Deep clean and restore your car's interior to a like-new condition.", urgent: false },
    { icon: "truck", title: "Exterior Auto Detailing", desc: "Bring back the shine with a thorough wash, wax, and paint treatment.", urgent: false },
    { icon: "star", title: "Specialty Auto Detailing Services", desc: "Custom treatments for specific needs like paint correction or ceramic coating.", urgent: false },
    { icon: "briefcase", title: "Fleets & Corporate Detailing", desc: "Maintain a professional image for your business vehicles with regular detailing.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "San Francisco", stars: 5, text: "Bay Area Mobile Auto Detailing did an incredible job on my SUV last Tuesday! It was covered in dog hair and coffee stains, but they made it look brand new. The convenience of them coming to my office was a huge plus. Highly recommend their interior detailing service!" },
    { name: "Mark T.", location: "San Jose", stars: 5, text: "I used their exterior detailing service for my classic car, and I'm absolutely thrilled with the results. The paint correction was flawless, and the car looks better than it has in years. The detailer was meticulous and clearly passionate about his work. Worth every penny!" },
    { name: "Jessica R.", location: "Fremont", stars: 5, text: "Needed a quick clean before a road trip, so I booked their Starter Package. They arrived on time, were super professional, and my car looked fantastic in just a couple of hours. It was so easy and hassle-free. Will definitely be a repeat customer!" }
  ],

  trustBadges: [
    "Mobile Detailing Experts", "Top-Tier Products Used", "Flexible Scheduling", "Treat Every Car Like Our Own", "Honest Upfront Quotes"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Cars Detailed", suffix: "+", decimals: 0 },
    { value: 5, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "truck", title: "Mobile Service", desc: "We come to you, wherever you are in the Bay Area, for ultimate convenience." },
    { icon: "sparkles", title: "Detail Experts", desc: "Our team uses top-tier products and proven techniques for superior results." },
    { icon: "heart", title: "Care Like Our Own", desc: "We treat every vehicle with the same care and attention as if it were our own." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Receive honest, transparent quotes with no hidden fees or surprises." },
    { icon: "clock", title: "Flexible Scheduling", desc: "Book your detailing service at a time that works best for your busy schedule." },
    { icon: "shield-check", title: "Licensed & Insured", desc: "Peace of mind knowing your vehicle is in professional, protected hands." }
  ],

  formServiceOptions: ["Starter Package", "Interior Auto Detailing", "Exterior Auto Detailing", "Specialty Auto Detailing Services", "Fleets & Corporate Detailing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!