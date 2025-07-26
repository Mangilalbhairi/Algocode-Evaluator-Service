import Dockerode from "dockerode";



async function createContainer(image : string, cmdExecutable : string[]){
    const docker = new Dockerode()
    
    const container = await docker.createContainer({
        Image: image,
        Cmd : cmdExecutable,
        AttachStderr : true,
        AttachStdin : true,
        AttachStdout : true,
        Tty : false,
        OpenStdin  : true
    })

    return container
}

export default createContainer;