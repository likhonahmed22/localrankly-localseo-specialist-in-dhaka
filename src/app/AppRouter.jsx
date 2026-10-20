import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useMemo } from 'react'

// Public marketing pages
import HomePage from './features/public/HomePage'
import ServicesPage from './features/public/ServicesPage'
import PricingPage from './features/public/PricingPage'
import AboutPage from './features/public/AboutPage'
import PortfolioPage from './features/public/PortfolioPage'
import BlogPage from './features/public/BlogPage'
import ContactPage from './features/public/ContactPage'
import FreeAuditPage from './features/public/FreeAuditPage'
import PrivacyPage from './features/public/PrivacyPage'
import TermsPage from './features/public/TermsPage'
import RefundPolicyPage from './features/public/RefundPolicyPage'

// Auth pages
import LoginPage from './features/auth/LoginPage'
import ForgotPasswordPage from './features/auth/ForgotPasswordPage'
import ResetPasswordPage from './features/auth/ResetPasswordPage'

// Owner dashboard pages
import DashboardHomePage from './features/owner/DashboardHomePage'
import LeadsPage from './features/owner/LeadsPage'
import ClientsPage from './features/owner/ClientsPage'
import ClientDetailPage from './features/owner/ClientDetailPage'
import ProjectsPage from './features/owner/ProjectsPage'
import TasksPage from './features/owner/TasksPage'
import AuditsPage from './features/owner/AuditsPage'
import KeywordsPage from './features/owner/KeywordsPage'
import ReportsPage from './features/owner/ReportsPage'
import ContentPage from './features/owner/ContentPage'
import ProposalsPage from './features/owner/ProposalsPage'
import InvoicesPage from './features/owner/InvoicesPage'
import ExpensesPage from './features/owner/ExpensesPage'
import AutomationsPage from './features/owner/AutomationsPage'
import SettingsPage from './features/owner/SettingsPage'

// Client portal pages
import ClientPortalHomePage from './features/client/ClientPortalHomePage'
import ClientProjectsPage from './features/client/ClientProjectsPage'
import ClientTasksPage from './features/client/ClientTasksPage'
import ClientReportsPage from './features/client/ClientReportsPage'
import ClientDocumentsPage from './features/client/ClientDocumentsPage'
import ClientInvoicesPage from './features/client/ClientInvoicesPage'
import ClientProfilePage from './features/client/ClientProfilePage'

// Shared layout and utilities
import AppLayout from './components/layout/AppLayout'
import PublicLayout from './components/layout/PublicLayout'
import DashboardLayout from './components/layout/DashboardLayout'
import ClientPortalLayout from './components/layout/ClientPortalLayout'
import NotFoundPage from './components/layout/NotFoundPage'

const isAuthenticated = () => false
const isOwner = () => false
const isClient = () => false

function PublicRoutes() {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/local-seo" element={<ServicesPage />} />
        <Route path="/services/google-business-profile" element={<ServicesPage />} />
        <Route path="/services/technical-seo" element={<ServicesPage />} />
        <Route path="/services/content-marketing" element={<ServicesPage />} />
        <Route path="/services/website-development" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/free-seo-audit" element={<FreeAuditPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PublicLayout>
  )
}

function AuthRoutes() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AppLayout>
  )
}

function OwnerRoutes() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/app" element={<DashboardHomePage />} />
        <Route path="/app/leads" element={<LeadsPage />} />
        <Route path="/app/clients" element={<ClientsPage />} />
        <Route path="/app/clients/:id" element={<ClientDetailPage />} />
        <Route path="/app/projects" element={<ProjectsPage />} />
        <Route path="/app/tasks" element={<TasksPage />} />
        <Route path="/app/audits" element={<AuditsPage />} />
        <Route path="/app/keywords" element={<KeywordsPage />} />
        <Route path="/app/reports" element={<ReportsPage />} />
        <Route path="/app/content" element={<ContentPage />} />
        <Route path="/app/proposals" element={<ProposalsPage />} />
        <Route path="/app/invoices" element={<InvoicesPage />} />
        <Route path="/app/expenses" element={<ExpensesPage />} />
        <Route path="/app/automations" element={<AutomationsPage />} />
        <Route path="/app/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DashboardLayout>
  )
}

function ClientRoutes() {
  return (
    <ClientPortalLayout>
      <Routes>
        <Route path="/portal" element={<ClientPortalHomePage />} />
        <Route path="/portal/projects" element={<ClientProjectsPage />} />
        <Route path="/portal/tasks" element={<ClientTasksPage />} />
        <Route path="/portal/reports" element={<ClientReportsPage />} />
        <Route path="/portal/documents" element={<ClientDocumentsPage />} />
        <Route path="/portal/invoices" element={<ClientInvoicesPage />} />
        <Route path="/portal/profile" element={<ClientProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ClientPortalLayout>
  )
}

export default function AppRouter() {
  const authState = useMemo(() => ({
    isAuthenticated: isAuthenticated(),
    isOwner: isOwner(),
    isClient: isClient(),
  }), [])

  if (!authState.isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/login" element={<AuthRoutes />} />
          <Route path="/forgot-password" element={<AuthRoutes />} />
          <Route path="/reset-password" element={<AuthRoutes />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/app/*" element={authState.isOwner ? <OwnerRoutes /> : <Navigate to="/login" replace />} />
        <Route path="/portal/*" element={authState.isClient ? <ClientRoutes /> : <Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
