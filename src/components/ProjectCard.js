import React, {useState} from 'react';

export default function ProjectCard(){
  const [projectCardName, setProjectCardName] = useState(props.projectName);
  return (
    <a href="#">
      <div className="ProjectCard">
        <h3 className="ProjectName">{}</h3>
      </div>
    </a>
  );
}
