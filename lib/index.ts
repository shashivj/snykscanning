    // @ts-ignore
    import * as core from '@aws/codecatalyst-adk-core';
    // @ts-ignore
    import * as codecatalystProject from '@aws/codecatalyst-project';
    // @ts-ignore
    import * as codecatalystSpace from '@aws/codecatalyst-space';
    
    try {
      // Get inputs from the action
     const input_AWSCodeBuildProject = core.getInput('AWSCodeBuildProject'); // Project name for AWS CodeBuild project
     console.log(input_AWSCodeBuildProject);
     const input_AWSRegion = core.getInput('AWSRegion'); // AWS Region
     console.log(input_AWSRegion);
    
      // Interact with codecatalyst entities
      console.log(`Current CodeCatalyst space ${codecatalystSpace.getSpace().name}`);
      console.log(`Current codecatalyst project ${codecatalystProject.getProject().name}`);
      console.log(`AWS Region ${input_AWSRegion}`);
    
      // Action Code start
    
      console.log(core.command(`aws codebuild start-build --project-name ${input_AWSCodeBuildProject}`));
      // Set outputs of the action
    
    } catch(error) {
      core.setFailed(`Action Failed, reason: ${error}`);
    }    
   
