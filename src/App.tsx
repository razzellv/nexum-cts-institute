import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { InstituteAuthProvider } from '@/context/InstituteAuthContext';
import InstituteLayout from '@/components/InstituteLayout';
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
import InstitutePulsePage from '@/pages/institute/InstitutePulsePage';
import InstituteRoundtablesPage from '@/pages/institute/InstituteRoundtablesPage';

export default function App() {
  return (
    <BrowserRouter>
      <InstituteAuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/institute" replace />} />
          <Route path="/institute" element={<InstituteLayout />}>
            <Route index element={<InstituteHomePage />} />
            <Route path="courses" element={<InstituteCoursesPage />} />
            <Route path="courses/:courseId" element={<InstituteCourseDetailPage />} />
            <Route path="courses/:courseId/modules/:moduleId" element={<InstituteModuleViewerPage />} />
            <Route path="courses/:courseId/exam" element={<InstituteExamPage />} />
            <Route path="certificate/:type" element={<InstituteCertificatePage />} />
            <Route path="signup" element={<InstituteSignUpPage />} />
            <Route path="login" element={<InstituteLoginPage />} />
            <Route path="dashboard" element={<InstituteMemberDashboardPage />} />
            <Route path="about" element={<InstituteAboutPage />} />
            <Route path="events" element={<InstituteEventsPage />} />
            <Route path="forums" element={<InstituteForumsPage />} />
            <Route path="membership" element={<InstituteMembershipPage />} />
            <Route path="cts" element={<InstituteCTSPage />} />
            <Route path="standards" element={<InstituteStandardsPage />} />
            <Route path="downloads" element={<InstituteDownloadsPage />} />
            <Route path="publications" element={<InstitutePublicationsPage />} />
            <Route path="pulse" element={<InstitutePulsePage />} />
            <Route path="roundtables" element={<InstituteRoundtablesPage />} />
          </Route>
        </Routes>
      </InstituteAuthProvider>
    </BrowserRouter>
  );
}
