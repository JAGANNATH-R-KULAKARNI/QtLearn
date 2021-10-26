import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import DeleteIcon from '@mui/icons-material/Delete';
import AndroidIcon from '@mui/icons-material/Android';
import LoopIcon from '@mui/icons-material/Loop';
import FunctionsIcon from '@mui/icons-material/Functions';
import TranslateIcon from '@mui/icons-material/Translate';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import CodeIcon from '@mui/icons-material/Code';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SaveIcon from '@mui/icons-material/Save';
import ScreenshotIcon from '@mui/icons-material/Screenshot';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import LanguageIcon from '@mui/icons-material/Language';
import HttpIcon from '@mui/icons-material/Http';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const data=[
 {text : 'Editor', ICON :  <ListAltIcon />},
 {text : 'Settings', ICON :  <SettingsIcon />},
 {text : 'New', ICON :  <OpenInNewIcon/>},
 {text : 'Open', ICON :  <FolderOpenIcon />},
 {text : 'Examples', ICON :  <LibraryBooksIcon />},
 {text : 'Save XML', ICON :  <SaveIcon />},
 {text : 'Screenshot', ICON :  <ScreenshotIcon/>},
 {text : 'Undo', ICON :  <UndoIcon  />},
 {text : 'Redo', ICON :  <RedoIcon />},
 {text : 'Language', ICON :  <LanguageIcon />},
 {text : 'WebUSB', ICON :  <HttpIcon/>},
 {text : 'Upload', ICON :  <CloudUploadIcon />},
];

export const mainListItems = (
  <div>
   {data.map((item)=>{
     return (
      <Tooltip title={item.text} placement="right">
      <ListItem button style={{backgroundColor : 'rgb(5, 30, 52)'}}>
        <ListItemIcon style={{color : 'rgba(255,255,255,.8)'}}>
         {item.ICON}
        </ListItemIcon>
        <ListItemText primary={item.text} style={{color : 'rgba(255,255,255,.8)'}}/>
        </ListItem>
  </Tooltip>
     );
   })}
  </div>
);

export const secondaryListItems = (
  <div>
  </div>
);