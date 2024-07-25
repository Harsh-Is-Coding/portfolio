function ProjectCard(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.img}/>
            <p>{props.description}</p>
            <a href={props.link}>link</a>
        </div>
    )
}
export default ProjectCard