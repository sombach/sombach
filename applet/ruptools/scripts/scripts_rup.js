var c='.css" />';
var l='<link rel="stylesheet" type="text/css" href=\"../stylesheets/';

//Sniffer variables begins
//converting to lowercase
var snn = navigator;
var snpl = snn.platform.toLowerCase(); // not supported in NS3.0
var snua = ' ' + snn.userAgent.toLowerCase();
var snun = snn.appName.toLowerCase();

// platform
var snvpl_mac = snua.indexOf('mac') > 0;
var snvpl_unix = snua.indexOf("x11") > 0;
var snvpl_win = snua.indexOf('win') > 0;

// browser version
var snvv_ie = snua.indexOf('msie') > 0;
var snvv_nn = snua.indexOf('mozilla') > 0;
var snvversion = snn.appVersion;


// 'compatible' versions of "mozilla" aren't navigator
if(snua.indexOf('compatible') > 0) {
	snnvv_nn = false;
}
//Ends sniffer variables 
	
		
/* This is a basic sniffer */
  
if(snvpl_win)//windows

{  
  if(snvv_ie)    
  {
    if (snua.indexOf('ie 5')!=-1)document.write(l+'design_rup'+c);
    else if(snua.indexOf('ie 5.5')!=-1)document.write(l+'design_rup'+c);
    else if(snua.indexOf('ie 6')!=-1)document.write(l+'design_rup'+c);
    else
	  {
	   document.write(l+'design_rup'+c);
	  }
  }
  else if (snvv_nn) 
  {
  
  if (snua.indexOf("/4")!=-1)document.write(l+'design_rupNS'+c);
  else if(snua.indexOf("/5")!=-1)document.write(l+'design_rupNS'+c);
  else if(snua.indexOf("/6")!=-1)document.write(l+'design_rupNS'+c);
  else
	  {
	   document.write(l+'design_rupNS'+c);
	  }
  }
  else
  {
   document.write(l+'design_rup'+c);
  }
}
else if(snvpl_unix)//unix
  {  
  if(snvv_ie)    
  {
    if (snua.indexOf('ie 5')!=-1)document.write(l+'design_rup'+c);
    else if(snua.indexOf('ie 5.5')!=-1)document.write(l+'design_rup'+c);
    else if(snua.indexOf('ie 6')!=-1)document.write(l+'design_rup'+c);
    else
	  {
	  document.write(l+'design_rup'+c);
	  }
  }

  else if (snvv_nn) 
  {
  if (snua.indexOf("/4")!=-1)document.write(l+'design_rupNS'+c);
  else if(snua.indexOf("/5")!=-1)document.write(l+'design_rupNS'+c);
  else if(snua.indexOf("/6")!=-1)document.write(l+'design_rupNS'+c);
  else
	  {
	  document.write(l+'design_rupNS'+c);
	  }
  } 
  else
  {
  document.write(l+'design_rupNS'+c);
  }
}

else if(snvpl_mac)//mac
  {  
  if(snvv_ie)    
  {
    if (snua.indexOf('ie 5')!=-1)document.write(l+'design_rup'+c);
    else if(snua.indexOf('ie 5.5')!=-1)document.write(l+'design_rup'+c);
    else if(snua.indexOf('ie 6')!=-1)document.write(l+'design_rup'+c);
    else
	  {
	   document.write(l+'design_rup'+c);
	  }
  }

  else if (snvv_nn) 
  {
  if (snua.indexOf("/4")!=-1)document.write(l+'design_rupNS'+c);
  else if(snua.indexOf("/6")!=-1)document.write(l+'design_rupNS'+c);
  else
	  {
	   document.write(l+'design_rupNS'+c);
	  }
  } 
  else
  {
 document.write(l+'design_rupNS'+c);
  }
}

else//others 
{
  document.write(l+'design_rup'+c);

}

//SNIFFER ENDS HERE