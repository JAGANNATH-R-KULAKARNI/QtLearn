import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
import Tooltip from '@mui/material/Tooltip';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

class MainListItems2 extends React.Component
{

  render()
  {
    const data=[
      {text : 'Editor', ICON :  <ListAltIcon />, function : this.props.setEditorStatus},
      {text : 'Settings', ICON :  <SettingsIcon />,function : this.props.setSettingsStatus},
      {text : 'New', ICON :  <OpenInNewIcon/>,function : null},
      {text : 'Open', ICON :  <FolderOpenIcon />,function : null},
      {text : 'Examples', ICON :  <LibraryBooksIcon />,function : null},
      {text : 'Save XML', ICON :  <SaveIcon />,function : null},
      {text : 'Screenshot', ICON :  <ScreenshotIcon/>,function : null},
      {text : 'Undo', ICON :  <UndoIcon  />,function : null},
      {text : 'Redo', ICON :  <RedoIcon />,function : null},
      {text : 'Language', ICON :  <LanguageIcon />,function : this.props.setLanStatus},
      {text : 'Communication between the board and the computer', ICON :  <HttpIcon/>,function : null},
      {text : 'Upload', ICON :  <CloudUploadIcon />,function : null},
     ];

    const mainListItems = (
      <div>
       {data.map((item)=>{
         return (
          <Tooltip title={item.text} placement="right">
          <ListItem button style={{backgroundColor : 'rgb(5, 30, 52)'}} onClick={item.function}>
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

    return (
      <div>
           {mainListItems}
      </div>
    );
  }
}


export default MainListItems2;