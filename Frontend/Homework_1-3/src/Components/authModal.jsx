import React, { useState } from 'react';
import '../ComponentsCSS/AuthModal.css';

function AuthModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div id="auth-modal" className="auth-modal-overlay">
            <div className="auth-modal-content">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Имя"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button type="submit">Продолжить</button>
                    <button type="button" onClick={onClose}>Отмена</button>
                </form>
            </div>
        </div>
    );
}

export default AuthModal;