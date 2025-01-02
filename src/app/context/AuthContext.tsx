'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: string | null; // Replace with your user type
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Simulate checking for a logged-in user (e.g., from cookies or local storage)
        const loggedUser = localStorage.getItem('user');
        if (loggedUser) setUser(loggedUser);
    }, []);

    const login = () => {
        setUser('user123'); // Simulated login
        localStorage.setItem('user', 'user123');
        router.push('/admin-panel'); // Redirect after login
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.push('/'); // Redirect to landing page
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
