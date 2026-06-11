'use client'
import React from 'react'
import {
  Briefcase, Scissors, Gamepad2, BookOpen, Activity, Coffee,
  Waves, Trophy, PersonStanding, Dumbbell, PawPrint, Flower2,
  Building2, Film, Target, Dice5
} from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const ArcIcon = () => (
  <svg
    width="28" height="14" viewBox="0 0 28 14" fill="none"
    style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle', marginBottom: '3px' }}
  >
    <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
)

const CurvedCorners = ({ bg = '#fff', color = '#e5e7eb' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block' }} />
  ))
}

const newAmenities = [
  { icon: Building2,      title: 'BANQUET HALL',             desc: 'An elegant banquet hall perfect for hosting community events, celebrations, and gatherings.' },
  { icon: Briefcase,      title: 'BUSINESS CENTRE',          desc: 'A modern, well-equipped business centre for your professional and work-from-home needs.' },
  { icon: Scissors,       title: 'SALON',                    desc: 'Premium salon services available right within the community for your grooming and wellness.' },
  { icon: Film,           title: 'MINI THEATRE',             desc: 'A dedicated mini theatre for screening movies and entertaining family and friends.' },
// { icon: BookOpen,       title: 'LIBRARY',                  desc: 'A quiet and peaceful library space for reading, studying, and continuous learning.' },
  // { icon: Activity,       title: 'SQUASH COURT',             desc: 'An indoor squash court to keep you active, fit, and engaged in competitive sports.' },
  // { icon: Gamepad2,       title: 'KIDS ACTIVITY AREA',       desc: 'A safe, engaging, and fun-filled activity area designed especially for children.' },
  { icon: Waves,          title: 'SWIMMING POOL',            desc: 'A beautifully designed swimming pool for a refreshing dip and aquatic workouts.' },
  { icon: Trophy,         title: 'BADMINTON COURT',          desc: 'A dedicated badminton court for sports enthusiasts and active recreation.' },
  { icon: Coffee,         title: 'CAFE',                     desc: 'A cozy in-house cafe perfect for relaxing, grabbing a quick bite, or socializing.' },
  { icon: Dumbbell,       title: 'STATE-OF-THE-ART SKY GYM', desc: 'A fully equipped modern sky gym with top-tier fitness equipment and great views.' },
// { icon: PawPrint,       title: 'PET DAY CARE AND SPA',     desc: 'A dedicated pet day care and spa ensuring your furry friends are pampered and well-taken care of.' },
  { icon: PersonStanding, title: 'JOGGING TRACK',            desc: 'A scenic jogging track to help you maintain a healthy and active lifestyle every day.' },
  { icon: Target,         title: 'FUTSAL ARENA',             desc: 'An action-packed futsal arena for fast-paced games and community tournaments.' },
  { icon: Flower2,        title: 'YOGA ROOM',                desc: 'A serene yoga room dedicated to mindfulness, meditation, and holistic well-being.' },
  { icon: Dice5,          title: 'INDOOR GAME ZONE',         desc: 'A fun indoor game zone with a variety of activities for all age groups.' },
]

const Amenities = () => {
  return (
    <section id="amenities" style={{
      padding: '72px 0',
      background: '#fff',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
            color: '#684C1B', letterSpacing: '0.22em', textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            LIFESTYLE AMENITIES – Experience More Every Day
          </h2>
        </div>

        {/* Grid Container */}
        <div data-aos="fade-up" data-aos-delay="100" style={{
          position: 'relative',
          border: '1px solid #e5e7eb',
          margin: '0 auto',
        }}>
          <CurvedCorners color="#e5e7eb" bg="#fff" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#e5e7eb]">
            {newAmenities.map((item, idx) => (
              <div key={idx} className="bg-white flex flex-col items-center group" style={{
                padding: '48px 24px',
                textAlign: 'center',
              }}>
                {/* Icon */}
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300" style={{ background: '#A9262D' }}>
                  <item.icon size={36} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: F_JOST, fontSize: '15px', fontWeight: '600',
                  color: '#684C1B', letterSpacing: '0.12em', margin: '0 0 12px'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: F_SANS, fontSize: '13px', color: '#6b7280',
                  lineHeight: 1.6, margin: 0,
                  textAlign: 'justify'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Amenities
