import { AccountLayout } from '@/components/account-pages'

export default function Page() { return <AccountLayout active="notifications"><section className="account-card"><h1>Notificaciones</h1><p className="muted">Mantente al día con tus conversaciones y actividad.</p><div className="setting-row"><div><strong>Alguien respondió a tu publicación</strong><span className="muted">Hace 12 minutos · Debate técnico</span></div></div><div className="setting-row"><div><strong>Tu post recibió 8 votos</strong><span className="muted">Hace 1 hora · Avocado</span></div></div></section></AccountLayout> }
