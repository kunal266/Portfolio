import React from "react";
import "./styles.css";
import ProjectTemp from './ProjectTemp';
export default function Projects() {
  return (
    <div>
    <ProjectTemp
    projectLink = 'https://github.com/kunal266/StateAndCounty'
    icon  = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhacktoberfestswaglist.com%2Fimg%2FHacktoberfest_20.jpg&f=1&nofb=1'
    projectName = 'Python script for HacktoberFest'
    />
    <ProjectTemp
    projectLink = 'https://github.com/kunal266/selenium_download_file'
    icon  = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2F74ed64243ba05754329bc527cd4240ebd1c087a1%2F68747470733a2f2f73656c656e69756d2e6465762f696d616765732f73656c656e69756d5f6c6f676f5f7371756172655f677265656e2e706e67&f=1&nofb=1'
    projectName = 'Selenium Test Run Project'
    />
    <ProjectTemp
    projectLink = 'https://github.com/kunal266/First_Data_Cleaning'
    icon  = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjhubdocs.readthedocs.io%2Fen%2Flatest%2F_static%2Fjupyter-sq.png&f=1&nofb=1'
    projectName = 'CSV Data Cleaning and Visualization'
    />
    </div>
  );
}
