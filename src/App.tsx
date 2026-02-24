import { useState } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { AdminInvitePage } from './pages/admin/AdminInvite'
import { AdminRolesPage } from './pages/admin/AdminRolesPage'
import { AdminOrganizationsPage } from './pages/admin/AdminOrganizationsPage'
import { AdminPolicyManagementPage } from './pages/admin/AdminPolicyManagementPage'
import { ThemeProvider } from './context/ThemeContext'
import { OnboardingPage } from './pages/onboarding/OnboardingPageRefactored';

function AppContent() {
  const { isAuthenticated, user } = useAuth();
  const [currentAdminPage, setCurrentAdminPage] = useState('Users');
  const urlParams = new URLSearchParams(window.location.search);
  const showOnboarding = urlParams.get('onboarding') === 'true';
  const showRegister = urlParams.get('register') === 'true';
  const inviteEmail = urlParams.get('email') || 'user@example.com';
  const inviteRole = (urlParams.get('role') as 'doctor' | 'nurse' | 'admin') || 'doctor';

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
      case 'Organizations':
        return <AdminOrganizationsPage onNavigate={handleNavigate} />;
      case 'Policy Management':
        return <AdminPolicyManagementPage onNavigate={handleNavigate} />;
      case 'Users':
      default:
        return <AdminInvitePage onNavigate={handleNavigate} />;
    }
  }

  if (showRegister && !isAuthenticated) {
    return (
      <RegisterPage 
        inviteEmail={inviteEmail}
        inviteRole={inviteRole}
        onComplete={() => window.location.href = '/'}
      />
    );
  }

  if (showOnboarding && !isAuthenticated) {
    return (
      <OnboardingPage 
        email="test@example.com"
        role="doctor"
        onComplete={() => window.location.href = '/'}
      />
    );
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
