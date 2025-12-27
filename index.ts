import concurrently from "concurrently";

concurrently([
    {
        name: "Server",
        command:"bun run dev",
        cwd: "packages/server",
        prefixColor: "blue",
    },
    {
        name: "Client",
        command:"bun run dev",
        cwd: "packages/client",
        prefixColor: "green",
    }

])
