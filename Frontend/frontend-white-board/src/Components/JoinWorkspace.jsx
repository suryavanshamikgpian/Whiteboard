import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function JoinWorkspace() {
    const [codeOrUrl, setCodeOrUrl] = useState('')
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const trimmed = codeOrUrl.trim()
        if (!trimmed) return

        // Very simple parsing: allow full URL or just room code
        try {
            const url = new URL(trimmed)
            // If it's a URL, just go to its pathname (assumes same origin app routing)
            navigate(url.pathname + url.search)
        } catch {
            // Not a URL: treat as room code
            navigate(`/room/${encodeURIComponent(trimmed)}`)
        }
    }

    return (
        <div className="wb-container">
            <div className="wb-card">
                <h2>Join a workspace</h2>
                <p>Paste an invite link or enter a room code.</p>
                <form className="wb-form" onSubmit={onSubmit}>
                    <label>
                        Invite link or code
                        <input
                            type="text"
                            placeholder="https://your-app/room/abc123 or abc123"
                            value={codeOrUrl}
                            onChange={(e) => setCodeOrUrl(e.target.value)}
                            required
                        />
                    </label>
                    <button className="wb-btn wb-btn-primary" type="submit">Join</button>
                </form>
                <p className="wb-back"><Link to="/">← Back to home</Link></p>
            </div>
        </div>
    )
}
