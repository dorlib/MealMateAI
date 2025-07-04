import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { useTheme } from './context/ThemeContext';
import { useAuth } from './context/AuthContext';

// Layout components
import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';

// Page components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TempDashboard from './pages/TempDashboard';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import MealPlanner from './pages/MealPlanner';
import CreateMealPlan from './pages/CreateMealPlan';
import UserProfile from './pages/UserProfile';
import UserSpace from './pages/UserSpace';
import NotFound from './pages/NotFound';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import ProtectedRoute from './components/ProtectedRoute';
import PreferenceSetup from './components/PreferenceSetup';

function App() {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();

  return (
    <>
      <CssBaseline />
      <Routes>
        {/* Public routes with main layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
        </Route>

        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected routes with main layout */}
        <Route element={<MainLayout />}>          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <TempDashboard />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/meal-planner" 
            element={
              <ProtectedRoute>
                <MealPlanner />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/create-meal-plan" 
            element={
              <ProtectedRoute>
                <CreateMealPlan />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/user-space" 
            element={
              <ProtectedRoute>
                <UserSpace />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/preference-setup" 
            element={
              <ProtectedRoute>
                <PreferenceSetup />
              </ProtectedRoute>
            } 
          />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;