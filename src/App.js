import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from "./users/Register";
import Login from './users/Login';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Tracking from './pages/Tracking';
import Setting from './pages/Setting';
import Creator from './pages/Creator';
import UserDashboard from './pages/UserDashboard';
import UpdateProfile from './pages/Updateprofile';
import WorkoutForm from './pages/WorkoutForm';
import WorkoutTrack from './pages/WorkoutTrack';
import WorkoutBase from './pages/WorkoutBase';

import NutritionHome from './pages/NutritionHome';
import NutritionWeightLoss from './pages/NutritionWeightLoss';
import NutritionWeightLossPlanMonday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanMonday';
import NutritionWeightLossPlanTuesday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanTuesday';
import NutritionWeightLossPlanWednesday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanFriday.js';
import NutritionWeightLossPlanThursday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanThursday';
import NutritionWeightLossPlanFriday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanFriday';
import NutritionWeightLossPlanSaturday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanSaturday';
import NutritionWeightLossPlanSunday from './pages/NutritionWeightLossPlan/NutritionWeightLossPlanSunday';
import NutritionWeightLossProgress from './pages/NutritionWeightLossProgress';

import NutritionWeightGain from './pages/NutritionWeightGain';
import NutritionWeightGainPlanMonday from './pages/NutritionWeightLossGain/NutritionWeightGainPlanMonday';
import NutritionWeightGainPlanTuesday from './pages/NutritionWeightLossGain/NutritionWeightGainPlanTuesday';
import NutritionWeightGainPlanWednesday from './pages/NutritionWeightLossGain/NutritionWeightGainPlanWednesday';
import NutritionWeightGainPlanThursday from './pages/NutritionWeightLossGain/NutritionWeightGainPlanThursday';
import NutritionWeightGainPlanFriday from './pages/NutritionWeightLossGain/NutritionWeightGainPlanFriday';
import NutritionWeightGainPlanSaturday from './pages/NutritionWeightLossGain/NutritionWeightGainPlanSaturday';
import NutritionWeightGainPlanSunday from './pages/NutritionWeightLossGain/NutritionWeightGainPlanSunday';
import NutritionWeightGainProgress from './pages/NutritionWeightGainProgress';
import WeightTracker from './pages/WeightTracker';
import ViewGoals from './pages/ViewGoals';
import AdminDashboard from './pages/AdminDashboard';
import AdminUpdateProfile from './pages/AdminUpdateProfile';
import DisplayAllUsers from './pages/DisplayAllUsers';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router basename='/react-demo'>
        
        <Routes>
          <Route exact path='/react-demo' element={<Dashboard />} />
          <Route  path='/Login' element={<Login />} />
          <Route  path='/Register' element={<Register />} />
          <Route  path='/Dashboard' element={<Dashboard />} />
          <Route  path='/UpdateProfile' element={<UpdateProfile/>}/>
          <Route  path='/WorkoutForm' element={<WorkoutForm/>}/>
          <Route  path='/workout-history' element={<History />} />
          <Route  path='/exercise-tracking' element={<Tracking />} />
          <Route  path='/goal-setting' element={<Setting />} />
          <Route  path='/workout-plan-creator' element={<Creator />} />
          <Route  path='/user-dashboard' element={<UserDashboard />} />
          <Route  path='/WorkoutBase' element={<WorkoutBase />} />
          <Route  path='/workout-track' element={<WorkoutTrack />} />
          <Route  path='/weight-tracker' element={<WeightTracker />} />
          <Route  path='/view-goals' element={<ViewGoals />} />
          <Route  path='/update-goal/:id' element={<Setting />} />

          <Route  path='/nutritionHome' element={<NutritionHome />} />
          <Route  path='/nutritionWeightLoss' element={<NutritionWeightLoss />} />
          <Route  path='/nutritionWeightLossPlanMonday' element={<NutritionWeightLossPlanMonday />} />
          <Route  path='/nutritionWeightLossPlanTuesday' element={<NutritionWeightLossPlanTuesday />} />
          <Route  path='/nutritionWeightLossPlanWednesday' element={<NutritionWeightLossPlanWednesday />} />
          <Route  path='/nutritionWeightLossPlanThursday' element={<NutritionWeightLossPlanThursday />} />
          <Route  path='/nutritionWeightLossPlanFriday' element={<NutritionWeightLossPlanFriday />} />
          <Route  path='/nutritionWeightLossPlanSaturday' element={<NutritionWeightLossPlanSaturday />} />
          <Route  path='/nutritionWeightLossPlanSunday' element={<NutritionWeightLossPlanSunday />} />
          <Route  path='/nutritionWeightLossProgress' element={<NutritionWeightLossProgress />} />

          <Route  path='/nutritionWeightGain' element={<NutritionWeightGain />} />
          <Route  path='/nutritionWeightGainPlanMonday' element={<NutritionWeightGainPlanMonday />} />
          <Route  path='/nutritionWeightGainPlanTuesday' element={<NutritionWeightGainPlanTuesday />} />
          <Route  path='/nutritionWeightGainPlanWednesday' element={<NutritionWeightGainPlanWednesday />} />
          <Route  path='/nutritionWeightGainPlanThursday' element={<NutritionWeightGainPlanThursday />} />
          <Route  path='/nutritionWeightGainPlanFriday' element={<NutritionWeightGainPlanFriday />} />
          <Route  path='/nutritionWeightGainPlanSaturday' element={<NutritionWeightGainPlanSaturday />} />
          <Route  path='/nutritionWeightGainPlanSunday' element={<NutritionWeightGainPlanSunday />} />
          <Route  path='/nutritionWeightGainProgress' element={<NutritionWeightGainProgress />} />
          <Route  path='/admin-dashboard' element={<AdminDashboard />} />
          <Route  path='/admin-updateprofile' element={<AdminUpdateProfile />} />
          <Route  path='/display-AllUser' element={<DisplayAllUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
