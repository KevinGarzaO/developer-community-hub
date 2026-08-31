import Link from 'next/link'
import { ArrowLeft, MapPin, MessageCircle, ShieldCheck } from 'lucide-react'

const profiles: Record<string, { name: string; initials: string; role: string; bio: string; tone: string; posts: string; reputation: string }> = {
  'avocado-studio': { name: 'Avocado Studio', initials: 'AS', role: 'Staff Avocado', bio: 'Construimos herramientas y conversaciones para que la comunidad de developers crezca junta.', tone: 'cyan', posts: '184', reputation: '12.8k' },
  'bot-vacantes': { name: 'Bot Vacantes', initials: 'BV', role: 'Bot Vacantes', bio: 'Oportunidades verificadas para developers en Latam y equipos remotos.', tone: 'emerald', posts: '96', reputation: '4.2k' },
  'sofia-herrera': { name: 'Sofía Herrera', initials: 'SH', role: 'Dev · Frontend', bio: 'Frontend engineer explorando arquitectura, React y las herramientas que hacen mejores productos.', tone: 'blue', posts: '42', reputation: '1.9k' },
  'mateo-lima': { name: 'Mateo Lima', initials: 'ML', role: 'Dev · Open Source', bio: 'Construyo herramientas pequeñas para resolver problemas grandes. PostgreSQL, TypeScript y OSS.', tone: 'violet', posts: '28', reputation: '1.4k' },
}

export default async function UserProfile({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params
  const profile = profiles[username] ?? { name: username.replaceAll('-', ' '), initials: username.slice(0, 2).toUpperCase(), role: 'Miembro de Avocado', bio: 'Este miembro todavía no ha añadido una biografía.', tone: 'emerald', posts: '0', reputation: '0' }
  return <main className="public-profile-page"><div className="public-profile-wrap"><Link href="/" className="back-link"><ArrowLeft size={15} /> Volver al feed</Link><section className="public-profile-card"><div className="public-profile-head"><div className={`big-avatar avatar-${profile.tone}`}>{profile.initials}</div><div className="public-profile-title"><p className="page-kicker">Perfil público</p><h1>{profile.name} {profile.role === 'Staff Avocado' && <ShieldCheck size={18} className="verified" />}</h1><p className="muted">@{username} · {profile.role}</p></div><button className="primary-btn"><MessageCircle size={14} /> Seguir</button></div><p className="public-profile-bio">{profile.bio}</p><div className="public-profile-stats"><div><strong>{profile.posts}</strong><span>publicaciones</span></div><div><strong>{profile.reputation}</strong><span>reputación</span></div><div><strong>2024</strong><span>en Avocado</span></div></div></section><section className="public-profile-card profile-placeholder"><p className="page-kicker">Actividad reciente</p><h2>Publicaciones de {profile.name}</h2><p className="muted">Aquí aparecerán sus conversaciones, proyectos y aportes a la comunidad.</p></section></div></main>
}
