import { execa } from "execa";
import * as fs from "fs/promises";

export const setupProject = async (projectId: string) => {
  await execa("mkdir", ["-p", `../../docker/projects/${projectId}`]);
  let dockerCompose = await fs.readFile("./templates/docker-compose.yml", { encoding: "utf8" });
  dockerCompose = dockerCompose.replaceAll("{{project_id}}", projectId);
  await fs.writeFile(`../../docker/projects/${projectId}/docker-compose.yml`, dockerCompose);
};

export const deleteProject = async (projectId: string) => {
  await execa("rm", ["-rf", `../../docker/projects/${projectId}`]);
};

export const fetchLogs = async (projectId: string) => {
  const { stdout } = await execa("docker", ["compose", "logs", "--tail=200"], {
    cwd: `../../docker/projects/${projectId}`,
  });
  return stdout;
};

export const overwriteRFile = async (projectId: string, rFileContent: string) => {
  await fs.writeFile(`../../docker/projects/${projectId}/app.R`, rFileContent);
};

export const startServer = async (projectId: string) => {
  await execa("docker", ["compose", "up", "-d"], {
    cwd: `../../docker/projects/${projectId}`,
  });
};

export const stopServer = async (projectId: string) => {
  await execa("docker", ["compose", "down"], {
    cwd: `../../docker/projects/${projectId}`,
  });
};
