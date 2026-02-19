import { useState } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import { LoginPage } from './pages/auth/LoginPage'
import { AdminInvitePage } from './pages/admin/AdminInvite'
import { AdminRolesPage } from './pages/admin/AdminRolesPage'
import { ThemeProvider } from './context/ThemeContext'

function AppContent() {
  const { isAuthenticated, user } = useAuth();
  const [currentAdminPage, setCurrentAdminPage] = useState('Users');

  console.log('🔍 AppContent render - isAuthenticated:', isAuthenticated, 'user:', user);

  if (isAuthenticated && user?.role === 'admin') {
    console.log('✅ Showing admin page:', currentAdminPage);
    
    const handleNavigate = (page: string) => {
      console.log('🔄 Navigating to:', page);
      setCurrentAdminPage(page);
    };

    switch (currentAdminPage) {
      case 'Roles':
        return <AdminRolesPage onNavigate={handleNavigate} />;
      case 'Users':
      default:
        return <AdminInvitePage onNavigate={handleNavigate} />;
    }
  }

  console.log('📄 Showing LoginPage');
  return <LoginPage />;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
