import React from 'react';
import './style.css';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MaterialTypography from './components/MaterialTypography.js';
import MaterialButton from './components/MaterialButton.js';
import MaterialTextField from './components/MaterialTextField.js';
import MaterialSelect from './components/MaterialSelect.js';
import MaterialRating from './components/MaterialRating.js';
import MaterialAutoComplete from './components/MaterialAutoComplete.js';
import MaterialBox from './components/MaterialBox.js';
import MaterialStack from './components/MaterialStack.js';
import MaterialGrid from './components/MaterialGrid.js';
import MaterialPaper from './components/MaterialPaper.js';
import MaterialCard from './components/MaterialCard.js';
import MaterialAccordion from './components/MaterialAccordion.js';
import MaterialImageList from './components/MaterialImageList.js';
import MaterialNavbar from './components/MaterialNavbar.js';
import MaterialBreadcrumbs from './components/MaterialBreadcrumbs.js';
import MaterialBottomNavigation from './components/MaterialBottomNavigation.js';
import MaterialAvatar from './components/MaterialAvatar.js';
import MaterialBadge from './components/MaterialBadge.js';
import MaterialList from './components/MaterialList.js';
import MaterialChip from './components/MaterialChip.js';
import MaterialTable from './components/MaterialTable.js';
import MaterialAlert from './components/MaterialAlert.js';
import MaterialSnackbar from './components/MaterialSnackbar.js';
import MaterialDialog from './components/MaterialDialog.js';
import MaterialProgress from './components/MaterialProgress.js';
import MaterialSkeleton from './components/MaterialSkeleton.js';
import MaterialLoadingButton from './components/MaterialLoadingButton.js';
import MaterialDate from './components/MaterialDate.js';
import MaterialDateRange from './components/MaterialDateRange.js';
import MaterialTab from './components/MaterialTab.js';
import MaterialTimeline from './components/MaterialTimeline.js';
import MaterialMasonry from './components/MaterialMasonry.js';

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <MaterialTypography/> */}
        {/* <MaterialButton/> */}
        {/* <MaterialTextField /> */}
        {/* <MaterialSelect /> */}
        {/* <MaterialRating /> */}
        {/* <MaterialAutoComplete /> */}
        {/* <MaterialBox /> */}
        {/* <MaterialStack /> */}
        {/* <MaterialGrid /> */}
        {/* <MaterialPaper /> */}
        {/* <MaterialCard /> */}
        {/* <MaterialAccordion /> */}
        {/* <MaterialImageList /> */}
        {/* <MaterialNavbar /> */}
        {/* <MaterialBreadcrumbs /> */}
        {/* <MaterialBottomNavigation /> */}
        {/* <MaterialAvatar /> */}
        {/* <MaterialBadge /> */}
        {/* <MaterialList /> */}
        {/* <MaterialChip /> */}
        {/* <MaterialTable /> */}
        {/* <MaterialAlert /> */}
        {/* <MaterialSnackbar /> */}
        {/* <MaterialDialog /> */}
        {/* <MaterialProgress /> */}
        {/* <MaterialSkeleton /> */}
        {/* <MaterialLoadingButton /> */}
        {/* <MaterialDate /> */}
        {/* <MaterialDateRange /> */}
        {/* <MaterialTab /> */}
        {/* <MaterialTimeline /> */}
        <MaterialMasonry />
      </div>
    </LocalizationProvider>
  );
}
