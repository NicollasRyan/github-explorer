import { useParams } from "react-router-dom";

export function RepositoryDetails() {
    const { username, repoName } = useParams();

    return (
        <div>
            <h1>Repository Details</h1>
            <p>This page will show the details of a specific repository.</p>
        </div>
    );
}