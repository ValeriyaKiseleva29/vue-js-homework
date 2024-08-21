export function isAuthenticated() {
    return !!localStorage.getItem('authToken');
}

export function getUserRole() {
    return localStorage.getItem('userRole') || 'guest';
}
