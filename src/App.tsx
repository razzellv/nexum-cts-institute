import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { InstituteAuthProvider } from '@/context/InstituteAuthContext';
import InstituteLayout from '@/components/InstituteLayout';

// Existing pages
import InstituteHomePage from '@/pages/institute/InstituteHomePage';
import InstituteCoursesPage from '@/pages/institute/InstituteCoursesPage';
import InstituteCourseDetailPage from '@/pages/institute/InstituteCourseDetailPage';
import InstituteModuleViewerPage from '@/pages/institute/InstituteModuleViewerPage';
import InstituteExamPage from '@/pages/institute/InstituteExamPage';
import InstituteCertificatePage from '@/pages/institute/InstituteCertificatePage';
import InstituteSignUpPage from '@/pages/institute/InstituteSignUpPage';
import InstituteLoginPage from '@/pages/institute/InstituteLoginPage';
import InstituteMemberDashboardPage from '@/pages/institute/InstituteMemberDashboardPage';
import InstituteAboutPage from '@/pages/institute/InstituteAboutPage';
import InstituteEventsPage from '@/pages/institute/InstituteEventsPage';
import InstituteForumsPage from '@/pages/institute/InstituteForumsPage';
import InstituteMembershipPage from '@/pages/institute/InstituteMembershipPage';
import InstituteCTSPage from '@/pages/institute/InstituteCTSPage';
import InstituteStandardsPage from '@/pages/institute/InstituteStandardsPage';
import InstituteDownloadsPage from '@/pages/institute/InstituteDownloadsPage';
import InstitutePublicationsPage from '@/pages/institute/InstitutePublicationsPage';
import InstituteArticlePage from '@/pages/institute/InstituteArticlePage';
import InstitutePulsePage from '@/pages/institute/InstitutePulsePage';
import InstituteRoundtablesPage from '@/pages/institute/InstituteRoundtablesPage';

// New pages
import InstituteResearchPage from '@/pages/institute/InstituteResearchPage';
import InstituteJournalPage from '@/pages/institute/InstituteJournalPage';
import InstituteChaptersPage from '@/pages/institute/InstituteChaptersPage';
import InstitutePartnersPage from '@/pages/institute/InstitutePartnersPage';
import InstituteContactPage from '@/pages/institute/InstituteContactPage';
import InstituteBOKPage from '@/pages/institute/InstituteBOKPage';
import InstituteOIPage from '@/pages/institute/InstituteOIPage';
import InstituteCertificationsPage from '@/pages/institute/InstituteCertificationsPage';

export default function App() {
  return (
    <BrowserRouter>
      <InstituteAuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/institute" replace />} />
          <Route path="/institute" element={<InstituteLayout />}>
            <Route index element={<InstituteHomePage />} />

            {/* Education */}
            <Route path="courses" element={<InstituteCoursesPage />} />
            <Route path="courses/:courseId" element={<InstituteCourseDetailPage />} />
            <Route path="courses/:courseId/modules/:moduleId" element={<InstituteModuleViewerPage />} />
            <Route path="courses/:courseId/exam" element={<InstituteExamPage />} />
            <Route path="certifications" element={<InstituteCertificationsPage />} />
            <Route path="certificate/:type" element={<InstituteCertificatePage />} />

            {/* Knowledge */}
            <Route path="publications" element={<InstitutePublicationsPage />} />
            <Route path="publications/:slug" element={<InstituteArticlePage />} />
            <Route path="research" element={<InstituteResearchPage />} />
            <Route path="standards" element={<InstituteStandardsPage />} />
            <Route path="bok" element={<InstituteBOKPage />} />
            <Route path="journal" element={<InstituteJournalPage />} />
            <Route path="downloads" element={<InstituteDownloadsPage />} />
            <Route path="pulse" element={<InstitutePulsePage />} />

            {/* Disciplines */}
            <Route path="operational-intelligence" element={<InstituteOIPage />} />
            <Route path="cts" element={<InstituteCTSPage />} />

            {/* Community */}
            <Route path="forums" element={<InstituteForumsPage />} />
            <Route path="roundtables" element={<InstituteRoundtablesPage />} />
            <Route path="events" element={<InstituteEventsPage />} />

            {/* Institute */}
            <Route path="about" element={<InstituteAboutPage />} />
            <Route path="membership" element={<InstituteMembershipPage />} />
            <Route path="chapters" element={<InstituteChaptersPage />} />
            <Route path="partners" element={<InstitutePartnersPage />} />
            <Route path="contact" element={<InstituteContactPage />} />

            {/* Auth */}
            <Route path="signup" element={<InstituteSignUpPage />} />
            <Route path="login" element={<InstituteLoginPage />} />
            <Route path="dashboard" element={<InstituteMemberDashboardPage />} />
          </Route>
        </Routes>
      </InstituteAuthProvider>
    </BrowserRouter>
  );
}
