import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="wb-container">
            <div className="wb-card">
                <header className="wb-header">
                    <h1 className="wb-title">Whiteboard</h1>
                    <p className="wb-subtitle">Create collaborative spaces to draw, plan, and ideate in real-time.</p>
                </header>

                <div className="wb-cta">
                    <button className="wb-btn wb-btn-primary" onClick={() => navigate('/host')}>
                        Host a space
                    </button>
                    <button className="wb-btn wb-btn-secondary" onClick={() => navigate('/create')}>
                        Create a workspace
                    </button>
                </div>

                <p className="wb-hint">No sign-in needed to try it. You can invite others with a link later.</p>
            </div>
        </div>
    )
}
