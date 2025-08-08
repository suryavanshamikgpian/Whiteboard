import { Link } from 'react-router-dom'

export default function CreateWorkspace() {
    return (
        <div className="wb-container">
            <div className="wb-card">
                <h2>Create a workspace</h2>
                <p>Name your workspace and jump in.</p>
                {/* Placeholder form - wire up later */}
                <form className="wb-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Workspace name
                        <input type="text" placeholder="e.g. Sprint Planning" required />
                    </label>
                    <label>
                        Your name (optional)
                        <input type="text" placeholder="Your name" />
                    </label>
                    <button className="wb-btn wb-btn-primary" type="submit">Create workspace</button>
                </form>
                <p className="wb-back"><Link to="/">← Back to home</Link></p>
            </div>
        </div>
    )
}
