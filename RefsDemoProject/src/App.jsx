import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSlidebar from "./components/ProjectsSlidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState , setProjectsState] = useState(
    {
      selectedProjectId : undefined,
      projects : [],
      tasks : []
    }
  )
  
  function handleAddTask(text){
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text : text,
        projectId : prevState.selectedProjectId,
        id : taskId
      }
      return {
        ...prevState,
        tasks : [newTask , ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks : prevState.tasks.filter((task) => task.id !== id),
      }
    })
  }

  function handleStartProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId : null
      }
    })
  }

  function handleCancelProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId : undefined
      }
    })
  }

  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId : id
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects : prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      }
    })
  }


  function handleAddProject(projectData){
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id : projectId
      }
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects : [...prevState.projects , newProject]
      };
    });
  }
  console.log(projectsState);

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject 
  onDelete={handleDeleteProject} 
  project={selectedProject}
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks = {projectsState.tasks}
  />;
  if(projectsState.selectedProjectId === null){
    content = <NewProject onCancel={handleCancelProject} onAdd={handleAddProject}/>
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartProject}/>;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSlidebar
          onSelectProject = {handleSelectProject}
          selectedProjectId={projectsState.selectedProjectId}
          projects={projectsState.projects} 
          onStartAddProject={handleStartProject}/>
        {content}
      </main>
    </>
  );
}

export default App;
