import { Link } from 'react-router-dom'

export default function HostSpace() {
    return (
        <div className="wb-container">
            <div className="wb-card">
                <h2>Host a space</h2>
                <p>Start a session and share the link with your team.</p>
                {/* Placeholder form - wire up later */}
                <form className="wb-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Display name
                        <input type="text" placeholder="Your name" required />
                    </label>
                    <button className="wb-btn wb-btn-primary" type="submit">Start hosting</button>
                </form>
                <p className="wb-back"><Link to="/">← Back to home</Link></p>
            </div>
        </div>
    )
}
